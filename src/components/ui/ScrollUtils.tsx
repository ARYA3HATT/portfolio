"use client";
import { useEffect, useState } from "react";
export default function ScrollUtils() {
  const [show, setShow] = useState(false);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const fn = () => {
      setProg(Math.min(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100,100));
      setShow(window.scrollY>400);
    };
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);
  return (
    <>
      <div style={{position:"fixed",top:0,left:0,zIndex:500,height:2,width:`${prog}%`,background:"linear-gradient(90deg,#4466ff,#9933ff,#ff33aa)",boxShadow:"0 0 8px rgba(100,100,255,.6)",transition:"width .05s linear"}} />
      <a href="#hero" style={{position:"fixed",bottom:36,right:36,zIndex:90,width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,border:"1px solid var(--borderl)",background:"rgba(8,8,8,.88)",color:"var(--muted)",textDecoration:"none",backdropFilter:"blur(8px)",transition:"opacity .3s, transform .3s",opacity:show?1:0,transform:show?"translateY(0)":"translateY(14px)",pointerEvents:show?"auto":"none"}}>↑</a>
    </>
  );
}
