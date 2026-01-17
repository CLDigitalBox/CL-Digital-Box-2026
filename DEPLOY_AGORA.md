# 🚀 Deploy Imediato - CL Digital Box

## ⚡ Deploy em 5 Minutos (Recomendado)

### Opção 1: Deploy via GitHub + Vercel (Mais Fácil)

**Passo 1: Criar repositório no GitHub**
1. Acesse: https://github.com/new
2. Nome do repositório: `cl-digital-box`
3. Marque como **Private** (recomendado)
4. Clique em "Create repository"

**Passo 2: Fazer push do código**
```bash
# Na pasta do projeto, execute:
git remote add origin https://github.com/SEU-USUARIO/cl-digital-box.git
git branch -M main
git push -u origin main
```

**Passo 3: Deploy na Vercel**
1. Acesse: https://vercel.com/new
2. Importe o repositório `cl-digital-box`
3. Clique em "Deploy" (a Vercel detecta automaticamente as configurações)
4. Aguarde 2-3 minutos
5. **Pronto!** Você receberá uma URL tipo: `https://cl-digital-box.vercel.app`

---

### Opção 2: Deploy Direto pela Vercel CLI

**Se você está em uma máquina local (não E2B):**

```bash
# 1. Instalar Vercel CLI (se ainda não tiver)
npm install -g vercel

# 2. Fazer login
vercel login

# 3. Deploy de produção
vercel --prod

# 4. Seguir as instruções interativas:
#    - Set up and deploy? Yes
#    - Which scope? Seu usuário/organização
#    - Link to existing project? No
#    - What's your project's name? cl-digital-box
#    - In which directory is your code located? ./
#    - Want to override the settings? No

# Aguardar 2-3 minutos e pronto!
```

---

## 🔐 Configurar Variáveis de Ambiente (Após Deploy)

**IMPORTANTE:** O sistema funciona sem configuração extra, mas para emails reais:

### Via Vercel Dashboard:
1. Acesse: https://vercel.com/dashboard
2. Clique no projeto `cl-digital-box`
3. Vá em **Settings** → **Environment Variables**
4. Adicione as seguintes variáveis:

```bash
# Email Real (Opcional - Sistema funciona sem isso)
VITE_RESEND_API_KEY=re_sua_chave_aqui

# Informações da Empresa (Já pré-configuradas)
VITE_DEFAULT_FROM_EMAIL=CL Assessoria <contato@clprocessosdigitais.com.br>
VITE_REPLY_TO_EMAIL=processosgerais22@gmail.com
VITE_COMPANY_NAME=CL Assessoria e Consultoria Digital
VITE_COMPANY_CITY=Santa Bárbara
VITE_COMPANY_STATE=MG
VITE_COMPANY_WEBSITE=https://clprocessosdigitais.com.br

# URL da Aplicação (Preencher após deploy)
VITE_APP_URL=https://cl-digital-box.vercel.app
```

5. Clique em "Save"
6. Vá em **Deployments** → clique nos 3 pontinhos do último deploy → **Redeploy**

### Via CLI (Alternativa):
```bash
# Adicionar variáveis de ambiente
vercel env add VITE_RESEND_API_KEY production
# Cole a chave quando solicitado

vercel env add VITE_APP_URL production
# Cole a URL quando solicitado

# Fazer redeploy
vercel --prod
```

---

## 📧 Ativar Emails Reais (Opcional - 15 min)

**Sem configuração adicional:**
- Sistema funciona normalmente
- Emails aparecem no console do navegador (modo simulado)
- Ideal para testes

**Para ativar emails reais:**
1. Siga o guia: `CONFIGURAR_EMAIL_REAL.md`
2. Obtenha API Key do Resend
3. Configure `VITE_RESEND_API_KEY` (passos acima)
4. Pronto! Emails serão enviados de verdade

---

## ✅ Checklist de Deploy

Antes de fazer deploy:
- [x] ✅ TypeScript validado (`npm run check:safe` - já passou)
- [x] ✅ Build de produção criado (`npm run build` - já feito)
- [x] ✅ Configuração Vercel (`vercel.json` - já existe)
- [x] ✅ Git inicializado e commit criado
- [ ] Criar repositório no GitHub (faça agora)
- [ ] Fazer push para GitHub (faça agora)
- [ ] Deploy na Vercel (faça agora)
- [ ] Testar URL de produção
- [ ] (Opcional) Configurar variáveis de ambiente
- [ ] (Opcional) Ativar emails reais

---

## 🎯 Após o Deploy

**1. Testar o Sistema:**
- Acesse a URL fornecida pela Vercel
- Clique em "Criar Dados de Teste" (botão no dashboard)
- Navegue pelas 9 abas e teste as funcionalidades

**2. Usar com Dados Reais:**
- Clique em "Limpar Banco" para remover dados de teste
- Cadastre seus clientes reais
- Crie demandas reais
- Comece a usar!

**3. Funcionalidades Disponíveis:**
- ✅ Cadastro de clientes
- ✅ Gestão de demandas
- ✅ Upload e organização de documentos
- ✅ Workflows automatizados
- ✅ Controle de parcelas
- ✅ Centro de interações (Email, WhatsApp, etc)
- ✅ Geração de relatórios PDF
- ✅ Assinatura digital A1
- ✅ Centro de notificações

---

## 🔒 Segurança

O sistema já inclui:
- ✅ Headers de segurança HTTP
- ✅ Proteção XSS
- ✅ Proteção clickjacking
- ✅ HTTPS automático (Vercel)
- ✅ Cache otimizado

**Recomendações adicionais:**
- Use repositório **privado** no GitHub
- Não commite o arquivo `.env.local` (já está no `.gitignore`)
- Mantenha a API Key do Resend em segredo
- Configure autenticação (futuro) para múltiplos usuários

---

## 🆘 Problemas Comuns

**Erro: "Not Found"**
→ Configure os rewrites no `vercel.json` (já feito)

**Erro: "Module not found"**
→ Rode `npm install` novamente e faça redeploy

**Build falhou:**
→ Rode `npm run check:safe` para ver erros
→ Corrija e faça push novamente

**Emails não enviando:**
→ Normal! Está em modo simulado
→ Configure `VITE_RESEND_API_KEY` para ativar emails reais

---

## 📞 Suporte

- Guia de Email: `CONFIGURAR_EMAIL_REAL.md`
- Guia Completo: `DEPLOY_PRODUCAO.md`
- Documentação: `README_SISTEMA.md`

---

**Pronto para o deploy? Execute os comandos da Opção 1 ou 2 acima!** 🚀
