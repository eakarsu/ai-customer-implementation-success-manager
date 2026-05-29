export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "Implementation plans",
    "ownership": "Implementation plans contributes operating evidence, workflows, control signals, and reporting inputs to Customer Implementation Success.",
    "coverage": [
      "Implementation Plan",
      "Stakeholder Map",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Customer calls",
    "ownership": "Customer calls contributes operating evidence, workflows, control signals, and reporting inputs to Customer Implementation Success.",
    "coverage": [
      "Stakeholder Map",
      "Blocker Tracker",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Usage data",
    "ownership": "Usage data contributes operating evidence, workflows, control signals, and reporting inputs to Customer Implementation Success.",
    "coverage": [
      "Blocker Tracker",
      "Data Migration Readiness",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Support tickets",
    "ownership": "Support tickets contributes operating evidence, workflows, control signals, and reporting inputs to Customer Implementation Success.",
    "coverage": [
      "Data Migration Readiness",
      "Integration Readiness",
      "AI tools",
      "Audit evidence"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Workflow Areas', value: '10', note: 'Dedicated modules' },
  { label: 'Evidence Sources', value: '4', note: 'Mapped sources' },
  { label: 'AI Tools', value: '13', note: 'Suite copilots' },
  { label: 'Open Work', value: '64', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '22', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '347', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Implementation Plan operating view",
  "Stakeholder Map operating view",
  "Blocker Tracker operating view",
  "Data Migration Readiness operating view",
  "Integration Readiness operating view",
  "Training Adoption operating view",
  "Go-Live Scorecard operating view",
  "Handoff Notes operating view"
];
export const workflowHighlights = [
  "Implementation Plan workflow with records, AI assist, approvals, audit, and reporting",
  "Stakeholder Map workflow with records, AI assist, approvals, audit, and reporting",
  "Blocker Tracker workflow with records, AI assist, approvals, audit, and reporting",
  "Data Migration Readiness workflow with records, AI assist, approvals, audit, and reporting",
  "Integration Readiness workflow with records, AI assist, approvals, audit, and reporting",
  "Training Adoption workflow with records, AI assist, approvals, audit, and reporting"
];
