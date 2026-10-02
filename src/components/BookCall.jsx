import { Pill } from "./ui/Actions.jsx";
import { CalIcon } from "./ui/Icons.jsx";
import { CAL_LINK, CAL_URL } from "../content/routing.js";

// A booking pill: opens the Cal.com pop-up (CalPopup) with JS, goes to the Cal.com page without it.
export default function BookCall({ children = "Book a 30-minute call", tone = "dark", icon = false }) {
  return (
    <Pill href={CAL_URL} tone={tone} data-cal-link={CAL_LINK}>
      {icon && <CalIcon />}
      {children}
    </Pill>
  );
}
