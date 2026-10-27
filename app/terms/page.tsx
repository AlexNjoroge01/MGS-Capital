import type { Metadata } from "next"

import { LegalPage } from "@/components/sections/legal-page"
import { DisclosureNote } from "@/components/shared/disclosure-note"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { lastUpdated } from "@/lib/disclosures"

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | MGS Capital Limited",
  description:
    "The terms that apply to using the MGS Capital Limited website and the general information published on it.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Terms of <em className="italic-accent">use.</em>
        </>
      }
      intro="These terms apply to your use of this website. By using it, you accept them. They do not replace the terms of any product or service you later engage us for."
      updated={lastUpdated}
    >
      <DisclosureNote label="Draft for review">
        These terms are a working draft and should be reviewed by a Kenyan legal
        or compliance adviser before launch.
      </DisclosureNote>

      <h2>About this website</h2>
      <p>
        This website is operated by {siteConfig.legalName}, a Kenyan financial
        services company. Its purpose is to describe the firm and its services
        and to make it easy to get in touch. It is not a transactional platform:
        no product is sold, no payment is taken, and no client account can be
        opened here.
      </p>

      <h2>General information, not advice</h2>
      <p>
        The content on this website is general in nature. It does not constitute
        financial, investment, insurance, tax, or legal advice, and it should not
        be relied on as a substitute for advice on your own circumstances.
        Products and services are subject to eligibility, terms and conditions,
        and applicable regulation.
      </p>
      <p>
        An adviser-client relationship is not created merely by reading the site
        or sending an enquiry. It begins when both the scope of work and the
        terms of engagement have been agreed.
      </p>

      <h2>Accuracy and changes</h2>
      <p>
        We take care to keep the content accurate and current, and service pages
        show a reviewed date. Financial and regulatory details change, however,
        and we do not warrant that every page is complete or up to date at the
        moment you read it. We may change, suspend, or withdraw any part of the
        site at any time.
      </p>

      <h2>No rates, yields, or outcomes</h2>
      <p>
        We do not publish interest rates, yields, fees, approval times, NSSF
        contribution rates, or earnings limits unless they have been supplied in
        writing, are current, and are dated with a source. Nothing on this site
        is a promise of a particular outcome, a guarantee of returns, or an
        assurance that credit or insurance will be approved.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party websites, including maps and messaging
        services. Those sites are not under our control and we are not
        responsible for their content, availability, or privacy practices. A
        link is not an endorsement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The name, logo, text, layout, and design of this website belong to{" "}
        {siteConfig.legalName} or are used with permission. You may read, print,
        and share pages for personal or internal business use. You may not
        reproduce them commercially, modify them, or present them as your own
        without written permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any loss arising
        from reliance on the general information on this site, from the site
        being unavailable, or from any third-party link. Nothing in these terms
        excludes liability that cannot lawfully be excluded.
      </p>

      <h2>Privacy</h2>
      <p>
        Our handling of personal information is described in the{" "}
        <a href="/privacy">privacy notice</a>. The enquiry composer does not send
        data to a server: it opens WhatsApp or your email app so that you can
        send the message yourself.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of Kenya, and the courts of Kenya
        have jurisdiction over any dispute arising from them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or raised
        by phone on{" "}
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>.
      </p>
    </LegalPage>
  )
}
