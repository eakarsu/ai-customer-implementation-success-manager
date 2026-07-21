# AI Customer Implementation Success Manager

Runnable Next.js full-stack app for Customer Implementation Success.

## Workflows

- `/implementation-plan` - Implementation Plan (Onboarding): Milestones, scope, stakeholders, dependencies, and go-live target.
- `/stakeholder-map` - Stakeholder Map (Customer): Champions, blockers, executives, admins, users, and communication preferences.
- `/blocker-tracker` - Blocker Tracker (Execution): Open blockers, severity, owner, dependency, impact, and resolution ETA.
- `/data-migration-readiness` - Data Migration Readiness (Technical): Data sources, mapping, quality checks, validation, and sign-off.
- `/integration-readiness` - Integration Readiness (Technical): APIs, credentials, environments, test status, and cutover blockers.
- `/training-adoption` - Training Adoption (Enablement): Training sessions, attendance, adoption signals, gaps, and reinforcement plan.
- `/go-live-scorecard` - Go-Live Scorecard (Launch): Readiness criteria, risks, owners, approvals, and launch recommendation.
- `/handoff-notes` - Handoff Notes (Success): Implementation summary, open issues, success plan, and CSM ownership.
- `/adoption-risk` - Adoption Risk (Risk): Usage gaps, stakeholder sentiment, unresolved blockers, and save plays.
- `/executive-status` - Executive Status (Reporting): Sponsor-ready status, timeline, risks, asks, and next milestones.

## Local Run

```bash
cd ai-customer-implementation-success-manager/frontend
npm run dev
```

Create the first administrator with the explicit BOOTSTRAP_ADMIN_EMAIL,
BOOTSTRAP_ADMIN_PASSWORD, and BOOTSTRAP_ACKNOWLEDGEMENT environment settings.
