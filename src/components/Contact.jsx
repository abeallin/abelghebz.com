import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import CalEmbed from "./CalEmbed.jsx";
import EnquiryRouter from "./EnquiryRouter.jsx";

export default function Contact() {
  return (
    <Container as="section" id="contact" aria-labelledby="contact-label" className="py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-6">
        <SectionLabel id="contact-label">Contact</SectionLabel>
        <div>
          <p className="font-display text-[clamp(38px,5vw,52px)] leading-[1.05] tracking-[-0.01em] text-ink">Let&apos;s talk</p>
          <p className="mb-8 mt-3 max-w-[620px] text-[19px] leading-[1.55] text-body">
            Book 15 minutes, or tell me what you need and I&apos;ll reply by email.
          </p>
          {/* Full width so Cal.com uses its three-pane layout; at half width it falls back to one long column. */}
          <CalEmbed />
          <div className="mt-14 grid gap-6 border-t border-rule pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] lg:gap-10">
            <div>
              <h3 className="font-display text-[28px] leading-[1.15] text-ink">Or send an enquiry</h3>
              <p className="mt-2 text-[16px] text-body">Hiring, a project, or something else: say which and it reaches the right inbox.</p>
            </div>
            <EnquiryRouter />
          </div>
        </div>
      </div>
    </Container>
  );
}
