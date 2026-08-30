# PMG Comercial IA — Testes da posse comercial de clientes

Status: homologação / bloqueado até a migration/RPC de posse comercial ser aplicada.

## Regra oficial validada

A posse é protegida por 30 dias completos a partir da última compra conhecida. Como a regra de negócio diz que outro vendedor pode puxar o cliente **se passar** o prazo, o comportamento esperado é:

- 29 dias desde a última compra: protegido;
- exatamente 30 dias: ainda protegido até completar o período;
- após 30 dias completos (ex.: 30 dias + 1 segundo / dia 31 na visão comercial): disponível para claim;
- nova compra: reinicia a janela de 30 dias para o vendedor responsável pela venda.

A decisão final sempre é do backend no instante do claim; o navegador apenas exibe o estado retornado.

## Matriz mínima de regressão

| Caso | Estado inicial | Ação | Resultado esperado |
|---|---|---|---|
| C01 | compra há 29 dias, vendedor A | vendedor B tenta claim | negado; posse continua A |
| C02 | compra há exatamente 30 dias ainda dentro do timestamp de proteção | vendedor B tenta claim | negado |
| C03 | proteção expirada | vendedor B tenta claim | permitido; posse passa para B; histórico criado |
| C04 | cliente sem compra conhecida e sem posse protegida | vendedor B tenta claim | permitido |
| C05 | cliente protegido por A | admin tenta transferência excepcional | somente por função administrativa auditada |
| C06 | B conquistou cliente após expiração | B registra nova compra | proteção renovada por 30 dias para B |
| C07 | dois vendedores tentam claim simultaneamente | B e C disparam claim | apenas um ganha; o outro recebe conflito/indisponível |
| C08 | Excel do vendedor B contém cliente protegido por A | importar | linha fica em conflito; não transfere silenciosamente |
| C09 | Excel do vendedor B contém cliente disponível | importar/claim | pode vincular B após validação server-side |
| C10 | Excel repete mesmo ID PMG/CNPJ | importar | deduplicar/identificar conflito; não criar dois clientes |
| C11 | nome igual, IDs diferentes | importar | não deduplicar somente por nome |
| C12 | ID PMG igual, nome alterado | importar | atualizar cadastro canônico, preservar histórico |
| C13 | venda finalizada no PMG Comercial IA mais recente que a base importada | recalcular última compra | usar a data mais recente |
| C14 | base oficial tem compra mais recente que o sistema | recalcular última compra | usar a data oficial importada mais recente |
| C15 | vendedor sem permissão tenta alterar seller_id diretamente | update pelo navegador | bloqueado por RLS/grants |

## Teste de concorrência obrigatório

O claim deve ser atômico. O backend deve bloquear a linha do cliente (`FOR UPDATE` ou mecanismo equivalente) antes de reavaliar a expiração. Nunca confiar no estado mostrado anteriormente no frontend.

Passos:

1. Preparar cliente disponível.
2. Abrir duas sessões autenticadas de vendedores diferentes.
3. Disparar o claim praticamente no mesmo instante.
4. Confirmar que só uma transação concluiu.
5. Confirmar uma única posse atual.
6. Confirmar apenas um evento vencedor no histórico de posse.
7. Confirmar que a segunda sessão recebeu estado de conflito/cliente já assumido.

## Teste de importação

A importação deve ter duas etapas:

1. **prévia/validação** — nenhuma alteração de posse;
2. **confirmação** — backend revalida cada linha antes de gravar.

A prévia deve classificar cada linha em pelo menos:

- novo cliente;
- atualização cadastral;
- já pertence ao vendedor;
- disponível para claim;
- protegido por outro vendedor;
- duplicado/ambíguo;
- inválido.

O resultado final da importação deve registrar por linha o que ocorreu. Um arquivo antigo não pode sobrescrever uma compra/posse mais recente existente no banco.

## Busca / autocomplete

### Cliente

Validar localização por:

- ID/código oficial PMG;
- CPF/CNPJ com e sem pontuação;
- razão social;
- nome fantasia;
- nome do representante/pessoa;
- combinações parciais sem diferenciar maiúsculas/minúsculas e acentos.

Nome não pode ser usado isoladamente como chave de deduplicação.

### Vendedor

Validar pesquisa por:

- código/ID PMG do vendedor;
- nome completo;
- CPF, quando cadastrado;
- e-mail autorizado para gestão.

## Critério para marcar como concluído

A regra de posse só sai de homologação quando:

1. todos os casos C01–C15 passam;
2. concorrência passa;
3. RLS impede escrita direta indevida;
4. admin/supervisor têm somente as ações administrativas previstas;
5. histórico de posse é preservado;
6. Security Advisor não apresenta regressão criada pela migration;
7. nenhuma mudança afeta a privacidade do WhatsApp dos vendedores.
