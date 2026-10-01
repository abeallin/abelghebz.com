import { TechIcon } from "./ui/TechIcons.jsx";

// Technology chips with their marks where simple-icons has an exact one; text-only otherwise.
export default function StackChips({ items, tone = "paper", className = "mt-4" }) {
  const bg = tone === "paper" ? "bg-paper" : "bg-tile";
  return (
    <ul aria-label="Stack" className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((name) => (
        <li key={name} className={`inline-flex items-center gap-1.5 rounded-full ${bg} px-3 py-1 font-mono text-[12.5px] text-ink`}>
          <TechIcon name={name} />
          {name}
        </li>
      ))}
    </ul>
  );
}
