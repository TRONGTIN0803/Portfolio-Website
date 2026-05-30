import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Tin Pham. Building in public.</p>
        <p className="font-mono text-xs uppercase tracking-normal text-violet-200/60">Learning / Shipping / Iterating</p>
      </Container>
    </footer>
  );
}
