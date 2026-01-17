# 🚀 DEPLOY EM 2 MINUTOS - VER O SISTEMA FUNCIONANDO AGORA

## ⚡ OPÇÃO 1: Deploy Instantâneo via Vercel (MAIS RÁPIDO)

### Passo 1: Baixar o Código
**Se você está neste ambiente E2B/Sandbox:**
```bash
# O código já está em: /home/user/vite-template
# Copie toda a pasta para sua máquina local
```

**Se você clonou do GitHub:**
```bash
cd /home/user/vite-template
```

### Passo 2: Deploy Direto (SEM GitHub)
```bash
# Instalar Vercel CLI (apenas uma vez)
npm install -g vercel

# Fazer deploy AGORA
cd /home/user/vite-template
vercel --prod

# Seguir as instruções:
# 1. Fazer login (abre navegador)
# 2. Confirmar configurações
# 3. Aguardar 2 minutos
```

**Pronto!** Você receberá uma URL tipo: `https://cl-digital-box.vercel.app`

---

## ⚡ OPÇÃO 2: Deploy via GitHub (RECOMENDADO PARA MANUTENÇÃO)

### Passo 1: Criar Repositório GitHub
1. Acesse: https://github.com/new
2. Nome: `cl-digital-box`
3. Privado: ✅
4. Criar

### Passo 2: Fazer Push
```bash
cd /home/user/vite-template

# Inicializar Git (se ainda não foi)
git init
git add .
git commit -m "Initial commit: CL Digital Box"

# Adicionar remote e fazer push
git remote add origin https://github.com/SEU-USUARIO/cl-digital-box.git
git branch -M main
git push -u origin main
```

### Passo 3: Deploy na Vercel
1. Acesse: https://vercel.com/new
2. Conecte GitHub
3. Selecione repositório `cl-digital-box`
4. Clique em "Deploy"
5. Aguarde 2-3 minutos

**Pronto!** URL: `https://cl-digital-box-SEU-USUARIO.vercel.app`

---

## ⚡ OPÇÃO 3: Deploy via Netlify (ALTERNATIVA)

### Passo 1: Instalar Netlify CLI
```bash
npm install -g netlify-cli
```

### Passo 2: Deploy
```bash
cd /home/user/vite-template
netlify deploy --prod

# Seguir instruções:
# 1. Autorizar (abre navegador)
# 2. Criar novo site
# 3. Selecionar pasta: dist
# 4. Confirmar
```

**Pronto!** URL fornecida instantaneamente.

---

## ⚡ OPÇÃO 4: Deploy via Render (ALTERNATIVA)

1. Acesse: https://render.com
2. New → Static Site
3. Conecte repositório GitHub
4. Build Command: `npm run build`
5. Publish Directory: `dist`
6. Deploy

---

## 🎯 DEPOIS DO DEPLOY

### Testar o Sistema:
1. **Acesse a URL fornecida**
2. **Clique em "Criar Dados de Teste"** (botão no topo)
3. **Navegue pelas 9 abas:**
   - Clientes
   - Demandas
   - Documentos
   - Workflows
   - Parcelas
   - Interações
   - Relatórios
   - Assinatura Digital A1
   - Notificações
4. **Teste as funcionalidades!**

### Usar com Dados Reais:
1. Clicar em "Limpar Banco"
2. Cadastrar seus clientes
3. Criar demandas
4. **Começar a usar!**

---

## 📧 Configurar Emails Reais (Opcional)

**Após o deploy, se quiser emails reais:**

1. **Obter API Key do Resend:**
   - Criar conta: https://resend.com
   - Verificar domínio: `clprocessosdigitais.com.br`
   - Copiar API Key

2. **Configurar na Vercel:**
   - Dashboard Vercel → Projeto
   - Settings → Environment Variables
   - Adicionar: `VITE_RESEND_API_KEY` = sua_chave
   - Redeploy

3. **Pronto!** Emails serão enviados de verdade.

---

## ❓ Problemas Comuns

### Erro: "Git not initialized"
```bash
git init
git add .
git commit -m "Initial commit"
```

### Erro: "Build failed"
```bash
npm install
npm run build
# Verificar erros e corrigir
```

### Erro: "Vercel not found"
```bash
npm install -g vercel
```

---

## 🎉 RESUMO

**Mais Rápido (2 min):**
```bash
npm install -g vercel
cd /home/user/vite-template
vercel --prod
```

**Melhor para Manutenção (5 min):**
1. Push para GitHub
2. Deploy na Vercel via dashboard
3. Configurar variáveis de ambiente

**Ambos funcionam perfeitamente!** 🚀

---

**Escolha uma opção acima e veja seu sistema no ar em 2-5 minutos!**
