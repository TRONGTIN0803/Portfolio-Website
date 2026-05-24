import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/portfolio";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.05] bg-background/72 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Tin Pham home">
          <span className="flex size-8 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/10 font-mono text-xs text-violet-200">
            TP
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-neutral-200 sm:block">
            Tin Pham
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/[0.045] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="secondary" className="h-10 px-4">
          <a href="#contact">
            Connect
            <ArrowUpRight className="size-3.5" />
          </a>
        </Button>
      </Container>
    </header>
  );
}
