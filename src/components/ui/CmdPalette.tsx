"use client";
import { useEffect, useRef, useState } from "react";
import { projects, meta } from "@/data";

export default function CmdPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState(""); const [sel, setSel] = useState(0); const inp = useRef<HTMLInputElement>(null);
  const goto = (id: string) => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); onClose(); };
  const pop  = (url: string) => { window.open(url,"_blank"); onClose(); };
  const ALL = [
    {ic:"About",   lb:"About Me",    ht:"Section", fn:()=>goto("about")},
    {ic:"Skills",  lb:"Skills",      ht:"Section", fn:()=>goto("skills")},
    {ic:"Work",    lb:"Projects",    ht:"Section", fn:()=>goto("projects")},
    {ic:"Contact", lb:"Contact",     ht:"Section", fn:()=>goto("contact")},
    ...projects.map(p=>({ic:p.num, lb:p.name, ht:"Project", fn:()=>pop(p.repo)})),
    {ic:"Email",   lb:"Send Email",  ht:"Contact", fn:()=>{window.location.href=`mailto:${meta.email}`;onClose();}},
    {ic:"LinkedIn",lb:"LinkedIn",    ht:"Social",  fn:()=>pop(meta.linkedin)},
    {ic:"GitHub",  lb:"GitHub",      ht:"Social",  fn:()=>pop(meta.github)},
    {ic:"Theme",   lb:"Toggle Theme",ht:"UI",      fn:()=>{const d=document.documentElement.getAttribute("data-theme")==="dark";document.documentElement.setAttribute("data-theme",d?"light":"dark");onClose();}},
  ];
  const F = ALL.filter(c=>c.lb.toLowerCase().includes(q.toLowerCase())||c.ht.toLowerCase().includes(q.toLowerCase()));
  useEffect(()=>{if(open){setQ("");setSel(0);setTimeout(()=>inp.current?.focus(),50);}}, [open]);
  useEffect(()=>setSel(0),[q]);
  const onKey=(e:React.KeyboardEvent)=>{
    if(e.key==="ArrowDown"){setSel(s=>Math.min(s+1,F.length-1));e.preventDefault();}
    if(e.key==="ArrowUp"){setSel(s=>Math.max(s-1,0));e.preventDefault();}
    if(e.key==="Enter"&&F[sel])F[sel].fn();
    if(e.key==="Escape")onClose();
  };
  if(!open) return null;
  return (
    <div className="cmd-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="cmd-box">
        <input ref={inp} value={q} onChange={e=>setQ(e.target.value)} onKeyDown={onKey} placeholder="Search sections, projects, links..." className="cmd-input" autoComplete="off" spellCheck={false} />
        <div style={{maxHeight:300,overflowY:"auto"}}>
          {F.map((it,i)=>(
            <div key={i} onMouseEnter={()=>setSel(i)} onClick={it.fn} className={`cmd-item${i===sel?" active":""}`}>
              <div className="cmd-icon">{it.ic}</div>
              <span style={{flex:1}}>{it.lb}</span>
              <span style={{fontSize:10,color:"var(--dim)",letterSpacing:".05em"}}>{it.ht}</span>
            </div>
          ))}
        </div>
        <div style={{padding:"9px 20px",borderTop:"1px solid var(--border)",display:"flex",gap:16,fontSize:10,color:"var(--dim)",letterSpacing:".05em"}}>
          <span>↑↓ navigate</span><span>↵ select</span><span>esc close</span>
        </div>
      </div>
    </div>
  );
}
