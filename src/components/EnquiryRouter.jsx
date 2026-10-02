"use client";
// Enquiry router based on ESA decision 0031 and 21st.dev ziegfiroyt/faq92, with native fieldsets and radios.
// Without JS every field shows and the browser posts the form to the work address as text/plain mailto.
// With JS only the chosen route's fields show, and Send opens a tidy email routed by buildEnquiry.
import { useRef, useState, useSyncExternalStore } from "react";
import { buildEnquiry, fieldsFor, NEEDS, WHO } from "../lib/mailto.js";
import { HIRING_EMAIL } from "../content/routing.js";

// Focus goes to the first problem in the order the fields appear.
const FIELD_ORDER = ["who", "company", "role", "name", "email", "message"];

const subscribe = () => () => {};
const useHydrated = () => useSyncExternalStore(subscribe, () => true, () => false);

const input =
  "mt-1.5 block w-full rounded-lg border border-[#cfcac0] bg-white px-3 py-2.5 text-[16px] text-ink placeholder:text-muted focus:border-ink";
const chip =
  "cursor-pointer rounded-lg border border-[#cfcac0] bg-white px-3.5 py-2 text-[15px] text-ink has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent forced-colors:has-[:checked]:outline forced-colors:has-[:checked]:outline-[3px] forced-colors:has-[:checked]:outline-offset-1";

function validate(v) {
  const errors = {};
  if (!v.who) errors.who = "Choose what you're here for.";
  if (!v.name.trim()) errors.name = "Add your name.";
  if (!v.email.trim()) errors.email = "Add an email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = "Check the email address.";
  if (!v.message.trim()) errors.message = "Add a message.";
  if (v.who === "hiring" && !v.company.trim()) errors.company = "Add the company.";
  if (v.who === "hiring" && !v.role.trim()) errors.role = "Add the role.";
  return errors;
}

function Field({ id, label, hint, error, show = true, children }) {
  return (
    <div hidden={!show}>
      <label htmlFor={id} className="text-[14px] font-medium text-ink">
        {label}
        {hint && <span className="font-normal text-muted"> {hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-[14px] text-accent-ink">
          {error}
        </p>
      )}
    </div>
  );
}

export default function EnquiryRouter() {
  const hydrated = useHydrated();
  const [v, setV] = useState({ who: "", need: "", company: "", role: "", timeline: "", budget: "", name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sentTo, setSentTo] = useState("");
  const form = useRef(null);
  const set = (key) => (e) => setV((s) => ({ ...s, [key]: e.target.value }));
  const shown = (key) => !hydrated || fieldsFor(v.who).includes(key);
  const err = (key) => (errors[key] ? { "aria-invalid": true, "aria-describedby": `enq-${key}-error` } : {});
  const problems = Object.keys(errors).length;

  function onSubmit(e) {
    e.preventDefault();
    const found = validate(v);
    setErrors(found);
    const first = FIELD_ORDER.find((key) => found[key]);
    if (first) {
      setSentTo("");
      form.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    const enquiry = buildEnquiry(v);
    window.open(enquiry.href, "_self");
    // mailto fails silently when no email app is set up, so the address it went to stays on screen.
    setSentTo(enquiry.to);
  }

  return (
    <form
      ref={form}
      action={`mailto:${HIRING_EMAIL}`}
      method="post"
      encType="text/plain"
      noValidate={hydrated}
      onSubmit={onSubmit}
      className="space-y-5"
      aria-label="Enquiry"
    >
      <fieldset role="radiogroup" aria-invalid={errors.who ? true : undefined} aria-describedby={errors.who ? "enq-who-error" : undefined}>
        <legend className="mb-2 text-[15px] font-semibold text-ink">I&apos;m…</legend>
        <div className="flex flex-wrap gap-2">
          {Object.entries(WHO).map(([value, label]) => (
            <label key={value} className={chip}>
              <input type="radio" name="who" value={value} required checked={v.who === value} onChange={set("who")} className="sr-only" />
              {label}
            </label>
          ))}
        </div>
        {errors.who && (
          <p id="enq-who-error" className="mt-1 text-[14px] text-accent-ink">
            {errors.who}
          </p>
        )}
      </fieldset>

      <fieldset hidden={!shown("need")}>
        <legend className="mb-2 text-[15px] font-semibold text-ink">I need…</legend>
        <div className="flex flex-wrap gap-2">
          {Object.entries(NEEDS).map(([value, label]) => (
            <label key={value} className={chip}>
              <input type="radio" name="need" value={value} checked={v.need === value} onChange={set("need")} className="sr-only" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="enq-company" label="Company" hint={hydrated ? "(required)" : "(if hiring)"} error={errors.company} show={shown("company")}>
          <input id="enq-company" name="company" className={input} value={v.company} onChange={set("company")} autoComplete="organization" {...err("company")} />
        </Field>
        <Field id="enq-role" label="Role" hint={hydrated ? "(required)" : "(if hiring)"} error={errors.role} show={shown("role")}>
          <input id="enq-role" name="role" className={input} value={v.role} onChange={set("role")} {...err("role")} />
        </Field>
        <Field id="enq-timeline" label="Timeline" hint={hydrated ? "" : "(for a project)"} show={shown("timeline")}>
          <input id="enq-timeline" name="timeline" className={input} value={v.timeline} onChange={set("timeline")} placeholder="e.g. start next month" />
        </Field>
        <Field id="enq-budget" label="Budget" hint="(optional)" show={shown("budget")}>
          <input id="enq-budget" name="budget" className={input} value={v.budget} onChange={set("budget")} />
        </Field>
        <Field id="enq-name" label="Name" hint="(required)" error={errors.name}>
          <input id="enq-name" name="name" required className={input} value={v.name} onChange={set("name")} autoComplete="name" {...err("name")} />
        </Field>
        <Field id="enq-email" label="Email" hint="(required)" error={errors.email}>
          <input id="enq-email" name="email" type="email" required className={input} value={v.email} onChange={set("email")} autoComplete="email" {...err("email")} />
        </Field>
      </div>

      <Field id="enq-message" label="Message" hint="(required)" error={errors.message}>
        <textarea id="enq-message" name="message" required rows={5} className={input} value={v.message} onChange={set("message")} {...err("message")} />
      </Field>

      <div>
        <button type="submit" className="rounded-full bg-ink px-5 py-2.5 text-[14.5px] font-medium text-paper transition-colors hover:bg-accent-ink">
          Send enquiry
        </button>
        <p className="mt-2 text-[14px] text-muted">This opens your email app with the enquiry filled in, ready to send.</p>
        {problems > 0 && (
          <p role="alert" className="mt-2 text-[15px] font-medium text-accent-ink">
            {problems} {problems === 1 ? "field needs" : "fields need"} attention.
          </p>
        )}
        <p role="status" className="mt-2 text-[15px] text-body">
          {sentTo && (
            <>
              If your email app didn&apos;t open, email me directly:{" "}
              <span className="contents" dangerouslySetInnerHTML={{ __html: "<!--email_off-->" }} />
              <a href={`mailto:${sentTo}`} className="ml-1 inline-flex rounded-full bg-tile px-3.5 py-1.5 font-medium text-ink hover:bg-ink hover:text-paper">
                {sentTo}
              </a>
              <span className="contents" dangerouslySetInnerHTML={{ __html: "<!--/email_off-->" }} />
            </>
          )}
        </p>
      </div>
    </form>
  );
}
