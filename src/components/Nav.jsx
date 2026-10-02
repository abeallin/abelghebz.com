import Link from "next/link";
import Container from "./Container.jsx";
import { NavLink, Pill } from "./ui/Actions.jsx";
import { profile, nav } from "../content/profile.js";

// Sticky on a paper background so the main action is always one tap away; html scroll-padding-top keeps anchors
// and focused elements clear of it. Four short links fit on phones as a second row, so there is no menu dialog.
export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule/70 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-3 text-[16px] font-semibold text-ink">
          <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-ink pt-0.5 font-display text-[17px] font-normal text-paper">
            AG
          </span>
          {profile.name}
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <nav aria-label="Main">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] text-body">
              {nav.map((item) => (
                <li key={item.label}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <span className="hidden sm:inline-flex">
            <Pill href="/#contact">Book a call</Pill>
          </span>
        </div>
      </Container>
    </header>
  );
}
