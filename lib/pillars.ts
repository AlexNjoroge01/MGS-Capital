export type PillarSlug =
  | "insurance"
  | "retirement"
  | "investment"
  | "education"
  | "enterprise"

export type Pillar = {
  slug: PillarSlug
  number: string
  name: string
  promise: string
  summary: string
  serviceSlugs: string[]
  image: { src: string; alt: string }
}

export const pillars: Pillar[] = [
  {
    slug: "insurance",
    number: "01",
    name: "Insurance",
    promise: "Protection placed with care, for the things that matter.",
    summary:
      "Medical and general cover for individuals, families, and employers, with premium financing when a lump sum is difficult.",
    serviceSlugs: [
      "medical-insurance",
      "general-insurance",
      "insurance-premium-financing",
    ],
    image: {
      src: "/images/pillars/insurance.svg",
      alt: "Abstract composition of layered silver and bronze planes",
    },
  },
  {
    slug: "retirement",
    number: "02",
    name: "Retirement",
    promise: "A clear view of the years you are saving for.",
    summary:
      "Retirement planning, pension consolidation, and NSSF Tier II guidance for individuals and employers.",
    serviceSlugs: [
      "retirement-plan-advisory",
      "pension-consolidation",
      "nssf-tier-2",
    ],
    image: {
      src: "/images/pillars/retirement.svg",
      alt: "Abstract calmer composition in warm ivory and graphite",
    },
  },
  {
    slug: "investment",
    number: "03",
    name: "Investment",
    promise: "Short-term money, considered and clearly explained.",
    summary:
      "Advice on using money market funds for money you may need soon, with costs, access, and risk shown plainly.",
    serviceSlugs: ["money-market-fund-advisory"],
    image: {
      src: "/images/pillars/investment.svg",
      alt: "Abstract graphite and silver geometry suggesting structure",
    },
  },
  {
    slug: "education",
    number: "04",
    name: "Education",
    promise: "Funding that keeps a place of study within reach.",
    summary:
      "Financing support for Kenyan students admitted to institutions abroad, and for the parents or sponsors behind them.",
    serviceSlugs: ["study-abroad-loans"],
    image: {
      src: "/images/pillars/education.svg",
      alt: "Abstract light-filled composition in stone and silver",
    },
  },
  {
    slug: "enterprise",
    number: "05",
    name: "Enterprise",
    promise: "Capital and confidence for the work of doing business.",
    summary:
      "Trade finance, tender security, and fundraising advisory for lenders, traders, contractors, and growing companies.",
    serviceSlugs: [
      "trade-finance-solution",
      "bid-bonds",
      "fundraising-for-lending-companies",
    ],
    image: {
      src: "/images/pillars/enterprise.svg",
      alt: "Abstract architectural forms in graphite and bronze",
    },
  },
]

export const getPillar = (slug: PillarSlug) =>
  pillars.find((pillar) => pillar.slug === slug)
