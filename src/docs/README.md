# 📘 Documentação do Portfólio

Bem-vindo à documentação completa do portfólio de Abmael Ribeiro.

---

## 📁 Estrutura da Documentação

### 1. [Estrutura de Dados](./ESTRUTURA_DADOS.md)

Guia completo sobre a organização dos dados em JSON, incluindo:

- Formato dos arquivos `projects.json`, `skills.json`, `timeline.json`
- Como adicionar/editar conteúdo
- Integração com componentes React
- Preparação para migração de dados

### 2. [Acessibilidade](./ACESSIBILIDADE.md)

Práticas e padrões de acessibilidade implementados:

- WCAG 2.1 Nível AA
- Navegação por teclado
- ARIA labels e roles
- Contraste de cores
- Compatibilidade com leitores de tela

### 3. [App Android](./ANDROID_APP.md)

Guia de conversão do portfólio web para aplicativo Android:

- Arquitetura sugerida (Jetpack Compose)
- Estrutura de dados (Kotlin Data Classes)
- Navegação e telas
- Design system e componentes
- Roadmap de desenvolvimento

---

## 🚀 Quick Start

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 🎨 Stack Tecnológico

### Core

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Motion (Framer Motion)** - Animações

### Componentes

- **Lucide React** - Ícones
- **Recharts** - Gráficos (se necessário)
- **React Hook Form** - Formulários

### Build & Dev

- **Vite** - Build tool
- **PostCSS** - Processamento CSS

---

## 🎨 Design System

### Cores Principais

```css
--petrol-blue: #0a1128;
--electric-blue: #1261a0;
--white: #ffffff;
--soft-gray: #e2e8f0;
--deep-black: #050505;
```

### Tipografia

- **Display/Headings:** Poppins/Urbanist
- **Body:** Inter

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 📂 Estrutura de Arquivos

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── timeline.json
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── README.md
│   ├── ESTRUTURA_DADOS.md
│   ├── ACESSIBILIDADE.md
│   └── ANDROID_APP.md
└── package.json
```

---

## 🔧 Manutenção

### Adicionar Novo Projeto

1. Editar `/data/projects.json`
2. Adicionar objeto com estrutura padrão
3. Incluir imagem do projeto
4. Definir status (production/development/concept)

### Atualizar Habilidades

1. Editar `/data/skills.json`
2. Ajustar níveis de proficiência
3. Adicionar novas tecnologias

### Modificar Timeline

1. Editar `/data/timeline.json`
2. Adicionar eventos em ordem cronológica
3. Categorizar (education/project)

---

## 🎯 Features Implementadas

✅ **Design Futurista Premium**

- Glassmorphism
- Efeitos neon suaves
- Animações fluidas
- Partículas animadas

✅ **Responsividade Total**

- Desktop, Tablet, Mobile
- Menu mobile otimizado
- Cards adaptáveis

✅ **Acessibilidade**

- WCAG 2.1 AA
- Navegação por teclado
- ARIA labels
- Focus states visíveis

✅ **Performance**

- Lazy loading
- Otimização de imagens
- Code splitting
- SEO otimizado

✅ **Interatividade**

- Scroll animations
- Hover effects 3D
- Typing effect
- Parallax

---

## 📊 SEO

### Meta Tags Implementadas

- Title otimizado
- Description
- Open Graph (Facebook)
- Twitter Cards
- Keywords
- Favicon

### Structured Data

Preparado para implementar JSON-LD Schema.org:

- Person
- WebSite
- CreativeWork (projetos)

---

## 🔐 Segurança

### Headers Recomendados (Produção)

```
Content-Security-Policy
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS

Sempre servir via HTTPS em produção

---

## 🚀 Deploy

### Opções Recomendadas

1. **Vercel** - Deploy automático, otimizado para React
2. **Netlify** - CI/CD integrado, forms gratuitos
3. **GitHub Pages** - Gratuito, bom para portfolios
4. **AWS S3 + CloudFront** - Escalável, profissional

### Build de Produção

```bash
npm run build
npm run preview  # Testar build local
```

---

## 📈 Analytics (Opcional)

### Google Analytics

```html
<!-- Adicionar no index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Alternativas Privacy-First

- Plausible Analytics
- Fathom Analytics
- Simple Analytics

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Tailwind não funciona

```bash
# Verificar versão
npm list tailwindcss

# Verificar globals.css
# Deve ter @import "tailwindcss";
```

---

## 🤝 Contribuindo

### Reportar Issues

1. Descrever o problema
2. Incluir screenshots
3. Browser/versão
4. Steps to reproduce

### Sugerir Features

1. Abrir issue com label "enhancement"
2. Descrever use case
3. Mockups se aplicável

---

## 📞 Contato

**Abmael Ribeiro**

- 📧 Email: abmaelribeiro@outlook.com
- 💼 LinkedIn: [linkedin.com/in/abmael-ribeiro](https://www.linkedin.com/in/abmael-ribeiro)
- 🐙 GitHub: [github.com/AbmaelRibeiro](https://github.com/AbmaelRibeiro)
- 💬 WhatsApp: +55 (11) 1194720-4991

---

## 📄 Licença

© 2025 Abmael Ribeiro. Todos os direitos reservados.

Este portfólio é propriedade intelectual de Abmael Ribeiro.
O código pode ser usado como referência, mas não para fins comerciais sem autorização.

---

## 🎓 Créditos

### Tecnologias

- React Team
- Tailwind Labs
- Framer Motion
- Lucide Icons
- Unsplash (imagens)

### Inspirações

- Apple Design Language
- Vercel Design
- Linear App
- Stripe Design System

---

**Versão:** 1.0.0  
**Última atualização:** Novembro 2025  
**Status:** ✅ Produção
