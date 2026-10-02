// Opens with gallery Buttons A's dark call-to-action card (Dribbble 27429954, Alevtinka; 27050710, Wachid). Booking is a
// Cal.com pop-up from the card's pill (decision 0012), so no calendar sits on the page; the enquiry router follows.
import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import BookCall from "./BookCall.jsx";
import EnquiryRouter from "./EnquiryRouter.jsx";

export default function Contact() {
  return (
    <Container as="section" id="contact" aria-labelledby="contact-label" className="py-16 sm:py-20">
      <SectionLabel id="contact-label">Contact</SectionLabel>
      <div className="mt-6 rounded-[28px] bg-ink px-6 py-12 text-paper sm:px-12 sm:py-14">
        <p className="text-[15px] text-[#b9b5ac]">Lead roles and private work</p>
        <p className="mt-3 max-w-[640px] font-display text-[clamp(32px,4.4vw,52px)] leading-[1.06] tracking-[-0.01em]">
          Need a backend built, or a lead for your team?
        </p>
        <p className="mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#cfcbc2]">
          Pick a 30-minute slot that suits you, or send a few lines below and I&apos;ll reply by email.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BookCall tone="paper" icon />
          <a
            href="#enquiry"
            className="inline-flex items-center rounded-full border border-paper/40 px-5 py-2.5 text-[14.5px] font-medium text-paper transition-colors hover:bg-paper/10"
          >
            Send an enquiry
          </a>
        </div>
      </div>

      <div id="enquiry" className="mt-14 grid scroll-mt-6 gap-6 border-t border-rule pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] lg:gap-10">
        <div>
          <h3 className="font-display text-[28px] leading-[1.15] text-ink">Or send an enquiry</h3>
          <p className="mt-2 text-[16px] text-body">Hiring, a project, or something else: say which and it reaches the right inbox.</p>
        </div>
        <EnquiryRouter />
      </div>
    </Container>
  );
}
