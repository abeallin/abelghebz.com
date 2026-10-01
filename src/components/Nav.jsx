import Link from "next/link";
import Container from "./Container.jsx";
import { NavLink } from "./ui/Actions.jsx";
import { profile, nav } from "../content/profile.js";

// Four short links fit on phones as a second row, so there is no menu dialog (planning ruling, 1 Oct 2026).
export default function Nav() {
  return (
    <header className="pt-6 sm:pt-8">
      <Container className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <Link href="/" className="text-[16px] font-semibold text-ink">
          {profile.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] text-body">
            {nav.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
