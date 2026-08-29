# PMG Comercial IA — Supabase migrations

A partir da consolidação 0.9.x, toda alteração de schema, grant, RLS, função privilegiada ou trigger deve ser versionada aqui **antes ou no mesmo momento em que for aplicada no Supabase**.

## Regra

1. Rodar o `precheck` correspondente no ambiente de homologação.
2. Confirmar nomes/tipos/constraints reais antes de escrever DDL destrutivo.
3. Aplicar migration somente no ambiente de homologação.
4. Executar testes de autorização com admin, supervisor e seller.
5. Rodar Security Advisor.
6. Só depois promover a mesma migration para produção.

Nunca usar `service_role` no navegador. Escritas críticas (vendedor, posse de cliente, prioridade, pedido, comissão, convite) devem passar por função/RPC controlada e auditável.
