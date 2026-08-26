# PMG Comercial IA — Product Roadmap

Current baseline: **0.9.0-beta / homologation**

This roadmap is the official production backlog. New work must fit the commercial ecosystem and the canonical routes defined in `pmg-routes.json`. Do not create new user-facing filenames to represent product versions.

## Product flow

Customer/catalog context → AI-assisted product search → order draft → seller review/edit → customer validation → revision/approval → PMG launch → finalization → commission → CRM/priorities → follow-up/repurchase/campaign.

Every new feature must strengthen one or more stages of this flow.

## 0.9.1 — Order editing and AI search quality

### Easy order editing

- Draft orders: inline product/quantity/discount editing, add/remove/swap product.
- Sent orders: editing must invalidate the active validation link and create a new validation version.
- Revision requested: reopen the same order for correction with the customer note visible.
- Approved orders: any commercial change requires an explicit `Reopen order` action, invalidating the approval and returning the order to draft.
- Finalized orders: immutable; corrections require a controlled adjustment/cancellation workflow, never silent historical edits.
- Every save is server-validated for customer, table, product code, effective price, discount ceiling and commission.
- Audit history must record who changed what and when.

### AI product search validation

- Database retrieval happens before generative interpretation/ranking.
- Product code, price table, price, sale unit, discount ceiling and offer status always come from database truth.
- Parse quantity/unit intent (`PCT`, `CX`, `KG`, `UN`), brand, product family, packaging and price intent.
- Support synonyms and commercial language without using an LLM as the catalog source of truth.
- Ambiguous requests return alternatives and require seller confirmation.
- Show selection reason, confidence and relevant constraints.
- Build a regression/golden-query suite using real seller phrases, including known edge cases such as `1 pacote de batata, a mais barata`.
- Track false-positive/false-negative product matches before enabling more autonomous suggestions.

## 0.10.0 — Customer journey and automatic follow-up

Build an event-driven journey engine using order/CRM events instead of isolated timers.

Examples of events:

- order sent but not viewed;
- viewed but not approved;
- customer requested revision;
- approved but not launched;
- finalized sale;
- likely replenishment window;
- eligible official offer;
- dormant customer.

Requirements:

- journeys are configurable by seller/team;
- every automatic action has a reason and audit trail;
- seller can pause a customer or journey;
- frequency caps and quiet hours;
- suppression/opt-out list;
- no automatic commercial fact invention;
- human-review mode remains available per journey;
- transactional/order messages and marketing campaigns are separate message classes.

## 0.11.0 — Multi-number WhatsApp channel layer

A seller may own **many WhatsApp numbers** (5+ is a supported business requirement).

Architecture:

- one seller → many channel accounts;
- each account has provider type, display name, phone, status, business purpose, default/backup flag and health state;
- routing is by business purpose/customer ownership, not by attempts to bypass platform enforcement;
- seller chooses a default number and may select another authorized number when composing a message;
- conversation history remains isolated by seller and channel account;
- management receives aggregate channel health only, never seller message content;
- server-side session/provider secrets only; nothing sensitive in browser storage.

Suggested business purposes:

- personal seller line;
- order/transactional line;
- relationship/follow-up line;
- campaign line;
- backup line.

## 0.11.x — QR Code WhatsApp connector

Support a QR-based connector as a separate adapter from the official Meta API.

Important product rule: QR-based WhatsApp Web connectivity is **not equivalent to the official WhatsApp Business Platform** and may have different reliability, policy and account-risk characteristics. It must be clearly identified in the UI and architecture.

Requirements:

- `Connect number` → generate QR → seller scans → session becomes active;
- session health: connected, reconnecting, disconnected, logged out, QR expired;
- reconnect flow without recreating seller/customer data;
- multiple QR sessions per seller;
- encrypted/server-side session material;
- manual disconnect/revoke;
- device/session audit;
- provider abstraction so official API and QR connector can coexist without changing CRM/order logic;
- automatic high-volume campaigns may be restricted by connector/provider risk policy.

## 0.12.0 — Organized bulk messaging and campaigns

Bulk sending must optimize **consent, relevance and deliverability**, not attempt to evade anti-spam or platform enforcement.

Campaign engine:

- audience segmentation from CRM/order history;
- explicit opt-in/eligibility criteria;
- suppression and opt-out handling;
- duplicate removal across lists;
- frequency caps per customer;
- quiet hours and schedules;
- queue-based sending with provider-aware throughput;
- pause campaign when provider/session health degrades;
- delivery/failure/reply metrics;
- campaign attribution to orders/revenue;
- preview/sample audience before launch;
- approval step before a large campaign;
- audit of creator, audience, message version and sending channel.

Do not implement tactics whose purpose is to conceal automated volume, rotate numbers to evade enforcement, spoof human behavior or bypass provider limits.

## 0.13.0 — Management action layer

- seller diagnosis page;
- stalled pipeline/customer list;
- manager-created seller priority;
- target vs pace comparison;
- daily/weekly management digest;
- channel health aggregates;
- campaign performance and revenue attribution;
- no access to seller private message bodies/attachments.

## 1.0.0 — Production gate

Required before production:

- dedicated private PMG repository;
- stable production hosting/domain;
- separate homologation/production environments;
- protected release branch and review/checks;
- canonical routes only in user-facing navigation;
- fresh Supabase security/RLS/grants review;
- leaked-password protection enabled;
- no browser-exposed secrets;
- end-to-end order regression suite;
- AI product-search golden-query suite;
- WhatsApp connector threat/risk review;
- consent, opt-out, frequency-cap and campaign audit controls tested;
- backup/recovery procedure for provider sessions and configuration.

## Architecture rules

1. Order/CRM/catalog logic is provider-independent.
2. Messaging providers are adapters behind a common channel layer.
3. Official Meta API and QR connector may coexist per seller.
4. Database remains the source of truth for commercial facts.
5. AI suggests and interprets; controlled backend functions validate and write critical state.
6. Seller WhatsApp content remains seller-private.
7. Automation must be explainable, pausable and auditable.
8. Bulk messaging must be consent-based and provider-compliant; system design must not depend on evading enforcement.
