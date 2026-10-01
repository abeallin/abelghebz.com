// One option in the gallery: a label Abel can quote ("Hero · B"), the design it is based on, and the preview.
export default function Version({ id, title, source, note, dark = false, children }) {
  return (
    <article id={id} data-version={id} className="scroll-mt-6">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-[19px] font-semibold text-ink">{title}</h3>
        <p className="text-[14px] text-muted">Based on {source}</p>
      </div>
      {note && <p className="mb-3 max-w-[760px] text-[15px] text-body">{note}</p>}
      <div className={`overflow-hidden rounded-2xl border border-rule ${dark ? "bg-ink" : "bg-paper"}`}>{children}</div>
    </article>
  );
}
