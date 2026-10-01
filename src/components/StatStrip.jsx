// Key numbers at the top of a case study, based on the App Store's stat strip (ratings, chart, age).
// Only projects with real figures have one; nothing here is estimated.
export default function StatStrip({ stats }) {
  if (!stats?.length) return null;
  return (
    <ul aria-label="Key numbers" className="mt-8 grid border-y border-rule sm:grid-cols-3">
      {stats.map((s, i) => (
        <li key={s.label} className={`py-5 ${i > 0 ? "border-t border-rule sm:border-l sm:border-t-0 sm:pl-6" : "sm:pr-6"}`}>
          <span className="block font-display text-[clamp(34px,4vw,46px)] leading-none tracking-[-0.02em] text-ink">{s.value}</span>
          <span className="mt-2 block text-[15px] leading-[1.45] text-body">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
