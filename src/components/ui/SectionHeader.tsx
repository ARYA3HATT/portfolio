import FadeIn from "@/components/ui/FadeIn";

export default function SectionHeader({ num, title, accent }: { num: string; title: string; accent: string }) {
  return (
    <FadeIn className="text-center mb-14">
      <div className="text-[11px] tracking-[.18em] uppercase mb-3" style={{ color:"var(--dim)" }}>{num}</div>
      <h2 className="font-syne font-black leading-[.92] tracking-[-0.04em]" style={{ fontSize:"clamp(38px,4.5vw,62px)", color:"var(--text)" }}>
        {title.split(accent)[0]}<em className="not-italic" style={{ color:"var(--dim)" }}>{accent}</em>{title.split(accent)[1]}
      </h2>
    </FadeIn>
  );
}
