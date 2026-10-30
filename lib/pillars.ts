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
      src: "/insurance.png",
      alt: "An insurance sign against the glass frontage of a city office building",
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
      src: "/retirement.png",
      alt: "A coin being dropped into a jar labelled Retirement beside a stack of coins and an alarm clock",
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
      src: "/investment.png",
      alt: "Stacks of coins rising like growing trees as a hand adds another coin",
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
      src: "/education.png",
      alt: "A graduation cap resting on stacked books with a rolled diploma",
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
      src: "/enterprise.png",
      alt: "Interlocking gears representing business finance, trade, and venture capital",
    },
  },
]

export const getPillar = (slug: PillarSlug) =>
  pillars.find((pillar) => pillar.slug === slug)
