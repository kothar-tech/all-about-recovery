import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

type Payload = Record<string, string | string[] | undefined>;

const REQUIRED = ["name", "email", "message"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_LEN: Record<string, number> = {
  name: 120, email: 160, phone: 40, participantName: 120,
  organisation: 160, message: 4000, location: 60, role: 60, planStatus: 80,
};

function clean(v: unknown, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields, humans don't.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  const data: Record<string, string> = {};

  for (const [key, max] of Object.entries(MAX_LEN)) {
    data[key] = clean(body[key], max);
  }
  data.services = Array.isArray(body.services)
    ? body.services.slice(0, 12).map((s) => clean(s, 80)).join(", ")
    : clean(body.services, 300);

  for (const field of REQUIRED) {
    if (!data[field]) errors[field] = "This field is required.";
  }
  if (data.email && !EMAIL_RE.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (data.message && data.message.length < 10) {
    errors.message = "Please give us a little more detail (at least 10 characters).";
  }
  if (!clean(body.consent)) {
    errors.consent = "Please confirm you're happy for us to contact you.";
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const kind = clean(body.formType) || "Enquiry";
  const lines = [
    `New ${kind.toLowerCase()} from the All About Recovery website`,
    "",
    `Name:              ${data.name}`,
    `Email:             ${data.email}`,
    data.phone && `Phone:             ${data.phone}`,
    data.role && `Enquiring as:      ${data.role}`,
    data.organisation && `Organisation:      ${data.organisation}`,
    data.participantName && `Participant:       ${data.participantName}`,
    data.location && `Preferred region:  ${data.location}`,
    data.planStatus && `NDIS plan status:  ${data.planStatus}`,
    data.services && `Services:          ${data.services}`,
    "",
    "Message:",
    data.message,
  ].filter(Boolean).join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL ?? site.email;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  // No mail provider configured yet — log it so nothing is silently lost, and
  // tell the visitor honestly rather than pretending the message was sent.
  if (!apiKey || !from) {
    console.warn(
      "[enquiry] RESEND_API_KEY / ENQUIRY_FROM_EMAIL not set — message not delivered:\n" + lines,
    );
    return NextResponse.json(
      {
        error:
          "Our online form isn't connected yet. Please call us on " +
          site.phone + " or email " + site.email + " and we'll respond straight away.",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `${kind}: ${data.name}${data.location ? ` (${data.location})` : ""}`,
        text: lines,
      }),
    });

    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] delivery failed", err, "\n" + lines);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please call " +
          site.phone + " or email " + site.email + ".",
      },
      { status: 500 },
    );
  }
}
