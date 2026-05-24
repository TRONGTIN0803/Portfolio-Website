import {
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  Compass,
  Database,
  GitBranch,
  Layers3,
  LayoutDashboard,
  type LucideIcon,
  Sparkles,
  Target,
} from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
  status: string;
  github: string;
  demo: string;
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Now", href: "#now" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "2+", label: "Years in .NET" },
  { value: "AI", label: "Systems focus" },
  { value: "Public", label: "Building mode" },
];

export const aboutCards = [
  {
    title: "Engineering",
    copy: ".NET Developer with 2 years of experience building reliable software foundations.",
    icon: Code2,
  },
  {
    title: "Exploration",
    copy: "Learning ReactJS, AI workflows, and content systems for the next generation of products.",
    icon: BrainCircuit,
  },
  {
    title: "Direction",
    copy: "Interested in AI, productivity systems, the creator economy, and modern web products.",
    icon: Compass,
  },
];

export const projects: Project[] = [
  {
    title: "AI Prompt Manager",
    description:
      "PromptDock is a local-first workspace for organizing, searching, and reusing AI prompts with fast creation and favorites.",
    tags: ["Next.js", "TypeScript", "Zustand"],
    icon: Bot,
    gradient: "from-violet-500/25 via-blue-400/10 to-transparent",
    status: "Live",
    github: "https://github.com/TRONGTIN0803/AI-Prompt-Manager",
    demo: "https://phamtrongtin-ai-prompt-manager.vercel.app",
  },
  {
    title: "Creator Dashboard",
    description:
      "A command center for content pipelines, publishing cadence, and audience insight.",
    tags: ["React", "Analytics", "SaaS"],
    icon: LayoutDashboard,
    gradient: "from-cyan-400/20 via-indigo-500/10 to-transparent",
    status: "Planned",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Workflow Tool",
    description:
      "Composable automations connecting ideas, models, and repeatable creator outcomes.",
    tags: ["Workflow", ".NET", "LLM"],
    icon: Blocks,
    gradient: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    status: "Research",
    github: "#",
    demo: "#",
  },
];

export const nowPanels = [
  {
    title: "Currently Learning",
    items: ["ReactJS", "NextJS", "AI systems"],
    icon: Sparkles,
  },
  {
    title: "Currently Building",
    items: ["AI Prompt Manager", "Creator workflows", "Personal brand"],
    icon: Layers3,
  },
  {
    title: "Current Goals",
    items: ["Improving English", "Building audience", "Ship modern products"],
    icon: Target,
  },
];

export const stack = [
  { name: ".NET", icon: Code2 },
  { name: "SQL Server", icon: Database },
  { name: "ReactJS", icon: Layers3 },
  { name: "NextJS", icon: Sparkles },
  { name: "TailwindCSS", icon: LayoutDashboard },
  { name: "AI Workflow", icon: BrainCircuit },
  { name: "Git/GitHub", icon: GitBranch },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/", handle: "Code and experiments" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", handle: "Professional profile" },
  { label: "Instagram", href: "https://www.instagram.com/", handle: "Build in public" },
  { label: "Email", href: "mailto:hello@tinpham.dev", handle: "hello@tinpham.dev" },
];
