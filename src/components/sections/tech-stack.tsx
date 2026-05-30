import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { stack } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="04 / Stack"
            title="A practical stack for modern product work."
            description="A backend foundation evolving into full-stack, automation-first product engineering."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Reveal key={tool.name} delay={index * 0.045}>
                <div className="group flex h-full min-h-24 items-center gap-3 bg-background px-5 py-4 transition duration-300 hover:bg-card">
                  <Icon className="size-4 text-violet-100/48 transition group-hover:text-violet-300" />
                  <span className="text-sm font-medium text-muted transition group-hover:text-foreground">
                    {tool.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
