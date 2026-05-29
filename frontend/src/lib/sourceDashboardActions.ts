export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "implementation-plan",
    "label": "Implementation Plan",
    "description": "Implementation Plan action group for Customer Implementation Success.",
    "href": "/implementation-plan",
    "sourceProjects": [
      "Implementation plans",
      "Customer calls"
    ],
    "examples": [
      "Open Implementation Plan",
      "Review Onboarding",
      "Run Implementation Plan AI check"
    ],
    "count": 3
  },
  {
    "id": "stakeholder-map",
    "label": "Stakeholder Map",
    "description": "Stakeholder Map action group for Customer Implementation Success.",
    "href": "/stakeholder-map",
    "sourceProjects": [
      "Customer calls",
      "Usage data"
    ],
    "examples": [
      "Open Stakeholder Map",
      "Review Customer",
      "Run Stakeholder Map AI check"
    ],
    "count": 3
  },
  {
    "id": "blocker-tracker",
    "label": "Blocker Tracker",
    "description": "Blocker Tracker action group for Customer Implementation Success.",
    "href": "/blocker-tracker",
    "sourceProjects": [
      "Usage data",
      "Support tickets"
    ],
    "examples": [
      "Open Blocker Tracker",
      "Review Execution",
      "Run Blocker Tracker AI check"
    ],
    "count": 3
  },
  {
    "id": "data-migration-readiness",
    "label": "Data Migration Readiness",
    "description": "Data Migration Readiness action group for Customer Implementation Success.",
    "href": "/data-migration-readiness",
    "sourceProjects": [
      "Support tickets"
    ],
    "examples": [
      "Open Data Migration Readiness",
      "Review Technical",
      "Run Data Migration Readiness AI check"
    ],
    "count": 3
  },
  {
    "id": "integration-readiness",
    "label": "Integration Readiness",
    "description": "Integration Readiness action group for Customer Implementation Success.",
    "href": "/integration-readiness",
    "sourceProjects": [
      "Implementation plans",
      "Customer calls"
    ],
    "examples": [
      "Open Integration Readiness",
      "Review Technical",
      "Run Integration Readiness AI check"
    ],
    "count": 3
  },
  {
    "id": "training-adoption",
    "label": "Training Adoption",
    "description": "Training Adoption action group for Customer Implementation Success.",
    "href": "/training-adoption",
    "sourceProjects": [
      "Customer calls",
      "Usage data"
    ],
    "examples": [
      "Open Training Adoption",
      "Review Enablement",
      "Run Training Adoption AI check"
    ],
    "count": 3
  },
  {
    "id": "go-live-scorecard",
    "label": "Go-Live Scorecard",
    "description": "Go-Live Scorecard action group for Customer Implementation Success.",
    "href": "/go-live-scorecard",
    "sourceProjects": [
      "Usage data",
      "Support tickets"
    ],
    "examples": [
      "Open Go-Live Scorecard",
      "Review Launch",
      "Run Go-Live Scorecard AI check"
    ],
    "count": 3
  },
  {
    "id": "handoff-notes",
    "label": "Handoff Notes",
    "description": "Handoff Notes action group for Customer Implementation Success.",
    "href": "/handoff-notes",
    "sourceProjects": [
      "Support tickets"
    ],
    "examples": [
      "Open Handoff Notes",
      "Review Success",
      "Run Handoff Notes AI check"
    ],
    "count": 3
  },
  {
    "id": "adoption-risk",
    "label": "Adoption Risk",
    "description": "Adoption Risk action group for Customer Implementation Success.",
    "href": "/adoption-risk",
    "sourceProjects": [
      "Implementation plans",
      "Customer calls"
    ],
    "examples": [
      "Open Adoption Risk",
      "Review Risk",
      "Run Adoption Risk AI check"
    ],
    "count": 3
  },
  {
    "id": "executive-status",
    "label": "Executive Status",
    "description": "Executive Status action group for Customer Implementation Success.",
    "href": "/executive-status",
    "sourceProjects": [
      "Customer calls",
      "Usage data"
    ],
    "examples": [
      "Open Executive Status",
      "Review Reporting",
      "Run Executive Status AI check"
    ],
    "count": 3
  }
];
