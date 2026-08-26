# PMG Comercial IA — Release Management

Current product release: **0.9.0-beta**
Environment: **homologation**
Canonical entry: `app.html`

## Versioning rule

From this release onward, product evolution uses semantic product versions (`0.9.0`, `0.10.0`, `1.0.0`) and Git commits. Do not create new user-facing files named `-v2`, `-v3`, `-v5`, etc.

Legacy versioned HTML files remain temporarily for compatibility only. Canonical routes are listed in `pmg-routes.json`.

## Consolidation rule

**Do not rebuild the system. The commercial core is valid and must be consolidated incrementally.**

New work must reuse the existing order/catalog/CRM/security model whenever possible. A new module is justified only when it strengthens a stage of the existing commercial flow instead of creating a parallel flow.

## Current classification

### 🟢 Structure that already makes sense

- catalog and price tables;
- PMG product code as stable commercial identifier;
- offers;
- order lifecycle;
- customer validation and revision;
- PMG launch/finalization;
- commission;
- CRM;
- seller priorities;
- rule-based PMGuinho;
- profiles/roles;
- seller-private WhatsApp scope.

These areas are consolidation targets, not rewrite targets.

### 🟡 Still in homologation

- generative AI provider and production behavior;
- real Meta/WhatsApp integration;
- QR-based WhatsApp connector and multi-number channel layer;
- some administrative modules still using older visual implementation;
- legacy routes still being absorbed by canonical routes;
- customer validation public page still depending on temporary hosting infrastructure;
- manager-created priority needs a fresh RLS/write-permission validation before it is treated as production-ready;
- daily/weekly management report is implemented but still in homologation.

### 🔴 Do not take to production yet

- GitHack/RawCDN as final hosting;
- source code living in the current public personal portfolio repository;
- unprotected homologation/release branch;
- no formal separation between homologation and production environments;
- no final production security review after all messaging/provider changes.

## Release gates

A release may advance only when:

1. Seller order flow passes end-to-end: draft → customer validation → revision if needed → approval → PMG launch → finalization → commission.
2. RLS and privileged-function checks show no new security regressions.
3. No service-role, provider secret, OpenAI key, Meta secret or seller token is exposed in browser code.
4. Admin/supervisor cannot read seller WhatsApp message/attachment content.
5. Catalog prices and product codes come from database truth, never from generative AI.
6. Customer-facing validation uses a stable public route.
7. Old routes redirect to canonical routes instead of becoming parallel product versions.
8. Any new critical write path has an explicit authorization/RLS review before production.

## Production blockers

- Move PMG source from the current public personal portfolio repository to a dedicated private repository.
- Use stable production hosting/domain instead of GitHack/RawCDN.
- Protect the release branch and require review/checks before production changes.
- Create separate homologation and production environments/deployments.
- Enable leaked-password protection in Supabase Auth.
- Re-run Supabase Security Advisor before production cutover.
- Revalidate grants/RLS after the journey, multi-number, QR connector and campaign layers are added.

## Architecture principles

- Database is the source of truth for product, price, offer, discount, order and commission.
- AI interprets and suggests; it does not invent commercial facts or silently send/finalize.
- Human review is mandatory before customer communication or order finalization unless a journey is explicitly approved for automatic execution.
- Seller WhatsApp content is seller-private. Management receives aggregate commercial indicators only.
- Business state transitions use controlled server-side functions, not direct browser updates to protected order state.
- Messaging providers are adapters behind a common channel layer; order/CRM logic must remain provider-independent.
- Bulk communication must optimize consent, relevance, frequency and deliverability, never depend on evading provider enforcement.
