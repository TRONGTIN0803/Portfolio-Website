import Image from "next/image";
import { ArrowRight, Github, Linkedin, Radio, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden pt-16" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-40 bg-[linear-gradient(100deg,transparent,rgba(124,92,255,0.24),transparent)]" />
      <Container className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="min-w-0 max-w-full overflow-hidden">
          <Reveal immediate>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-card/80 px-4 py-2 text-xs text-violet-100 shadow-[0_18px_60px_-46px_rgba(0,0,0,0.85)]">
              <Radio className="size-3.5 text-violet-300" />
              <span className="font-mono uppercase tracking-normal">Available for product-minded teams</span>
            </div>
          </Reveal>

          <Reveal immediate delay={0.08}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-normal text-muted">
              Tin Pham / .NET Developer
            </p>
            <h1
              id="hero-title"
              className="max-w-xs break-words text-balance text-[2.35rem] font-semibold leading-[0.94] tracking-normal text-foreground [overflow-wrap:anywhere] sm:max-w-2xl sm:text-[clamp(3.1rem,7.2vw,6.7rem)] lg:max-w-4xl"
            >
              Building useful AI tools with a product engineer&apos;s eye.
            </h1>
          </Reveal>

          <Reveal immediate delay={0.16}>
            <div className="mt-8 max-w-xs border-l border-white/12 pl-5 sm:max-w-3xl">
              <p className="max-w-[18rem] break-words text-base leading-7 text-muted sm:max-w-2xl sm:text-lg">
                I turn backend foundations into polished web products: prompt
                workspaces, creator dashboards, and automation systems that feel
                clear, fast, and ready to use.
              </p>
              <div className="mt-7 grid min-w-0 gap-3 sm:flex sm:flex-wrap">
                <Button asChild className="w-72 max-w-full sm:w-auto">
                  <a href="#projects">
                    View Work
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" className="w-72 max-w-full sm:w-auto">
                  <a href="https://github.com/TRONGTIN0803" target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="secondary" className="w-72 max-w-full sm:w-auto">
                  <a
                    href="https://www.linkedin.com/in/tin-pham-380185411/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal immediate delay={0.24} className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/12 pt-4">
                <p className="text-3xl font-semibold tracking-normal text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal immediate delay={0.12} className="relative min-w-0 max-w-full overflow-hidden">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-black/50 p-3 shadow-[0_42px_110px_-64px_rgba(124,92,255,0.75)] lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900">
              <Image
                src="/images/hero-system.png"
                alt="Abstract product system preview"
                fill
                priority
                className="object-cover opacity-76 grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(18,22,24,0.74))]" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span className="rounded-full bg-white/92 px-3 py-1 font-mono text-[10px] uppercase tracking-normal text-neutral-950">
                  Product Lab
                </span>
                <span className="rounded-full bg-violet-500 px-3 py-1 font-mono text-[10px] uppercase tracking-normal text-white">
                  Live
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/14 bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="mb-8 flex items-center gap-2 text-xs text-white/70">
                  <Sparkles className="size-3.5 text-violet-300" />
                  <span>Current focus</span>
                </div>
                <p className="text-2xl font-semibold leading-tight tracking-normal">
                  AI workflow products that reduce repeated work.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
