"use client";
import { useEffect, useRef, useState } from "react";

const LINKS = ["About","Skills","Projects","Contact"];

export default function Nav({ onCmd }: { onCmd: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [menu, setMenu]         = useState(false);
  const [dark, setDark]         = useState(true);
  const inkRef  = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const cur = [...LINKS].reverse().find(l => {
        const el = document.getElementById(l.toLowerCase());
        return el && window.scrollY >= el.offsetTop - 220;
      })?.toLowerCase() ?? "";
      setActive(cur);
    };
    window.addEventListener("scroll", fn); fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!inkRef.current || !listRef.current) return;
    const a = listRef.current.querySelector(`[data-s="${active}"]`) as HTMLElement|null;
    if (a) { inkRef.current.style.left=a.offsetLeft+"px"; inkRef.current.style.width=a.offsetWidth+"px"; inkRef.current.style.opacity="1"; }
    else inkRef.current.style.opacity="0";
  }, [active]);

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setDark(!dark);
  };

  return (
    <>
      <nav className={`nav ${scrolled?"scrolled":""}`}>
        <a href="#hero" className="nav-logo">PB</a>

        <ul ref={listRef} className="mobile-hide" style={{display:"flex",gap:0,listStyle:"none",position:"relative",alignItems:"center"}}>
          {LINKS.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} data-s={l.toLowerCase()} className={`nav-link ${active===l.toLowerCase()?"active":""}`}>{l}</a>
            </li>
          ))}
          <div ref={inkRef} className="nav-ink" />
        </ul>

        <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
          <button onClick={toggleTheme} className="nav-btn mobile-hide">{dark?"☀ Theme":"☾ Theme"}</button>
          <button onClick={onCmd} className="nav-btn accent mobile-hide">⌘ Search</button>
          <button onClick={() => setMenu(v=>!v)} className="nav-btn mobile-show" style={{width:"38px",justifyContent:"center",padding:0}}>{menu?"✕":"☰"}</button>
        </div>
      </nav>

      <div className={`mobile-menu ${menu?"open":""}`}>
        {LINKS.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setMenu(false)}>{l}</a>)}
        <div className="mobile-menu-actions">
          <button onClick={()=>{toggleTheme();setMenu(false);}} className="nav-btn" style={{flex:1,justifyContent:"center"}}>{dark?"☀ Theme":"☾ Theme"}</button>
          <button onClick={()=>{onCmd();setMenu(false);}} className="nav-btn accent" style={{flex:1,justifyContent:"center"}}>⌘ Search</button>
        </div>
      </div>
    </>
  );
}
