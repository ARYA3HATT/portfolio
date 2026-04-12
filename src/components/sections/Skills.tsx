"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data";

import type { Variants } from "framer-motion";
const fi: Variants = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}} };

export default function Skills() {
  const [active, setActive] = useState("ml");
  const tab = skills.find(s=>s.id===active)??skills[0];

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{textAlign:"center",marginBottom:56}}>
          <div className="section-eyebrow">// 02 — Skills</div>
          <h2 className="section-title">What I <em>Build With</em></h2>
        </motion.div>

        <div style={{display:"grid",gridTemplateColumns:"clamp(160px,20%,200px) 1fr",gap:40,alignItems:"start"}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi}
            style={{display:"flex",flexDirection:"column",gap:2,position:"sticky",top:120}}>
            {skills.map(s => (
              <button key={s.id} onClick={()=>setActive(s.id)}
                style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 14px",fontSize:12,textAlign:"left",cursor:"pointer",background:"transparent",border:"none",borderLeft:`2px solid ${active===s.id?"var(--accent)":"transparent"}`,backgroundColor:active===s.id?"rgba(255,255,255,.03)":"transparent",color:active===s.id?"var(--text)":"var(--muted)",transition:"all .2s",fontFamily:"'DM Mono',monospace"}}>
                <span>{s.label}</span>
                <span style={{fontSize:10,padding:"2px 6px",borderRadius:8,background:active===s.id?"#0d1133":"var(--bg3)",color:active===s.id?"#7799ff":"var(--dim)"}}>{s.chips.length}</span>
              </button>
            ))}
          </motion.div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.3,ease:[.16,1,.3,1]}}>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:26,letterSpacing:"-.02em",marginBottom:8,color:"var(--text)"}}>{tab.label}</h3>
                <p style={{fontSize:12,lineHeight:1.8,marginBottom:22,color:"var(--muted)"}}>{tab.desc}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {tab.chips.map(c=><span key={c} className="skill-chip">{c}</span>)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
