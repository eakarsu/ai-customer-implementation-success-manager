export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  [
    "implementation-plan",
    "Implementation Plan Records",
    "Implementation Plan priority queue",
    "Open",
    "Implementation Plan exception list",
    "Onboarding Lead",
    "$0"
  ],
  [
    "stakeholder-map",
    "Stakeholder Map Records",
    "Stakeholder Map priority queue",
    "Review",
    "Stakeholder Map exception list",
    "Customer Lead",
    "$0"
  ],
  [
    "blocker-tracker",
    "Blocker Tracker Records",
    "Blocker Tracker priority queue",
    "Action needed",
    "Blocker Tracker exception list",
    "Execution Lead",
    "$0"
  ],
  [
    "data-migration-readiness",
    "Data Migration Readiness Records",
    "Data Migration Readiness priority queue",
    "Open",
    "Data Migration Readiness exception list",
    "Technical Lead",
    "$0"
  ],
  [
    "integration-readiness",
    "Integration Readiness Records",
    "Integration Readiness priority queue",
    "Review",
    "Integration Readiness exception list",
    "Technical Lead",
    "$0"
  ],
  [
    "training-adoption",
    "Training Adoption Records",
    "Training Adoption priority queue",
    "Action needed",
    "Training Adoption exception list",
    "Enablement Lead",
    "$0"
  ],
  [
    "go-live-scorecard",
    "Go-Live Scorecard Records",
    "Go-Live Scorecard priority queue",
    "Open",
    "Go-Live Scorecard exception list",
    "Launch Lead",
    "$0"
  ],
  [
    "handoff-notes",
    "Handoff Notes Records",
    "Handoff Notes priority queue",
    "Review",
    "Handoff Notes exception list",
    "Success Lead",
    "$0"
  ],
  [
    "adoption-risk",
    "Adoption Risk Records",
    "Adoption Risk priority queue",
    "Action needed",
    "Adoption Risk exception list",
    "Risk Lead",
    "$0"
  ],
  [
    "executive-status",
    "Executive Status Records",
    "Executive Status priority queue",
    "Open",
    "Executive Status exception list",
    "Reporting Lead",
    "$0"
  ],
  [
    "documents",
    "Documents Records",
    "Documents priority queue",
    "Review",
    "Documents exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications priority queue",
    "Action needed",
    "Notifications exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations priority queue",
    "Open",
    "Integrations exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles priority queue",
    "Review",
    "Profiles exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "ai-assistant",
    "AI Assistant Records",
    "AI Assistant priority queue",
    "Action needed",
    "AI Assistant exception list",
    "Intelligence Layer Lead",
    "$0"
  ],
  [
    "ai-tools",
    "AI Tools Records",
    "AI Tools priority queue",
    "Open",
    "AI Tools exception list",
    "Intelligence Layer Lead",
    "$0"
  ]
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-06-06', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} audit queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-06-10', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
