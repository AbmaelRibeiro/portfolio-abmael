# Instruções rápidas para agentes AI — Portfolio Web App Layout

Este arquivo documenta conhecimento prático e verificável para agentes AI que vão editar, refatorar ou adicionar funcionalidades neste repositório.

Resumo rápido

- Projeto: SPA React usando Vite (`vite`), entrada em `src/main.tsx` e componente raiz `src/App.tsx`.
- UI: componentes organizados em `src/components/` — primitives e padrões reutilizáveis estão em `src/components/ui/`.
- Dados estáticos: `src/data/*.json` (ex.: `projects.json`, `skills.json`, `timeline.json`) são consumidos por componentes como `Projects.tsx`.

Comandos importantes

- Instalar dependências: `npm install` (ou `pnpm`/`yarn` se preferido pelo mantenedor).
- Desenvolvimento local: `npm run dev` (inicia `vite` no modo dev).
- Build de produção: `npm run build` (executa `vite build`).

Arquitetura e padrões (o que importa)

- Entrada: `src/main.tsx` cria a raiz React (`createRoot`) e renderiza `<App />`.
- Componente raiz: `src/App.tsx` orquestra rotas/sections; inspecione-o para entender a composição da página.
- Componetes: cada página/section (ex.: `Hero.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`) é um componente funcional com estilização via arquivos CSS locais e classes utilitárias.
- UI primitives: `src/components/ui/*` contém wrappers e componentes reutilizáveis (botões, inputs, cards). Use esses componentes ao adicionar UI para manter consistência.
- Fallbacks de recurso: ver `src/components/figma/ImageWithFallback.tsx` — siga esse padrão ao lidar com imagens remotas.

Padrões de dados e consumo

- Dados estão em JSON em `src/data/`. Exemplos de uso:
  - `Projects.tsx` lê `projects.json` para renderizar cards de projetos.
  - Mantenha o shape do JSON; prefira alterar os componentes em vez de alterar os arquivos JSON sem coordenação.

Dependências e integrações

- Projeto usa muitas primitives da Radix UI (ex.: `@radix-ui/*`) e libs de UI como `lucide-react`, `recharts`, `embla-carousel-react`.
- Ao adicionar componentes que dependem de novas bibliotecas, atualize `package.json` e adicione instruções de build se necessário.

Concisões de estilo e convenções deste repo

- Reutilize componentes em `src/components/ui/` antes de criar novos padrões.
- Arquivos CSS globais: `styles/globals.css` e `src/index.css` são pontos centrais para variáveis globais e reset.
- Prefira componentes funcionais e hooks (o código existente usa React 18 APIs como `createRoot`).

Onde procurar exemplos

- Layouts e composição: `src/App.tsx`, `src/main.tsx`.
- Seções da página: `src/components/Hero.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`, `About.tsx`.
- UI primitives: `src/components/ui/` (ex.: `button.tsx`, `card.tsx`, `input.tsx`).
- Dados estáticos: `src/data/*.json`.

Regras práticas para PRs feitas por agentes

- Mantenha imports relativos consistentes com os arquivos existentes (ex.: `./components/...` ou `../ui/button`).
- Ao alterar estrutura de dados (`src/data/*.json`), atualize todos os componentes consumidores.
- Prefira estender componentes em `src/components/ui/` em vez de duplicar código.

Limitações e o que NÃO inventar

- Não assuma que existe Tailwind config mesmo que algumas dependências (`tailwind-merge`) apareçam — verifique `styles/` e `index.css` antes de introduzir Tailwind-specific changes.
- Evite criar endpoints de servidor — este repo é uma SPA estática (sem backend detectado). Se precisar de API, indique claramente que é um stub/mock.

Checklist rápido antes de enviar mudanças

- Rodar `npm run dev` localmente e abrir a app para validar alterações visuais.
- Verificar se novos pacotes foram adicionados em `package.json` e instruir sobre `npm install`.
- Atualizar este arquivo se novas convenções forem introduzidas.

Seções para revisar com o mantenedor

- Preferência de package manager (npm/pnpm/yarn).
- Se há pipelines CI/CD ou scripts adicionais (não detectados no repositório atual).

Feedback

- Se algo aqui estiver incompleto ou se você quiser que eu inclua exemplos de código (snippets) de arquivos específicos, diga quais arquivos ou áreas priorizar.
