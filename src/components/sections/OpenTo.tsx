"use client";
import { motion } from "framer-motion";
import { openTo } from "@/data";

import type { Variants } from "framer-motion";
const fi: Variants = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}} };

export default function OpenTo() {
  return (
    <section style={{position:"relative",zIndex:10,borderTop:"1px solid var(--border)",padding:"100px 0"}}>
      <div className="section-inner">
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{textAlign:"center",marginBottom:44}}>
          <div className="section-eyebrow">// What I'm Looking For</div>
          <h2 className="section-title">Open <em>To</em></h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi}
          style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:1,background:"rgba(255,255,255,.04)"}}>
          {openTo.map((o,i) => (
            <motion.div key={i} whileHover={{y:-5}} transition={{type:"spring",stiffness:300,damping:25}}
              className="glass-card" style={{padding:"36px 28px",textAlign:"center"}}>
              <span style={{fontSize:28,display:"block",marginBottom:14}}>{o.icon}</span>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:16,color:"var(--text)",marginBottom:10,letterSpacing:"-.02em"}}>{o.title}</div>
              <div style={{fontSize:12,color:"var(--muted)",lineHeight:1.8}}>{o.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
