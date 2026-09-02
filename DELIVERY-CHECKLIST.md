# PMG Comercial IA — Checklist de Entrega 0.9.0-rc1

Data-alvo: 02/09/2026
Branch congelada: `pmg-release-0.9.0-rc1`
Entrada canônica: `app.html`

## 1. Fluxo comercial — demonstrar hoje

- [x] Login / roteamento por perfil
- [x] Portal do vendedor
- [x] Catálogo e tabelas de preço
- [x] Código PMG no produto
- [x] Criação de pedido
- [x] Análise assistida por regras/IA comercial
- [x] Validação pública do cliente
- [x] Solicitação de correção
- [x] Aprovação do cliente
- [x] Lançamento PMG
- [x] Finalização
- [x] Comissão confirmada
- [x] CRM sincronizado
- [x] Prioridades automáticas
- [x] PMGuinho por regras

## 2. Gestão — demonstrar hoje

- [x] Gestão consolidada
- [x] Filtro equipe inteira / vendedor
- [x] Ranking e performance
- [x] Conversão
- [x] Tempo de aprovação
- [x] Pipeline
- [x] Meta / ritmo
- [x] Carteira parada
- [x] Diagnóstico individual
- [x] Relatório gerencial
- [x] Copiar / imprimir relatório
- [x] Privacidade do conteúdo de WhatsApp preservada

## 3. Administração — demonstrar com ressalva

- [x] Tela de Acessos
- [x] Atualizar cadastro abre o vendedor correto
- [x] Tela de Vendedores
- [x] Tela de Clientes / Carteira
- [x] Pesquisa de clientes atual
- [x] Prévia de importação Excel/CSV sem gravação
- [ ] Convite de vendedor — backend ainda precisa corrigir `access_grants` / `expires_at`
- [ ] Salvar cadastro completo de vendedor — backend/RLS pendente
- [ ] Criar prioridade manual pelo gestor — RPC/RLS pendente
- [ ] Regra de posse de cliente por 30 dias — backend pendente
- [ ] Claim manual de cliente — backend pendente
- [ ] Persistência da importação Excel — backend pendente

## 4. IA e mensageria — não vender como concluído hoje

- [ ] IA generativa real em produção
- [ ] Meta WhatsApp real
- [ ] Multi-número por vendedor
- [ ] QR Code WhatsApp
- [ ] Jornadas automáticas
- [ ] Disparo organizado em massa

Esses itens permanecem no roadmap e não bloqueiam a demonstração do núcleo comercial.

## 5. Bloqueadores para produção definitiva

- [ ] Hospedagem estável / domínio próprio
- [ ] Repositório dedicado privado
- [ ] Branch protegida
- [ ] Separação formal homologação x produção
- [ ] Security Advisor final
- [ ] Proteção contra senhas vazadas
- [ ] RLS/grants finais após mensageria

## 6. Teste mínimo antes da apresentação

Executar um único ciclo completo:

`Rascunho → Enviar validação → Aprovar cliente → Aprovado → Lançar → Finalizar`

Confirmar ao final:

- pedido `finalized`;
- CRM `won`;
- comissão confirmada;
- gestão contabilizando a venda;
- nenhuma mensagem privada de vendedor visível ao admin.

## 7. Regra da entrega

Esta entrega é uma **release candidate de homologação**. O núcleo comercial está funcional e consolidado; módulos administrativos de escrita, posse de clientes, mensageria real e infraestrutura final permanecem explicitamente em evolução.
