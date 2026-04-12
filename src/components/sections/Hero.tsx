"use client";
import { useEffect, useRef, useState } from "react";
import { meta } from "@/data";

export default function Hero() {
  const [text, setText] = useState("");
  const state = useRef({ pi:0, ci:0, del:false });

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const { pi, ci, del } = state.current;
      const ph = meta.roles[pi];
      if (!del) {
        const next = ci+1; setText(ph.slice(0,next));
        if (next===ph.length) { state.current.del=true; t=setTimeout(tick,1800); }
        else { state.current.ci=next; t=setTimeout(tick,88); }
      } else {
        const next = ci-1; setText(ph.slice(0,next));
        if (next===0) { state.current.del=false; state.current.pi=(pi+1)%meta.roles.length; state.current.ci=0; t=setTimeout(tick,120); }
        else { state.current.ci=next; t=setTimeout(tick,48); }
      }
    };
    t = setTimeout(tick, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",position:"relative",zIndex:10,padding:"0 24px"}}>
      <div style={{maxWidth:860,width:"100%",margin:"0 auto"}}>

        <div className="hero-avatar hero-el-1"><span>PB</span></div>

        <div className="hero-badge hero-el-2">
          <span className="pulse-dot" />
          Open to AI &amp; ML Roles &amp; Internships
        </div>

        <h1 className="hero-name hero-el-3" style={{marginBottom:20}}>
          Priyanshu<br/>Bajpai
        </h1>

        <div className="hero-el-4" style={{height:24,marginBottom:20}}>
          <span style={{fontSize:14,letterSpacing:".04em",color:"var(--muted)"}}>{text}</span>
          <span style={{color:"#5566ff",animation:"blink .7s infinite"}}>|</span>
        </div>

        <p className="hero-el-5" style={{maxWidth:460,margin:"0 auto 40px",color:"var(--muted)",fontSize:14,lineHeight:1.9}}>
          Final year CSE student (Cybersecurity &amp; Digital Forensics) at DIT Dehradun — with a deep self-driven passion for AI and Machine Learning.
        </p>

        <div className="hero-el-6" style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="#contact"  className="btn-secondary">Get in Touch</a>
          <a href="#" className="btn-accent" onClick={e=>{e.preventDefault();alert("Resume coming soon!");}}>↡ Resume</a>
        </div>
      </div>

      <div className="hero-el-7" style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,color:"var(--dim)",fontSize:10,letterSpacing:".12em",textTransform:"uppercase"}}>
        <div style={{width:1,height:36,background:"linear-gradient(to bottom,rgba(255,255,255,.3),transparent)"}} className="scroll-hint" />
        Scroll
      </div>
    </section>
  );
}
