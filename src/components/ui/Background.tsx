"use client";
import { useEffect, useRef } from "react";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Background() {
  const slRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (slRef.current) {
        slRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(68,102,255,.06), transparent 70%)`;
      }
    };
    document.addEventListener("mousemove", fn);
    return () => document.removeEventListener("mousemove", fn);
  }, []);

  return (
    <>
      {/* Spotlight */}
      <div id="spotlight-el" ref={slRef} style={{ position:"fixed", inset:0, zIndex:1, pointerEvents:"none" }} />

      {/* Orbs + particles */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <ParticleBackground />
      </div>

      {/* Film grain */}
      <div className="grain-el" style={{
        position:"fixed", inset:0, zIndex:1, pointerEvents:"none", opacity:.25,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`
      }} />
    </>
  );
}
