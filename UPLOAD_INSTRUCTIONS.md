# 📸 Instruções para Upload de Imagens Institucionais

Este guia explica como adicionar as imagens institucionais da CL Assessoria à galeria do sistema.

---

## 📋 Lista de Imagens para Upload

Você tem **15 imagens institucionais** categorizadas da seguinte forma:

### 🏗️ **Aferição de Obra** (1 imagem)
- `afericao-obra-1.png` ← **Renomear de:** "Afericao Obra - Copia (2) - Copia - Copia.png"

### 📄 **AIT (Auto de Infração de Trânsito)** (2 imagens)
- `ait-01.png` ← **Renomear de:** "AIT 01 - Copia (2) - Copia - Copia.png"
- `ait-02.png` ← **Renomear de:** "AIT 02 - Copia (2) - Copia - Copia.png"

### 👴 **Aposentadoria** (2 imagens)
- `aposentadoria.png` ← **Renomear de:** "Aposentadoria - Copia (2) - Copia - Copia.png"
- `aposentadoria-air-03.png` ← **Renomear de:** "Aposentadoria AIR 03 - Copia (2) - Copia - Copia.png"

### 🚗 **Detran MG** (1 imagem)
- `detran-mg.png` ← **Renomear de:** "Detran MG - Copia (2) - Copia - Copia - Copia.png"

### 📂 **Diversos** (2 imagens)
- `diversos-01.png` ← **Renomear de:** "Diversos 01 - Copia (4) - Copia.png"
- `diversos-02.png` ← **Renomear de:** "Diversos 02 - Copia (2) - Copia - Copia - Copia.png"

### 🚕 **Isenção Taxista** (2 imagens)
- `isencao-taxista-01.png` ← **Renomear de:** "Isencao Taxista 01 - Copia - Copia - Copia - Copia.png"
- `isencao-taxista-02.png` ← **Renomear de:** "Isencao Taxista 02 - Copia - Copia - Copia - Copia.png"

### ♿ **PCD (Pessoa com Deficiência)** (2 imagens)
- `pcd-02.png` ← **Renomear de:** "Pcd 02.png"
- `pcd-03.png` ← **Renomear de:** "Pcd 03 - Copia.png"

### 🏛️ **Prefeitura** (1 imagem)
- `prefeitura-02.png` ← **Renomear de:** "Prefeitura 02 - Copia.png"

### 💼 **Processos RFB** (1 imagem)
- `processos-rfb.png` ← **Renomear de:** "Processos RFB.png"

### 👶 **Maternidade** (1 imagem)
- `s-maternidade-01.png` ← **Renomear de:** "S Maternidade 01 - Copia.png"

---

## 🚀 Como Fazer Upload (2 Métodos)

### **Método 1: Upload Automatizado (Recomendado)**

1. **Arraste todas as 15 imagens** do diretório `C:/DigitalBox/AD Imagens Institucionais/` para a janela do chat do Claude Code
2. Eu renomearei e organizarei automaticamente os arquivos
3. Validarei que tudo está funcionando com `npm run check:safe`

### **Método 2: Upload Manual (Se preferir fazer você mesmo)**

1. **Copie as imagens** do seu diretório Windows para o projeto:
   ```bash
   # No terminal do sistema (fora do E2B)
   # Renomeie e copie cada arquivo conforme a lista acima
   ```

2. **Cole no diretório correto:**
   - Diretório de destino: `/home/user/vite-template/src/assets/institutional/`
   - Certifique-se de renomear os arquivos exatamente como indicado acima

3. **Verifique a estrutura:**
   ```
   src/assets/institutional/
   ├── afericao-obra-1.png
   ├── ait-01.png
   ├── ait-02.png
   ├── aposentadoria.png
   ├── aposentadoria-air-03.png
   ├── detran-mg.png
   ├── diversos-01.png
   ├── diversos-02.png
   ├── isencao-taxista-01.png
   ├── isencao-taxista-02.png
   ├── pcd-02.png
   ├── pcd-03.png
   ├── prefeitura-02.png
   ├── processos-rfb.png
   └── s-maternidade-01.png
   ```

---

## 🔧 Após Upload - Ativação das Imagens

Depois que as imagens estiverem no diretório, você precisa **descomentar o código** em:

### 📍 `src/components/InstitutionalGallery.tsx`

**Encontre estas linhas (aproximadamente linha 130-140):**

```tsx
{/* Quando as imagens forem adicionadas, use:
<img
  src={`/src/assets/institutional/${image.fileName}`}
  alt={image.title}
  className="w-full h-full object-cover"
/>
*/}
```

**Substitua por:**

```tsx
<img
  src={`/src/assets/institutional/${image.fileName}`}
  alt={image.title}
  className="w-full h-full object-cover"
/>
```

**Repita o mesmo processo no modal de visualização (aproximadamente linha 180-190).**

---

## ✅ Validação Final

Após fazer upload e descomentar o código:

```bash
npm run check:safe
```

Se tudo estiver correto, você verá:
- ✅ TypeScript: 0 erros
- ✅ ESLint: 0 avisos
- ✅ Build: OK

---

## 🎨 Personalização Adicional

### **Adicionar Mais Imagens**

1. Adicione o arquivo em `src/assets/institutional/`
2. Edite `src/components/InstitutionalGallery.tsx`
3. Adicione um novo objeto no array `INSTITUTIONAL_IMAGES`:

```tsx
{
  id: "16",
  title: "Nova Imagem",
  category: ImageCategory.Diversos,
  fileName: "nova-imagem.png",
  description: "Descrição da imagem",
}
```

### **Criar Nova Categoria**

1. Edite o enum `ImageCategory`:

```tsx
export enum ImageCategory {
  // ... categorias existentes ...
  NovaCategoria = "Nova Categoria",
}
```

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique que os nomes dos arquivos estão **exatamente** como especificado
2. Confirme que as imagens estão em formato PNG
3. Execute `npm run check:safe` para diagnóstico
4. Peça ajuda ao Claude Code com detalhes do erro

---

**Última atualização:** 2025-12-12
**Sistema:** CL Assessoria e Consultoria Digital
