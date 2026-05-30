import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCards } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="01 / About"
              title="A backend builder moving closer to complete product craft."
              description="My work sits between reliable engineering, AI-assisted workflows, and interfaces that make technical systems easier to trust."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="border-l border-white/12 pl-5 text-xl leading-9 tracking-normal text-violet-50/88 sm:text-2xl sm:leading-10">
              I am not trying to make a portfolio that only looks loud. I want the
              work to read like a system: clear decisions, visible shipping habit,
              and enough polish that people can picture the next product being real.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-card/74 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.045]">
                  <span className="mb-10 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-violet-200 transition group-hover:bg-violet-500 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-normal text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.copy}</p>
                  <p className="mt-10 font-mono text-[10px] uppercase tracking-normal text-violet-200/45">
                    MODULE 0{index + 1}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
