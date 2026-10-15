// Original audit excerpts and clearly labeled portfolio reconstruction.
export const travelAI = {
  "id": "travel-ai",
  "company": "Simplenight",
  "title": "A travel assistant people could control",
  "category": "Consumer AI / White-label travel",
  "period": "Web product redesign",
  "summary": "Turning an unpredictable planning chat into a guided journey, with clear actions and manual control of the itinerary and cart.",
  "intro": "How I audited a white-label travel chat, shaped a more guided experience and helped travelers move from an AI-generated plan toward checkout.",
  "role": "Lead product designer",
  "stage": "Implemented interaction improvements",
  "facts": [
    {
      "label": "My role",
      "text": "Lead designer: UX audit, interaction design and implementation handoff"
    },
    {
      "label": "Team",
      "text": "Two developers, a product manager and me"
    },
    {
      "label": "Scope",
      "text": "Web chat, itinerary, cart and checkout journey"
    }
  ],
  "story": {
    "period": "White-label travel platform / Web application",
    "sections": [
      {
        "id": "problem",
        "title": "Problem & Opportunity",
        "paragraphs": [
          "Simplenight’s white-label travel platform already let people search and book travel services. Its web chat offered another way into that experience: describe a trip, get recommendations and build a plan through conversation.",
          "But the journey was difficult to steer. The assistant selected items unpredictably, asked too many small questions and gave little guidance about what to do next. Travelers could get an itinerary without a clear way to change it, move selected items to the cart or continue to checkout. Even basic requests, such as removing an item or finding a cheaper alternative, could break the flow.",
          "The opportunity was to turn a conversation that kept going into a journey people could finish. That meant giving the assistant a clearer guiding role while keeping meaningful choices in the traveler’s hands."
        ],
        "takeaway": {
          "label": "The design challenge",
          "text": "Let the assistant guide the trip. Keep the traveler in control."
        },
        "emphasis": [
          "a journey people could finish"
        ]
      },
      {
        "id": "role",
        "title": "My Role & Scope",
        "paragraphs": [
          "I was the lead designer, working with two developers and a product manager. My scope was the web chat: the end-to-end experience, interaction design and migration to Simplenight’s updated design system.",
          "I audited the existing journey, reviewed competitor patterns and presented the findings to leadership. After approval, I mapped reusable components, developed scenarios and wireframes, and described the flow screen by screen. The work connected an experience-level diagnosis with changes the team could implement."
        ],
        "emphasis": [
          "lead designer",
          "two developers and a product manager"
        ]
      },
      {
        "id": "process",
        "title": "Process",
        "paragraphs": [
          "I followed the journey from the first request through search, recommendations, itinerary changes, the cart and checkout. Looking at the whole sequence mattered: an individual response could sound reasonable while leaving the person no closer to finishing the task.",
          "I compared relevant patterns in Layla and Tripadvisor, including how they introduce the experience, clarify changes and expose itinerary controls. The audit grouped findings around guidance, recovery, purchase information, editing consistency and the transition to booking. A scenario inventory and prioritized backlog turned those findings into a plan for the next iterations."
        ],
        "imageKeys": [
          "audit-takeaways",
          "audit-scenarios"
        ],
        "visualNote": "Original process artifacts. These excerpts contain old-product captures, audit findings, reference products and proposed changes; they are not final production screens."
      },
      {
        "id": "guidance",
        "title": "Make the next step visible",
        "paragraphs": [],
        "blocks": [
          {
            "title": "What the audit exposed",
            "text": "The old chat made users answer question after question. It could ask them to confirm a destination they had already selected, then move through dates and party size as separate exchanges. After generating a plan, it continued offering categories without making the ending clear."
          },
          {
            "title": "The decision",
            "text": "I proposed a more guided conversation: suggested requests, useful next actions, clearer progress and familiar controls for dates and guest counts. People should be able to select an option instead of remembering the right command or repeatedly describing information the interface could collect directly."
          },
          {
            "title": "A journey with an ending",
            "text": "The flow needed recognizable points for reviewing the itinerary, continuing to edit and beginning booking. Guidance was not just welcome-screen copy; it needed to remain useful as the person moved between planning and purchasing."
          }
        ],
        "label": "01 / Guidance",
        "imageKeys": [
          "audit-journey"
        ],
        "emphasis": [
          "recognizable points for reviewing the itinerary"
        ]
      },
      {
        "id": "control",
        "title": "Give the plan back to the traveler",
        "paragraphs": [],
        "blocks": [
          {
            "title": "The problem behind the chat",
            "text": "Automatically generated and manually added items did not offer consistent control. Changing a date could behave like starting another search. Replacing an item, editing its details and removing it were not clearly separated."
          },
          {
            "title": "The decision",
            "text": "I proposed the same controls for the same kind of item, regardless of how it entered the plan. Configure would handle details such as date, time and party size; Replace would help find a different option. Item details, reorder controls and clear feedback would make the itinerary a working surface rather than a long transcript."
          },
          {
            "title": "Recovery matters",
            "text": "Back, cancel and undo were also part of the proposed experience. A traveler should be able to correct a choice without losing the trip or restarting the conversation. These were concrete audit recommendations; the later implementation included clearer actions and manual itinerary management."
          }
        ],
        "label": "02 / Direct control",
        "takeaway": {
          "label": "Interaction principle",
          "text": "A conversational reply is not enough. The plan must show what changed."
        },
        "imageKeys": [
          "audit-control"
        ],
        "emphasis": [
          "the same controls for the same kind of item"
        ]
      },
      {
        "id": "checkout",
        "title": "Make planning and buying connect",
        "paragraphs": [],
        "blocks": [
          {
            "title": "A broken handoff",
            "text": "One captured exchange shows “Add to cart” followed by the assistant saying it does not know what to add. Other screens do contain a Cart tab and Checkout, but those controls were not consistently discoverable throughout the journey. The issue was the connection between steps, not the complete absence of a checkout."
          },
          {
            "title": "The decision",
            "text": "I proposed explicit add-to-cart actions, confirmation of what was added and a clear route to checkout. Travelers needed to choose what to buy and manage those items directly. The audit also exposed a generic contact-form error while the chat input was disabled, highlighting the need for actionable error messages and a way to get help."
          }
        ],
        "label": "03 / Planning to checkout",
        "imageKeys": [
          "audit-checkout"
        ],
        "emphasis": [
          "confirmation of what was added"
        ]
      },
      {
        "id": "delivery",
        "title": "Turn the audit into implementable work",
        "paragraphs": [],
        "blocks": [
          {
            "title": "Reuse before reinvention",
            "text": "The UI audit compared the old chat with Simplenight’s existing component code repository and updated design system. I identified patterns we could reuse or adapt: inputs, chips, calendars, item cards, itinerary controls, cart and booking summaries. This gave us a practical way to update the interface without designing every element from scratch."
          },
          {
            "title": "Scope and handoff",
            "text": "I developed the scenarios into wireframes and step-by-step screen specifications. The backlog distinguished high-priority editing and guidance work from later refinements, such as explanatory FAQ content. It made the intended behavior visible alongside the UI changes."
          },
          {
            "title": "What reached the product",
            "text": "The team implemented additional queries, hints, clearer actions and manual management of the itinerary and cart inside the bot. These addressed the central problem identified in the audit. The process boards include a broader set of ideas, so I do not treat every recommendation as a shipped feature."
          }
        ],
        "label": "04 / Delivery",
        "imageKeys": [
          "audit-reuse",
          "audit-priorities"
        ],
        "emphasis": [
          "manual management of the itinerary and cart"
        ]
      },
      {
        "id": "impact",
        "title": "Impact & Learnings",
        "paragraphs": [],
        "blocks": [
          {
            "title": "My contribution",
            "text": "I helped turn a broad request to improve the chat into a concrete product direction, a prioritized set of interactions and implementation-ready design work. The result was a more guided experience with direct controls where conversation alone had been unreliable."
          },
          {
            "title": "The lesson",
            "text": "Good conversational UX still needs visible state, predictable actions and a clear ending. The useful question was not how much of the interface we could replace with chat, but where chat helped and where a button, calendar or editable itinerary was easier to understand."
          },
          {
            "title": "What I would carry forward",
            "text": "For future work, I would track the full funnel from planning to completed payment, including where people need help. I left the company after this work and do not have a reliable view of the product’s subsequent status."
          }
        ],
        "callout": {
          "label": "Reported test outcome",
          "value": "About 90-95% reached checkout",
          "text": "Approximately 90-95% of around 100 test participants reached checkout in the Philippines deployment, based on the test analytics I recall. This measures checkout reach, not completed payment."
        },
        "takeaway": {
          "label": "Key learning",
          "text": "The value of chat is helping someone finish a task, not keeping the conversation going."
        }
      },
      {
        "id": "reconstruction",
        "title": "Interactive reconstruction",
        "paragraphs": [
          "The mobile screens below come from a new interactive reconstruction made for this portfolio. They illustrate a connected planning flow using mock travel data and simulated assistant behavior. They are not screenshots of the historical deployed chat, and they are not evidence for the test result above."
        ],
        "label": "Explore the flow",
        "imageKeys": [
          "mobile-start",
          "mobile-flights",
          "mobile-hotel",
          "mobile-itinerary",
          "mobile-cart",
          "mobile-checkout"
        ],
        "link": {
          "label": "Open the interactive reconstruction",
          "url": "https://simplenight-travel-assistant.miheenko.chatgpt.site/"
        }
      }
    ]
  },
  "images": [
    {
      "key": "audit-takeaways",
      "title": "From UX gaps to opportunities",
      "src": "cases/travel-ai/audit-takeaways.png",
      "width": 1295,
      "height": 525,
      "alt": "Original audit notes pair three UX gaps with recommendations for proactive guidance, example phrases, visual confirmation, and Undo or Back controls.",
      "caption": "UX audit excerpt: cognitive load, limited guidance, and missing recovery paths, paired with recommended improvements.",
      "displayWidth": 1295
    },
    {
      "key": "audit-scenarios",
      "title": "The scenario inventory",
      "src": "cases/travel-ai/audit-scenarios.png",
      "width": 600,
      "height": 384,
      "alt": "Scenario inventory listing new-user onboarding, itinerary creation and refinement, booking, checkout, saved-trip changes, and individual-item booking with free text, quiz, or prompts.",
      "caption": "Scenario-planning excerpt: onboarding, itinerary management, and individual-item booking from search through checkout.",
      "displayWidth": 600
    },
    {
      "key": "audit-journey",
      "title": "Starting guidance and reference patterns",
      "src": "cases/travel-ai/audit-journey.png",
      "width": 800,
      "height": 595,
      "alt": "The historical Simplenight chat opens with a sparse conversation and three travel actions. An audit note flags limited starting guidance; adjacent Layla examples show suggested tasks, sample queries, and destination cards.",
      "caption": "Historical Simplenight entry screen with audit annotations, alongside Layla starter-prompt references used to explore clearer next steps.",
      "displayWidth": 800
    },
    {
      "key": "audit-control",
      "title": "Predictable itinerary controls",
      "src": "cases/travel-ai/audit-control.png",
      "width": 540,
      "height": 426,
      "alt": "Original audit recommendations sit above competitor examples of drag-to-reorder controls and itinerary item menus. These are reference patterns rather than shipped Simplenight UI.",
      "caption": "Interaction references for the audit: reorder itinerary items and provide consistent Edit, Replace, and Remove actions.",
      "displayWidth": 540
    },
    {
      "key": "audit-checkout",
      "title": "Where the cart handoff failed",
      "src": "cases/travel-ai/audit-checkout.png",
      "width": 199,
      "height": 323,
      "alt": "Historical Simplenight chat: after the user stops booking, Add to cart does not identify items to add. The assistant repeats booking-category suggestions, followed by Review my itinerary, Make a payment, and Exit and save trip buttons.",
      "caption": "Historical chat excerpt: “Add to cart” receives “I’m not sure what you’d like to add to your cart,” then returns to category suggestions. A “Make a payment” option is visible later in the flow. Original low-resolution capture.",
      "displayWidth": 398
    },
    {
      "key": "audit-reuse",
      "title": "A reuse map for inputs and chips",
      "src": "cases/travel-ai/audit-reuse.png",
      "width": 795,
      "height": 275,
      "alt": "An original UI audit maps the historical chat input and option buttons to proposed input-and-chip components with Add to Plan, Change Dates, Change Destination, and persistent Checkout controls.",
      "caption": "UI reuse audit: existing prompt buttons compared with proposed controls built from Inputs and Chips, including Add to Plan, change actions, and Checkout.",
      "displayWidth": 795
    },
    {
      "key": "audit-priorities",
      "title": "Prioritized interaction improvements",
      "src": "cases/travel-ai/audit-priorities.png",
      "width": 1250,
      "height": 645,
      "alt": "Original High and Medium priority columns. High includes More Info, consistent controls, Configure for parameter changes, reordering, better Replace choices, and selective cart additions. Medium includes collapsible itineraries, change highlighting, consolidated Add to Plan, and contextual feedback.",
      "caption": "Prioritized backlog excerpt: itinerary details, consistent item actions, reordering, and selective cart additions ranked High; consolidation and feedback ranked Medium.",
      "displayWidth": 1250
    },
    {
      "key": "mobile-start",
      "title": "A complete travel brief",
      "src": "cases/travel-ai/mobile-start.png",
      "width": 388,
      "height": 698,
      "alt": "Mobile reconstructed travel assistant showing a two-traveler Paris brief, trip context and suggested flight search.",
      "caption": "Reconstruction: a complete trip brief becomes persistent context for dates, travelers, flights and interests.",
      "displayWidth": 420
    },
    {
      "key": "mobile-flights",
      "title": "Review flight options",
      "src": "cases/travel-ai/mobile-flights.png",
      "width": 388,
      "height": 698,
      "alt": "Mobile reconstructed flight card showing the route, connection, baggage, sample price for two travelers and a Choose action.",
      "caption": "Reconstruction: inline flight options expose route, timing, baggage and the two-traveler price before selection.",
      "displayWidth": 420
    },
    {
      "key": "mobile-hotel",
      "title": "Refine the hotel search",
      "src": "cases/travel-ai/mobile-hotel.png",
      "width": 388,
      "height": 698,
      "alt": "Mobile reconstruction showing a hotel search narrowed to nearby attractions, with a fictional property card, distance filter and sample total.",
      "caption": "Reconstruction: a closer-to-attractions request narrows the hotel set while keeping dates, flights and traveler context.",
      "displayWidth": 420
    },
    {
      "key": "mobile-itinerary",
      "title": "Review the itinerary",
      "src": "cases/travel-ai/mobile-itinerary.png",
      "width": 388,
      "height": 698,
      "alt": "Mobile reconstruction showing selected outbound and return flights, editable trip items and a persistent Checkout action.",
      "caption": "Reconstruction: review the assembled itinerary and change individual choices.",
      "displayWidth": 420
    },
    {
      "key": "mobile-cart",
      "title": "Review the trip cart",
      "src": "cases/travel-ai/mobile-cart.png",
      "width": 400,
      "height": 730,
      "alt": "Mobile reconstruction of the trip cart with dates, traveler quantities, selected items and an itemized mock total before checkout.",
      "caption": "Reconstruction: review dates, quantities and the sample trip total in one cart.",
      "displayWidth": 420
    },
    {
      "key": "mobile-checkout",
      "title": "Mock checkout",
      "src": "cases/travel-ai/mobile-checkout.png",
      "width": 388,
      "height": 698,
      "alt": "Mobile reconstruction of a simulated checkout form with fictional traveler placeholders and an explicit demo-only booking action.",
      "caption": "Reconstruction: a short checkout step keeps the booking simulation explicit. All traveler details shown are fictional.",
      "displayWidth": 420
    }
  ]
}
