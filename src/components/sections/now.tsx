import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { nowPanels } from "@/data/portfolio";

export function Now() {
  return (
    <section id="now" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="03 / Build In Public"
            title="A living development log."
            description="The operating dashboard behind my learning, building, and longer-term product direction."
          />
        </Reveal>
        <Reveal delay={0.1} className="surface relative mt-12 overflow-hidden rounded-3xl p-5 sm:p-8">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-300">
                Current Cycle
              </p>
            </div>
            <Badge className="text-emerald-300">ACTIVE / ITERATING</Badge>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {nowPanels.map((panel, index) => {
              const Icon = panel.icon;
              return (
                <div
                  key={panel.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-4 text-violet-300" />
                    <h3 className="text-sm font-medium text-neutral-200">{panel.title}</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {panel.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-muted">
                        <span className="font-mono text-[10px] text-neutral-600">
                          0{index + 1}.0{itemIndex + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
