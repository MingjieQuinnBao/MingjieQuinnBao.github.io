export const site = {
  name: "Mingjie Quinn Bao",
  chineseName: "鲍明颉",
  url: "https://MingjieQuinnBao.github.io",
  description:
    "Personal website of Mingjie Quinn Bao, a computer science undergraduate at Wuhan University working across trustworthy AI, security, systems, data, language, and machine perception.",
  links: {
    GitHub: "https://github.com/MingjieQuinnBao",
    Email: "",
    CV: "",
    "Google Scholar": "",
    ORCID: "",
    LinkedIn: "",
  },
};
export const navigation = [
  ["research", "Research"],
  ["build", "Build"],
  ["writing", "Write"],
  ["music", "Listen"],
  ["about", "About"],
];
export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  description: string;
  tags: string[];
  sections: { title: string; text: string }[];
  resources: { label: string; url: string }[];
};
export const projects: Project[] = [
  {
    slug: "reverse-capability",
    title:
      "Hearing Less, Passing More: Reverse-Capability Audio CAPTCHAs through Psychoacoustic Design",
    shortTitle: "Hearing less.\nPassing more.",
    category: "Perception / Security",
    status: "Manuscript / Research project",
    description:
      "When recovering a physical signal is not the same as hearing it. Exploring the gap between human perception and machine capability.",
    tags: ["perception", "security", "sound"],
    sections: [
      {
        title: "The premise",
        text: "Traditional CAPTCHA security often assumes machines are weaker than humans. This project investigates the reverse direction: a machine may recover physical properties correctly while failing to reproduce the human perceptual response required by the verifier.",
      },
      {
        title: "Two challenge families",
        text: "Hipi is a classification-oriented perceptual challenge. Yingchen is a counting-oriented perceptual challenge. Both examine how psychoacoustic design can create a physical–perceptual gap and, in turn, a human–machine response gap.",
      },
      {
        title: "Research questions",
        text: "The work brings human evaluation and large audio-language models into the same experimental frame. Which responses follow the signal, and which follow perception? The project examines this distinction without treating either as a universal measure of intelligence.",
      },
    ],
    resources: [
      "Paper PDF",
      "Code",
      "Artifacts",
      "Audio examples",
      "Demo",
      "Figures",
    ].map((label) => ({ label, url: "" })),
  },
  {
    slug: "audio-captcha-sok",
    title:
      "Listen, Reason, Bypass: Revisiting Audio CAPTCHA Security in the Era of Large Audio-Language Models",
    shortTitle: "Listen, reason,\nbypass.",
    category: "AI Security / Audio",
    status: "Research project",
    description:
      "Revisiting the assumptions of audio CAPTCHA security as models move from transcription toward reasoning.",
    tags: ["security", "sound"],
    sections: [
      {
        title: "A changing threat model",
        text: "Audio CAPTCHA evaluation has often centered on automatic speech recognition. Large audio-language models introduce a broader question: how does reasoning over sound change the security assumptions of an audio challenge?",
      },
      {
        title: "Security and usability",
        text: "This research considers audio CAPTCHAs, ASR, model reasoning, and usability together. A security evaluation must account for the people expected to solve the challenge as well as the models attempting to bypass it.",
      },
    ],
    resources: [
      { label: "Paper PDF", url: "" },
      { label: "Code", url: "" },
    ],
  },
  {
    slug: "modellect",
    title: "Modellect",
    shortTitle: "A language\nbetween machines.",
    category: "Language / Communication",
    status: "Ongoing research idea",
    description:
      "What happens when machine agents increasingly communicate for one another rather than for humans?",
    tags: ["language", "systems"],
    sections: [
      {
        title: "Who is the listener?",
        text: "Modellect is an ongoing research idea about multi-agent communication, emergent language, and machine dialects. It asks what changes when the intended audience for a message is another machine.",
      },
      {
        title: "Communication drift",
        text: "The central thread is the relationship between efficient machine communication and human interpretability. How might conventions emerge, become useful to agents, and drift away from meanings a human observer can inspect?",
      },
    ],
    resources: [
      { label: "Project notes", url: "" },
      { label: "Code", url: "" },
    ],
  },
];
export type WritingEntry = {
  title: string;
  category: string;
  tags: string[];
  status: "Draft" | "Final";
  date?: string;
  minutes?: number;
  href?: string;
};
// Add only real essays here; the topic index below is an editorial plan, not a publication list.
export const writings: WritingEntry[] = [];
export const writingTopics = [
  {
    title: "What does a name carry?",
    category: "Language / Philosophy",
    text: "Reference, definite descriptions, Russell, and Naming and Necessity.",
  },
  {
    title: "The systems beneath the sentence",
    category: "Computing / Essays",
    text: "AI, databases, semantics, and the structures that make interpretation possible.",
  },
  {
    title: "Things that resist a category",
    category: "Notes / Fragments",
    text: "Literature, technology, culture, and unfinished lines of thought.",
  },
];
export type Track = {
  title: string;
  kind: "Track" | "Sketch";
  src: string;
  note: string;
};
export const tracks: Track[] = [];
export const buildAreas = [
  {
    title: "Systems",
    subtitle: "From source to execution",
    description:
      "A working area for compiler construction, ToyC to RISC-V, Linux environments, Docker, and runtime experimentation.",
    tools: ["ToyC → RISC-V", "Linux", "Docker"],
    flow: ["Source", "Parse", "Lower", "Execute"],
  },
  {
    title: "AI engineering",
    subtitle: "Keeping agents inspectable",
    description:
      "An engineering thread around AI agents, workflow systems, multimodal perception, human-in-the-loop intervention, and reliability.",
    tools: ["C# / .NET", "Kafka", "Orleans"],
    flow: ["Observe", "Decide", "Intervene", "Act"],
  },
  {
    title: "Applied ML & software",
    subtitle: "Models inside useful systems",
    description:
      "An area for recommender systems, computer vision, semantic risk analysis, encryption-related projects, and ML-assisted software tools.",
    tools: ["Flask", "Vue", "Docker"],
    flow: ["Data", "Model", "Interface", "Feedback"],
  },
];
