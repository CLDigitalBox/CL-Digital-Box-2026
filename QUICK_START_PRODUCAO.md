# ⚡ QUICK START - DEPLOY PRODUÇÃO

**CL Digital Box - Sistema 100% Pronto para Produção**

---

## 🎯 PASSO A PASSO RÁPIDO (15 minutos)

### 1️⃣ CONFIGURAR EMAIL (RESEND)

**Tempo: 5 minutos**

```bash
# 1. Criar conta Resend
# Acesse: https://resend.com/signup
# Email: processosgerais22@gmail.com
# Confirme email

# 2. Obter API Key
# Dashboard → API Keys → Create API Key
# Nome: CL Digital Box Production
# Copie a chave: re_xxxxxxxxxx

# 3. Configurar no sistema
# Edite .env.local:
VITE_RESEND_API_KEY=re_xxxxxxxxxx
```

**✅ Pronto! Emails funcionando (100 grátis/dia)**

---

### 2️⃣ FAZER DEPLOY (VERCEL)

**Tempo: 5 minutos**

```bash
# 1. Push para GitHub (se ainda não fez)
git init
git add .
git commit -m "feat: Sistema CL Digital Box completo"
git remote add origin https://github.com/SEU_USUARIO/cl-digital-box.git
git push -u origin main

# 2. Deploy na Vercel
# Acesse: https://vercel.com/signup
# Clique "Continue with GitHub"
# Clique "New Project"
# Selecione repositório "cl-digital-box"
# Clique "Deploy"

# ✅ Sistema online em 2 minutos!
```

**URL gerada:** `https://cl-digital-box.vercel.app`

---

### 3️⃣ CONFIGURAR VARIÁVEIS NO VERCEL

**Tempo: 2 minutos**

```bash
# No projeto Vercel:
# Settings → Environment Variables

# Adicione:
VITE_RESEND_API_KEY = re_xxxxxxxxxx
VITE_APP_URL = https://cl-digital-box.vercel.app
VITE_DEFAULT_FROM_EMAIL = sistema@clprocessosdigitais.com.br

# Clique "Save"
# Deployments → Latest → Redeploy
```

**✅ Sistema configurado e rodando!**

---

### 4️⃣ TESTAR SISTEMA

**Tempo: 3 minutos**

```bash
# 1. Acesse URL: https://cl-digital-box.vercel.app

# 2. Teste módulos:
✅ Clientes → Criar novo cliente
✅ Documentos → Upload de arquivo
✅ Parcelamentos → Gerar DARF
✅ Interações → Iniciar atendimento
✅ Relatórios → Enviar para: processosgerais22@gmail.com
✅ Notificações → Enviar email teste

# 3. Verifique email:
# Abra: processosgerais22@gmail.com
# Deve ter recebido relatório e notificação!
```

**✅ Sistema 100% funcional em produção!**

---

## 🌐 CONFIGURAR DOMÍNIO PRÓPRIO (OPCIONAL)

**Tempo: 30 minutos + 24h propagação DNS**

### Registrar Domínio

```bash
# Recomendado: Registro.br
# Acesse: https://registro.br
# Sugestões:
- cldigital.com.br
- classessoria.com.br
- clprocessos.com.br

# Custo: R$ 40/ano
```

### Configurar DNS na Vercel

```bash
# 1. Vercel → Settings → Domains
# 2. Add Domain: cldigital.com.br
# 3. Copie registros DNS fornecidos

# 4. Registro.br → DNS
# Adicione registros:
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com

# 5. Aguarde 24-48h propagação
```

### Configurar Email no Domínio

```bash
# 1. Resend → Domains → Add Domain
# 2. Digite: cldigital.com.br
# 3. Copie registros DNS (SPF, DKIM, DMARC)

# 4. Registro.br → DNS
# Adicione registros TXT fornecidos

# 5. Resend → Verify DNS Records
# ✅ Domínio verificado!

# 6. Atualizar .env.local:
VITE_DEFAULT_FROM_EMAIL=sistema@cldigital.com.br
```

**✅ Emails enviados do seu domínio!**

---

## 🔐 OBTER CERTIFICADO A1 (OPCIONAL)

**Tempo: 2-5 dias + R$ 150-300**

### Processo Resumido

```bash
# 1. Escolher AC (Autoridade Certificadora)
Recomendado: Serpro (R$ 140-200/ano)
https://certificado.serpro.gov.br

# 2. Documentação necessária:
✅ CNPJ ativo (cartão)
✅ RG e CPF do responsável legal
✅ Comprovante endereço (3 meses)
✅ Contrato Social atualizado
✅ Email corporativo

# 3. Solicitar online
- Preencher formulário
- Pagar taxa (cartão/boleto)
- Agendar validação presencial

# 4. Validação presencial
- Levar documentos originais
- Agência credenciada (BH)
- 15-30 minutos

# 5. Receber certificado
- Email com arquivo .pfx
- Senha de instalação

# 6. Instalar no sistema
- Acesse "Assinatura Digital A1"
- Upload do .pfx
- Digite senha
- ✅ Pronto para assinar documentos!
```

