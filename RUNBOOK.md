# Customer implementation success operations

`/api/governed-success` is authoritative for source sync, ownership, implementation milestones, customer approval, handoff, active/at-risk recovery, and immutable events. Signed gateway assertions scope tenant, actor, role, and permissions. Health scores and AI output are advisory; a human manager owns approvals and escalation.

Configure `.env.example`, install dependencies explicitly, run `./start.sh check`, back up PostgreSQL, and use `ALLOW_SCHEMA_MIGRATION=1 ./start.sh migrate`. Startup never installs, seeds, resets, creates schema, edits credentials, or kills ports. Rollback deploys prior code with additive tables retained and reconciles customer/provider receipts first.

CRM, email, calendar, enrichment, consent, suppression, and notification adapters require stable source IDs/versions, freshness, payload hashes, deletion propagation, replay-safe commands, and typed receipts. Suppression, opt-out, missing consent/privacy basis, contact frequency, stale versions, and self-approval fail closed. Reconcile dead letters before retry.

Production connector/IdP credentials, sending-domain deliverability, regional counsel review, customer acceptance, and security/privacy certification remain external gates. Review Git history and rotate potentially real `.env` values.
