import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { socials } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-24 pt-20 sm:pb-32 sm:pt-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-lg border border-white/10 bg-card px-6 py-12 shadow-[0_35px_120px_-80px_rgba(0,0,0,0.9)] sm:px-12 sm:py-16">
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(100deg,transparent,rgba(124,92,255,0.24),transparent)]" />
          <p className="label mb-5">05 / Contact</p>
          <div className="relative flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl">
                Let&apos;s build something useful and sharp.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted">
                Open to conversations about software, AI workflows, creator
                systems, and thoughtful product ideas.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:w-[25rem]">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-violet-300/30 hover:bg-violet-500/12"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                    {social.label}
                    <ArrowUpRight className="size-4 text-violet-200/50 transition group-hover:text-violet-200" />
                  </div>
                  <p className="mt-2 text-xs text-muted">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
