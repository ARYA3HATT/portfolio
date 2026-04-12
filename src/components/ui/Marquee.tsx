import { marqueeItems } from "@/data";
const doubled = [...marqueeItems, ...marqueeItems];
export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((t,i) => (
          <div key={i} className="marquee-item">
            <span style={{color:"var(--accent)",fontSize:4,opacity:.5}}>●</span>{t}
          </div>
        ))}
      </div>
    </div>
  );
}
