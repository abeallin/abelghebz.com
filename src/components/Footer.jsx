import Container from "./Container.jsx";
import SocialRow from "./SocialRow.jsx";
import { profile } from "../content/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-[15px] text-body">
          <span className="font-semibold text-ink">{profile.name}</span> · {profile.location}
        </p>
        <SocialRow />
      </Container>
    </footer>
  );
}
