import type { Metadata } from "next"

import { LegalPage } from "@/components/sections/legal-page"
import { DisclosureNote } from "@/components/shared/disclosure-note"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { lastUpdated } from "@/lib/disclosures"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice | MGS Capital Limited",
  description:
    "How MGS Capital Limited handles personal information, in line with Kenya's Data Protection Act, 2019. This website stores no enquiry data.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Privacy <em className="italic-accent">notice.</em>
        </>
      }
      intro="This notice explains how MGS Capital Limited handles personal information collected through this website and in the course of enquiries."
      updated={lastUpdated}
    >
      <DisclosureNote label="Draft for review">
        This notice is a working draft. It should be reviewed by a Kenyan legal
        or data-protection adviser before launch, and the business&apos;s own
        registration obligations confirmed.
      </DisclosureNote>

      <h2>Who is responsible for your information</h2>
      <p>
        {siteConfig.legalName} is the data controller for personal information
        collected through this website and through enquiries made by phone,
        WhatsApp, email, or in person. Our office is at{" "}
        {siteConfig.office.name}, {siteConfig.office.floor}, Kenya. You can
        reach us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
      <p>
        We handle personal information in line with the Data Protection Act,
        2019 and the guidance of the Office of the Data Protection Commissioner.
      </p>

      <h2>What this website collects</h2>
      <p>
        <strong>This website stores no enquiry data.</strong> The enquiry
        composer on the contact page runs entirely in your browser. It does not
        send anything to a server we control. When you choose WhatsApp or email,
        it opens your own messaging or email application with a pre-filled
        message, which you then choose to send.
      </p>
      <p>
        Once you send that message, it is handled by WhatsApp or your email
        provider under their own terms, and received by us. We then hold the
        details you chose to share — typically your name, phone number, the
        service you are interested in, and the content of your message.
      </p>

      <h2>Analytics</h2>
      <p>
        We use Vercel Analytics and Vercel Speed Insights to understand how the
        site performs. These tools are designed to be cookieless and do not
        build a cross-site profile of you. They record aggregated technical
        information such as page views, approximate region, device type, and
        performance measurements.
      </p>
      <p>
        If we add any other analytics or advertising tool in future, this notice
        will be updated and, where required, a cookie notice will be shown
        before it is set.
      </p>

      <h2>Why we use your information</h2>
      <ul>
        <li>To respond to your enquiry and arrange a conversation.</li>
        <li>
          To provide the advisory or placement service you ask for, including
          preparing applications and submissions to providers.
        </li>
        <li>
          To meet legal, regulatory, and record-keeping obligations that apply
          to financial services.
        </li>
        <li>
          To improve the website and understand which pages are useful, using
          aggregated analytics.
        </li>
      </ul>

      <h2>Who we share information with</h2>
      <p>
        Where you ask us to arrange a product or service, we share what is
        necessary with the relevant insurer, fund manager, lender, scheme
        administrator, or other provider. We may also share information with
        professional advisers or regulators where the law requires it. We do not
        sell personal information.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry records only as long as needed to respond and to
        maintain a record of the advice or service. Where a financial product is
        arranged, records may need to be kept for longer to meet regulatory and
        contractual requirements. We confirm retention periods with our
        compliance adviser.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the Data Protection Act, 2019 you may have the right to be
        informed, to access your personal data, to correct inaccurate data, to
        object to processing, to request deletion where applicable, and to
        complain to the Office of the Data Protection Commissioner. To exercise
        a right, write to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect the information we hold, including
        limiting access to those who need it. No method of transmission over the
        internet is completely secure, so please avoid sending sensitive
        documents by ordinary email until we have agreed a secure route.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        We may update this notice as the business or the law changes. The date
        at the top shows when it was last revised.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this notice can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or raised
        by phone on{" "}
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>.
      </p>
    </LegalPage>
  )
}
