export const disclosures = {
  general:
    "Information on this website is general in nature and does not constitute financial, investment, insurance, tax, or legal advice. Products and services are subject to eligibility, terms and conditions, and applicable regulation.",
  medical:
    "Cover, limits, waiting periods, and exclusions vary by insurer and plan. Please read the policy terms before you buy.",
  generalInsurance:
    "Cover is subject to the insurer's policy wording, limits, and exclusions. Premiums are set by insurers.",
  premiumFinancing:
    "Financing is subject to approval and terms. Failure to pay instalments may affect your insurance cover.",
  retirement:
    "Retirement savings are long-term. Investment returns are not guaranteed and can go down as well as up. Tax and scheme rules apply.",
  consolidation:
    "Transferring retirement benefits can affect your entitlements. Review scheme rules, fees, and tax implications before you transfer.",
  nssf:
    "NSSF and Retirement Benefits Authority rules, rates, and limits change over time. This information is general and is not legal advice. Contracting out requires regulatory approval.",
  moneyMarket:
    "Investments in money market funds are not guaranteed. The value of an investment and the income from it can go down as well as up, and past performance is not a reliable guide to future results.",
  studyAbroad:
    "Credit is subject to approval. Interest, fees, and terms apply and will be disclosed before you commit. Exchange-rate movements can affect the cost of repayment.",
  tradeFinance:
    "Facilities are subject to credit approval, security, and the funder's terms. Costs and timelines vary.",
  bidBonds:
    "Issuance is subject to assessment and the issuer's terms. Bonds must meet the specific requirements of the procuring entity.",
  fundraising:
    "This service is for lending companies. It is not an offer of securities or a solicitation of investment from the public. Fundraising outcomes are not guaranteed.",
} as const

export type DisclosureKey = keyof typeof disclosures

export const lastUpdated = "October 2026"
