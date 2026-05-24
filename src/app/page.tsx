import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Now } from "@/components/sections/now";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tin Pham",
  jobTitle: ".NET Developer",
  description:
    ".NET Developer building AI systems, creator workflows, and modern web products.",
  url: "https://tinpham.dev",
  knowsAbout: [".NET", "ReactJS", "NextJS", "AI workflows", "SQL Server"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <div className="section-rule h-px" />
        <About />
        <Projects />
        <Now />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
