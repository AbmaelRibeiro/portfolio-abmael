# 📊 Estrutura de Dados do Portfólio

Este documento descreve a estrutura de dados JSON utilizada no portfólio para facilitar manutenção e escalabilidade.

---

## 📁 Arquivos de Dados

### 1. `/data/projects.json`

**Propósito:** Centralizar informações de todos os projetos do portfólio

**Estrutura:**

```json
{
  "projects": [
    {
      "id": number,
      "title": string,
      "slug": string,
      "category": "mobile" | "web" | "ia",
      "status": "production" | "development" | "concept",
      "description": string,
      "longDescription": string,
      "image": string (URL),
      "technologies": string[],
      "features": string[],
      "github": string | null,
      "demo": string | null,
      "year": number
    }
  ]
}
```

**Status dos Projetos:**

- `production`: Projeto em produção/finalizado
- `development`: Em desenvolvimento ativo
- `concept`: Conceitual/Portfolio

---

### 2. `/data/skills.json`

**Propósito:** Organizar habilidades técnicas por categoria

**Estrutura:**

```json
{
  "categories": [
    {
      "id": string,
      "title": string,
      "icon": string (nome do ícone Lucide),
      "color": string (classes Tailwind),
      "skills": [
        {
          "name": string,
          "level": number (0-100),
          "years": number
        }
      ]
    }
  ],
  "tools": [
    {
      "name": string,
      "icon": string (emoji),
      "category": string
    }
  ]
}
```

**Categorias Disponíveis:**

- Backend
- Mobile
- Frontend
- Database
- DevOps & Infra
- Outros

---

### 3. `/data/timeline.json`

**Propósito:** Gerenciar linha do tempo de formação e projetos

**Estrutura:**

```json
{
  "timeline": [
    {
      "id": number,
      "year": string,
      "title": string,
      "institution": string,
      "icon": string (nome do ícone Lucide),
      "type": "education" | "project",
      "description": string,
      "skills": string[]
    }
  ],
  "certifications": [
    {
      "name": string,
      "institution": string,
      "year": string
    }
  ],
  "experience": {
    "years": number,
    "projects": number,
    "technologies": number,
    "clients": number
  }
}
```

---

## 🔄 Como Utilizar os Dados

### Importação em React:

```typescript
import projectsData from '../data/projects.json';
import skillsData from '../data/skills.json';
import timelineData from '../data/timeline.json';

// Usar nos componentes
const { projects } = projectsData;
const { categories, tools } = skillsData;
const { timeline, certifications } = timelineData;
```

### Benefícios:

✅ **Manutenção facilitada** - Atualizar conteúdo sem mexer no código  
✅ **Escalabilidade** - Adicionar novos projetos/skills facilmente  
✅ **Consistência** - Estrutura padronizada em todo o portfólio  
✅ **SEO** - Dados estruturados para melhor indexação  
✅ **Versionamento** - Histórico de mudanças no Git

---

## 🎨 Integração com Componentes

### Projects.tsx

```typescript
// Substituir array hardcoded por:
import projectsData from '../data/projects.json';
const projects = projectsData.projects;
```

### Skills.tsx

```typescript
import skillsData from '../data/skills.json';
const { categories, tools } = skillsData;
```

### About.tsx

```typescript
import timelineData from '../data/timeline.json';
const { timeline } = timelineData;
```

---

## 📱 Preparação para App Android

Esta estrutura JSON pode ser facilmente convertida para:

- **Room Database** (SQLite local)
- **Retrofit Models** (API REST)
- **Kotlin Data Classes**
- **ViewModels e StateFlow**

### Exemplo de conversão:

```kotlin
// Kotlin Data Class
data class Project(
    val id: Int,
    val title: String,
    val slug: String,
    val category: String,
    val status: ProjectStatus,
    val description: String,
    val technologies: List<String>,
    val image: String
)

enum class ProjectStatus {
    PRODUCTION, DEVELOPMENT, CONCEPT
}
```

---

## 🔐 Boas Práticas

1. **Validação:** Sempre validar dados antes de usar
2. **Fallbacks:** Ter valores padrão para campos opcionais
3. **Tipagem:** Usar TypeScript interfaces para type safety
4. **Cache:** Considerar cache dos dados em produção
5. **CDN:** Hospedar imagens em CDN para performance

---

## 📝 Atualização de Conteúdo

Para adicionar um novo projeto:

1. Abrir `/data/projects.json`
2. Adicionar novo objeto no array `projects`
3. Seguir a estrutura definida
4. Salvar e commitar

**Sem necessidade de alterar código React!**

---

## 🚀 Próximos Passos

- [ ] Criar API REST para servir os dados
- [ ] Implementar CMS headless (Strapi/Contentful)
- [ ] Adicionar sistema de busca nos projetos
- [ ] Criar filtros avançados por tecnologia
- [ ] Implementar paginação dinâmica
- [ ] Adicionar analytics de visualizações

---

**Autor:** Abmael Ribeiro  
**Versão:** 1.0.0  
**Última atualização:** 2025
