# PMG Comercial IA — Delivery Board

Status baseline: `0.9.0-beta / homologation`

This board converts `PMG-ROADMAP.md` into the active production sequence.

## CONSOLIDATION IN PROGRESS — current 0.9.0-beta

### EPIC F — Manager action layer

Pulled forward as consolidation work without creating a new UI version.

Current status:

- seller diagnosis: **implemented in canonical route `diagnostico-vendedor.html`**;
- stalled clients/pipeline: **implemented in diagnosis/report views**;
- target vs pace: **implemented in diagnosis view**;
- daily/weekly management report: **implemented in canonical route `relatorio-gerencial.html`** and must be linked as an integrated management module;
- manager-created seller priority: **UI implemented; database/RLS permission still requires explicit validation before it is considered done**;
- access management: frontend now has a safe seller-list fallback when the detailed `access_grants` RPC fails; backend permission still needs correction;
- channel/campaign aggregates: pending later messaging phases;
- management must never read private seller message bodies/attachments.

### EPIC G — Seller administration + customer ownership

This is a commercial-core consolidation gate and must be resolved before large-scale journey/campaign automation.

#### Seller administration

- complete seller commercial registration before login invitation;
- official seller code/ID;
- full name/display name;
- CPF normalized when supplied by PMG;
- business/contact e-mail and phone;
- active/inactive status;
- login identity remains separate from commercial seller identity;
- future WhatsApp numbers remain separate channel accounts, not fields that limit the seller to one number.

#### Customer ownership

Source of truth: `PMG-CUSTOMER-OWNERSHIP.md`.

- one canonical customer record, never one duplicate per seller;
- official PMG customer code/ID is preferred identity;
- normalized CPF/CNPJ is secondary deduplication identity;
- ownership protected for 30 days from latest known purchase;
- after expiry another seller may claim;
- manual claim and official Excel import;
- ownership history/audit;
- import cannot silently steal protected customers;
- official imported last-purchase date feeds replenishment/dormancy;
- boundary/concurrency regression tests required.

#### Search selectors

Large dropdowns must progressively become server-backed search/autocomplete.

Customer search: PMG ID, CPF/CNPJ, legal name, trade name, representative/full name.
Seller search: seller code/ID, full name, CPF when available, authorized access e-mail.

#### Security gate

- claim/transfer via controlled server function;
- manager-created priority via controlled server function;
- seller creation/update via controlled admin function or tightly reviewed RLS/grants;
- fresh RLS/grants review before these writes are considered production-ready.

This consolidation does not replace the 0.9.1 commercial-core work below.

## NOW — 0.9.1

### EPIC A — Easy order editing

Definition of done:

- inline edit quantity/discount/product in draft;
- swap/add/remove item without rebuilding the order;
- sent order automatically invalidates old validation before any commercial edit;
- revision-requested order reopens the same order;
- approved order requires explicit reopen and loses previous approval;
- finalized order remains immutable;
- server revalidates catalog code, table, price, offer, discount and commission;
- audit trail records changes.

### EPIC B — AI product-search quality gate

Definition of done:

- retrieval from real catalog before AI ranking;
- sale-unit/quantity intent respected;
- synonyms/brands/families/packaging handled;
- ambiguous requests show alternatives;
- reason/confidence visible to seller;
- golden-query regression suite with real seller language;
- no release if known regression cases fail.

## NEXT — 0.10.0

### EPIC C — Journey automation

Definition of done:

- event-driven triggers from order/CRM lifecycle;
- transactional vs marketing message class;
- seller/team journey configuration;
- pause, quiet-hours, frequency caps, suppression and opt-out;
- draft/review mode and automatic mode configurable per journey;
- complete audit trail.

## AFTER — 0.11.x

### EPIC D — Multi-number + QR WhatsApp channel layer

Definition of done:

- 5+ channel accounts per seller;
- official API and QR connector behind one provider abstraction;
- QR connect/reconnect/disconnect lifecycle;
- channel purpose/default selection;
- health and session status;
- seller-private conversation scope maintained;
- session material server-side only;
- provider risk clearly exposed in UI.

## AFTER — 0.12.0

### EPIC E — Campaigns and organized bulk sending

Definition of done:

- CRM segmentation;
- consent/eligibility controls;
- opt-out/suppression;
- deduplication;
- frequency caps/quiet hours;
- scheduled queue;
- provider-aware throughput;
- auto-pause on channel degradation;
- approval before large campaigns;
- delivery/failure/reply metrics;
- revenue attribution;
- no enforcement-evasion behavior.

## Production policy

An epic does not move to `done` solely because the UI works. It must pass business rules, security/RLS, mobile UX, auditability and regression checks.
