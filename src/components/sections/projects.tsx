import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="02 / Projects"
              title="Selected systems with real product intent."
              description="Practical AI tools, creator workflows, and focused interfaces that show the direction I am building toward."
            />
            <Badge className="w-fit border-violet-400/25 bg-violet-500/14 text-violet-100">
              Selected work
            </Badge>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isLive = project.demo !== "#";
            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <article
                  className={cn(
                    "group relative grid overflow-hidden rounded-lg border border-white/10 bg-card/78 transition duration-300 hover:-translate-y-1 hover:border-violet-300/28 hover:bg-white/[0.035] md:grid-cols-[0.82fr_1.18fr]",
                    isLive && "cursor-pointer",
                  )}
                >
                  {isLive ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/40 focus-visible:ring-inset"
                    />
                  ) : null}
                  <div className={cn("relative min-h-72 overflow-hidden bg-gradient-to-br p-5", project.gradient)}>
                    <div className="grid-fade absolute inset-0 opacity-70" />
                    <div className="relative flex h-full min-h-64 flex-col justify-between rounded-lg border border-white/10 bg-background/55 p-5">
                      <div className="flex items-center justify-between">
                        <span className="flex size-11 items-center justify-center rounded-full bg-violet-500 text-white">
                          <Icon className="size-5" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-normal text-violet-100/60">
                          {project.status}
                        </span>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-normal text-violet-100/60">
                          Case 0{index + 1}
                        </p>
                        <div className="mt-4 h-1.5 w-24 rounded-full bg-violet-400" />
                      </div>
                    </div>
                    {isLive ? (
                      <span className="pointer-events-none absolute bottom-5 right-5 z-20 inline-flex items-center gap-1.5 rounded-full bg-violet-500 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
                        Open live demo
                        <ArrowUpRight className="size-3" />
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">{project.title}</h3>
                    <p className="mt-4 max-w-2xl flex-1 text-base leading-7 text-muted">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="relative z-20 mt-7 flex gap-3">
                      {project.github === "#" ? (
                        <button
                          type="button"
                          disabled
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted"
                        >
                          <Github className="size-3.5" />
                          GitHub
                        </button>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-violet-100 transition hover:border-violet-300/35 hover:text-white"
                        >
                          <Github className="size-3.5" />
                          GitHub
                        </a>
                      )}
                      {project.demo === "#" ? (
                        <button
                          type="button"
                          disabled
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted"
                        >
                          Live Demo
                          <ArrowUpRight className="size-3.5" />
                        </button>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-400"
                        >
                          Live Demo
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
