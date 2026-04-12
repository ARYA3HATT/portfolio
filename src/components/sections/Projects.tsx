"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data";
import ProjectCard from "@/components/ui/ProjectCard";

const FILTERS = [{id:"all",label:"All"},{id:"ml",label:"Machine Learning"},{id:"cyber",label:"Cybersecurity"},{id:"fs",label:"Full-Stack"},{id:"data",label:"Data Science"}];
import type { Variants } from "framer-motion";
const fi: Variants = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}} };

export default function Projects() {
  const [active, setActive] = useState("all");
  const counts = Object.fromEntries(FILTERS.map(f=>[f.id, f.id==="all"?projects.length:projects.filter(p=>p.cat===f.id).length]));
  const visible = active==="all"?projects:projects.filter(p=>p.cat===active);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{textAlign:"center",marginBottom:44}}>
          <div className="section-eyebrow">// 03 — Projects</div>
          <h2 className="section-title">Selected <em>Work</em></h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:44}}>
          {FILTERS.map(f=>(
            <button key={f.id} onClick={()=>setActive(f.id)}
              style={{display:"flex",alignItems:"center",gap:6,padding:"7px 16px",fontSize:11,letterSpacing:".06em",border:`1px solid ${active===f.id?"var(--text)":"var(--border)"}`,background:active===f.id?"var(--text)":"transparent",color:active===f.id?"var(--bg)":"var(--muted)",cursor:"pointer",fontFamily:"'DM Mono',monospace",transition:"all .2s"}}>
              {f.label}
              <span style={{fontSize:10,padding:"1px 6px",borderRadius:8,background:active===f.id?"rgba(0,0,0,.2)":"var(--bg3)",color:active===f.id?"inherit":"var(--dim)"}}>{counts[f.id]}</span>
            </button>
          ))}
        </motion.div>

        <motion.div layout style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:1,background:"var(--border)"}}>
          <AnimatePresence mode="popLayout">
            {visible.map(p=>(
              <motion.div key={p.id} layout initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.97}} transition={{duration:.35,ease:[.16,1,.3,1]}}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
