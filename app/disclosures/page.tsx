import type { Metadata } from "next"

import { LegalPage } from "@/components/sections/legal-page"
import { DisclosureNote } from "@/components/shared/disclosure-note"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { disclosures, lastUpdated } from "@/lib/disclosures"

export const metadata: Metadata = buildMetadata({
  title: "Disclosures | MGS Capital Limited",
  description:
    "General and service-specific disclosures for MGS Capital Limited, and the firm's position on licences, rates, partners, and reviews.",
  path: "/disclosures",
})

const serviceDisclosures = [
  { title: "Medical Insurance", body: disclosures.medical },
  { title: "General Insurance", body: disclosures.generalInsurance },
  {
    title: "Insurance Premium Financing",
    body: disclosures.premiumFinancing,
  },
  { title: "Retirement Plan Advisory", body: disclosures.retirement },
  { title: "Pension Consolidation", body: disclosures.consolidation },
  { title: "NSSF Tier 2", body: disclosures.nssf },
  { title: "Money Market Fund Advisory", body: disclosures.moneyMarket },
  { title: "Study Abroad Loans", body: disclosures.studyAbroad },
  { title: "Trade Finance Solution", body: disclosures.tradeFinance },
  { title: "Bid Bonds", body: disclosures.bidBonds },
  {
    title: "Fundraising for Lending Companies",
    body: disclosures.fundraising,
  },
]

export default function DisclosuresPage() {
  return (
    <LegalPage
      eyebrow="Compliance"
      title={
        <>
          Disclosures, <em className="italic-accent">plainly stated.</em>
        </>
      }
      intro="What this website is, what it is not, and the specific notices that apply to each service."
      updated={lastUpdated}
    >
      <DisclosureNote label="Draft for review">
        These disclosures are drafts. They should be reviewed by a Kenyan
        compliance professional before launch.
      </DisclosureNote>

      <h2>General disclosure</h2>
      <p>{disclosures.general}</p>
      <p>
        {siteConfig.legalName} offers insurance and investment advisory
        services. The information published here describes those services in
        general terms. It is not an offer, a quotation, or a contract, and it
        does not create an advisory relationship.
      </p>

      <h2>Licences, registrations, and partners</h2>
      <p>
        The services touch several regulated areas in Kenya, including insurance
        intermediation, retirement benefits, investment advice, and lending.
        The regulators that apply depend on the licences held and on the
        partners with which the firm works.
      </p>
      <p>
        We do not publish a licence number, registration number, or the name of
        a partner bank, insurer, fund manager, lender, or funder until it has
        been supplied and permission to display it has been confirmed. When
        those details are available, they will appear in the footer of this
        website and on the About page.
      </p>

      <h2>Rates, fees, and figures</h2>
      <p>
        No interest rate, yield, fee, approval time, NSSF contribution rate, or
        earnings limit is published on this site unless it has been supplied in
        writing, is current, and is dated with its source. Where an adviser
        quotes a figure during a consultation, the written terms of the relevant
        provider prevail.
      </p>

      <h2>The word “fiduciary”</h2>
      <p>
        {siteConfig.tagline} is the firm&apos;s official tagline. “Fiduciary”
        implies a duty to act in the client&apos;s best interest. Before launch,
        the basis for using the word — a licence, a code of conduct, or a written
        commitment — is to be confirmed, together with a short explanation of
        what it means in practice at MGS Capital, including how recommendations
        are made and how the firm is paid. Until that explanation is published,
        the word is used as a tagline only, not as a claim beyond it.
      </p>

      <h2>Reviews and testimonials</h2>
      <p>
        This website does not display client testimonials, star ratings, or
        review scores. If genuine, consented reviews are added in future, they
        will be attributed and displayed with permission. We do not publish
        invented or edited reviews.
      </p>

      <h2>Service-specific disclosures</h2>
      {serviceDisclosures.map((item) => (
        <section key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </section>
      ))}

      <h2>Complaints</h2>
      <p>
        If something has not been handled well, please raise it directly first
        on{" "}
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a> or by
        email to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Where a
        product is provided by a regulated third party, that provider&apos;s
        complaints process and the relevant regulator may also be available to
        you. We will confirm the applicable route in writing.
      </p>

      <h2>Contact</h2>
      <p>
        {siteConfig.legalName}
        <br />
        {siteConfig.office.name}, {siteConfig.office.floor}
        <br />
        {siteConfig.office.city ?? siteConfig.office.country}
        <br />
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        <br />
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </LegalPage>
  )
}
