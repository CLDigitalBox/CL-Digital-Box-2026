#!/bin/bash

# ===================================================================
# 🚀 SCRIPT DE DEPLOY AUTOMÁTICO - CL DIGITAL BOX
# ===================================================================
#
# Este script faz o deploy automaticamente na Vercel
#
# USO:
#   chmod +x deploy.sh
#   ./deploy.sh
#
# ===================================================================

set -e

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║          🚀 DEPLOY AUTOMÁTICO - CL DIGITAL BOX                   ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir mensagens coloridas
print_step() {
    echo -e "${BLUE}[PASSO $1]${NC} $2"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# ===================================================================
# PASSO 1: Verificar Node.js e npm
# ===================================================================
print_step "1" "Verificando Node.js e npm..."

if ! command -v node &> /dev/null; then
    print_error "Node.js não encontrado! Instale: https://nodejs.org"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm não encontrado! Instale Node.js: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
print_success "Node.js $NODE_VERSION | npm $NPM_VERSION"
echo ""

# ===================================================================
# PASSO 2: Verificar Vercel CLI
# ===================================================================
print_step "2" "Verificando Vercel CLI..."

if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI não encontrada. Instalando..."
    npm install -g vercel
    print_success "Vercel CLI instalada!"
else
    VERCEL_VERSION=$(vercel --version)
    print_success "Vercel CLI $VERCEL_VERSION encontrada"
fi
echo ""

# ===================================================================
# PASSO 3: Verificar dependências do projeto
# ===================================================================
print_step "3" "Verificando dependências do projeto..."

if [ ! -d "node_modules" ]; then
    print_warning "Dependências não encontradas. Instalando..."
    npm install
    print_success "Dependências instaladas!"
else
    print_success "Dependências já instaladas"
fi
echo ""

# ===================================================================
# PASSO 4: Validar código
# ===================================================================
print_step "4" "Validando código (TypeScript + ESLint)..."

if npm run check:safe &> /dev/null; then
    print_success "Código validado sem erros!"
else
    print_error "Validação falhou! Execute 'npm run check:safe' para ver os erros."
    read -p "Deseja continuar mesmo assim? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi
echo ""

# ===================================================================
# PASSO 5: Criar build de produção
# ===================================================================
print_step "5" "Criando build de produção..."

if npm run build &> /dev/null; then
    print_success "Build criado com sucesso!"

    # Mostrar tamanho do build
    if [ -d "dist" ]; then
        BUILD_SIZE=$(du -sh dist | cut -f1)
        print_success "Tamanho do build: $BUILD_SIZE"
    fi
else
    print_error "Build falhou! Execute 'npm run build' para ver os erros."
    exit 1
fi
echo ""

# ===================================================================
# PASSO 6: Verificar Git
# ===================================================================
print_step "6" "Verificando Git..."

if [ ! -d ".git" ]; then
    print_warning "Git não inicializado. Inicializando..."
    git init
    git add .
    git commit -m "Initial commit: CL Digital Box - Deploy automático"
    git branch -M main
    print_success "Git inicializado!"
else
    print_success "Git já inicializado"
fi
echo ""

# ===================================================================
# PASSO 7: Deploy na Vercel
# ===================================================================
print_step "7" "Fazendo deploy na Vercel..."
echo ""
print_warning "IMPORTANTE: Uma janela do navegador será aberta para autenticação."
print_warning "Faça login com sua conta Vercel e autorize o deploy."
echo ""
read -p "Pressione ENTER para continuar com o deploy..."

# Deploy na Vercel
if vercel --prod; then
    echo ""
    print_success "═══════════════════════════════════════════════════════════════"
    print_success "   DEPLOY CONCLUÍDO COM SUCESSO! 🎉"
    print_success "═══════════════════════════════════════════════════════════════"
    echo ""
    print_success "Seu sistema está no ar!"
    echo ""
    print_warning "📋 PRÓXIMOS PASSOS:"
    echo "   1. Acesse a URL fornecida acima"
    echo "   2. Clique em 'Criar Dados de Teste' para ver exemplos"
    echo "   3. Ou cadastre dados reais direto"
    echo "   4. Navegue pelas 9 abas e teste as funcionalidades"
    echo ""
    print_warning "📧 Para ativar emails reais:"
    echo "   Leia o arquivo: CONFIGURAR_EMAIL_REAL.md"
    echo ""
else
    echo ""
    print_error "═══════════════════════════════════════════════════════════════"
    print_error "   DEPLOY FALHOU!"
    print_error "═══════════════════════════════════════════════════════════════"
    echo ""
    print_warning "Tente fazer deploy manualmente:"
    echo "   1. Execute: vercel login"
    echo "   2. Execute: vercel --prod"
    echo ""
    print_warning "Ou siga o guia: DEPLOY_RAPIDO_2_MINUTOS.md"
    echo ""
    exit 1
fi

# ===================================================================
# FIM
# ===================================================================
echo ""
print_success "Script finalizado!"
echo ""
