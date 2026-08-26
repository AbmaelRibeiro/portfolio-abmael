# PMG Comercial IA — Arquitetura oficial

Release de referência: **0.9.0-beta**

## 1. Ecossistema

### Entrada e identidade
- `app.html`: gateway único de autenticação.
- Role `seller`: `portal-vendedor.html`.
- Roles `admin` e `supervisor`: `gestao.html`.
- Convites: `ativar-vendedor.html`.

### Núcleo comercial
1. Cliente pertence a um vendedor e possui tabela de preço.
2. Produto é identificado pelo código PMG estável.
3. Preço efetivo parte da tabela do cliente e pode receber campanha oficial ativa.
4. Desconto do vendedor somente dentro da regra permitida.
5. IA interpreta intenção e sugere itens; banco confirma código, unidade e preço.
6. Pedido nasce como rascunho.
7. Vendedor revisa.
8. Cliente valida por link público.
9. Correção, se solicitada, retorna ao mesmo pedido.
10. Aprovação libera modo de lançamento PMG.
11. Finalização confirma comissão e atualiza CRM.

### Inteligência comercial
- CRM/Kanban.
- Prioridades automáticas.
- Cotação sem resposta.
- Recompra provável.
- Oportunidade de oferta.
- Pedido aprovado pendente de lançamento.
- PMGuinho escolhe próxima melhor ação.
- IA generativa é opcional e nunca substitui o banco como fonte de verdade.

### WhatsApp
- Cada vendedor possui seu próprio escopo de WhatsApp.
- Conteúdo de mensagens e anexos é privado do vendedor.
- Admin/supervisor podem administrar configuração técnica e enxergar indicadores comerciais, mas não conteúdo das conversas.
- IA pode preparar rascunho; envio exige ação humana.

## 2. Limites de confiança

### Navegador
Pode conter:
- Supabase URL.
- Publishable key.
- Dados autorizados pelo RLS.

Nunca pode conter:
- service_role.
- OpenAI API Key.
- Meta App Secret.
- webhook secret/verify secret sensível.
- token permanente de WhatsApp do vendedor.
- qualquer segredo descriptografado do Vault.

### Banco/Backend
É responsável por:
- RLS.
- transições sensíveis de status.
- cálculo/validação de pedido.
- desconto permitido.
- comissão.
- tokens de validação.
- segredos via Vault.
- integrações que exigem credenciais privadas.

## 3. Regras de segurança do pedido

- Browser não deve finalizar pedido por `UPDATE orders` direto.
- Envio para validação gera token com expiração.
- Aprovação/revisão deve ser transacional.
- Pedido enviado ao cliente bloqueia alterações silenciosas.
- Correção cria nova versão de validação.
- Finalização somente após aprovação quando `customer_validation_required=true`.
- Comissão confirmada somente na finalização.

## 4. Separação de perfis

### Seller
Pode operar somente sua carteira, seus pedidos, seu CRM, suas prioridades, sua comissão, suas ofertas permitidas e seu WhatsApp.

### Supervisor
Pode enxergar operação comercial da organização e orientar vendedores, sem conteúdo privado de WhatsApp e sem acesso a segredos de integração.

### Admin
Pode administrar catálogo, regras, acessos, metas, ofertas oficiais, configurações técnicas não secretas e integrações via backend seguro. Segredos não são retornados ao browser.

## 5. Versionamento

- Nunca criar uma nova versão do produto apenas acrescentando `-v6`, `-v7` ao filename.
- Rotas canônicas permanecem estáveis.
- Releases usam SemVer.
- Implementações legadas versionadas podem existir durante a transição, mas devem ser tratadas como internas e congeladas.
- Toda nova feature deve atualizar a rota canônica ou a implementação referenciada por ela, sem gerar uma nova família paralela de páginas.

## 6. Ambientes

### Homologação atual
- branch `pmg-homologacao`.
- hospedagem temporária via GitHack/RawCDN.
- código atualmente dentro de repositório público de portfólio.

### Produção obrigatória
- repositório PMG dedicado e privado.
- branch de produção protegida.
- domínio/hospedagem estável.
- headers de segurança no host.
- ambiente separado de homologação quando possível.
- revisão de Security Advisor antes de cada release.

## 7. Critério para o ecossistema fazer sentido

Cada módulo deve alimentar o mesmo ciclo comercial, e não ser um sistema isolado:

`Cliente → IA/Produto → Cotação/Pedido → Validação → Lançamento → Finalização → Comissão → CRM → Prioridade/Recompra → novo contato`

Se uma nova funcionalidade não melhora uma etapa desse ciclo, não compartilha a mesma fonte de dados ou cria um fluxo paralelo, ela deve ser reconsiderada antes de entrar no produto.
