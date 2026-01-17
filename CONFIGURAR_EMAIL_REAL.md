# 📧 Como Configurar Email Real - CL Assessoria

Este guia mostra como ativar o envio de emails REAIS no sistema CL Digital Box usando a conta do escritório.

---

## 📋 Emails do Escritório Configurados

✅ **Email Remetente (De:):** `contato@clprocessosdigitais.com.br`
✅ **Email Resposta (Reply-To:):** `processosgerais22@gmail.com`

Quando o sistema enviar emails:
- **Aparece como:** CL Assessoria <contato@clprocessosdigitais.com.br>
- **Cliente responde para:** processosgerais22@gmail.com

---

## 🚀 Passo a Passo (15 minutos)

### 1️⃣ Criar Conta no Resend (Gratuita)

1. Acesse: https://resend.com/signup
2. Criar conta com email do escritório: `processosgerais22@gmail.com`
3. Verificar email de confirmação
4. Fazer login

**Plano Gratuito:**
- ✅ 100 emails por dia
- ✅ 1 domínio verificado
- ✅ APIs completas
- ✅ Sem cartão de crédito

---

### 2️⃣ Adicionar e Verificar Domínio

#### 2.1 Adicionar Domínio

1. No dashboard do Resend, clique em **"Domains"**
2. Clique em **"Add Domain"**
3. Digite: `clprocessosdigitais.com.br`
4. Clique em **"Add"**

#### 2.2 Configurar DNS (IMPORTANTE!)

O Resend vai mostrar 3 registros DNS que você precisa adicionar:

```
TIPO    NOME                              VALOR
TXT     @                                 v=spf1 include:_spf.resend.com ~all
TXT     resend._domainkey                 [Chave DKIM fornecida pelo Resend]
TXT     _dmarc                            v=DMARC1; p=none; rua=mailto:dmarc@resend.com
```

**Como adicionar no seu provedor de domínio:**

<details>
<summary><b>Se o domínio está no Registro.br</b></summary>

1. Acesse: https://registro.br
2. Login com CPF/CNPJ
3. Clique em "Domínios" → "clprocessosdigitais.com.br"
4. Clique em "Editar Zona DNS"
5. Adicionar os 3 registros TXT (copiar e colar do Resend)
6. Salvar alterações
7. Aguardar propagação (5-30 minutos)

</details>

<details>
<summary><b>Se o domínio está em outro provedor (GoDaddy, HostGator, etc)</b></summary>

1. Fazer login no painel do provedor
2. Ir em "Gerenciar DNS" ou "DNS Settings"
3. Adicionar os 3 registros TXT
4. Salvar alterações
5. Aguardar propagação (5-30 minutos)

</details>

#### 2.3 Verificar Domínio

1. Após adicionar os registros DNS, volte ao Resend
2. Clique em **"Verify"** ao lado do domínio
3. Se aparecer "Verified" ✅ → Sucesso!
4. Se aparecer erro → Aguardar mais alguns minutos e tentar novamente

**Dica:** Use https://dnschecker.org para verificar se os registros DNS foram propagados

---

### 3️⃣ Obter API Key

1. No dashboard do Resend, clique em **"API Keys"**
2. Clique em **"Create API Key"**
3. Nome: `CL Digital Box Production`
4. Permissões: **"Full Access"** (recomendado) ou "Sending Access"
5. Clique em **"Add"**
6. **COPIE A CHAVE AGORA** (ela só aparece uma vez!)
   - Formato: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

⚠️ **IMPORTANTE:** Guarde esta chave em local seguro! Você não conseguirá vê-la novamente.

---

### 4️⃣ Configurar no Sistema

1. Abra o arquivo `.env.local` na raiz do projeto
2. Localize a linha `VITE_RESEND_API_KEY=`
3. Cole sua API Key:

```bash
VITE_RESEND_API_KEY=re_sua_chave_aqui_copiada_do_resend
```

**Exemplo:**
```bash
VITE_RESEND_API_KEY=re_AbCdEf123456789XyZ
```

4. Salve o arquivo `.env.local`

---

### 5️⃣ Reiniciar o Servidor

```bash
# Se o servidor estiver rodando, pare com Ctrl+C
# Depois inicie novamente:
npm run dev
```

---

### 6️⃣ Testar Envio de Email

#### Opção 1: Testar via Interface

1. Abra o sistema: http://localhost:3000
2. Vá em **"Centro de Interações"**
3. Clique em **"Nova Interação"**
4. Preencha os campos:
   - Cliente: (selecione um cliente)
   - Tipo: Email
   - Descrição: "Teste de email real"
5. Clique em **"Enviar Email"**
6. Digite seu email pessoal para teste
7. Clique em **"Enviar"**

#### Opção 2: Verificar Logs no Console

