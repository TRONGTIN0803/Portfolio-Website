import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { socials } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-24 pt-20 sm:pb-32 sm:pt-28">
      <Container>
        <Reveal className="surface relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-28 -top-28 size-80 rounded-full bg-violet-500/10 blur-3xl" />
          <p className="label mb-5">05 / Contact</p>
          <div className="relative flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Let&apos;s build something useful.
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
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-white/[0.14] hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between text-sm text-white">
                    {social.label}
                    <ArrowUpRight className="size-4 text-neutral-600 transition group-hover:text-violet-300" />
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
