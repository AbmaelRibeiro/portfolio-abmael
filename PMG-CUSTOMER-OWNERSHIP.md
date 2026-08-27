# PMG Comercial IA — Regra de clientes e posse comercial

Status: homologação / consolidação do núcleo

## Objetivo

Permitir que cada vendedor trabalhe sua carteira oficial PMG sem duplicar clientes nem impedir uma nova abordagem quando a carteira ficar inativa.

## Cadastro canônico do cliente

O cliente existe uma única vez na organização. A posse comercial muda; o cadastro do cliente não é duplicado.

Identificadores e campos de busca planejados:

- ID/código oficial PMG do cliente;
- CPF/CNPJ normalizado;
- razão social;
- nome fantasia, quando houver;
- nome completo do cliente/representante;
- cidade/UF quando disponível;
- data da última compra oficial;
- vendedor atual;
- validade da posse comercial.

O código/ID oficial PMG é o identificador preferencial. CPF/CNPJ normalizado funciona como chave adicional de deduplicação. Nomes nunca são usados sozinhos como chave de unicidade.

## Regra dos 30 dias

- Uma compra registrada vincula o cliente ao vendedor responsável por **30 dias a partir da data da última compra**.
- Enquanto `última_compra + 30 dias` estiver no futuro, outro vendedor não pode assumir o cliente.
- Depois do prazo, o cliente fica elegível para ser puxado por outro vendedor.
- Uma nova compra renova a posse por mais 30 dias para o vendedor responsável pela venda.
- Cliente sem compra registrada na base oficial/importada fica elegível para ser puxado, salvo futura regra administrativa específica.
- Admin/supervisor poderá ter uma ação controlada de transferência excepcional, sempre auditada.

## Histórico de posse

A mudança de vendedor nunca apaga o histórico. Devemos registrar:

- cliente;
- vendedor anterior;
- vendedor novo;
- motivo: compra, claim manual, importação oficial, expiração, transferência administrativa;
- data/hora;
- usuário/processo responsável;
- data da última compra usada para a decisão;
- início e fim da janela de proteção.

A implementação deve preservar o `seller_id` atual como referência operacional enquanto uma tabela de histórico registra toda mudança.

## Claim manual

Fluxo planejado:

1. vendedor pesquisa o cliente;
2. backend informa `Meu cliente`, `Protegido por outro vendedor` ou `Disponível`;
3. se disponível, vendedor confirma `Puxar para minha carteira`;
4. função server-side revalida a regra dos 30 dias no mesmo instante;
5. posse é alterada atomicamente e auditada;
6. CRM/prioridades passam a usar o novo vendedor.

O frontend nunca decide sozinho se o cliente está liberado.

## Importação da base oficial PMG

Dois modos:

### Manual

Cadastro/atualização de um cliente por vez a partir dos dados oficiais.

### Excel

Vendedor pode subir sua carteira extraída da base oficial PMG. Admin pode subir base ampliada/completa conforme permissão.

Antes de gravar, o sistema deve apresentar uma prévia com:

- novos clientes;
- clientes atualizados;
- já pertencentes ao vendedor;
- protegidos por outro vendedor;
- disponíveis para claim;
- duplicidades por ID/CPF/CNPJ;
- linhas inválidas.

Importação não pode roubar silenciosamente um cliente protegido. Conflitos ficam no relatório da importação.

Cada importação terá log com arquivo, vendedor, data, quantidade e resultado por linha.

## Última compra e recompra

A `última compra` deve considerar a fonte oficial PMG importada e, quando aplicável, vendas finalizadas dentro do PMG Comercial IA. A data mais recente conhecida vence.

A lista de recompra não deve depender somente dos pedidos criados dentro do novo sistema. Isso permite que a gestão já seja útil no primeiro dia após importar a carteira histórica.

## Busca em vez de dropdown

Seletores extensos de vendedor/cliente serão substituídos por busca/autocomplete.

### Cliente

Pesquisa por:

- ID/código PMG;
- CPF/CNPJ com ou sem pontuação;
- razão social;
- nome fantasia;
- nome completo/representante.

Resultado deve mostrar informação suficiente para desambiguar sem expor carteira de outro vendedor além do necessário para indicar que está protegida.

### Vendedor

Pesquisa por:

- código/ID do vendedor;
- nome completo;
- CPF, quando o cadastro comercial completo estiver disponível;
- e-mail de acesso, apenas para gestão autorizada.

## Segurança

- claim/transferência é função server-side, nunca update direto pelo navegador;
- RLS impede vendedor de alterar posse de cliente protegido;
- importação valida organização e vendedor autenticado;
- histórico de posse é append-only para papéis comuns;
- vendedor não vê dados privados de WhatsApp de outro vendedor;
- campanhas futuras usam a posse atual e as regras de consentimento, não servem para contornar a trava de carteira.

## Impactos no ecossistema

A regra alimenta diretamente:

- CRM;
- prioridades;
- PMGuinho;
- recompra;
- carteira parada;
- busca de clientes na criação de pedido;
- jornada automática;
- campanhas;
- metas e atribuição de resultado ao vendedor.

Ela faz parte do núcleo comercial e deve ser concluída antes da automação em massa.