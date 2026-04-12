"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { meta } from "@/data";

import type { Variants } from "framer-motion";
const fi: Variants = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}} };

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});

  const copyEmail = () => {
    navigator.clipboard.writeText(meta.email).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);});
  };
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name||!form.email||!form.message){alert("Please fill in name, email and message.");return;}
    window.location.href=`mailto:${meta.email}?subject=${encodeURIComponent(form.subject||"Portfolio Inquiry")}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
  };

  const links = [
    {label:"Email",    value:copied?"Copied! ✓":meta.email,       action:copyEmail, href:undefined},
    {label:"LinkedIn", value:"priyanshu-bajpai",                   action:undefined, href:meta.linkedin},
    {label:"GitHub",   value:"ARYA3HATT",                          action:undefined, href:meta.github},
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{textAlign:"center",marginBottom:56}}>
          <div className="section-eyebrow">// 04 — Contact</div>
          <h2 className="section-title">Let&apos;s <em>Talk</em></h2>
        </motion.div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56}}>
          <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"7px 13px",border:"1px solid var(--borderl)",fontSize:11,color:"var(--muted)",marginBottom:22}}>
              <span className="pulse-dot" style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",animation:"pulse-dot 2s infinite",flexShrink:0}} />
              Available for AI/ML roles &amp; internships
            </div>
            <p style={{color:"var(--muted)",lineHeight:1.9,marginBottom:32,fontSize:14}}>
              Actively looking for opportunities in AI and Machine Learning. Full-time role, internship, or interesting project — I&apos;d love to hear from you.
            </p>
            <div style={{borderTop:"1px solid var(--border)"}}>
              {links.map(l=>{
                const inner = (
                  <div className="contact-row" style={{borderTop:"none"}}>
                    <div>
                      <span style={{display:"block",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"var(--dim)",marginBottom:3}}>{l.label}</span>
                      <span style={{fontSize:13,color:copied&&l.label==="Email"?"#4ade80":"var(--muted)"}}>{l.value}</span>
                    </div>
                    <span className="contact-arr">↗</span>
                  </div>
                );
                return l.href
                  ? <a key={l.label} href={l.href} target="_blank" rel="noopener" style={{textDecoration:"none",display:"block"}}>{inner}</a>
                  : <div key={l.label} onClick={l.action} style={{cursor:"pointer"}}>{inner}</div>;
              })}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{once:true,margin:"-40px"}} variants={fi} style={{transitionDelay:".1s"}}>
            <form onSubmit={send} style={{display:"flex",flexDirection:"column",gap:10}}>
              <input type="text" placeholder="Your name" className="cf-input" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
              <input type="email" placeholder="Your email" className="cf-input" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />
              <input type="text" placeholder="Subject" className="cf-input" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} />
              <textarea placeholder="Your message" rows={5} className="cf-input" style={{resize:"none"}} value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />
              <button type="submit" className="btn-primary" style={{justifyContent:"center"}}>Send Message →</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