Quando o email for enviado, você verá no console:

```
✅ Email enviado com sucesso via Resend!
📧 ID: 123abc...
📨 Para: seuemail@exemplo.com
```

**Se ver isso, está funcionando!** ✅

#### Opção 3: Verificar no Dashboard do Resend

1. Acesse o dashboard do Resend
2. Clique em **"Emails"**
3. Você verá a lista de emails enviados com status:
   - **Delivered** ✅ → Email entregue com sucesso
   - **Bounced** ❌ → Email inválido ou bloqueado
   - **Opened** 👀 → Cliente abriu o email

---

## ✅ Checklist de Configuração

Marque conforme completa:

- [ ] Conta criada no Resend
- [ ] Domínio `clprocessosdigitais.com.br` adicionado
- [ ] Registros DNS configurados (SPF, DKIM, DMARC)
- [ ] Domínio verificado no Resend (status "Verified")
- [ ] API Key gerada e copiada
- [ ] API Key colada no arquivo `.env.local`
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Email de teste enviado com sucesso
- [ ] Email recebido na caixa de entrada

---

## 🎯 Configuração Atual do Sistema

Arquivo `.env.local` já está pré-configurado com:

```bash
# Email remetente (aparece no campo "De:")
VITE_DEFAULT_FROM_EMAIL=CL Assessoria <contato@clprocessosdigitais.com.br>

# Email para respostas (quando cliente clica em "Responder")
VITE_REPLY_TO_EMAIL=processosgerais22@gmail.com

# Informações do escritório (usado em emails e documentos)
VITE_COMPANY_NAME=CL Assessoria e Consultoria Digital
VITE_COMPANY_CITY=Santa Bárbara
VITE_COMPANY_STATE=MG
VITE_COMPANY_WEBSITE=https://clprocessosdigitais.com.br
```

**Você só precisa adicionar a `VITE_RESEND_API_KEY`!**

---

## 🔍 Solução de Problemas

### Problema 1: "Domain not verified"

**Causa:** Registros DNS não foram adicionados ou ainda não propagaram

**Solução:**
1. Verificar se os registros DNS foram adicionados corretamente
2. Aguardar 15-30 minutos para propagação
3. Usar https://dnschecker.org para verificar propagação
4. Tentar verificar novamente no Resend

---

### Problema 2: Emails não estão sendo enviados

**Causa:** API Key não configurada ou inválida

**Solução:**
1. Verificar se `VITE_RESEND_API_KEY` está no `.env.local`
2. Verificar se a chave começa com `re_`
3. Verificar se não tem espaços antes/depois da chave
4. Reiniciar o servidor: `npm run dev`
5. Verificar console do navegador (F12) para erros

---

### Problema 3: Emails vão para spam

**Causa:** DNS não configurado corretamente ou domínio novo

**Solução:**
1. Verificar se todos os 3 registros DNS estão corretos (SPF, DKIM, DMARC)
2. Aguardar alguns dias (domínios novos têm baixa reputação)
3. Pedir aos clientes para marcarem como "Não é spam"
4. Evitar palavras como "grátis", "promoção" nos assuntos

---

### Problema 4: "Rate limit exceeded"

**Causa:** Ultrapassou limite do plano gratuito (100 emails/dia)

**Solução:**
1. Aguardar até o dia seguinte (limite renova às 00:00 UTC)
2. Ou fazer upgrade para plano pago ($20/mês = 50.000 emails/mês)

---

## 💰 Custos

### Plano Gratuito (Atual)

```
✅ 100 emails/dia
✅ 1 domínio verificado
✅ APIs completas
✅ Suporte por email
Total: R$ 0/mês
```

**Ideal para:** Pequenos escritórios, testes, uso inicial

### Plano Pago (Opcional)

```
✅ 50.000 emails/mês (1.666 emails/dia)
✅ Domínios ilimitados
✅ Webhooks avançados
✅ Suporte prioritário
Total: $20/mês (~R$ 100/mês)
```

**Ideal para:** Escritórios com alto volume de emails

---

## 📞 Suporte

### Resend
- Documentação: https://resend.com/docs
- Status: https://resend.com/status
- Email: support@resend.com

### CL Assessoria
- Email: processosgerais22@gmail.com
- Email alternativo: contato@clprocessosdigitais.com.br

---

## 🎉 Pronto!

Após seguir todos os passos, seu sistema estará enviando emails REAIS para seus clientes!

**Funcionalidades que usam email:**
- ✅ Envio de relatórios PDF
- ✅ Notificações de vencimento
- ✅ Confirmações de parcelamento
- ✅ Lembretes de documentos pendentes
- ✅ Centro de interações (comunicação com clientes)

---

**Última atualização:** 14 de dezembro de 2025
**Versão do sistema:** 1.0.0
