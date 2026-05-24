import Image from "next/image";
import { ArrowRight, Github, Linkedin, Radio } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-16" aria-labelledby="hero-title">
      <div className="grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_50%_15%,rgba(105,88,252,0.16),transparent_55%)]" />
      <Container className="relative flex min-h-[calc(100vh-4rem)] items-center py-20 lg:py-28">
        <Image
          src="/images/hero-system.png"
          alt=""
          fill
          priority
          className="pointer-events-none -z-10 object-cover object-[70%_center] opacity-55 [mask-image:linear-gradient(to_right,transparent_3%,rgba(0,0,0,.2)_24%,black_48%,black)] sm:opacity-70"
        />
        <div className="pointer-events-none absolute right-[12%] top-[36%] -z-10 size-56 animate-pulse-glow rounded-full bg-violet-500/10 blur-3xl" />
        <div className="max-w-3xl">
          <Reveal immediate>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-4 py-2 text-xs text-violet-200">
              <Radio className="size-3.5 text-violet-300" />
              <span className="font-mono tracking-wide">BUILDING IN PUBLIC</span>
            </div>
          </Reveal>
          <Reveal immediate delay={0.08}>
            <p className="mb-5 text-lg font-medium tracking-tight text-neutral-300">
              Tin Pham
            </p>
            <h1
              id="hero-title"
              className="text-balance text-[clamp(2.7rem,6.2vw,5.15rem)] font-semibold leading-[1.03] tracking-[-0.07em] text-white"
            >
              .NET Developer building{" "}
              <span className="bg-gradient-to-br from-white via-violet-100 to-violet-400 bg-clip-text text-transparent">
                AI systems
              </span>
              , creator workflows &amp; modern web products.
            </h1>
          </Reveal>
          <Reveal immediate delay={0.16}>
            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
              Designing practical systems at the intersection of engineering,
              automation, and the creator economy.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal immediate delay={0.24} className="mt-16 grid max-w-xl grid-cols-3 gap-2 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="surface rounded-2xl px-3 py-4 sm:px-5">
                <p className="text-xl font-semibold tracking-tight text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
