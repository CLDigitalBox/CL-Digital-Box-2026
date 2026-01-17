import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save } from "lucide-react";
import { ClientORM, ClientStatus, ClientClientSegment } from "@/components/data/orm/orm_client";
import type { ClientModel } from "@/components/data/orm/orm_client";

interface ClientFormProps {
	onClose: () => void;
}

export function ClientForm({ onClose }: ClientFormProps) {
	const [loading, setLoading] = React.useState(false);
	const clientORM = React.useMemo(() => ClientORM.getInstance(), []);

	const [formData, setFormData] = React.useState({
		name: "",
		cpf_cnpj: "",
		email: "",
		phone: "",
		whatsapp: "",
		street: "",
		number: "",
		complement: "",
		neighborhood: "",
		city: "",
		state: "",
		zipcode: "",
		notes: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			setLoading(true);

			const now = new Date().toISOString();
			const newClient: ClientModel = {
				id: crypto.randomUUID(),
				data_creator: "system",
				data_updater: "system",
				create_time: now,
				update_time: now,
				full_name: formData.name,
				cpf_cnpj: formData.cpf_cnpj,
				birth_date: null,
				client_segment: ClientClientSegment.Individual,
				status: ClientStatus.Active,
				contact_info: {
					email: formData.email || null,
					phone_primary: formData.phone || null,
					phone_secondary: formData.whatsapp || null,
				},
				address_info: {
					street: formData.street || null,
					number: formData.number || null,
					city: formData.city || null,
					state: formData.state || null,
					zip_code: formData.zipcode || null,
				},
			};

			await clientORM.insertClient([newClient]);

			alert("Cliente cadastrado com sucesso!");
			onClose();
		} catch (error) {
			console.error("Error creating client:", error);
			alert("Erro ao cadastrar cliente. Verifique os dados e tente novamente.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" onClick={onClose} className="gap-2">
					<ArrowLeft className="w-4 h-4" />
					Voltar
				</Button>
				<div>
					<h2 className="text-3xl font-bold text-gray-900">Novo Cliente</h2>
					<p className="text-sm text-gray-600 mt-1">
						Cadastre um novo cliente no sistema
					</p>
				</div>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Dados do Cliente</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="name">Nome Completo / Razão Social *</Label>
								<Input
									id="name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									placeholder="Ex: João Silva"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="cpf_cnpj">CPF/CNPJ *</Label>
								<Input
									id="cpf_cnpj"
									value={formData.cpf_cnpj}
									onChange={(e) => setFormData({ ...formData, cpf_cnpj: e.target.value })}
									placeholder="Ex: 123.456.789-00"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="email">E-mail</Label>
								<Input
									id="email"
									type="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									placeholder="Ex: cliente@email.com"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="phone">Telefone</Label>
								<Input
									id="phone"
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									placeholder="(31) 9 0000-0000"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="whatsapp">WhatsApp</Label>
								<Input
									id="whatsapp"
									value={formData.whatsapp}
									onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
									placeholder="(31) 9 0000-0000"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="street">Rua</Label>
								<Input
									id="street"
									value={formData.street}
									onChange={(e) => setFormData({ ...formData, street: e.target.value })}
									placeholder="Nome da rua"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="number">Número</Label>
								<Input
									id="number"
									value={formData.number}
									onChange={(e) => setFormData({ ...formData, number: e.target.value })}
									placeholder="123"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="city">Cidade</Label>
								<Input
									id="city"
									value={formData.city}
									onChange={(e) => setFormData({ ...formData, city: e.target.value })}
									placeholder="Santa Bárbara"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="state">Estado</Label>
								<Input
									id="state"
									value={formData.state}
									onChange={(e) => setFormData({ ...formData, state: e.target.value })}
									placeholder="MG"
								/>
							</div>

							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="notes">Observações</Label>
								<Textarea
									id="notes"
									value={formData.notes}
									onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
									placeholder="Observações adicionais..."
									rows={3}
								/>
							</div>
						</div>

						<div className="flex gap-2 justify-end pt-4">
							<Button type="button" variant="outline" onClick={onClose}>
								Cancelar
							</Button>
							<Button type="submit" disabled={loading} className="gap-2">
								<Save className="w-4 h-4" />
								{loading ? "Salvando..." : "Salvar Cliente"}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
