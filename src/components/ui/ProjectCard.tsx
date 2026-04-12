"use client";
import { motion } from "framer-motion";
import { Project } from "@/data";
import ProjectVis from "@/components/ui/ProjectVis";

const GHIcon = () => <svg viewBox="0 0 24 24" width="12" height="12" style={{fill:"currentColor",flexShrink:0}}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>;
const CodeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const ExtIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;

export default function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, desc, stack, repo, featured, num } = project;
  return (
    <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-40px"}} transition={{duration:.7,ease:[.16,1,.3,1]}}
      className="project-card" onClick={()=>window.open(repo,"_blank")}>
      <div className="project-vis">
        <ProjectVis project={project} />
        <span style={{position:"absolute",top:12,left:14,fontSize:10,letterSpacing:".12em",fontFamily:"'Syne',sans-serif",fontWeight:700,color:"rgba(255,255,255,.2)",pointerEvents:"none",zIndex:2}}>{num}</span>
        {featured && <span style={{position:"absolute",top:12,right:12,background:"rgba(68,102,255,.15)",border:"1px solid rgba(68,102,255,.3)",color:"#7799ff",fontSize:9,letterSpacing:".1em",textTransform:"uppercase",padding:"3px 8px",zIndex:2,pointerEvents:"none"}}>Featured</span>}
        <a href={repo} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} className="project-gh"><GHIcon /></a>
      </div>
      <div className="project-body">
        <div className="project-cat">{tagline}</div>
        <div className="project-name">{name}</div>
        <p className="project-desc">{desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
          {stack.map(s=><span key={s} className="project-tag">{s}</span>)}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:6}}>
          <a href={repo} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} className="project-btn"><CodeIcon /> Code</a>
          <a href={repo} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} className="project-btn demo"><ExtIcon /> Demo</a>
        </div>
      </div>
    </motion.div>
  );
}
