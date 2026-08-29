-- PMG Comercial IA — PRECHECK ONLY
-- Não altera dados/schema. Executar em homologação antes da migration administrativa.

-- 1) Colunas reais das tabelas envolvidas
select table_name,column_name,data_type,is_nullable,column_default
from information_schema.columns
where table_schema='public'
  and table_name in (
    'sellers','customers','access_grants','seller_priorities',
    'seller_invites','seller_access_invites','profiles','crm_opportunities'
  )
order by table_name,ordinal_position;

-- 2) Constraints atuais
select conrelid::regclass as table_name, conname, pg_get_constraintdef(oid) as definition
from pg_constraint
where connamespace='public'::regnamespace
  and conrelid::regclass::text in (
    'sellers','customers','access_grants','seller_priorities',
    'seller_invites','seller_access_invites','profiles','crm_opportunities'
  )
order by 1,2;

-- 3) Funções administrativas que precisam ser revisadas
select n.nspname as schema_name,p.proname,
       pg_get_function_identity_arguments(p.oid) as args,
       pg_get_function_result(p.oid) as result,
       p.prosecdef as security_definer,
       pg_get_functiondef(p.oid) as definition
from pg_proc p
join pg_namespace n on n.oid=p.pronamespace
where n.nspname='public'
  and p.proname in (
    'admin_list_seller_access','admin_create_seller_invite',
    'create_manager_priority','admin_create_seller_priority'
  )
order by p.proname;

-- 4) Grants das tabelas sensíveis
select grantee,table_name,privilege_type
from information_schema.role_table_grants
where table_schema='public'
  and table_name in ('sellers','customers','access_grants','seller_priorities','seller_invites','seller_access_invites')
order by table_name,grantee,privilege_type;

-- 5) Policies RLS atuais
select schemaname,tablename,policyname,permissive,roles,cmd,qual,with_check
from pg_policies
where schemaname='public'
  and tablename in ('sellers','customers','access_grants','seller_priorities','seller_invites','seller_access_invites')
order by tablename,policyname;

-- 6) Triggers que podem afetar as escritas administrativas
select event_object_table,trigger_name,event_manipulation,action_timing,action_statement
from information_schema.triggers
where trigger_schema='public'
  and event_object_table in ('sellers','customers','seller_priorities','seller_invites','seller_access_invites')
order by event_object_table,trigger_name;
