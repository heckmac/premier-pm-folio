import { img } from "./designProjectImages";

/* ─────────────────────── Data model ─────────────────────── */

export interface DesignImage {
  src: string;
  alt: string;
  caption?: string;
}

/** A single block of content inside a section or sub-section */
export interface ContentBlock {
  type: "text" | "bullets" | "image" | "carousel";
  /** For type=text */
  text?: string;
  /** For type=bullets */
  items?: string[];
  /** For type=image */
  image?: DesignImage;
  /** For type=carousel */
  images?: DesignImage[];
}

export interface DesignSubSection {
  subHeading: string;
  blocks: ContentBlock[];
}

export interface DesignSection {
  heading: string;
  /** If true, section renders at max-w-6xl instead of max-w-3xl */
  fullWidth?: boolean;
  blocks?: ContentBlock[];
  subSections?: DesignSubSection[];
}

export interface DesignProjectData {
  slug: string;
  client: string;
  discipline: string;
  duration: string;
  location: string;
  title: string;
  tagline?: string;
  sections: DesignSection[];
}

/* ─────────────── Helper to build carousel arrays ────────── */
const c = (srcs: string[], altPrefix: string, captions?: (string | undefined)[]): DesignImage[] =>
  srcs.map((src, i) => ({
    src,
    alt: `${altPrefix} ${i + 1}`,
    ...(captions?.[i] ? { caption: captions[i] } : {}),
  }));

/* ────────────────────── Project data ────────────────────── */

