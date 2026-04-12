"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const cx = cv.getContext("2d")!;
    let W = 0, H = 0;
    const mp = { x: -999, y: -999 };

    const resize = () => {
      W = cv.width  = cv.parentElement?.offsetWidth  || window.innerWidth;
      H = cv.height = cv.parentElement?.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", (e) => { mp.x = e.clientX; mp.y = e.clientY; });

    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random()*1400, y: Math.random()*900,
      vx: (Math.random()-.5)*.44, vy: (Math.random()-.5)*.44,
      r: Math.random()*1.1+.4, a: Math.random()*.36+.08,
    }));

    let raf: number;
    const draw = () => {
      cx.clearRect(0, 0, W, H);
      for (const p of pts) {
        const dx = p.x-mp.x, dy = p.y-mp.y, dd = dx*dx+dy*dy;
        if (dd < 16000) { const d = Math.sqrt(dd), f=(126-d)/126*.6; p.vx+=dx/d*f*.04; p.vy+=dy/d*f*.04; }
        p.vx*=.997; p.vy*=.997; p.x+=p.vx; p.y+=p.vy;
        if (p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        cx.beginPath(); cx.arc(p.x,p.y,p.r,0,Math.PI*2);
        cx.fillStyle=`rgba(160,170,255,${p.a})`; cx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i+1; j < pts.length; j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if (d<145) { cx.beginPath(); cx.moveTo(pts[i].x,pts[i].y); cx.lineTo(pts[j].x,pts[j].y); cx.strokeStyle=`rgba(100,110,255,${(1-d/145)*.1})`; cx.lineWidth=.5; cx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
