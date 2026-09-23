"use client";

import { useId, useRef, useState } from "react";
import { site, locations } from "@/data/site";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";

type Variant = "contact" | "referral";
type Errors = Record<string, string>;

const roles = [
  "I'm looking for support for myself",
  "I'm a family member or carer",
  "I'm a support coordinator",
  "I'm a clinician or case worker",
  "Other",
];

const planStatuses = [
  "I have an NDIS plan",
  "I've applied and I'm waiting",
  "I don't have a plan yet",
  "I'm not sure",
];

export function EnquiryForm({ variant = "contact" }: { variant?: Variant }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [serverError, setServerError] = useState<string>("");

  const isReferral = variant === "referral";
  const fid = (n: string) => `${uid}-${n}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setServerError("");

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = Object.fromEntries(fd.entries());
    payload.services = fd.getAll("services");
    payload.formType = isReferral ? "Referral" : "Enquiry";

    // Client-side validation first, so errors appear without a round trip.
    const next: Errors = {};
    if (!String(payload.name ?? "").trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(payload.email ?? "")))
      next.email = "Enter a valid email address so we can reply.";
    if (String(payload.message ?? "").trim().length < 10)
      next.message = "Please give us a little more detail (at least 10 characters).";
    if (!payload.consent) next.consent = "Please confirm you're happy for us to contact you.";

    if (Object.keys(next).length) {
      setErrors(next);
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setErrors({});

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        formRef.current?.reset();
        return;
      }
      if (json.errors) {
        setErrors(json.errors);
        setStatus("idle");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }
      setServerError(json.error ?? "Something went wrong. Please try again.");
      setStatus("failed");
    } catch {
      setServerError(
        `We couldn't reach the server. Please call ${site.phone} or email ${site.email}.`,
      );
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-5 rounded-lg bg-sage-pale p-8 md:p-10"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-sage text-cream">
          <Check className="size-6" />
        </span>
        <h3 className="text-h3 text-bark">Thank you — we&apos;ve got your message.</h3>
        <p className="max-w-md text-[0.9375rem] leading-relaxed text-bark/75">
          A member of our team will be in touch shortly. If it&apos;s urgent,
          call us on{" "}
          <a href={site.phoneHref} className="font-semibold text-bark underline underline-offset-4">
            {site.phone}
          </a>{" "}
          and you&apos;ll reach a real person.
        </p>
        <Button onClick={() => setStatus("idle")} variant="ghost">
          Send another message
        </Button>
      </div>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {/* Error summary — announced and focusable, per WCAG 3.3.1 */}
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-terracotta/40 bg-peach-pale/70 p-5"
        >
          <h3 className="font-semibold text-terracotta-ink">
            There {errorList.length === 1 ? "is 1 problem" : `are ${errorList.length} problems`} with this form
          </h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            {errorList.map(([field, msg]) => (
              <li key={field}>
                <a href={`#${fid(field)}`} className="text-terracotta-ink underline underline-offset-4">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "failed" && serverError && (
        <div role="alert" className="rounded-md border border-terracotta/40 bg-peach-pale/70 p-5 text-sm text-terracotta-ink">
          {serverError}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={fid("name")} name="name" label="Your name" required error={errors.name} autoComplete="name" />
        <Field id={fid("email")} name="email" type="email" label="Email address" required error={errors.email} autoComplete="email" />
        <Field id={fid("phone")} name="phone" type="tel" label="Phone number" hint="Optional" error={errors.phone} autoComplete="tel" />
        <SelectField id={fid("role")} name="role" label="I'm enquiring as" options={roles} />

        {isReferral && (
          <>
            <Field id={fid("participantName")} name="participantName" label="Participant's name" hint="If you're referring someone else" />
            <Field id={fid("organisation")} name="organisation" label="Organisation" hint="Optional" autoComplete="organization" />
            <SelectField id={fid("planStatus")} name="planStatus" label="NDIS plan status" options={planStatuses} />
          </>
        )}

        <SelectField
          id={fid("location")}
          name="location"
          label="Preferred location"
          options={[...locations.map((l) => `${l.name} (${l.suburb})`), "Somewhere else in NSW"]}
        />
      </div>

      {isReferral && (
        <fieldset className="flex flex-col gap-4 rounded-md bg-cream/60 p-6 ring-1 ring-bark/10">
          <legend className="px-2 text-sm font-semibold text-bark">
            Which supports are you interested in?{" "}
            <span className="font-normal text-bark/75">(select any that apply)</span>
          </legend>
          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {[...services.map((s) => s.title), "Accommodation support"].map((label) => (
              <label key={label} className="flex cursor-pointer items-start gap-3 text-[0.9375rem] text-bark/80">
                <input
                  type="checkbox"
                  name="services"
                  value={label}
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--color-terracotta)]"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <Field
        id={fid("message")}
        name="message"
        label={isReferral ? "Tell us about the support you're looking for" : "How can we help?"}
        required
        textarea
        error={errors.message}
        hint="The more you tell us, the more useful our first call will be."
      />

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={fid("company")}>Company (leave blank)</label>
        <input id={fid("company")} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={fid("consent")} className="flex cursor-pointer items-start gap-3 text-[0.9375rem] text-bark/80">
          <input
            id={fid("consent")}
            name="consent"
            type="checkbox"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${fid("consent")}-error` : undefined}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--color-terracotta)]"
          />
          <span>
            I&apos;m happy for All About Recovery to contact me about this enquiry, and
            I&apos;ve read the{" "}
            <a href="/privacy-policy" className="font-medium text-bark underline underline-offset-4">
              privacy policy
            </a>
            . <span className="text-terracotta">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id={`${fid("consent")}-error`} className="pl-8 text-sm font-medium text-terracotta-ink">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg" withArrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : isReferral ? "Submit referral" : "Send message"}
        </Button>
        <p className="text-sm text-bark/75">
          Or call{" "}
          <a href={site.phoneHref} className="font-semibold text-bark underline underline-offset-4">
            {site.phone}
          </a>
        </p>
      </div>
      <p aria-live="polite" className="sr-only">
        {status === "sending" ? "Sending your message" : ""}
      </p>
    </form>
  );
}

/* ---------------------------- field primitives --------------------------- */

const inputCls =
  "w-full rounded-sm border border-bark/20 bg-cream px-4 py-3 text-[0.9375rem] text-bark " +
  "placeholder:text-bark/55 transition-colors duration-200 " +
  "hover:border-bark/35 focus:border-terracotta focus:outline-none";

function Field({
  id, name, label, type = "text", required, textarea, error, hint, autoComplete,
}: {
  id: string; name: string; label: string; type?: string;
  required?: boolean; textarea?: boolean; error?: string; hint?: string; autoComplete?: string;
}) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`flex flex-col gap-2 ${textarea ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className="text-sm font-semibold text-bark">
        {label} {required && <span className="text-terracotta">*</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-bark/75">{hint}</p>
      )}
      {textarea ? (
        <textarea
          id={id} name={name} rows={6} required={required}
          aria-invalid={error ? true : undefined} aria-describedby={describedBy}
          className={`${inputCls} resize-y ${error ? "border-terracotta" : ""}`}
        />
      ) : (
        <input
          id={id} name={name} type={type} required={required} autoComplete={autoComplete}
          aria-invalid={error ? true : undefined} aria-describedby={describedBy}
          className={`${inputCls} ${error ? "border-terracotta" : ""}`}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-terracotta-ink">{error}</p>
      )}
    </div>
  );
}

function SelectField({
  id, name, label, options,
}: {
  id: string; name: string; label: string; options: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-bark">{label}</label>
      <select id={id} name={name} defaultValue="" className={`${inputCls} cursor-pointer`}>
        <option value="" disabled>Please choose…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
