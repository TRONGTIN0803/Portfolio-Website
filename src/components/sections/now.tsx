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
            title="Current operating rhythm."
            description="What I am learning, shipping, and improving while building a stronger product engineering practice."
          />
        </Reveal>
        <Reveal delay={0.1} className="relative mt-12 overflow-hidden rounded-lg border border-white/10 bg-card p-5 text-white sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(100deg,transparent,rgba(124,92,255,0.22),transparent)]" />
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(124,92,255,.8)]" />
              <p className="font-mono text-xs uppercase tracking-normal text-white/70">
                Current Cycle
              </p>
            </div>
            <Badge className="border-white/10 bg-white/10 text-white">Active / iterating</Badge>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {nowPanels.map((panel, index) => {
              const Icon = panel.icon;
              return (
                <div
                  key={panel.title}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-4 text-violet-300" />
                    <h3 className="text-sm font-semibold text-white">{panel.title}</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {panel.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-white/66">
                        <span className="font-mono text-[10px] text-white/35">
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
