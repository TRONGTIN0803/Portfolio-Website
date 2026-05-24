import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Tin Pham. Building in public.</p>
        <p className="font-mono text-xs">SYSTEM STATUS: LEARNING / SHIPPING / ITERATING</p>
      </Container>
    </footer>
  );
}
