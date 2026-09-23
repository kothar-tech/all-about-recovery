import type { Metadata } from "next";
import { site } from "@/data/site";
import { pageMetadata, graph, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { LegalBody } from "@/components/sections/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How All About Recovery collects, uses, stores and protects your personal and health information under the Privacy Act 1988 and the Australian Privacy Principles.",
  path: "/privacy-policy",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy policy", path: "/privacy-policy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="How we collect, use, store and protect your personal and health information."
        crumbs={crumbs}
        tone="sand"
      />
      <LegalBody
        updated="September 2026"
        intro={
          <>
            <p>
              All About Recovery is committed to protecting your privacy. We handle
              personal information in accordance with the{" "}
              <em>Privacy Act 1988</em> (Cth), the Australian Privacy Principles, the{" "}
              <em>Health Records and Information Privacy Act 2002</em> (NSW), and our
              obligations as a registered NDIS provider.
            </p>
            <p>
              This policy explains what we collect, why we collect it, who we share it
              with, and the choices you have.
            </p>
          </>
        }
        sections={[
          {
            heading: "What we collect",
            body: (
              <>
                <p>Depending on your relationship with us, we may collect:</p>
                <ul>
                  <li>Contact details — name, address, phone number and email address.</li>
                  <li>NDIS information — your NDIS number, plan details, funded supports and plan management type.</li>
                  <li>Health information — diagnoses, treatment, medication, risk information and reports from clinicians, where it is relevant to delivering safe support.</li>
                  <li>Support records — progress notes, incident reports, goals and shift records.</li>
                  <li>Information about the people around you — emergency contacts, guardians, nominees, family members and other providers.</li>
                  <li>Website information — basic analytics such as pages visited and general location, and anything you type into our contact or referral forms.</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Why we collect it",
            body: (
              <>
                <p>We collect personal information so we can:</p>
                <ul>
                  <li>Assess whether we can meet your support needs safely.</li>
                  <li>Deliver, coordinate and review your supports.</li>
                  <li>Meet our obligations to the NDIA and the NDIS Quality and Safeguards Commission, including incident and complaint reporting.</li>
                  <li>Claim payment for services delivered.</li>
                  <li>Keep you, our staff and the community safe.</li>
                  <li>Respond to your enquiries and improve our services.</li>
                </ul>
                <p>
                  We will not use your information for anything unrelated without asking
                  you first.
                </p>
              </>
            ),
          },
          {
            heading: "Consent",
            body: (
              <>
                <p>
                  We ask for your consent before collecting health information, and
                  before sharing your information with anyone outside our organisation,
                  unless the law requires or permits otherwise.
                </p>
                <p>
                  You can withdraw consent at any time by contacting us. We will explain
                  what that means for your supports before anything changes.
                </p>
              </>
            ),
          },
          {
            heading: "Who we share it with",
            body: (
              <>
                <p>We may share your information with:</p>
                <ul>
                  <li>Your support workers and our coordination team, so they can support you safely.</li>
                  <li>Other providers, clinicians or allied health professionals involved in your care, with your consent.</li>
                  <li>The NDIA, your plan manager or support coordinator, for plan and payment purposes.</li>
                  <li>The NDIS Quality and Safeguards Commission, where reporting is required.</li>
                  <li>Emergency services or a person&apos;s guardian or nominee, where there is a serious and imminent risk to someone&apos;s life, health or safety.</li>
                  <li>Our IT and record-keeping providers, who are bound to protect your information.</li>
                </ul>
                <p>We do not sell personal information, and we do not disclose it for marketing.</p>
              </>
            ),
          },
          {
            heading: "How we store and protect it",
            body: (
              <>
                <p>
                  Records are stored in access-controlled systems, with access limited to
                  staff who need it for your support. Physical records are kept in secure,
                  locked storage. Staff receive privacy training and are bound by
                  confidentiality obligations.
                </p>
                <p>
                  We keep records for as long as the law requires — generally seven years
                  from the last service, or until a young person turns 25 — and securely
                  destroy or de-identify them afterwards.
                </p>
              </>
            ),
          },
          {
            heading: "Accessing and correcting your information",
            body: (
              <>
                <p>
                  You can ask to see the personal information we hold about you and ask
                  us to correct anything that is wrong. Contact us at{" "}
                  <a href={site.emailHref}>{site.email}</a> or call{" "}
                  <a href={site.phoneHref}>{site.phone}</a>.
                </p>
                <p>
                  We will respond within 30 days. If we cannot give you access, we will
                  explain why in writing.
                </p>
              </>
            ),
          },
          {
            heading: "Data breaches",
            body: (
              <p>
                If a data breach occurs that is likely to result in serious harm, we will
                notify you and the Office of the Australian Information Commissioner as
                required by the Notifiable Data Breaches scheme.
              </p>
            ),
          },
          {
            heading: "Website, cookies and forms",
            body: (
              <>
                <p>
                  Information you submit through our contact and referral forms is sent to
                  our team by email and handled under this policy. Please do not send
                  detailed health information through the website — call us instead.
                </p>
                <p>
                  Our website may use essential cookies to function correctly. Links to
                  external sites such as Instagram and Facebook are governed by those
                  platforms&apos; own privacy policies.
                </p>
              </>
            ),
          },
          {
            heading: "Complaints",
            body: (
              <>
                <p>
                  If you believe we have mishandled your information, contact us at{" "}
                  <a href={site.emailHref}>{site.email}</a> and we will investigate and
                  respond.
                </p>
                <p>
                  If you are not satisfied, you can contact the Office of the Australian
                  Information Commissioner on 1300 363 992, or the NDIS Quality and
                  Safeguards Commission on{" "}
                  <a href="tel:1800035544">1800 035 544</a>.
                </p>
              </>
            ),
          },
          {
            heading: "Contact us",
            body: (
              <p>
                {site.legalName}
                <br />
                3/36 Woodriff Street, Penrith NSW 2750
                <br />
                Phone: <a href={site.phoneHref}>{site.phone}</a>
                <br />
                Email: <a href={site.emailHref}>{site.email}</a>
              </p>
            ),
          },
        ]}
      />
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
    </>
  );
}
