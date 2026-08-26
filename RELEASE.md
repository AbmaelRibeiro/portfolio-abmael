# PMG Comercial IA — Release Management

Current product release: **0.9.0-beta**
Environment: **homologation**
Canonical entry: `app.html`

## Versioning rule

From this release onward, product evolution uses semantic product versions (`0.9.0`, `0.10.0`, `1.0.0`) and Git commits. Do not create new user-facing files named `-v2`, `-v3`, `-v5`, etc.

Legacy versioned HTML files remain temporarily for compatibility only. Canonical routes are listed in `pmg-routes.json`.

## Release gates

A release may advance only when:

1. Seller order flow passes end-to-end: draft → customer validation → revision if needed → approval → PMG launch → finalization → commission.
2. RLS and privileged-function checks show no new security regressions.
3. No service-role, provider secret, OpenAI key, Meta secret or seller token is exposed in browser code.
4. Admin/supervisor cannot read seller WhatsApp message/attachment content.
5. Catalog prices and product codes come from database truth, never from generative AI.
6. Customer-facing validation uses a stable public route.
7. Old routes redirect to canonical routes instead of becoming parallel product versions.

## Production blockers

- Move PMG source from the current public personal portfolio repository to a dedicated private repository.
- Use stable production hosting/domain instead of GitHack/RawCDN.
- Protect the release branch and require review/checks before production changes.
- Enable leaked-password protection in Supabase Auth.
- Re-run Supabase Security Advisor before production cutover.

## Architecture principles

- Database is the source of truth for product, price, offer, discount, order and commission.
- AI interprets and suggests; it does not invent commercial facts or silently send/finalize.
- Human review is mandatory before customer communication or order finalization.
- Seller WhatsApp content is seller-private. Management receives aggregate commercial indicators only.
- Business state transitions use controlled server-side functions, not direct browser updates to protected order state.
