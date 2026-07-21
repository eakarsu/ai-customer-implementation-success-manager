BEGIN;
CREATE TABLE IF NOT EXISTS success_sources(tenant_id TEXT NOT NULL,id TEXT NOT NULL,provider TEXT NOT NULL,source_id TEXT NOT NULL,source_version TEXT NOT NULL,payload_hash CHAR(64) NOT NULL,freshness_at TIMESTAMPTZ NOT NULL,consent_state TEXT,suppressed BOOLEAN NOT NULL DEFAULT FALSE,deleted_at_source TIMESTAMPTZ,PRIMARY KEY(tenant_id,id),UNIQUE(tenant_id,provider,source_id));
CREATE TABLE IF NOT EXISTS success_accounts(tenant_id TEXT NOT NULL,id TEXT NOT NULL,account_id TEXT NOT NULL,owner_id TEXT NOT NULL,state TEXT NOT NULL DEFAULT 'lead',version INTEGER NOT NULL DEFAULT 1,input JSONB NOT NULL,evaluation JSONB NOT NULL,request_hash CHAR(64) NOT NULL,idempotency_key TEXT NOT NULL,created_by TEXT NOT NULL,approved_by TEXT,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),PRIMARY KEY(tenant_id,id),UNIQUE(tenant_id,idempotency_key));
CREATE TABLE IF NOT EXISTS success_events(seq BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,work_id TEXT NOT NULL,actor_id TEXT NOT NULL,event_type TEXT NOT NULL,reason TEXT,details JSONB NOT NULL DEFAULT '{}'::jsonb,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),FOREIGN KEY(tenant_id,work_id) REFERENCES  success_accounts(tenant_id,id) ON DELETE RESTRICT);
CREATE TABLE IF NOT EXISTS success_outbox(id BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,work_id TEXT NOT NULL,provider TEXT NOT NULL,operation TEXT NOT NULL,payload JSONB NOT NULL,idempotency_key TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'queued',attempts INTEGER NOT NULL DEFAULT 0,lease_token UUID,lease_expires_at TIMESTAMPTZ,next_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),provider_receipt JSONB,last_error_code TEXT,FOREIGN KEY(tenant_id,work_id) REFERENCES  success_accounts(tenant_id,id),UNIQUE(tenant_id,provider,idempotency_key));
CREATE INDEX IF NOT EXISTS success_state_idx ON success_accounts(tenant_id,state,updated_at);
CREATE OR REPLACE FUNCTION success_events_append_only() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'success events are append-only';
END
$$;
DROP TRIGGER IF EXISTS success_events_append_only_trigger ON success_events;
CREATE TRIGGER success_events_append_only_trigger BEFORE UPDATE OR DELETE ON success_events FOR EACH ROW EXECUTE FUNCTION success_events_append_only();
COMMIT;
