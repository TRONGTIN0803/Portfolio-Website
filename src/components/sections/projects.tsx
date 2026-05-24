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
              title="Products in the pipeline."
              description="Scalable concepts for AI tools, creator workflows, and the product ecosystem I am building toward."
            />
            <Badge className="w-fit border-violet-300/15 bg-violet-300/[0.07] text-violet-200">
              FEATURED / PLACEHOLDER
            </Badge>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="surface group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-glow">
                  <div className={cn("relative h-48 overflow-hidden bg-gradient-to-br", project.gradient)}>
                    <div className="absolute inset-5 rounded-2xl border border-white/[0.08] bg-black/15 p-4 backdrop-blur-[1px]">
                      <div className="flex items-center justify-between">
                        <Icon className="size-5 text-violet-200" />
                        <span className="font-mono text-[10px] tracking-[0.18em] text-neutral-400">
                          {project.status}
                        </span>
                      </div>
                      <div className="mt-8 space-y-2">
                        <span className="block h-1.5 w-3/5 rounded-full bg-white/20" />
                        <span className="block h-1.5 w-4/5 rounded-full bg-white/10" />
                        <span className="block h-1.5 w-2/5 rounded-full bg-violet-300/25" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-medium tracking-tight text-white">{project.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="mt-7 flex gap-3">
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-neutral-400"
                      >
                        <Github className="size-3.5" />
                        GitHub
                      </button>
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-neutral-400"
                      >
                        Live Demo
                        <ArrowUpRight className="size-3.5" />
                      </button>
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
