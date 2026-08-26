# PMG Comercial IA — Security baseline

Status: homologation / release 0.9.0-beta

## Current controls

- Browser uses Supabase publishable key only.
- Sensitive provider credentials are expected to remain server-side/Vault-only.
- Order state transitions use controlled backend functions for approval, correction, launch and finalization.
- Customer validation uses expiring tokens.
- Seller WhatsApp content is scoped to the seller; management dashboards must not query message/attachment content.
- Generative AI may suggest, but cannot be the source of truth for product code, price, discount or quantity.
- Human action is required for message sending and order finalization.

## Frontend secret scan — 2026-08-26

No repository code match was found for:
- `service_role`
- `app_secret`
- `sk-`
- hardcoded `access_token=`
- `authKey`

This does not replace secret scanning in CI or GitHub Advanced Security; it is only a targeted repository check.

## Known security/operations issues

1. The current repository is public. PMG proprietary frontend/business logic is visible even though server secrets are not embedded.
2. `pmg-homologacao` is currently unprotected.
3. Temporary GitHack/RawCDN hosting is not suitable as the final production trust boundary.
4. Homologation and production should use separate deployment/environment controls before go-live.
5. Leaked-password protection was still disabled in the last successful Supabase Security Advisor check.
6. `public.access_grants` had RLS enabled with no public policy in the last successful advisor check; this is intentional only if the table must remain inaccessible to browser roles.

## Production security gate

Before production:

- dedicated private PMG repository;
- protected release branch;
- stable HTTPS domain/hosting;
- Content Security Policy and other security headers at the host;
- leaked-password protection enabled;
- fresh Supabase Security Advisor review;
- fresh review of grants/RLS for orders, order_items, commissions, CRM, priorities and WhatsApp tables;
- verify no browser role can execute private/secret RPCs;
- verify admin/supervisor cannot read `whatsapp_messages` or attachments;
- verify seller cannot read another seller's customer/order/CRM/WhatsApp data;
- verify customer validation token cannot expose another order;
- rotate any credential that was ever pasted into public code/history.

## Operational rule

Frontend role checks improve navigation but are not authorization. Authorization must always be enforced by RLS, grants and server-side functions.
