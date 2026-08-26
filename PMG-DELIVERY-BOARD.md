# PMG Comercial IA — Delivery Board

Status baseline: `0.9.0-beta / homologation`

This board converts `PMG-ROADMAP.md` into the active production sequence.

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

## LATER — 0.13.0

### EPIC F — Manager action layer

Definition of done:

- seller diagnosis;
- stalled clients/pipeline;
- manager-created priority;
- target vs pace;
- daily/weekly digest;
- channel/campaign aggregates without private message content.

## Production policy

An epic does not move to `done` solely because the UI works. It must pass business rules, security/RLS, mobile UX, auditability and regression checks.