**Guia completo:** `CERTIFICADO_DIGITAL_A1_GUIA.md`

---

## 📋 CHECKLIST FINAL

### Antes de Usar em Produção

**Configuração:**
- [ ] Resend configurado (API Key)
- [ ] Vercel configurado (variáveis)
- [ ] Sistema acessível (URL funcionando)
- [ ] SSL/HTTPS ativo (cadeado verde)

**Testes:**
- [ ] Criar cliente ✅
- [ ] Upload documento ✅
- [ ] Gerar DARF ✅
- [ ] Enviar email teste ✅
- [ ] Receber email ✅

**Segurança:**
- [ ] .env.local NÃO commitado
- [ ] Senhas fortes configuradas
- [ ] Backup inicial feito

**Opcional:**
- [ ] Domínio próprio configurado
- [ ] DNS propagado (24-48h)
- [ ] Email do domínio funcionando
- [ ] Certificado A1 instalado

---

## 🚨 SOLUÇÃO DE PROBLEMAS

### Email não chega?

```bash
# 1. Verificar API Key
# Vercel → Settings → Environment Variables
# VITE_RESEND_API_KEY está correta?

# 2. Verificar quota
# Resend → Dashboard
# Ainda tem emails disponíveis? (100/dia grátis)

# 3. Verificar spam
# Checar pasta spam do Gmail

# 4. Verificar logs
# Resend → Logs
# Ver status do email enviado
```

### Deploy falhou?

```bash
# 1. Verificar build local
npm run build:prod

# 2. Se passar, fazer novo deploy
# Vercel → Deployments → Redeploy

# 3. Ver logs do erro
# Vercel → Deployments → Failed → View Logs
```

### Certificado A1 não funciona?

```bash
# 1. Verificar senha
# Use a senha fornecida pela AC

# 2. Verificar arquivo
# Deve ser .pfx ou .p12

# 3. Testar em modo simulado primeiro
# Senha de teste: 123456
```

---

## 📞 SUPORTE

### Contatos CL Assessoria

- 📧 **Email:** processosgerais22@gmail.com
- 📱 **Telefone:** (31) 99922-8017
- 📍 **Endereço:** Santa Bárbara, MG
- 🕐 **Horário:** Seg-Sex 8h-18h

### Suporte Plataformas

- **Vercel:** https://vercel.com/support
- **Resend:** https://resend.com/support
- **Registro.br:** https://registro.br/suporte

---

## 📚 DOCUMENTAÇÃO COMPLETA

### Guias Detalhados

| Arquivo | Descrição | Quando Usar |
|---------|-----------|-------------|
| `README.md` | Visão geral do projeto | Primeiro contato |
| `QUICK_START_PRODUCAO.md` | Este arquivo | Deploy rápido |
| `DEPLOY_PRODUCAO.md` | Guia completo deploy | Instruções detalhadas |
| `CERTIFICADO_DIGITAL_A1_GUIA.md` | Certificado A1 | Obter e configurar certificado |
| `.env.example` | Template variáveis | Configurar ambiente |

---

## ✅ PRONTO PARA PRODUÇÃO!

### O que você tem agora:

```
✅ Sistema web completo funcionando
✅ Deploy automático (Vercel)
✅ SSL/HTTPS ativo
✅ Emails enviados (Resend)
✅ Banco de dados SQLite
✅ 8 módulos funcionais
✅ Interface profissional
✅ Documentação completa
✅ Custo: R$ 0-40/mês
```

### Como usar:

```bash
# 1. Acesse URL do sistema
https://cl-digital-box.vercel.app

# 2. Comece a usar:
- Cadastrar clientes
- Upload de documentos
- Gerar DARFs
- Enviar relatórios
- Assinar digitalmente (com A1)

# 3. Cada git push → Deploy automático!
git add .
git commit -m "feat: Nova funcionalidade"
git push
# ✅ Deploy em 2 minutos!
```

---

## 🎉 PARABÉNS!

Seu sistema **CL Digital Box** está:

- ✅ **100% funcional**
- ✅ **Em produção**
- ✅ **Seguro (HTTPS)**
- ✅ **Escalável**
- ✅ **Documentado**
- ✅ **Pronto para clientes!**

---

**🚀 Bom trabalho e sucesso com o sistema!**

**Qualquer dúvida:**
📧 processosgerais22@gmail.com
📱 (31) 99922-8017

---

**CL Assessoria e Consultoria Digital**
*Santa Bárbara, MG*
*Dezembro 2024*
