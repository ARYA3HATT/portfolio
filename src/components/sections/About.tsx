"use client";
import { motion } from "framer-motion";
import { about } from "@/data";

import type { Variants } from "framer-motion";
const fi: Variants = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}} };

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{textAlign:"center",marginBottom:56}}>
          <div className="section-eyebrow">// 01 — About</div>
          <h2 className="section-title">Who I <em>Am</em></h2>
        </motion.div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:56,alignItems:"start"}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{transitionDelay:".1s"}}>
            {about.bio.map((p,i) => (
              <p key={i} style={{color:"var(--text2)",lineHeight:2,marginBottom:16,fontSize:14}}
                dangerouslySetInnerHTML={{__html:p.replace(/\*\*(.+?)\*\*/g,'<strong style="color:var(--text);font-weight:500">$1</strong>')}} />
            ))}
            <a href="mailto:priyanshubajpai101@gmail.com" className="btn-primary" style={{marginTop:24,display:"inline-flex"}}>Get in Touch ↗</a>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{transitionDelay:".2s"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:1,background:"rgba(255,255,255,.04)"}}>
              {about.cards.map(c => (
                <div key={c.label} className="glass-card" style={{padding:"18px 16px"}}>
                  <div style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:"var(--dim)",marginBottom:6}}>{c.label}</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:13,color:"var(--text2)",lineHeight:1.3}}>{c.value}</div>
                </div>
              ))}
              <div className="glass-card" style={{padding:"18px 16px",gridColumn:"1/-1"}}>
                <div style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:"var(--dim)",marginBottom:6}}>Approach</div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:13,color:"var(--text2)",lineHeight:1.3}}>{about.approach}</div>
              </div>
              <div className="glass-card" style={{padding:"18px 16px",gridColumn:"1/-1"}}>
                <div style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:"var(--dim)",marginBottom:8}}>Currently Learning</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {about.learning.map(t=>(
                    <span key={t} style={{padding:"3px 9px",border:"1px solid var(--borderl)",fontSize:10,color:"var(--muted)"}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
