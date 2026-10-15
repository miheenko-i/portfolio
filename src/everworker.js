// Original project screens supplied by Ilia. Screen figures are illustrative, not measured outcomes.
export const everworker = {
  "id": "everworker",
  "company": "EverWorker",
  "title": "From an AI builder to ready-made workers",
  "category": "B2B SaaS / AI agents",
  "period": "Platform work from 2022",
  "summary": "Redesigning a technical AI platform, introducing guided setup and authoring assistance, then turning customer feedback into a ready-worker experience.",
  "intro": "How I helped a developer-built AI platform become easier to use, and how customer interviews shifted our focus from helping people build workers to helping them find a ready solution.",
  "role": "Product UX/UI and interaction design",
  "stage": "Builder to ready-made workers",
  "facts": [
    {
      "label": "My role",
      "text": "Product UX/UI, interaction design and customer feedback"
    },
    {
      "label": "Scope",
      "text": "Navigation, canvas, guided setup and AI-assisted authoring"
    },
    {
      "label": "Product focus",
      "text": "Helping nontechnical users create and use AI workers"
    }
  ],
  "story": {
    "period": "Platform involvement from 2022. Later iterations: second half of 2025. Shift toward ready-made workers: early 2026.",
    "visualNote": "Original project screens. Earlier screens retain Integrail branding. Early redesigns are my work; the later visual system was developed by another studio, with my contribution focused on product logic. Screen text, time estimates and performance figures are illustrative design content, not measured results.",
    "sections": [
      {
        "id": "problem",
        "title": "Problem & Opportunity",
        "paragraphs": [
          "EverWorker began as a developer-built platform for creating AI agents. Its canvas already connected visual nodes, but a working agent still depended on technical knowledge: prompts, JSON, model settings and APIs. A person could see the workflow without knowing how to make it run.",
          "The opportunity was to make that capability useful to business users. People in sales and marketing should be able to describe work they wanted help with without first learning how an AI system was assembled. At the beginning, though, our idea of the audience was broad. We had a powerful tool and an ambition to make it accessible, but an incomplete picture of how customers wanted to use it.",
          "That became the thread through the project: first make the platform understandable, then make creation easier, and finally question how much creation customers wanted to do at all."
        ]
      },
      {
        "id": "role",
        "title": "My Role & Scope",
        "paragraphs": [
          "I worked on product UX/UI across the platform’s evolution, starting in 2022, from the first redesign through later creation flows and the move toward ready-made workers. My scope covered navigation, settings, canvas interactions, guided setup, AI-assisted authoring and the experience around finding a worker.",
          "I proposed the setup wizard and the later authoring assistant. I also attended customer interviews and worked with the team’s findings as the product direction changed. My contribution combined interface design with decisions about what users should do themselves and where the product could help.",
          "I designed the first two visual versions. In the third version, I contributed product logic while another studio developed the visual design. The later screens show that collaboration."
        ]
      },
      {
        "id": "process",
        "title": "Process",
        "paragraphs": [
          "Competitive analysis included n8n and Glean. The work developed through successive product iterations. Internal testing exposed some problems; the sales team’s experience exposed others. Later, conversations with paying customers challenged the direction of the product itself.",
          "Each phase changed the next question. Could people understand the interface? Could they start a worker? Could they change it and recover from errors? And, once those steps became easier, did customers actually want to build workers? The screens below show those decisions and the limits we encountered."
        ]
      },
      {
        "id": "foundation",
        "title": "Make the platform understandable",
        "paragraphs": [],
        "blocks": [
          {
            "title": "Starting point",
            "text": "The original studio already had a node-based canvas. My first redesign gave it a clearer home, logical navigation and more understandable settings. Creating agents and using the benchmarking tools became clearer entry points."
          },
          {
            "title": "Design response",
            "text": "I worked on the surrounding structure as well as the canvas itself. The home page explained where to begin; the studio brought controls and node settings into a more legible interface. This was an effort to make the existing product usable, not to invent a new underlying platform."
          },
          {
            "title": "What we learned",
            "text": "We implemented this version internally, before working with clients. Testing was mainly with developers and product people who already understood the system. That familiarity hid difficulties that became clear when the sales team tried to use it. A cleaner interface had not removed the knowledge needed to configure an agent."
          }
        ],
        "imageKeys": [
          "early-studio",
          "first-studio",
          "first-home",
          "first-settings"
        ],
        "label": "01 / Foundation"
      },
      {
        "id": "learning",
        "title": "Help people learn by building",
        "paragraphs": [],
        "blocks": [
          {
            "title": "Observed friction",
            "text": "Sales colleagues still struggled with prompts, JSON and connections. Building could turn into repeated fixing and reconfiguring, without reaching a usable result. The difficulty was no longer simply finding the right screen."
          },
          {
            "title": "Iteration",
            "text": "We added templates, cloning, node descriptions and colored connections. These gave people a starting point and made existing workflows easier to follow. Rather than assemble everything from nothing, they could explore a worker and adapt it."
          },
          {
            "title": "The remaining gap",
            "text": "These changes helped with basic assembly, but technical setup remained difficult. The product also had chat for testing existing agents. That made it possible to try a worker conversationally, but it was not yet a way to create or repair one. The next step needed to address authoring itself."
          }
        ],
        "imageKeys": [
          "canvas-settings",
          "node-guidance",
          "agent-library"
        ],
        "label": "02 / Learning the canvas"
      },
      {
        "id": "wizard",
        "title": "Start with the task, then reveal the setup",
        "paragraphs": [],
        "blocks": [
          {
            "title": "My proposal",
            "text": "I proposed a setup wizard for people in sales and marketing with little technical experience. The starting question became what they wanted the worker to do, rather than which nodes they needed."
          },
          {
            "title": "The flow",
            "text": "Users could describe a task or choose a similar option. The flow suggested knowledge sources, a model and tools, then led to a review before opening the canvas. The sequence broke one complex setup into smaller decisions and kept the task visible as the reason for those choices."
          },
          {
            "title": "Why keep the canvas?",
            "text": "The wizard provided an entry route into the same working environment. It helped assemble a first version without removing the canvas people would use to inspect and change it. The screens show the progression from choosing an agent to knowledge and integrations, then a connected workflow."
          },
          {
            "title": "Result and next question",
            "text": "The wizard was implemented and made starting easier. But when someone wanted different behavior or encountered an error, they returned to technical work. Helping people through onboarding was not enough; they needed support while editing, too."
          }
        ],
        "imageKeys": [
          "setup-wizard",
          "wizard-knowledge",
          "wizard-tools",
          "wizard-canvas"
        ],
        "label": "03 / Guided creation"
      },
      {
        "id": "assistant",
        "title": "Bring assistance into the work itself",
        "paragraphs": [],
        "blocks": [
          {
            "title": "My next proposal",
            "text": "I proposed an AI assistant inside the canvas and code editor. Instead of leaving people on their own after setup, it could help where they were already working: creating nodes, configuring them, writing prompts, editing JSON and suggesting fixes."
          },
          {
            "title": "How it worked",
            "text": "A person could describe what they wanted to create or change. The assistant showed a list of proposed changes and asked for confirmation before applying them. Chat complemented the canvas rather than replacing it; the workflow and its settings remained visible alongside the conversation."
          },
          {
            "title": "What changed",
            "text": "This reached the product. We saw people without a technical background build and run workers. The important change was that assistance extended beyond the first draft into configuration and repair. That was a qualitative observation from use; I don’t have a measured success rate to share."
          },
          {
            "title": "A different kind of chat",
            "text": "This was distinct from the earlier chat used to test existing agents. The authoring assistant helped produce and modify the worker itself. The canvas and code-editor screens show how that assistance sat beside the underlying setup."
          }
        ],
        "imageKeys": [
          "canvas-assistant",
          "assistant-settings",
          "assistant-code"
        ],
        "label": "04 / AI-assisted authoring"
      },
      {
        "id": "direction",
        "title": "From building workers to choosing one",
        "paragraphs": [],
        "blocks": [
          {
            "title": "What customers told us",
            "text": "The biggest change came from interviews with paying customers. I attended those conversations and worked with the team’s findings. Even with easier creation, customers did not want to spend their time building workers. They wanted a ready solution to a business problem, with the team helping maintain it."
          },
          {
            "title": "The product response",
            "text": "The company shifted toward ready-made workers in early 2026. I continued the design work as we repositioned the website around business solutions and developed the worker catalog experience."
          },
          {
            "title": "A new starting point",
            "text": "The catalog made the worker and its purpose the entry point. People could explore available options, understand what a worker did and move toward using it or getting setup help. The design focus expanded from the mechanics of creation to choosing something relevant to a real business need."
          }
        ],
        "imageKeys": [
          "worker-catalog",
          "worker-detail",
          "catalog-home"
        ],
        "label": "05 / A change in direction"
      },
      {
        "id": "impact",
        "title": "Impact & Learnings",
        "paragraphs": [],
        "blocks": [
          {
            "title": "My impact",
            "text": "My work helped move the platform from its first UX/UI redesign into guided creation and AI-assisted authoring. The wizard and assistant I proposed were implemented. I also helped connect customer feedback with the later catalog and website experience. These were concrete product changes, with qualitative evidence that nontechnical users could build and run workers."
          },
          {
            "title": "The bigger lesson",
            "text": "An easier builder does not automatically mean customers want to build. Improving usability helped people work with the product, while customer interviews changed our understanding of the job they wanted it to do. Those were different problems, and they required different responses."
          },
          {
            "title": "What I would do differently",
            "text": "I would involve people outside the technical team earlier and follow a complete task through creation, changes and error recovery. I would also ask sooner whether customers wanted a building tool or a ready worker. That would help separate difficulty using the product from a lack of desire to do the work it asks of them."
          }
        ]
      }
    ]
  },
  "images": [
    {
      "key": "first-home",
      "title": "A clearer starting point",
      "src": "cases/everworker/first-home.png",
      "width": 2011,
      "height": 1258,
      "alt": "Redesigned home with separate entry points for designing agents, testing agents in chat, external integrations and benchmarking.",
      "caption": "An early home iteration: clear entry points for the platform’s main tasks."
    },
    {
      "key": "early-studio",
      "title": "Before: developer-built studio",
      "src": "cases/everworker/early-studio.png",
      "width": 1059,
      "height": 663,
      "alt": "Original dark studio with input, language-model and output nodes already connected on a canvas.",
      "caption": "Before: the developer-built studio already had visual connections."
    },
    {
      "key": "first-studio",
      "title": "After: redesigned studio",
      "src": "cases/everworker/first-studio.png",
      "width": 2008,
      "height": 1258,
      "alt": "First studio redesign with navigation, canvas controls, connected nodes and a node library in a side panel.",
      "caption": "After: the redesigned studio, with navigation and explicit controls."
    },
    {
      "key": "first-settings",
      "title": "Node settings",
      "src": "cases/everworker/first-settings.png",
      "width": 1031,
      "height": 1241,
      "alt": "Agent settings drawer showing model, system prompt, temperature and additional configuration fields beside the canvas.",
      "caption": "Settings: a more structured interface, with technical decisions still present."
    },
    {
      "key": "canvas-settings",
      "title": "Canvas and node settings",
      "src": "cases/everworker/canvas-settings.png",
      "width": 1847,
      "height": 1157,
      "alt": "Canvas with a node library on the left, connected input and model nodes in the center, and node settings on the right.",
      "caption": "The canvas with its node library and settings visible alongside the workflow."
    },
    {
      "key": "node-guidance",
      "title": "Explanations on the canvas",
      "src": "cases/everworker/node-guidance.png",
      "width": 1438,
      "height": 898,
      "alt": "Canvas with colored node ports, a node explanation tooltip, node library and settings panel.",
      "caption": "Node explanations and colored ports made the workflow easier to read."
    },
    {
      "key": "agent-library",
      "title": "Explore existing agents",
      "src": "cases/everworker/agent-library.png",
      "width": 1431,
      "height": 898,
      "alt": "Agent library over the canvas with existing agent cards, search, sorting and a Templates tab.",
      "caption": "Existing agents offered something to explore and adapt."
    },
    {
      "key": "setup-wizard",
      "title": "Choose the task",
      "src": "cases/everworker/setup-wizard.png",
      "width": 2048,
      "height": 1137,
      "alt": "Setup wizard with suggested agent types and a sequence of Agent type, Knowledge, Brain, Tools and Review steps.",
      "caption": "Choose an agent type or describe a task. Time estimates are illustrative."
    },
    {
      "key": "wizard-knowledge",
      "title": "Choose knowledge",
      "src": "cases/everworker/wizard-knowledge.png",
      "width": 2048,
      "height": 1129,
      "alt": "Knowledge step in the setup wizard showing suggested sources and supported data integrations.",
      "caption": "Choose the knowledge sources the worker will use."
    },
    {
      "key": "wizard-tools",
      "title": "Choose tools",
      "src": "cases/everworker/wizard-tools.png",
      "width": 2048,
      "height": 1136,
      "alt": "Tools step in the setup wizard listing integrations such as email, chat and business systems.",
      "caption": "Connect the tools needed for the task."
    },
    {
      "key": "wizard-canvas",
      "title": "Continue on the canvas",
      "src": "cases/everworker/wizard-canvas.png",
      "width": 2048,
      "height": 1136,
      "alt": "Email-assistant canvas with action-named nodes for retrieving emails, analyzing priority and generating a reply.",
      "caption": "Continue in a canvas organized around recognizable actions."
    },
    {
      "key": "canvas-assistant",
      "title": "Assistant and canvas",
      "src": "cases/everworker/canvas-assistant.png",
      "width": 1939,
      "height": 1548,
      "alt": "Authoring assistant conversation alongside a connected workflow and node settings.",
      "caption": "The authoring assistant beside the canvas and settings. Chat text is placeholder copy."
    },
    {
      "key": "assistant-settings",
      "title": "Assistant and configuration",
      "src": "cases/everworker/assistant-settings.png",
      "width": 1696,
      "height": 1417,
      "alt": "EverWorker assistant beside a node configuration form with inputs, outputs and execution controls.",
      "caption": "Assistance stays alongside the node being configured."
    },
    {
      "key": "assistant-code",
      "title": "Assistant and code editor",
      "src": "cases/everworker/assistant-code.png",
      "width": 1433,
      "height": 1200,
      "alt": "EverWorker assistant beside an expanded JavaScript code editor and node configuration fields.",
      "caption": "The same workspace with the code editor expanded."
    },
    {
      "key": "worker-catalog",
      "title": "Explore ready-made workers",
      "src": "cases/everworker/worker-catalog.png",
      "width": 1883,
      "height": 1040,
      "alt": "EverWorker catalog with department filters and worker cards explaining tasks and connected applications.",
      "caption": "Browse workers by the business tasks they support. Figures are illustrative."
    },
    {
      "key": "worker-detail",
      "title": "Understand a worker",
      "src": "cases/everworker/worker-detail.png",
      "width": 1351,
      "height": 744,
      "alt": "Expense Auditor detail design with an overview, connected tools, workflow description and worker request action.",
      "caption": "A worker detail page explains the offer and its setup. Figures are illustrative."
    },
    {
      "key": "catalog-home",
      "title": "A catalog-led starting point",
      "src": "cases/everworker/catalog-home.png",
      "width": 1481,
      "height": 1084,
      "alt": "EverWorker home combining ready-made worker templates with routes to creating a worker or workflow.",
      "caption": "Ready-made options become part of the main entry experience. Figures are illustrative."
    }
  ]
}
