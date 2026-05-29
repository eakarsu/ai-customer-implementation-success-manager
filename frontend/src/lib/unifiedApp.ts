import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["Implementation plans","Customer calls","Usage data","Support tickets"];

const features = [
  {
    slug: "implementation-plan",
    title: "Implementation Plan",
    href: "/implementation-plan",
    category: "Onboarding",
    icon: Bot,
    summary: "Milestones, scope, stakeholders, dependencies, and go-live target.",
    bullets: ["Implementation Plan queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Implementation Plan", value: "24", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "stakeholder-map",
    title: "Stakeholder Map",
    href: "/stakeholder-map",
    category: "Customer",
    icon: Workflow,
    summary: "Champions, blockers, executives, admins, users, and communication preferences.",
    bullets: ["Stakeholder Map queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Stakeholder Map", value: "33", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "blocker-tracker",
    title: "Blocker Tracker",
    href: "/blocker-tracker",
    category: "Execution",
    icon: Users,
    summary: "Open blockers, severity, owner, dependency, impact, and resolution ETA.",
    bullets: ["Blocker Tracker queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Blocker Tracker", value: "42", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "data-migration-readiness",
    title: "Data Migration Readiness",
    href: "/data-migration-readiness",
    category: "Technical",
    icon: CalendarCheck,
    summary: "Data sources, mapping, quality checks, validation, and sign-off.",
    bullets: ["Data Migration Readiness queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Data Migration Readiness", value: "51", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "integration-readiness",
    title: "Integration Readiness",
    href: "/integration-readiness",
    category: "Technical",
    icon: ClipboardList,
    summary: "APIs, credentials, environments, test status, and cutover blockers.",
    bullets: ["Integration Readiness queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Integration Readiness", value: "60", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "training-adoption",
    title: "Training Adoption",
    href: "/training-adoption",
    category: "Enablement",
    icon: FileText,
    summary: "Training sessions, attendance, adoption signals, gaps, and reinforcement plan.",
    bullets: ["Training Adoption queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Training Adoption", value: "69", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "go-live-scorecard",
    title: "Go-Live Scorecard",
    href: "/go-live-scorecard",
    category: "Launch",
    icon: BarChart3,
    summary: "Readiness criteria, risks, owners, approvals, and launch recommendation.",
    bullets: ["Go-Live Scorecard queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Go-Live Scorecard", value: "78", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "handoff-notes",
    title: "Handoff Notes",
    href: "/handoff-notes",
    category: "Success",
    icon: PackageCheck,
    summary: "Implementation summary, open issues, success plan, and CSM ownership.",
    bullets: ["Handoff Notes queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Handoff Notes", value: "87", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "adoption-risk",
    title: "Adoption Risk",
    href: "/adoption-risk",
    category: "Risk",
    icon: ShieldCheck,
    summary: "Usage gaps, stakeholder sentiment, unresolved blockers, and save plays.",
    bullets: ["Adoption Risk queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Adoption Risk", value: "96", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "executive-status",
    title: "Executive Status",
    href: "/executive-status",
    category: "Reporting",
    icon: Activity,
    summary: "Sponsor-ready status, timeline, risks, asks, and next milestones.",
    bullets: ["Executive Status queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Executive Status", value: "105", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "Customer Implementation Success documents, evidence, attachments, and exports.",
    bullets: ["Documents","Controls","Audit trail"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "Customer Implementation Success alerts, reminders, exceptions, and approvals.",
    bullets: ["Notifications","Controls","Audit trail"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "Customer Implementation Success connector health, sync status, and integration warnings.",
    bullets: ["Integrations","Controls","Audit trail"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "Customer Implementation Success users, roles, teams, permissions, and ownership settings.",
    bullets: ["Profiles","Controls","Audit trail"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "Customer Implementation Success assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Customer Implementation Success AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Onboarding",
    "features": [
      "Implementation Plan"
    ]
  },
  {
    "name": "Customer",
    "features": [
      "Stakeholder Map"
    ]
  },
  {
    "name": "Execution",
    "features": [
      "Blocker Tracker"
    ]
  },
  {
    "name": "Technical",
    "features": [
      "Data Migration Readiness",
      "Integration Readiness"
    ]
  },
  {
    "name": "Enablement",
    "features": [
      "Training Adoption"
    ]
  },
  {
    "name": "Launch",
    "features": [
      "Go-Live Scorecard"
    ]
  },
  {
    "name": "Success",
    "features": [
      "Handoff Notes"
    ]
  },
  {
    "name": "Risk",
    "features": [
      "Adoption Risk"
    ]
  },
  {
    "name": "Reporting",
    "features": [
      "Executive Status"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is implemented as a dedicated Customer Implementation Success workflow with records, AI assistance, approvals, audit, and reporting.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners,
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
