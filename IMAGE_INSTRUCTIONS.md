# 📸 Como Adicionar Imagens ao Sistema

## 🎯 Arquivos Necessários

### 1. **Banner "2025"**
- **Local atual:** Banner CSS temporário em `CaseList.tsx` (linhas 107-120)
- **Substituir por:** Imagem real `2025-banner.jpg` ou `2025-banner.png`
- **Tamanho recomendado:** 1920x300px (proporção 6.4:1)

### 2. **Logo CL Assessoria**
- **Local atual:** Placeholder "CL" azul em `Dashboard.tsx` (linhas 14-16)
- **Substituir por:** Logo real `cl-logo.svg` ou `cl-logo.png`
- **Tamanho recomendado:** 56x56px (quadrado)

### 3. **Favicon** (opcional)
- **Local:** `index.html` linha 6
- **Arquivo:** `favicon.ico` ou `favicon.png`
- **Tamanho:** 32x32px ou 64x64px

---

## 🚀 Método 1: Arrastar para o Chat (RECOMENDADO)

1. **Localize os arquivos:**
   - `2 0 2 5.jpg` (já fornecido)
   - Logo da CL Assessoria
   - Favicon (opcional)

2. **Arraste para a janela do Claude Code**
   - Pode arrastar múltiplos arquivos de uma vez
   - Formatos aceitos: `.jpg`, `.png`, `.svg`, `.ico`

3. **Confirme a integração**
   - Claude automaticamente salvará em `src/assets/brand/`
   - Atualizará o código para usar as imagens reais
   - Rodará `npm run check:safe` para validar

---

## 🛠️ Método 2: Upload Manual

### Passo 1: Copiar arquivos

```bash
# Banner
cp "/caminho/para/2 0 2 5.jpg" /home/user/vite-template/src/assets/brand/banner-2025.jpg

# Logo
cp /caminho/para/cl-logo.svg /home/user/vite-template/src/assets/brand/cl-logo.svg

# Favicon (opcional)
cp /caminho/para/favicon.ico /home/user/vite-template/public/favicon.ico
```

### Passo 2: Atualizar código

#### A) **CaseList.tsx** - Substituir banner CSS (linhas 107-120)

```tsx
import bannerImage from '@/assets/brand/banner-2025.jpg';

// Substituir o <div> do banner por:
<div className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg">
  <img
    src={bannerImage}
    alt="2025 - CL Assessoria"
    className="w-full h-full object-cover"
  />
</div>
```

#### B) **Dashboard.tsx** - Substituir logo placeholder (linhas 14-16)

```tsx
import logoImage from '@/assets/brand/cl-logo.svg';

// Substituir o <div> do logo por:
<img
  src={logoImage}
  alt="CL Assessoria"
  className="w-14 h-14 object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
/>
```

### Passo 3: Validar

```bash
npm run check:safe
```

---

## 📁 Estrutura Final Esperada

```
src/assets/brand/
├── banner-2025.jpg       ← Banner da tela de Processos (1920x300px)
├── cl-logo.svg           ← Logo do header (56x56px, SVG preferencial)
└── README.md             ← Instruções da pasta

public/
└── favicon.ico           ← Ícone do navegador (32x32px)
```

---

## ✅ Status Atual

- ✅ **Banner 2025:** Placeholder CSS criado (aguardando imagem real)
- ✅ **Logo CL:** Placeholder gradiente azul (aguardando logo real)
- ❌ **Favicon:** Usando padrão (aguardando favicon personalizado)

---

## 🎨 Dicas de Design

### Banner 2025
- **Proporção:** 6.4:1 (largura x altura)
- **Formato:** JPG ou PNG
- **Resolução:** Alta (1920px de largura mínimo)
- **Conteúdo:** Deve ter "2025" visível + marca CL Assessoria

### Logo Header
- **Formato:** SVG (escalável) ou PNG (alta resolução)
- **Tamanho:** 56x56px ou múltiplos (112x112, 224x224)
- **Fundo:** Transparente preferencial
- **Cores:** Compatível com tema azul do sistema

### Favicon
- **Formato:** ICO (multi-tamanho) ou PNG
- **Tamanhos incluídos:** 16x16, 32x32, 64x64px
- **Estilo:** Versão simplificada da logo

---

## 🚨 Próximos Passos

1. **Arraste a imagem `2 0 2 5.jpg` para o chat** ⬅️ FAÇA ISSO AGORA
2. Se tiver a logo, arraste também
3. Claude irá automaticamente:
   - Salvar os arquivos
   - Atualizar o código
   - Validar com TypeScript/ESLint
   - Mostrar preview do resultado

**Aguardando as imagens!** 📎
