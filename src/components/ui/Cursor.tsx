"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    // Only run on desktop (hover-capable devices)
    if (window.matchMedia("(hover: none)").matches) return;

    // Create cursor dot
    const dot = document.createElement("div");
    dot.id = "cur-dot";
    dot.style.cssText = "position:fixed;top:-30px;left:-30px;width:7px;height:7px;background:var(--text);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:background .3s;";

    // Create cursor ring
    const ring = document.createElement("div");
    ring.id = "cur-ring";
    ring.style.cssText = "position:fixed;top:-30px;left:-30px;width:32px;height:32px;border:1px solid rgba(255,255,255,.25);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s;";

    // Create trail dots
    const TRAIL_COUNT = 7;
    const trails: HTMLDivElement[] = [];
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const t = document.createElement("div");
      t.style.cssText = `position:fixed;top:-30px;left:-30px;width:4px;height:4px;background:rgba(80,110,255,.4);border-radius:50%;pointer-events:none;z-index:9990;transform:translate(-50%,-50%);`;
      document.body.appendChild(t);
      trails.push(t);
    }

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    const trailPos = trails.map(() => ({ x: 0, y: 0 }));

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      // Smooth ring follow
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";

      // Trail
      let px = mx, py = my;
      trails.forEach((t, i) => {
        const tp = trailPos[i];
        const lag = 0.35 - i * 0.03;
        tp.x += (px - tp.x) * lag;
        tp.y += (py - tp.y) * lag;
        t.style.left    = tp.x + "px";
        t.style.top     = tp.y + "px";
        t.style.opacity = String((TRAIL_COUNT - i) / TRAIL_COUNT * 0.35);
        t.style.transform = `translate(-50%,-50%) scale(${1 - i * 0.1})`;
        px = tp.x; py = tp.y;
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Big ring on hover over interactive elements
    const onEnter = () => {
      ring.style.width        = "52px";
      ring.style.height       = "52px";
      ring.style.borderColor  = "rgba(255,255,255,.42)";
    };
    const onLeave = () => {
      ring.style.width        = "32px";
      ring.style.height       = "32px";
      ring.style.borderColor  = "rgba(255,255,255,.25)";
    };
    const addListeners = () => {
      document.querySelectorAll("a,button,.hover-big").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();
    // Re-attach when DOM changes (for dynamically rendered cards)
    const obs = new MutationObserver(addListeners);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      obs.disconnect();
      dot.remove();
      ring.remove();
      trails.forEach(t => t.remove());
    };
  }, []);

  return null; // purely imperative, no JSX needed
}
