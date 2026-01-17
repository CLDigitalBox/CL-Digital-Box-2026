# 🎨 Mapa Visual - Posicionamento da Identidade Visual

## Estrutura Atual da Interface

```
┌────────────────────────────────────────────────────────────────┐
│                      HEADER PRINCIPAL                          │
│  ┌────┐  CL Assessoria e Consultoria Digital                  │
│  │ CL │  Sistema de Gestão de Processos                       │
│  └────┘                                                        │
│  ↑ LOGO AQUI (atualmente é um quadrado azul com "CL")         │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  [ Dashboard ] [ Clientes ] [ Processos ] [ Importar/Exportar ]│
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                        ÁREA DE CONTEÚDO                        │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │          🎯 BANNER PRINCIPAL (OPCIONAL)                  │ │
│  │  Banner de destaque, promoções ou informações importantes│ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │  Estatística│ │ Estatística │ │ Estatística │            │
│  │     1       │ │      2      │ │      3      │            │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │              TABELA DE PROCESSOS RECENTES                │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 📍 Detalhamento dos Pontos de Inserção

### 1. **Logo no Header** (PRIORIDADE ALTA)
```
Posição: Canto superior esquerdo
Tamanho atual: 48px × 48px (3rem)
Código: src/components/Dashboard.tsx (linhas 14-16)

┌────────────────────────────────────┐
│  [LOGO]  CL Assessoria e          │
│          Consultoria Digital      │
│          Sistema de Gestão        │
└────────────────────────────────────┘

Substituirá:
<div className="w-12 h-12 bg-blue-600 ...">CL</div>

Por:
<img src="logo-cl.svg" alt="CL Assessoria" />
```

### 2. **Banner no Dashboard** (PRIORIDADE MÉDIA)
```
Posição: Logo abaixo das abas de navegação
Tamanho recomendado: Largura total do container (responsivo)
Altura sugerida: 200-300px

┌────────────────────────────────────────────────┐
│                                                │
│     🎯 BANNER PROMOCIONAL/INFORMATIVO         │
│                                                │
│  "Bem-vindo ao sistema CL - Gerenciamento     │
│   profissional de processos jurídicos"        │
│                                                │
└────────────────────────────────────────────────┘
```

### 3. **Logo em Formulários** (PRIORIDADE MÉDIA)
```
Localização: Topo de cada formulário modal
Exemplos:
- Cadastro de Cliente
- Cadastro de Processo
- Envio de Documentos

┌─────────────────────────────┐
│         [LOGO]              │
│   Cadastro de Cliente       │
├─────────────────────────────┤
│  Nome: ___________________  │
│  Email: __________________  │
│  ...                        │
└─────────────────────────────┘
```

### 4. **Logo em E-mails** (PRIORIDADE ALTA)
```
Localização: Cabeçalho dos relatórios de status
Arquivo: src/lib/email-templates.ts

┌─────────────────────────────────────┐
│  [LOGO]                             │
│  CL Assessoria e Consultoria Digital│
├─────────────────────────────────────┤
│  Status do Processo: #12345         │
│  Cliente: João Silva                │
│  ...                                │
└─────────────────────────────────────┘
```

---

## 🎨 Uso dos Banners

### Banner 1: Dashboard Principal
- **Propósito:** Boas-vindas, avisos importantes, promoções
- **Localização:** Topo do dashboard
- **Dimensões:** 1920x300px (responsivo)

### Banner 2: Área de Processos
- **Propósito:** Informações sobre serviços específicos
- **Localização:** Entre filtros e lista de processos
- **Dimensões:** 1920x200px (responsivo)

### Banner 3: Área de Clientes
- **Propósito:** Dicas de uso, novidades
- **Localização:** Entre barra de busca e lista de clientes
- **Dimensões:** 1920x150px (responsivo)

---

## 📱 Responsividade

### Desktop (1920px+)
```
┌──────────────────────────────────────┐
│  [LOGO 64px]  Título Completo        │
└──────────────────────────────────────┘
```

### Tablet (768px - 1919px)
```
┌────────────────────────────┐
│  [LOGO 48px]  Título       │
└────────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────┐
│  [LOGO 40px] │
│  CL Digital  │
└──────────────┘
```

---

## 🔄 Processo de Implementação

1. **Recebimento dos arquivos**
   - Logo: `cl-logo.svg` ou `cl-logo.png`
   - Banners: `banner-*.png/jpg`

2. **Otimização automática**
   - Compressão de imagens
   - Geração de versões responsivas
   - Conversão de formatos se necessário

3. **Integração no código**
   - Salvar em `src/assets/`
   - Importar nos componentes
   - Ajustar dimensões e espaçamentos

4. **Validação**
   - Testes de renderização
   - Verificação mobile
   - Ajustes finais

---

## ✅ Checklist Visual

- [ ] Logo no header principal (Desktop + Mobile)
- [ ] Logo em formulários de cadastro
- [ ] Logo em e-mails de status
- [ ] Banner no dashboard
- [ ] Banner na área de processos (opcional)
- [ ] Banner na área de clientes (opcional)
- [ ] Favicon atualizado
- [ ] Open Graph image para compartilhamento

---

**Status:** 🟡 Aguardando arquivos da identidade visual
