import { meta } from "@/data";
export default function Footer() {
  return (
    <footer className="footer">
      <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:13,color:"var(--dim)"}}>{meta.name}</span>
      <span style={{fontSize:11,letterSpacing:".06em",color:"var(--dim)"}}>© 2026 — Built with Next.js &amp; intent</span>
    </footer>
  );
}
