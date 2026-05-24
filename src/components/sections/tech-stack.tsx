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
            title="Tools powering the system."
            description="A backend foundation evolving into full-stack, automation-first product engineering."
          />
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Reveal key={tool.name} delay={index * 0.045}>
                <div className="group flex items-center gap-3 rounded-2xl border border-white/[0.075] bg-white/[0.025] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-violet-400/[0.06]">
                  <Icon className="size-4 text-neutral-500 transition group-hover:text-violet-300" />
                  <span className="text-sm text-neutral-300 transition group-hover:text-white">
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
