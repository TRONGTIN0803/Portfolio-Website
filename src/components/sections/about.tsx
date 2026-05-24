import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCards } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="01 / About"
            title="Engineering foundations. Product curiosity. AI direction."
            description="I am developing the craft and systems required to turn ideas into thoughtful, useful digital products."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="surface group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.13]">
                  <span className="mb-8 flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-violet-300 transition group-hover:bg-violet-400/10">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
