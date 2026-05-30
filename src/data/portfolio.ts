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
  { value: "2+", label: "Years building with .NET" },
  { value: "3", label: "Live product experiments" },
  { value: "AI", label: "Workflow and product focus" },
];

export const aboutCards = [
  {
    title: "Engineering",
    copy: ".NET developer with a reliability-first backend foundation and a growing full-stack product lens.",
    icon: Code2,
  },
  {
    title: "Exploration",
    copy: "Deepening React, Next.js, AI workflows, and creator systems through public, usable projects.",
    icon: BrainCircuit,
  },
  {
    title: "Direction",
    copy: "Focused on AI products, productivity systems, creator tooling, and interfaces with real utility.",
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
    gradient: "from-violet-500/24 via-card to-teal-500/10",
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
    gradient: "from-violet-500/18 via-card to-violet-400/10",
    status: "Live",
    github: "https://github.com/TRONGTIN0803/Creator-Dashboard",
    demo: "https://phamtrongtin-creator-dashboard.vercel.app/",
  },
  {
    title: "AI Workflow Tool",
    description:
      "Composable automations connecting ideas, models, and repeatable creator outcomes.",
    tags: ["Workflow", ".NET", "LLM"],
    icon: Blocks,
    gradient: "from-teal-500/16 via-card to-violet-500/14",
    status: "Live",
    github: "https://github.com/TRONGTIN0803/AI-Workflow-Tool",
    demo: "https://phamtrongtin-ai-workflow-tool.vercel.app/",
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
  { label: "GitHub", href: "https://github.com/TRONGTIN0803", handle: "@TRONGTIN0803" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tin-pham-380185411/",
    handle: "Tin Pham",
  },
  { label: "Instagram", href: "https://www.instagram.com/tinthebuilder", handle: "@tinthebuilder" },
  {
    label: "Email",
    href: "mailto:phamtrongtin0803@gmail.com",
    handle: "phamtrongtin0803@gmail.com",
  },
];
