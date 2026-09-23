import type { Metadata } from "next";
import { site } from "@/data/site";
import { pageMetadata, graph, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { LegalBody } from "@/components/sections/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing the use of the All About Recovery website, including accuracy of information, external links and limitations of liability.",
  path: "/terms",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of use", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        lead="The terms that apply when you use this website."
        crumbs={crumbs}
        tone="sand"
      />
      <LegalBody
        updated="September 2026"
        intro={
          <p>
            These terms apply to your use of the All About Recovery website. By using
            this site you agree to them. If you do not agree, please do not use the
            site.
          </p>
        }
        sections={[
          {
            heading: "Information on this site",
            body: (
              <>
                <p>
                  We make a genuine effort to keep the information on this site accurate
                  and current, but it is provided for general information only. Service
                  availability, waiting times and NDIS rules change, so please confirm
                  details with us directly before relying on them.
                </p>
                <p>
                  Nothing on this website is medical, clinical, legal or financial advice.
                </p>
              </>
            ),
          },
          {
            heading: "Not a crisis service",
            body: (
              <p>
                This website is not monitored around the clock and must not be used to
                report an emergency. If you or someone else is in immediate danger, call{" "}
                <a href="tel:000">000</a>. For mental health crisis support, call Lifeline
                on <a href="tel:131114">13 11 14</a> or Beyond Blue on{" "}
                <a href="tel:1300224636">1300 22 4636</a>.
              </p>
            ),
          },
          {
            heading: "Enquiries and referrals",
            body: (
              <>
                <p>
                  Submitting a form does not create a service agreement or guarantee that
                  we can provide support. We will contact you to discuss your needs and
                  confirm whether we are able to help.
                </p>
                <p>
                  Please do not send sensitive health information through the website —
                  call us instead so it can be handled securely.
                </p>
              </>
            ),
          },
          {
            heading: "Intellectual property",
            body: (
              <p>
                All content on this site, including text, images, logos and design, is
                owned by {site.legalName} or used under licence. You may not reproduce or
                republish it without our written permission.
              </p>
            ),
          },
          {
            heading: "External links",
            body: (
              <p>
                This site links to external websites, including the NDIS and our social
                media pages. We do not control those sites and are not responsible for
                their content, accuracy or privacy practices.
              </p>
            ),
          },
          {
            heading: "Availability and liability",
            body: (
              <>
                <p>
                  We do not guarantee that the site will always be available or free of
                  errors. To the maximum extent permitted by law, we are not liable for
                  any loss arising from your use of this site.
                </p>
                <p>
                  Nothing in these terms excludes any rights you have under the Australian
                  Consumer Law.
                </p>
              </>
            ),
          },
          {
            heading: "Changes and governing law",
            body: (
              <p>
                We may update these terms from time to time; the current version always
                applies. These terms are governed by the laws of New South Wales,
                Australia.
              </p>
            ),
          },
          {
            heading: "Contact us",
            body: (
              <p>
                Questions about these terms? Email{" "}
                <a href={site.emailHref}>{site.email}</a> or call{" "}
                <a href={site.phoneHref}>{site.phone}</a>.
              </p>
            ),
          },
        ]}
      />
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
    </>
  );
}
