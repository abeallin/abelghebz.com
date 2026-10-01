// Based on Linear's customer story facts row (linear.app/customers/ramp).
export default function FactsRow({ facts, live = [], size = "sm" }) {
  const big = size === "lg";
  return (
    <dl className={`grid gap-x-6 gap-y-3 ${big ? "grid-cols-2 border-y border-rule py-4 md:grid-cols-4" : "mt-4 grid-cols-2 sm:grid-cols-3"}`}>
      {facts.map((f) => (
        <div key={f.label}>
          <dt className="font-mono text-[12.5px] text-muted">{f.label}</dt>
          <dd className={`font-semibold text-ink ${big ? "text-[16px]" : "text-[14.5px]"}`}>{f.value}</dd>
        </div>
      ))}
      {live.length > 0 && (
        <div>
          <dt className="font-mono text-[12.5px] text-muted">Live</dt>
          <dd className={`flex flex-wrap gap-x-3 font-semibold text-ink ${big ? "text-[16px]" : "text-[14.5px]"}`}>
            {live.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="link-underline">
                {l.label}
              </a>
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
}
