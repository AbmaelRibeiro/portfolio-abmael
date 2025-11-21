# 🚀 Portfólio Abmael Ribeiro

<div align="center">

![Portfolio Preview](https://via.placeholder.com/800x400/0A1128/1261A0?text=Portfolio+Preview)

**Portfólio web moderno e futurista desenvolvido com React, TypeScript e Tailwind CSS**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

[Ver Demo](https://abmaelribeiro.com) • [Documentação](./docs/README.md) • [Reportar Bug](https://github.com/AbmaelRibeiro/portfolio/issues)

</div>

---

## ✨ Sobre

Portfólio profissional desenvolvido para showcasing de projetos, habilidades e experiência em desenvolvimento Full Stack, Mobile e Inteligência Artificial.

### 🎯 Características Principais

- 🎨 **Design Futurista Premium** - Glassmorphism, neon effects, animações suaves
- 📱 **Totalmente Responsivo** - Adaptado para Desktop, Tablet e Mobile
- ♿ **Acessível** - WCAG 2.1 Nível AA, navegação por teclado
- ⚡ **Performance** - Lazy loading, otimizado para web
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data
- 🎭 **Animações Fluidas** - Motion/Framer Motion para transições suaves
- 📊 **Dados Estruturados** - JSON files para fácil manutenção

---

## 🛠️ Stack Tecnológico

### Core

```json
{
  "frontend": "React 18 + TypeScript",
  "styling": "Tailwind CSS v4",
  "animations": "Motion (Framer Motion)",
  "icons": "Lucide React",
  "build": "Vite"
}
```

### Design Principles

- **Futurismo** + **Minimalismo Premium**
- Glassmorphism e transparências
- Efeitos neon discretos
- Microinterações e feedback visual

---

## 🚀 Quick Start

### Pré-requisitos

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/AbmaelRibeiro/portfolio.git
cd portfolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
npm run preview  # Visualizar build localmente
```

---

## 📂 Estrutura do Projeto

```
portfolio/
├── public/
│   └── favicon.svg              # Favicon customizado
├── src/
│   ├── components/              # Componentes React
│   │   ├── Header.tsx          # Cabeçalho com navegação
│   │   ├── Hero.tsx            # Seção inicial animada
│   │   ├── About.tsx           # Sobre mim + timeline
│   │   ├── Projects.tsx        # Grid de projetos
│   │   ├── Skills.tsx          # Habilidades técnicas
│   │   ├── Contact.tsx         # Formulário de contato
│   │   └── Footer.tsx          # Rodapé
│   ├── data/                   # Dados estruturados
│   │   ├── projects.json       # Lista de projetos
│   │   ├── skills.json         # Habilidades e ferramentas
│   │   └── timeline.json       # Timeline de experiência
│   ├── App.tsx                 # Componente principal
│   └── main.tsx                # Entry point
├── docs/                        # Documentação
│   ├── README.md               # Visão geral da docs
│   ├── ESTRUTURA_DADOS.md      # Guia de dados
│   ├── ACESSIBILIDADE.md       # Guidelines de a11y
│   └── ANDROID_APP.md          # Guia de conversão Android
├── index.html                   # HTML + SEO tags
└── package.json
```

---

## 🎨 Seções do Portfólio

### 1️⃣ Hero Section

- Apresentação com efeito de texto digitando
- Partículas animadas de fundo
- Avatar/Ilustração estilizada
- CTAs para projetos e download de CV

### 2️⃣ Sobre Mim

- Card glassmorphism com foto
- Biografia profissional
- Timeline animada de formação e projetos
- Estatísticas (anos exp., projetos, tecnologias)

### 3️⃣ Projetos

- Grid responsivo com filtros por categoria
- Cards com hover 3D e animações
- **Status badges** (Produção/Desenvolvimento/Conceitual)
- Tecnologias utilizadas
- Links para GitHub e demo

### 4️⃣ Habilidades

- Categorias (Backend, Mobile, Frontend, Database, DevOps)
- Barras de progresso animadas
- Grid de ferramentas
- Indicadores de experiência

### 5️⃣ Contato

- Formulário funcional com validação
- Cards de contato (WhatsApp, Email, Localização)
- Links sociais (GitHub, LinkedIn)
- Badge de disponibilidade

---

## 📊 Dados Estruturados

Os dados do portfólio são organizados em arquivos JSON para facilitar manutenção:

### `data/projects.json`

```json
{
  "id": 1,
  "title": "Nome do Projeto",
  "category": "mobile" | "web" | "ia",
  "status": "production" | "development" | "concept",
  "description": "Descrição curta",
  "technologies": ["Tech1", "Tech2"],
  "image": "url",
  "github": "url",
  "year": 2024
}
```

### Documentação Completa

Ver [ESTRUTURA_DADOS.md](./docs/ESTRUTURA_DADOS.md) para detalhes completos.

---

## ♿ Acessibilidade

Este portfólio segue as diretrizes **WCAG 2.1 Nível AA**:

✅ Navegação completa por teclado  
✅ Estados de foco visíveis  
✅ ARIA labels e roles corretos  
✅ Contraste de cores adequado (14.5:1)  
✅ Labels em todos os inputs  
✅ Textos alternativos em imagens

Ver [ACESSIBILIDADE.md](./docs/ACESSIBILIDADE.md) para guia completo.

---

## 📱 Versão Mobile (Android)

O portfólio foi estruturado para facilitar conversão em app Android nativo.

### Tecnologias sugeridas:

- **Jetpack Compose** - UI declarativa
- **Kotlin** - Linguagem nativa
- **MVVM** - Arquitetura
- **Room** - Banco de dados local
- **Retrofit** - API REST (futuro)

Ver [ANDROID_APP.md](./docs/ANDROID_APP.md) para guia completo de conversão.

---

## 🎯 Features Futuras

### Curto Prazo

- [ ] Blog integrado (Markdown)
- [ ] Sistema de busca nos projetos
- [ ] Modo claro/escuro
- [ ] Múltiplos idiomas (PT/EN)

### Médio Prazo

- [ ] CMS headless (Strapi/Contentful)
- [ ] Analytics dashboard
- [ ] Comentários nos projetos
- [ ] Newsletter integration

### Longo Prazo

- [ ] Aplicativo Android nativo
- [ ] Backend com autenticação
- [ ] Admin panel para edição
- [ ] API REST pública

---

## 🔧 Customização

### Cores

Edite as cores principais em `/styles/globals.css`:

```css
:root {
  --petrol-blue: #0a1128;
  --electric-blue: #1261a0;
  --soft-gray: #e2e8f0;
}
```

### Conteúdo

Edite os arquivos JSON em `/data/`:

- `projects.json` - Seus projetos
- `skills.json` - Suas habilidades
- `timeline.json` - Sua experiência

### Componentes

Personalize componentes em `/components/`

---

## 📈 Performance

### Lighthouse Scores (Target)

- 🎯 Performance: 95+
- ♿ Accessibility: 95+
- 💡 Best Practices: 95+
- 🔍 SEO: 95+

### Otimizações

- Lazy loading de imagens
- Code splitting automático (Vite)
- Minificação de CSS/JS
- Compressão de assets

---

## 🚀 Deploy

### Opções Recomendadas

#### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Fazer upload da pasta dist/
```

#### GitHub Pages

```bash
npm run build
# Push da pasta dist/ para branch gh-pages
```

---

## 🐛 Troubleshooting

### Erro de Build

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tailwind não aplicando estilos

Verifique se `/styles/globals.css` contém:

```css
@import 'tailwindcss';
```

### Animações não funcionam

Verifique se Motion está instalado:

```bash
npm install motion
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para grandes mudanças:

1. Abra uma issue primeiro
2. Fork o projeto
3. Crie uma branch (`git checkout -b feature/AmazingFeature`)
4. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

---

## 📄 Licença

© 2025 Abmael Ribeiro. Todos os direitos reservados.

Este projeto é de propriedade intelectual de Abmael Ribeiro. O código pode ser usado como referência educacional, mas não para fins comerciais sem autorização expressa.

---

## 📞 Contato

**Abmael Ribeiro**

- 🌐 Website: [abmaelribeiro.com](https://abmaelribeiro.com)
- 📧 Email: [abmaelribeiro@outlook.com](mailto:abmaelribeiro@outlook.com)
- 💼 LinkedIn: [linkedin.com/in/abmael-ribeiro](https://www.linkedin.com/in/abmael-ribeiro)
- 🐙 GitHub: [@AbmaelRibeiro](https://github.com/AbmaelRibeiro)
- 💬 WhatsApp: [+55 (11) 1194720-4991](https://wa.me/5511947204991)

---

## 🎓 Créditos

### Tecnologias

- [React](https://react.dev/) - Biblioteca UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Motion](https://motion.dev/) - Biblioteca de animações
- [Lucide](https://lucide.dev/) - Ícones
- [Vite](https://vitejs.dev/) - Build tool

### Inspirações de Design

- Apple Design Language
- Vercel Design System
- Linear App
- Stripe Design

### Imagens

- [Unsplash](https://unsplash.com/) - Stock photos

---

## ⭐ Apoie o Projeto

Se este projeto te ajudou de alguma forma:

- ⭐ Deixe uma estrela no GitHub
- 🐦 Compartilhe nas redes sociais
- 💬 Dê feedback e sugestões
- 🤝 Contribua com código

---

<div align="center">

**Desenvolvido com ❤️ por [Abmael Ribeiro](https://abmaelribeiro.com)**

Desenvolvedor Full Stack • Mobile • IA

[Website](https://abmaelribeiro.com) • [LinkedIn](https://www.linkedin.com/in/abmael-ribeiro) • [GitHub](https://github.com/AbmaelRibeiro)

</div>
