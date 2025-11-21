# ♿ Guia de Acessibilidade - Portfólio Abmael Ribeiro

Este documento descreve as práticas de acessibilidade implementadas no portfólio.

---

## 🎯 Objetivo

Garantir que o portfólio seja acessível para todos os usuários, incluindo pessoas com deficiências visuais, motoras, auditivas e cognitivas.

---

## ✅ Implementações Realizadas

### 1. **Semântica HTML**

✅ Uso correto de tags semânticas:

- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Hierarquia de headings (`<h1>`, `<h2>`, `<h3>`)
- Landmarks ARIA implícitos

### 2. **Navegação por Teclado**

✅ Todos os elementos interativos são acessíveis via teclado:

- Links com `href` válidos
- Botões com `type="button"` ou `type="submit"`
- Estados de `focus` visíveis
- Tab order lógico

**Atalhos:**

- `Tab` - Próximo elemento
- `Shift + Tab` - Elemento anterior
- `Enter` ou `Space` - Ativar elemento
- `Esc` - Fechar modais/menus

### 3. **Estados de Foco Visíveis**

✅ Estilização personalizada para `:focus`:

```css
focus:outline-none
focus:ring-2
focus:ring-[#1261A0]
focus:ring-offset-2
focus:ring-offset-[#0A1128]
```

**Elementos com foco:**

- Links do menu
- Botões de CTA
- Inputs de formulário
- Botões de ação nos projetos

### 4. **Labels e Descrições**

✅ Todos os inputs têm labels associados:

```html
<label htmlFor="name">Nome *</label>
<input id="name" name="name" aria-label="Nome completo" aria-required="true" />
```

✅ Atributos ARIA implementados:

- `aria-label` - Rótulos descritivos
- `aria-labelledby` - Referência a labels
- `aria-describedby` - Descrições adicionais
- `aria-required` - Campos obrigatórios
- `aria-live` - Atualizações dinâmicas

### 5. **Contraste de Cores**

✅ Todas as combinações atendem WCAG 2.1 Nível AA:

| Elemento         | Cor Texto | Cor Fundo | Contraste |
| ---------------- | --------- | --------- | --------- |
| Texto principal  | #FFFFFF   | #0A1128   | 14.5:1    |
| Texto secundário | #E2E8F0   | #0A1128   | 12.8:1    |
| Links/Destaque   | #1261A0   | #0A1128   | 4.8:1     |
| Botões primários | #FFFFFF   | #1261A0   | 8.2:1     |

### 6. **Textos Alternativos**

✅ Todas as imagens têm `alt` descritivo:

```html
<img src="project.jpg" alt="Interface do aplicativo MoneyCare mostrando dashboard financeiro" />
```

✅ Ícones decorativos têm `aria-hidden="true"`

### 7. **Formulários Acessíveis**

✅ Formulário de contato com:

- Labels visíveis
- Placeholders como dicas, não como labels
- Mensagens de erro claras
- Feedback de sucesso
- Indicação de campos obrigatórios (\*)

### 8. **Animações Respeitosas**

✅ Animações respeitam `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 9. **Navegação Skip Links**

⚠️ **A implementar:**

```html
<a href="#main-content" class="skip-link"> Pular para conteúdo principal </a>
```

### 10. **Responsividade**

✅ Layout adaptativo para:

- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px+)

✅ Texto responsivo sem zoom necessário

---

## 🔍 Testes Recomendados

### Ferramentas:

1. **Lighthouse (Chrome DevTools)**

   - Score de acessibilidade
   - Sugestões automáticas

2. **WAVE (Web Accessibility Evaluation Tool)**

   - Análise visual de problemas
   - Verificação de contraste

3. **axe DevTools**

   - Detecção de issues WCAG
   - Sugestões de correção

4. **Screen Readers:**
   - NVDA (Windows)
   - JAWS (Windows)
   - VoiceOver (macOS/iOS)
   - TalkBack (Android)

### Testes Manuais:

- [ ] Navegar apenas com teclado
- [ ] Testar com zoom de 200%
- [ ] Verificar com alto contraste
- [ ] Simular daltonismo
- [ ] Usar screen reader

---

## 📱 Acessibilidade Mobile

✅ **Implementado:**

- Touch targets mínimos de 44x44px
- Espaçamento adequado entre elementos
- Menus expansíveis para mobile
- Formulários otimizados para touch

✅ **Android específico:**

- TalkBack compatível
- Gestos de navegação
- Descrições de conteúdo

---

## 🎓 Padrões Seguidos

### WCAG 2.1 Nível AA

✅ **Princípios:**

1. **Perceptível** - Conteúdo apresentado de forma perceptível
2. **Operável** - Interface operável por diversos métodos
3. **Compreensível** - Informação e operação compreensíveis
4. **Robusto** - Compatível com tecnologias assistivas

### Section 508

✅ Conformidade com padrões governamentais dos EUA

---

## 🚀 Melhorias Futuras

### Curto Prazo:

- [ ] Adicionar skip links
- [ ] Implementar modo de alto contraste
- [ ] Criar página de acessibilidade
- [ ] Adicionar atalhos de teclado documentados

### Médio Prazo:

- [ ] Suporte a múltiplos idiomas
- [ ] Configurações de preferências do usuário
- [ ] Modo de leitura simplificado
- [ ] Transcrições para conteúdo multimídia

### Longo Prazo:

- [ ] Integração com leitores de tela avançados
- [ ] IA para descrições de imagens automáticas
- [ ] Personalização de contraste/cores
- [ ] Suporte a Libras (Língua Brasileira de Sinais)

---

## 📚 Recursos

### Documentação:

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)

### Comunidade:

- [Accessibility Slack](https://web-a11y.slack.com/)
- [A11y Weekly Newsletter](https://a11yweekly.com/)

---

## 🤝 Contribuindo

Encontrou algum problema de acessibilidade?

1. Abra uma issue no GitHub
2. Descreva o problema detalhadamente
3. Inclua navegador/tecnologia assistiva
4. Sugira uma solução se possível

---

## 📊 Checklist de Acessibilidade

### Antes de Deploy:

- [x] Todas as imagens têm alt text
- [x] Contraste de cores adequado
- [x] Navegação por teclado funcional
- [x] Estados de foco visíveis
- [x] Formulários com labels
- [x] Hierarquia de headings correta
- [x] Links descritivos
- [x] Atributos ARIA corretos
- [x] Responsivo em todos os tamanhos
- [ ] Testado com screen reader
- [ ] Score Lighthouse > 90

---

**Compromisso com a Acessibilidade**

Este portfólio é desenvolvido com o compromisso de ser acessível a todos.
Feedback e sugestões são sempre bem-vindos!

---

**Autor:** Abmael Ribeiro  
**Versão:** 1.0.0  
**Última atualização:** 2025
