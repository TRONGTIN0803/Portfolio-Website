import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tinpham.dev"),
  title: {
    default: "Tin Pham | AI Systems & Modern Web Products",
    template: "%s | Tin Pham",
  },
  description:
    ".NET Developer building AI systems, creator workflows, and modern web products.",
  keywords: [
    "Tin Pham",
    ".NET Developer",
    "AI systems",
    "creator workflows",
    "Next.js developer",
  ],
  openGraph: {
    title: "Tin Pham | Developer Operating System",
    description:
      ".NET Developer building AI systems, creator workflows, and modern web products.",
    type: "website",
    images: [{ url: "/images/hero-system.png", width: 1536, height: 864 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin Pham | AI Systems & Modern Web Products",
    description:
      ".NET Developer building AI systems, creator workflows, and modern web products.",
    images: ["/images/hero-system.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
