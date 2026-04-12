"use client";
import { useEffect, useState } from "react";
import Background  from "@/components/ui/Background";
import Cursor      from "@/components/ui/Cursor";
import ScrollUtils from "@/components/ui/ScrollUtils";
import Nav         from "@/components/layout/Nav";
import CmdPalette  from "@/components/ui/CmdPalette";
import Hero        from "@/components/sections/Hero";
import Marquee     from "@/components/ui/Marquee";
import About       from "@/components/sections/About";
import OpenTo      from "@/components/sections/OpenTo";
import Skills      from "@/components/sections/Skills";
import Projects    from "@/components/sections/Projects";
import Contact     from "@/components/sections/Contact";
import Footer      from "@/components/layout/Footer";

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (e.key==="/" && !cmdOpen && tag!=="INPUT" && tag!=="TEXTAREA") { e.preventDefault(); setCmdOpen(true); }
      if ((e.metaKey||e.ctrlKey) && e.key==="k") { e.preventDefault(); setCmdOpen(v=>!v); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [cmdOpen]);

  return (
    <main className="relative min-h-screen">
      <Background />
      <Cursor />
      <ScrollUtils />
      <Nav onCmd={() => setCmdOpen(true)} />
      <CmdPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <OpenTo />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
