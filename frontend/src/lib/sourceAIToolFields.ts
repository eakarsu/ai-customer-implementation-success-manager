export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "implementation-plan-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Implementation Plan and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Implementation Plan.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "stakeholder-map-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Stakeholder Map and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Stakeholder Map.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "blocker-tracker-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Blocker Tracker and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Blocker Tracker.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "data-migration-readiness-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Data Migration Readiness and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Data Migration Readiness.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "integration-readiness-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Integration Readiness and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Integration Readiness.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "training-adoption-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Training Adoption and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Training Adoption.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "go-live-scorecard-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Go-Live Scorecard and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Go-Live Scorecard.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "handoff-notes-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Handoff Notes and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Handoff Notes.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "adoption-risk-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Adoption Risk and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Adoption Risk.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ],
  "executive-status-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Executive Status and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Executive Status.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Customer Implementation Success"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Customer Implementation Success"
    }
  ]
};
