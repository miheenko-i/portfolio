// Original project screens supplied by Ilia. Captions distinguish design artifacts from results.
export const everworker = {
  id: 'everworker',
  company: 'EverWorker',
  title: 'Making AI workers easier to build',
  category: 'B2B SaaS / AI agents',
  period: 'Platform work from 2022',
  summary: 'From a technical canvas to guided setup and an AI assistant, then a shift toward ready-made workers.',
  intro: 'I joined EverWorker to make a developer-built platform usable beyond the engineering team. The work grew from clearer navigation to guided setup and an AI assistant, before customer interviews changed what we were selling.',
  role: 'Platform UX/UI, including the first two design versions. Later product logic; version-three visual design by another studio.',
  stage: 'Builder to ready-made workers',
  story: {
    period: 'Later iterations: second half of 2025. Shift toward ready-made workers: early 2026.',
    sections: [
      {
        title: 'A visual canvas, a technical task',
        paragraphs: [
          'The early studio already let people connect nodes on a canvas. But setting them up meant writing prompts and JSON, connecting models and understanding APIs. Someone without that background could see the workflow and still be unable to make it work.',
          'The ambition was to bring the tool to business users. At first, though, we had a broad idea of the audience rather than a clear picture of who would use it and for what.',
        ],
        imageKey: 'early-studio',
      },
      {
        title: 'A clearer start was only the beginning',
        paragraphs: [
          'My first redesign gave people a home screen, clearer navigation and more understandable settings. We implemented it internally, then added templates, cloning, node descriptions and colored connections to help people learn by exploring existing workers.',
          'It helped with basic assembly, but the technical work remained. Our early testers were mostly developers and product people who already understood the system. We missed difficulties that became obvious when the sales team tried to use it.',
          'We also added chat for testing existing agents. Creating one was still a separate, harder task.',
        ],
        imageKey: 'first-home',
      },
      {
        title: 'Start with the task',
        paragraphs: [
          'I proposed a setup wizard for people in sales and marketing who had little technical experience. Instead of asking them to understand the whole canvas first, we started with what they wanted to do.',
          'They could describe a task or choose a similar option. The flow recommended the knowledge, model and tools, then let them review the setup before opening the canvas.',
          'The wizard was implemented and made getting started easier. But once someone wanted to change the behavior or fix an error, they were back in technical territory.',
        ],
        imageKey: 'setup-wizard',
      },
      {
        title: 'Help beyond the first draft',
        paragraphs: [
          'My next proposal was to put an AI assistant inside the canvas and code editor, where people were already working. They could describe a change, ask for a new node or get help with an error. The assistant could configure nodes, write prompts and help edit JSON.',
          'Before applying changes, the assistant showed what it proposed and asked for confirmation.',
          'This reached the product. In practice, we saw people without a technical background build and run workers. This was a qualitative observation; I don’t have a measured success rate to share.',
        ],
        imageKey: 'canvas-assistant',
      },
      {
        title: 'Customers wanted the finished worker',
        paragraphs: [
          'The biggest lesson came from interviews with paying customers. I attended those conversations and worked with the team’s findings: even with easier creation, customers did not want to spend their time building workers. They wanted a ready solution to a business problem.',
          'The company shifted toward selling ready-made workers. I continued the design work as we repositioned the website around business solutions and expanded the platform into a worker catalog. People could explore what a worker did, install it or ask the team for help setting it up.',
        ],
        imageKey: 'worker-catalog',
      },
    ],
    closing: 'We made creation more approachable, but the customer interviews changed the question. The next challenge was helping people find the right worker and get it working for their business. For me, the lesson was to test both whether people can use a tool and whether they want that job in the first place.',
  },
  images: [
    { key: 'first-home', title: 'A clearer starting point', src: 'cases/everworker/first-home.png', width: 2011, height: 1258, alt: 'Redesigned home screen with clear entry points for designing agents, testing them in chat and connecting tools.', caption: 'My first redesign organized the platform around clear entry points. Original design screen.' },
    { key: 'early-studio', title: 'The developer-built starting point', src: 'cases/everworker/early-studio.png', width: 1059, height: 663, alt: 'The original dark studio already connects an input, a language-model node and an output on a visual canvas.', caption: 'The developer-built starting point, before my redesign. Visual node connections already existed.' },
    { key: 'setup-wizard', title: 'Guided setup', src: 'cases/everworker/setup-wizard.png', width: 2048, height: 1137, alt: 'Agent setup wizard with Agent type, Knowledge, Brain, Tools and Review steps, plus task templates and a describe-your-agent option.', caption: 'The wizard begins with a task and guides setup before the canvas. Original design screen; time estimates are illustrative.' },
    { key: 'canvas-assistant', title: 'Assistance inside the canvas', src: 'cases/everworker/canvas-assistant.png', width: 1939, height: 1548, alt: 'Workflow Creator chat beside a connected workflow canvas and node settings.', caption: 'The later assistant beside the canvas. Product logic was my contribution; visual design by another studio. Chat text and status figures are placeholders.' },
    { key: 'worker-catalog', title: 'Ready-made workers', src: 'cases/everworker/worker-catalog.png', width: 1883, height: 1040, alt: 'EverWorker catalog with department filters and cards explaining ready-made workers and their connected apps.', caption: 'The shift toward a worker catalog. Later visual design by another studio; figures shown are illustrative, not measured outcomes.' },
  ],
}
