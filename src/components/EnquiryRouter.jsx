"use client";
// Enquiry router based on ESA decision 0031 and 21st.dev ziegfiroyt/faq92, with native fieldsets and radios.
// Without JS every field shows and the browser posts the form to the work address as text/plain mailto.
// With JS only the chosen route's fields show, and Send opens a tidy email routed by buildEnquiry.
import { useState, useSyncExternalStore } from "react";
import { buildEnquiry, fieldsFor, NEEDS, WHO } from "../lib/mailto.js";
import { HIRING_EMAIL } from "../content/routing.js";

const subscribe = () => () => {};
const useHydrated = () => useSyncExternalStore(subscribe, () => true, () => false);

const input =
  "mt-1.5 block w-full rounded-lg border border-[#cfcac0] bg-white px-3 py-2.5 text-[16px] text-ink placeholder:text-muted focus:border-ink";
const chip =
  "cursor-pointer rounded-lg border border-[#cfcac0] bg-white px-3.5 py-2 text-[15px] text-ink has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent";

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
  const set = (key) => (e) => setV((s) => ({ ...s, [key]: e.target.value }));
  const shown = (key) => !hydrated || fieldsFor(v.who).includes(key);
  const err = (key) => (errors[key] ? { "aria-invalid": true, "aria-describedby": `enq-${key}-error` } : {});

  function onSubmit(e) {
    e.preventDefault();
    const found = validate(v);
    setErrors(found);
    if (Object.keys(found).length) return;
    window.open(buildEnquiry(v).href, "_self");
  }

  return (
    <form
      action={`mailto:${HIRING_EMAIL}`}
      method="post"
      encType="text/plain"
      noValidate={hydrated}
      onSubmit={onSubmit}
      className="space-y-5"
      aria-label="Enquiry"
    >
      <fieldset aria-describedby={errors.who ? "enq-who-error" : undefined}>
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
        <Field id="enq-company" label="Company" hint={hydrated ? "" : "(if hiring)"} error={errors.company} show={shown("company")}>
          <input id="enq-company" name="company" className={input} value={v.company} onChange={set("company")} autoComplete="organization" {...err("company")} />
        </Field>
        <Field id="enq-role" label="Role" hint={hydrated ? "" : "(if hiring)"} error={errors.role} show={shown("role")}>
          <input id="enq-role" name="role" className={input} value={v.role} onChange={set("role")} {...err("role")} />
        </Field>
        <Field id="enq-timeline" label="Timeline" hint={hydrated ? "" : "(for a project)"} show={shown("timeline")}>
          <input id="enq-timeline" name="timeline" className={input} value={v.timeline} onChange={set("timeline")} placeholder="e.g. start next month" />
        </Field>
        <Field id="enq-budget" label="Budget" hint="(optional)" show={shown("budget")}>
          <input id="enq-budget" name="budget" className={input} value={v.budget} onChange={set("budget")} />
        </Field>
        <Field id="enq-name" label="Name" error={errors.name}>
          <input id="enq-name" name="name" required className={input} value={v.name} onChange={set("name")} autoComplete="name" {...err("name")} />
        </Field>
        <Field id="enq-email" label="Email" error={errors.email}>
          <input id="enq-email" name="email" type="email" required className={input} value={v.email} onChange={set("email")} autoComplete="email" {...err("email")} />
        </Field>
      </div>

      <Field id="enq-message" label="Message" error={errors.message}>
        <textarea id="enq-message" name="message" required rows={5} className={input} value={v.message} onChange={set("message")} {...err("message")} />
      </Field>

      <div>
        <button type="submit" className="rounded-lg bg-accent-ink px-5 py-3 text-[16px] font-medium text-white hover:bg-ink">
          Send enquiry
        </button>
        <p className="mt-2 text-[14px] text-muted">This opens your email app with the enquiry filled in, ready to send.</p>
      </div>
    </form>
  );
}
