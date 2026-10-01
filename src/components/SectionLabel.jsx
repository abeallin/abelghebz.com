// The small mono label that opens each home section (sentence case, never all-caps).
export default function SectionLabel({ id, children }) {
  return (
    <h2 id={id} className="font-mono text-[13px] leading-6 text-muted">
      {children}
    </h2>
  );
}
