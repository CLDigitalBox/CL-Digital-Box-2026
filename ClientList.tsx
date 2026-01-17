import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, User, Trash2 } from "lucide-react";
import { ClientForm } from "@/components/ClientForm";
import { ClientORM } from "@/components/data/orm/orm_client";
import type { ClientModel } from "@/components/data/orm/orm_client";

export function ClientList() {
	const [showForm, setShowForm] = React.useState(false);
	const [clients, setClients] = React.useState<ClientModel[]>([]);
	const [loading, setLoading] = React.useState(true);
	const [searchTerm, setSearchTerm] = React.useState("");
	const clientORM = React.useMemo(() => ClientORM.getInstance(), []);

	React.useEffect(() => {
		loadClients();
	}, []);

	const loadClients = async () => {
		try {
			setLoading(true);
			const data = await clientORM.getAllClient();
			setClients(data);
		} catch (error) {
			console.error("Error loading clients:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id: string) => {
		if (!confirm("Tem certeza que deseja excluir este cliente? Esta ação não pode ser desfeita.")) return;
		try {
			await clientORM.deleteClientById(id);
			await loadClients();
		} catch (error) {
			console.error("Error deleting client:", error);
			alert("Erro ao excluir cliente. Verifique se não existem demandas ou documentos vinculados.");
		}
	};

	const filteredClients = React.useMemo(() => {
		return clients.filter((client) =>
			client.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			client.cpf_cnpj.includes(searchTerm) ||
			(client.contact_info?.email && client.contact_info.email.toLowerCase().includes(searchTerm.toLowerCase()))
		);
	}, [clients, searchTerm]);

	if (showForm) {
		return (
			<ClientForm
				onClose={() => {
					setShowForm(false);
					loadClients();
				}}
			/>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold text-gray-900">Clientes</h2>
					<p className="text-sm text-gray-600 mt-1">
						Gerenciar cadastro de clientes
					</p>
				</div>
				<Button onClick={() => setShowForm(true)} className="gap-2">
					<Plus className="w-4 h-4" />
					Novo Cliente
				</Button>
			</div>

			<Card>
				<CardHeader>
					<div className="flex items-center gap-4">
						<div className="flex-1 relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
							<Input
								placeholder="Buscar por nome, CPF/CNPJ ou e-mail..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10"
							/>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					{loading ? (
						<div className="text-center py-8 text-gray-500">
							Carregando clientes...
						</div>
					) : filteredClients.length === 0 ? (
						<div className="text-center py-8">
							<User className="w-12 h-12 mx-auto mb-3 text-gray-300" />
							<p className="text-gray-500">
								{searchTerm ? "Nenhum cliente encontrado" : "Nenhum cliente cadastrado"}
							</p>
							{!searchTerm && (
								<Button
									onClick={() => setShowForm(true)}
									variant="outline"
									className="mt-4 gap-2"
								>
									<Plus className="w-4 h-4" />
									Cadastrar Primeiro Cliente
								</Button>
							)}
						</div>
					) : (
						<div className="space-y-4">
							{filteredClients.map((client) => (
								<Card key={client.id} className="hover:shadow-md transition-shadow">
									<CardContent className="p-4">
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1">
												<h3 className="font-semibold text-lg">{client.full_name}</h3>
												<p className="text-sm text-gray-600">CPF/CNPJ: {client.cpf_cnpj}</p>
												{client.contact_info?.email && (
													<p className="text-sm text-gray-600">E-mail: {client.contact_info.email}</p>
												)}
												{client.contact_info?.phone_primary && (
													<p className="text-sm text-gray-600">Telefone: {client.contact_info.phone_primary}</p>
												)}
												{client.address_info?.city && client.address_info?.state && (
													<p className="text-sm text-gray-600">
														Localização: {client.address_info.city}/{client.address_info.state}
													</p>
												)}
											</div>
											<Button
												variant="ghost"
												size="sm"
												onClick={() => handleDelete(client.id)}
												className="text-red-600 hover:text-red-700 hover:bg-red-50"
											>
												<Trash2 className="w-4 h-4" />
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