export const designProjects: DesignProjectData[] = [
  /* ============================================================
   * FUSION TELEPRESENCE
   * ============================================================ */
  {
    slug: "fusion-telepresence",
    client: "Huawei",
    discipline: "Digital Design",
    duration: "5 Months",
    location: "Germany",
    title: "Fusion Telepresence System",
    tagline:
      "Designing a holistic telepresence experience for China's largest telecommunication company — creating a unified design language across industrial and digital design for the flagship product family.",
    sections: [
      {
        heading: "Background",
        blocks: [
          {
            type: "text",
            text: "This client is the biggest telecommunication company in China; among many services they provide they have also a business line covering telepresence systems. The product family was developed organically over the years and the result was a fragmented design language, both from an industrial and digital design perspective.",
          },
        ],
      },
      {
        heading: "Scope",
        blocks: [
          {
            type: "text",
            text: "The client asked Designit to create a vision for the future of teleworking, developing a tool to connect teams and foster cooperation and co-creation. The project focused on creating a holistic experience to create a detailed concept of the flagship product and to create a design language that can be applied to the whole product family.",
          },
        ],
      },
      {
        heading: "My Role",
        blocks: [
          {
            type: "text",
            text: "I was responsible for the digital design, working in close collaboration with the industrial design lead to manage the project progress and client's requirements.",
          },
          {
            type: "bullets",
            items: [
              "Product positioning",
              "Design strategy",
              "UX design lead",
              "Visual design lead",
            ],
          },
        ],
      },
      {
        heading: "Results",
        fullWidth: true,
        blocks: [
          {
            type: "carousel",
            images: c(img.fusion.results, "Fusion result"),
          },
        ],
      },
      {
        heading: "Process",
        subSections: [
          {
            subHeading: "Desk Research and Competitors Audit",
            blocks: [
              {
                type: "text",
                text: "Due to budget restrictions, we couldn't run a real research phase nor access research insights. In order to get our shoes into the topic and plan the product strategy we ran a desk research aimed both at getting to know how office environments and working behaviours are changing, and to map the market offering in terms of products, features, approaches and styles.",
              },
              {
                type: "carousel",
                images: c(img.fusion.deskResearch, "Desk research"),
              },
            ],
          },
          {
            subHeading: "Product Strategy",
            blocks: [
              {
                type: "text",
                text: "We identified three main competitors: Google, Microsoft and Cisco; we compared their solutions from different angles: value proposition, target segment, experience, system and platform, design language. Based on the client's goal we refined the scope of the briefing to bring consistency into client's requests and define a product vision.",
              },
              {
                type: "image",
                image: { src: img.fusion.strategy, alt: "Product strategy framework" },
              },
            ],
          },
          {
            subHeading: "Experience Mapping and Ideation",
            blocks: [
              {
                type: "text",
                text: "After the research, we created a UX blueprint to visualise the breakdown of the user experience along the whole product life-cycle. It presents both the physical and the digital interactions, highlighting the synergy moments between them.",
              },
              {
                type: "carousel",
                images: c(img.fusion.experienceMapping, "Experience mapping"),
              },
              {
                type: "text",
                text: "We used the bodystorming method to have a deeper understanding of usability requirements, relations between users and the digital whiteboard, and possible synergies between the physical object and the software.",
              },
              {
                type: "image",
                image: { src: img.fusion.bodystorming, alt: "Bodystorming session" },
              },
              {
                type: "text",
                text: "The ideation phase was run in parallel by both the industrial design team and the digital design team, we met regularly to challenge and contaminate ideas and to ensure consistency between the two experiences.",
              },
              {
                type: "carousel",
                images: c(img.fusion.ideation, "Ideation"),
              },
            ],
          },
          {
            subHeading: "UX Concept",
            blocks: [
              {
                type: "text",
                text: "Ideas were generated to cover the whole user journey and then used to create two different UX concepts, exploring different approaches to information architecture, windows management, file sync and pairing, and cloud structure. These elements combined together were suggesting different styles and degrees of collaboration, focusing differently on co-operation and co-creation.",
              },
              {
                type: "carousel",
                images: c(img.fusion.uxConcept, "UX concept"),
              },
            ],
          },
          {
            subHeading: "Visual Concept",
            blocks: [
              {
                type: "text",
                text: "We analysed the style of the main competitors' products and we identified a style that was aligned with the brand values and market position. The visual directions were identified by using mood boards and samples of UI libraries to showcase the same components in different styles. Design critiques meetings helped us to guide the client to define and select the desired style.",
              },
              {
                type: "carousel",
                images: c(img.fusion.visualConcept, "Visual concept"),
              },
            ],
          },
          {
            subHeading: "Screen Design",
            blocks: [
              {
                type: "text",
                text: "After defining the visual style we created mockups for all the screens using Sketch and InVision to prototype it and test it with colleagues.",
              },
              {
                type: "carousel",
                images: c(img.fusion.screenDesign, "Screen design"),
              },
            ],
          },
          {
            subHeading: "Prototyping for Usability",
            blocks: [
              {
                type: "text",
                text: "The hardware was a standing 52″ screen, meant to be used by multiple people at the same time from short and medium distance. To create a usable and ergonomic product we produced mockups and prototypes at 1:1 scale since the first stages of the project; we started with a paper prototype to validate general proportions already during the definition of the UX concept, and later on we moved to a digital prototype on a 52″ screen to ensure readability and usability. The wizard of oz technique helped us to quickly test ergonomy, mental models, interfaces and interactions.",
              },
            ],
          },
        ],
      },
      {
        heading: "What Happened Next",
        blocks: [
          {
            type: "text",
            text: "The project won an iF Design Award 2019 both for the UX/UI and for the product.",
          },
          {
            type: "carousel",
            images: c(img.fusion.awards, "iF Design Award 2019"),
          },
        ],
      },
    ],
  },

  /* ============================================================
   * SMARTWATCH GESTURES
   * ============================================================ */
  {
    slug: "smartwatch-gestures",
    client: "Huawei",
    discipline: "UX/UI Design",
    duration: "6 Months",
    location: "Germany and China",
    title: "Gestures for the Next Generation of Smartwatches",
    sections: [
      {
        heading: "Background",
        blocks: [
          {
            type: "text",
            text: "The innovation team from our client developed two technologies to interact with smartwatches: a multitouch bezel and a touch-skin sensor to control the device touching the back of her hand.",
          },
        ],
      },
      {
        heading: "Scope",
        blocks: [
          {
            type: "text",
            text: "Project's scope was to define relevant use cases and user interfaces to leverage the user experience. It was crucial to our client to create both a vision supported by a strategic framework and concrete evidence, embodied in designs and a working prototype. The project helped our client to get a new budget and bring this technology forward.",
          },
        ],
      },
      {
        heading: "My Role",
        blocks: [
          {
            type: "bullets",
            items: [
              "UX framework definition",
              "UI design",
              "User Testing",
              "Design Lead",
              "Strategy",
              "Use cases and storytelling",
            ],
          },
        ],
      },
      {
        heading: "Process",
        subSections: [
          {
            subHeading: "Research",
            blocks: [
              {
                type: "text",
                text: "Desk research and 24h survey to explore the current usage of a smartwatch, with and without a smartphone. We understood which are the most used application for smartphones and/or for smartwatches, their contexts of use, and the gestures currently adopted.",
              },
              {
                type: "carousel",
                images: c(img.smartwatch.research, "Research slide"),
              },
            ],
          },
          {
            subHeading: "Strategy and UX Principles",
            blocks: [
              {
                type: "text",
                text: "The research insights led me to define the strategic approach; its output covered: competitors analysis, users insights, opportunity spaces and design principles.",
              },
              {
                type: "carousel",
                images: c(img.smartwatch.strategy, "Strategy"),
              },
            ],
          },
          {
            subHeading: "Ideation",
            blocks: [
              {
                type: "text",
                text: "The next phase was to define the best use cases to leverage this technology. We could use the strategy and the design principles to navigate through users needs, gesture ergonomic, contexts of use, UI potential, USP for the technology. The use cases were ideated by running several sketching sessions in crazy eight style, prioritising and iterating on the most promising ones.",
              },
              {
                type: "carousel",
                images: c(img.smartwatch.ideation, "Ideation"),
              },
            ],
          },
          {
            subHeading: "User Interviews",
            blocks: [
              {
                type: "text",
                text: "We run users interviews both in Germany and China, with two goals: more insights on users' current behaviour with smartwatches and test the acceptance of our scenarios. We used paper prototypes to find out which gestures were the most natural ones, test their reaction to the UI, and validate the relevance of the selected use cases. The setup consisted of wireframed interfaces printed on round stickers applied to a real watch. We presented two screens per time, and we asked users what they would do to go from one screen to the other.",
              },
              {
                type: "carousel",
                images: c(img.smartwatch.interviews, "User interview"),
              },
            ],
          },
          {
            subHeading: "Use Cases Iteration",
            blocks: [
              {
                type: "text",
                text: "We refined use cases and UIs through progressively higher fidelity sketches.",
              },
              {
                type: "carousel",
                images: c(img.smartwatch.useCases, "Use case"),
              },
            ],
          },
          {
            subHeading: "Screen Design",
            blocks: [
              {
                type: "text",
                text: "After defining the visual style direction, we designed the screens through quick iterations using Sketch and mirroring the output onto the device. We used Principle for mac to build rough animations and test our ideas before spending too much time on screen refinements.",
              },
              {
                type: "carousel",
                images: [
                  { src: img.smartwatch.visualInspiration, alt: "Visual style moodboard", caption: "Visual style moodboard — We explored several visual styles creating a set of moodboards and asking the client to challenge them." },
                  { src: img.smartwatch.directions, alt: "Visual style directions", caption: "Visual style directions — We used one application to explore several visual styles and define a general direction." },
                  { src: img.smartwatch.grid, alt: "Radial grid", caption: "Radial grid — As we wanted to create a system of circular UIs we designed a radial grid as base." },
                  { src: img.smartwatch.screenSketch, alt: "Sketch and Principles", caption: "Sketch and Principles — Sketch was used to create the mockups and Principles for mac to validate their usability on the fly." },
                ],
              },
            ],
          },
          {
            subHeading: "Animations",
            blocks: [
              {
                type: "text",
                text: "We prepared a set of refined animations to envision the user's interactions both for client stakeholders and our developer. Animations were prototyped using Principles for mac first, both to give us a better understanding of the interactions and to showcase them to the developer. The refined version used to present it to the client was produced using Aftereffects.",
              },
            ],
          },
          {
            subHeading: "Technical Demonstrator",
            blocks: [
              {
                type: "text",
                text: "The use cases and the narration were refined to fit in one single application, developed for Android. The client could install this application on a working hardware prototype and demonstrate the potential of the touch-bezel and the skin-touch sensors.",
              },
              {
                type: "image",
                image: { src: img.smartwatch.development, alt: "Technical demonstrator" },
              },
            ],
          },
        ],
      },
      {
        heading: "What Happened Next",
        blocks: [
          {
            type: "text",
            text: "The project succeeded in showing the potential of these two new input technologies: the client's management was positively impressed and decided to bring the development further. The production team took over to challenge feasibility and build a sounding framework based on our concept.",
          },
          {
            type: "text",
            text: "Recently Huawei patented the technology but hasn't revealed yet how they are going to use it. Looking forward to seeing some of our work in the next version of their smartwatch!",
          },
          {
            type: "text",
            text: "Featured on: TechRadar · IoT Gadgets · Android Authority",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * SHARAF DG
   * ============================================================ */
  {
    slug: "sharaf-dg-omnichannel",
    client: "Sharaf DG",
    discipline: "UX & Service Design",
    duration: "18 Months",
    location: "UAE",
    title: "An Omnichannel Retail Experience",
    sections: [
      {
        heading: "Background",
        blocks: [
          {
            type: "text",
            text: "Sharaf DG is one of the most successful electronics retailers in UAE; until 2013 their business model was all about reducing costs: simple stores, no warehouses and competitive prices. Designit helped Sharaf shaping and implementing a new business model based on customer experience.",
          },
        ],
      },
      {
        heading: "Scope",
        blocks: [
          {
            type: "text",
            text: "In 2013 Nilesh Khalkho, CEO and Co-Founder of Sharaf DG, came to Designit with a problem: electronics retailers can no longer leverage on price as their main differentiator. Sharaf wanted to create a new business model based on customer experience and asked Designit to support him shaping and implementing a new omnichannel experience, able to unify the retail experience with the digital environment.",
          },
        ],
      },
      {
        heading: "My Role",
        blocks: [
          {
            type: "text",
            text: "My role was to translate the vision defined by service designers into reality. I was responsible for the in-store digital touchpoints and the monetisation platform.",
          },
          {
            type: "bullets",
            items: [
              "User stories definition",
              "Wireframes detailing",
              "Production of guidelines",
              "Design support for implementation",
              "Design Quality Assurance",
              "Final handover facilitation",
              "UX Design and Service Design",
              "Mapping and design of the multichannel shopping experience",
              "Concept refinement",
            ],
          },
        ],
      },
      {
        heading: "Results",
        fullWidth: true,
        blocks: [
          {
            type: "text",
            text: "The scope of the project was to deliver a fully working system able to convey the design concepts developed during the previous phase. The final design covered different touchpoints both digital and physical: architecture and interior design, in-store digital experiences, mobile applications, and backend systems.",
          },
          {
            type: "carousel",
            images: img.sharaf.results.map((src, i) => ({
              src,
              alt: `Sharaf DG result ${i + 1}`,
            })),
          },
        ],
      },
      {
        heading: "Process",
        subSections: [
          {
            subHeading: "Experience Roadmap",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Internal project handover to Design & Implementation team",
                  "Studying and understanding the detailed concept manual",
                  "Identification of key features for implementation",
                  "Desk research: best practices and competitor analysis",
                  "Concept detailing: creating three user stories addressing all key concept touch-points",
                  "Design and Experience transfer of the store design concept for the Times Square Store",
                  "Definition of architecture scope and alignment with the scheduled building process",
                ],
              },
              {
                type: "carousel",
                images: [
                  { src: img.sharaf.note1, alt: "Sales process", caption: "The sales process — We analysed the sales and purchase experience both from the customer and staff member point of view." },
                  { src: img.sharaf.photowall, alt: "User journey", caption: "The user journey — We ideated a new user journey to enhance both the customer and the staff members experience." },
                  { src: img.sharaf.note2, alt: "UX Concept", caption: "UX Concept — We described the UX concept of all the touch points to align stakeholders' expectations." },
                ],
              },
            ],
          },
          {
            subHeading: "Team Coordination and Processes Setup",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Setup of internal communications and content coordination tools / framework (Jira, Confluence)",
                  "Creation of UI/UX specification documents",
                  "Architectural design and detailing of all digital experiences",
                  "Alignment of store design with UX/UI and Tech development",
                  "Final planning documents for store design and all digital experiences",
                  "Client presentation and scope refinement",
                ],
              },
            ],
          },
          {
            subHeading: "Implementation",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Alignment of design concepts with technical feasibility and interior architecture",
                  "Final UI/UX specification documents",
                  "Implementation of the E-commerce platform (website)",
                  "Mobile app screen design and development",
                  "Digital Experiences design and development",
                  "Test-run in Munich",
                  "Troubleshooting and refinement of all touchpoints",
                  "Warehouse setup in Dubai",
                  "Quality Control Check and Approval of all key elements of store design",
                  "Final handover to the client (bug-fixing and staff training workshop in Dubai, design and technical documentation handover, final client demo & presentation)",
                ],
              },
              {
                type: "carousel",
                images: [
                  { src: img.sharaf.concept3, alt: "Visual concept", caption: "Visual concept — We created a visual concept for all the touch-points to create a consistent design language." },
                  { src: img.sharaf.concept2, alt: "Design specifications", caption: "Design specifications — All the concepts were refined and described in design specifications documents." },
                  { src: img.sharaf.impl, alt: "Prototype implementation", caption: "Prototype Implementation — Developers implemented all the touch-points while the design team was testing them and ensuring usability." },
                  { src: img.sharaf.runtest, alt: "Run test", caption: "Runtest — The final setup and debug in a warehouse in Dubai." },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "What Happened Next",
        blocks: [
          {
            type: "text",
            text: "After we delivered the proof of concept, the system was engineered and maintained by a software house able to provide constant support. The digital experiences we designed became the blueprint of the digital transformation of the company; the system was extended to all the Sharaf DG shops in Dubai.",
          },
          {
            type: "carousel",
            images: [
              { src: img.sharaf.store1, alt: "Sharaf DG store 1" },
              { src: img.sharaf.store2, alt: "Sharaf DG store 2" },
              { src: img.sharaf.store3, alt: "Sharaf DG store 3" },
            ],
          },
        ],
      },
    ],
  },

  /* ============================================================
   * INSURANCE DATA COLLECTION
   * ============================================================ */
  {
    slug: "insurance-data-collection",
    client: "Global Insurance Company",
    discipline: "UX Design",
    duration: "2 Months",
    location: "Europe",
    title: "Customer Contact Data Collection",
    sections: [
      {
        heading: "Background",
        blocks: [
          {
            type: "text",
            text: "The client, a worldwide leading insurance company, started a process of digital transformation to rethink its services and operations. One of the biggest hurdles in the insurance sector is related to the personal information management, especially in countries like Germany. Being able to collect data and getting the consent to use the data is a crucial step to deliver fully digital experiences.",
          },
        ],
      },
      {
        heading: "Scope",
        blocks: [
          {
            type: "text",
            text: "Designit was asked to analyse the current data collection process, identify opportunities, and design solution that could encourage users to give their data and move from analogic to digital communication.",
          },
        ],
      },
      {
        heading: "My Role",
        blocks: [
          {
            type: "text",
            text: "I joined the team as UX expert, along with a junior UX designer, a researcher, a service designer and a strategic lead. I facilitated some of the workshops during the eight weeks of co-creation: my focus was on analysing the current processes and touch-points, identifying loopholes and opportunities, guiding the team towards solutions and prototypes.",
          },
        ],
      },
      {
        heading: "The Process",
        subSections: [
          {
            subHeading: "Overview",
            blocks: [
              {
                type: "text",
                text: "An 8-week co-creation project. 6 Designit, 12 client stakeholders, 1 leading market for the implementation of an easy solution to gather customers' contact data and the consent to use it.",
              },
              {
                type: "image",
                image: { src: img.insurance.process, alt: "Process overview" },
              },
            ],
          },
          {
            subHeading: "Week 1: Understanding // Co-Creation",
            blocks: [
              {
                type: "text",
                text: "An intensive 5 day workshop to download the knowledge from all the participants and teach them a bit of Design Thinking methodology. The result of this week was to map all the processes over the 3 main channels (Customer centre, Brokers & Agents, Portal) to understand where data collection can be improved.",
              },
              {
                type: "image",
                image: { src: img.insurance.hopesFears, alt: "Week 1 workshop" },
              },
            ],
          },
          {
            subHeading: "Week 2 and 3: Research and Synthesis",
            blocks: [
              {
                type: "text",
                text: "The team run Field Research to conduct stakeholder interviews and Desk Research, collecting material sent by the other OEs. During week three the team gathered all the insights and use them as base for the following Ideation Workshop.",
              },
              {
                type: "carousel",
                images: c(img.insurance.research, "Research"),
              },
            ],
          },
          {
            subHeading: "Week 4: Ideation // Co-Creation",
            blocks: [
              {
                type: "text",
                text: "An intensive 5-day workshop to present opportunities and get all the OEs aligned with a strategy to move forward. We run ideation sessions and used the POP App to make paper prototypes more tangible, helping the client understand and relate to the explored opportunities.",
              },
              {
                type: "carousel",
                images: c(img.insurance.ideation, "Ideation"),
              },
            ],
          },
          {
            subHeading: "Week 5: Prototype Creation",
            blocks: [
              {
                type: "text",
                text: "Based on the paper prototypes from the ideation workshop, in which we sketched out screens on paper, we developed a desktop version of the prototype for testing. GDF provided us with a sketch library with UI elements for the wireframes. We used Sketch to create the screens and uploaded them into Invision afterwards.",
              },
              {
                type: "carousel",
                images: c(img.insurance.prototype, "Prototype"),
              },
            ],
          },
          {
            subHeading: "Week 6: User Acceptance Testing",
            blocks: [
              {
                type: "text",
                text: "In week 6 we run tested our digital prototype with customers, both in the Netherlands and in Belgium. The test was run using the User Experience Questionnaire (UEQ) method, in order to measure the satisfaction level of users.",
              },
              {
                type: "carousel",
                images: c(img.insurance.uat, "UAT"),
              },
            ],
          },
          {
            subHeading: "Week 7: Design Iteration",
            blocks: [
              {
                type: "text",
                text: "Based on the findings we had the week before, we iterated the design and prepared a high fidelity prototype to run the second test. During this iteration, the design was also challenged by the client's attorneys to ensure all the legal requirements were fully met.",
              },
              {
                type: "carousel",
                images: c(img.insurance.iteration, "Iteration screen"),
              },
            ],
          },
          {
            subHeading: "Week 8: User Acceptance Testing",
            blocks: [
              {
                type: "text",
                text: "The test results were presented to the client together with the final iteration of the digital artefact. In its complex, the solution was well perceived by users and was easily adaptable to different markets, based on their technological setup, service offering and legal requirements.",
              },
              {
                type: "carousel",
                images: c(img.insurance.finalTest, "Final test"),
              },
            ],
          },
        ],
      },
    ],
  },
];

/* ─────────────────── Lookup helpers ─────────────────── */

export function getDesignProject(slug: string): DesignProjectData | undefined {
  return designProjects.find((p) => p.slug === slug);
}

export function getNextDesignProject(slug: string): DesignProjectData | undefined {
  const idx = designProjects.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return designProjects[(idx + 1) % designProjects.length];
}
