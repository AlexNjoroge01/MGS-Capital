import { disclosures } from "@/lib/disclosures"
import type { PillarSlug } from "@/lib/pillars"

export type Audience = "individual" | "business" | "both"

export type IconName =
  | "heart-pulse"
  | "stethoscope"
  | "baby"
  | "smile"
  | "activity"
  | "plane"
  | "car"
  | "flame"
  | "shield-check"
  | "building"
  | "briefcase"
  | "hard-hat"
  | "ship"
  | "receipt"
  | "layers"
  | "scale"
  | "users"
  | "wallet"
  | "piggy-bank"
  | "landmark"
  | "line-chart"
  | "trending-up"
  | "graduation-cap"
  | "globe"
  | "banknote"
  | "file-text"
  | "handshake"
  | "clock"
  | "badge-check"
  | "calculator"
  | "home"
  | "truck"
  | "lock"
  | "percent"
  | "list-checks"
  | "circle-dollar"
  | "file-check"
  | "arrow-up-right"

export type Faq = { question: string; answer: string }

export type Service = {
  slug: string
  published: boolean
  pillar: PillarSlug
  audience: Audience
  title: string
  h1: string
  tagline: string
  summary: string
  overview: string[]
  whoFor: string[]
  covers: { title: string; description: string; icon: IconName }[]
  howItWorks: { title: string; description: string }[]
  benefits: string[]
  thingsToKnow: string[]
  requirements: string[]
  faqs: Faq[]
  related: string[]
  disclosure: string
  seo: { title: string; description: string; keywords: string[] }
  reviewedDate: string
  /** Visible near the top of the page where the blueprint requires it. */
  audienceNote?: string
  /** Prominent regulatory note. */
  callout?: string
  /** Short explainer block (NSSF Tier 2). */
  explainer?: {
    title: string
    intro: string
    points: { title: string; body: string }[]
  }
  /** HoverCard glossary (medical and general insurance). */
  glossary?: { term: string; definition: string }[]
}

export const services: Service[] = [
  {
    slug: "medical-insurance",
    published: true,
    pillar: "insurance",
    audience: "both",
    title: "Medical Insurance",
    h1: "Medical Insurance in Kenya",
    tagline: "Health cover chosen around your people, not a brochure.",
    summary:
      "Private medical cover for individuals, families, and employers, placed with licensed insurers. We compare options, explain the limits, and help with the paperwork through to policy issue.",
    overview: [
      "Medical insurance is health cover that pays towards the cost of treatment, usually arranged for a year at a time. It is designed for the costs a household or an employer would struggle to meet from savings: a hospital admission, a specialist consultation, or the ongoing management of a chronic condition.",
      "MGS Capital helps you compare the covers available from licensed insurers, read the detail that matters, and choose a plan that fits your needs and your budget. We explain limits, waiting periods, and exclusions before you commit, and stay with you through application, underwriting, and policy issue. The insurers we work with, and the basis on which cover is placed, are confirmed in writing during your consultation.",
      "For employers, the conversation starts with the team: who is covered, which dependants are included, and what level of cover is sustainable within the benefits budget. For families, it starts with the people you are protecting and the hospitals you already trust. Cover is placed with licensed insurers and is separate from statutory health cover, so we also explain how the two work alongside each other.",
    ],
    whoFor: [
      "Individuals who want private cover alongside statutory health cover",
      "Families adding a spouse, children, or a dependent parent",
      "Small and medium businesses arranging staff medical cover for the first time",
      "Larger employers reviewing an existing group scheme at renewal",
      "Anyone who has received a quotation and wants a second, clearer opinion",
    ],
    covers: [
      {
        title: "Inpatient care",
        description:
          "Hospital admission, surgery, and related costs, up to the limits of the plan.",
        icon: "heart-pulse",
      },
      {
        title: "Outpatient care",
        description:
          "Consultations, diagnostics, and prescribed treatment outside hospital.",
        icon: "stethoscope",
      },
      {
        title: "Maternity and family cover",
        description:
          "Maternity benefits and the option to include a spouse and children on many plans.",
        icon: "baby",
      },
      {
        title: "Dental and optical",
        description:
          "Routine dental treatment and optical benefits where the plan provides them.",
        icon: "smile",
      },
      {
        title: "Chronic condition management",
        description:
          "Ongoing treatment and medication for declared chronic conditions, subject to plan terms.",
        icon: "activity",
      },
      {
        title: "Evacuation and international cover",
        description:
          "Emergency evacuation, and treatment abroad on selected plans.",
        icon: "plane",
      },
    ],
    howItWorks: [
      {
        title: "Needs assessment",
        description:
          "We talk through who needs cover, the treatment you expect to use, and the budget you have in mind.",
      },
      {
        title: "Comparison",
        description:
          "We compare covers, annual limits, hospital networks, and exclusions across the options available to you.",
      },
      {
        title: "Quotation",
        description:
          "You receive a clear quotation and an explanation of what is and is not included before you decide.",
      },
      {
        title: "Application and underwriting",
        description:
          "We help you complete the application honestly and fully, then follow it through underwriting.",
      },
      {
        title: "Policy issue",
        description:
          "Once the insurer issues the policy, we walk you through the schedule, the limits, and how to use the cover.",
      },
      {
        title: "Ongoing support",
        description:
          "We help with claims, pre-authorisations, renewals, and changes to your cover during the year.",
      },
    ],
    benefits: [
      "Several options compared in one conversation, rather than one quotation at a time",
      "Cover matched to your budget and the treatment you are likely to need",
      "Plain-English explanations of limits, waiting periods, and exclusions",
      "Support when a claim or pre-authorisation arises, and at renewal",
    ],
    thingsToKnow: [
      "Waiting periods apply to new cover and to certain benefits. They vary by insurer and plan.",
      "Pre-existing conditions are usually excluded or subject to special terms unless declared and accepted.",
      "Annual limits, co-payments, and hospital networks differ between plans, so the cheapest premium is rarely the whole story.",
      "Premiums are reviewed at renewal and can rise with age, claims experience, and medical inflation.",
      "Private cover is separate from statutory health cover. The two can work together, and we will confirm the current rules with you.",
    ],
    requirements: [
      "Identification (national ID or passport) and KRA PIN",
      "Details of each person to be covered, including dates of birth and relationships",
      "Completed medical declaration or underwriting questionnaire",
      "Employer and employee schedule for a group scheme",
      "Your current policy or renewal notice, if you are switching or reviewing cover",
    ],
    faqs: [
      {
        question: "What does medical insurance cover?",
        answer:
          "Medical insurance contributes towards the cost of private treatment: hospital admissions, consultations, diagnostics, and medicines, depending on the plan. Most plans separate inpatient and outpatient benefits and set annual limits for each. Maternity, dental, optical, and international treatment may be included or optional. The policy schedule and terms set out exactly what is covered.",
      },
      {
        question: "What is a waiting period?",
        answer:
          "A waiting period is the time at the start of a policy during which certain benefits cannot be claimed. It is common for maternity, dental, and pre-existing conditions, and it varies between insurers. Routine cover often starts sooner. We check the waiting periods on each option before you choose, so there are no surprises when you need to claim.",
      },
      {
        question: "Are pre-existing conditions covered?",
        answer:
          "Usually not automatically. Insurers normally ask about existing conditions and may exclude them, apply a loading, or accept them on special terms. Full and honest disclosure at application is essential, because a condition that is not declared can lead to a claim being declined. We help you present the information clearly and understand the terms offered.",
      },
      {
        question: "Can I add family members to my cover?",
        answer:
          "Yes, on most plans. A spouse and children can usually be added, and some plans allow a dependent parent. Adding someone may require underwriting and can change the premium. Changes are normally made at renewal, although some insurers allow additions during the year. We will confirm the insurer's rules and the cost before you add anyone.",
      },
      {
        question: "How does group medical cover for a small business work?",
        answer:
          "An employer takes one policy covering eligible staff, usually with the option to include dependants. The insurer assesses the group as a whole, which can make cover more accessible than individual policies. The employer sets the categories and limits. We help with the employee schedule, the application, and the annual renewal, including any changes in headcount.",
      },
      {
        question: "How do I make a claim?",
        answer:
          "For planned treatment, the hospital usually requests pre-authorisation from the insurer before admission. For emergencies, notify the insurer as soon as possible. You will need your policy details, identification, and the treating hospital's information. Keep the receipts and discharge documents. We help clients follow the insurer's process so that claims are not delayed by missing paperwork.",
      },
      {
        question: "Can I pay the premium in instalments?",
        answer:
          "Sometimes. Insurers generally expect the annual premium upfront, but insurance premium financing can spread the cost over several months while the cover remains active. The arrangement is subject to approval and has a cost. We can explain the option and connect it to the premium financing service if it suits your cash flow.",
      },
    ],
    related: ["general-insurance", "insurance-premium-financing"],
    disclosure: disclosures.medical,
    seo: {
      title: "Medical Insurance in Kenya | MGS Capital",
      description:
        "Compare private medical cover for individuals, families, and employers in Kenya. MGS Capital explains limits and helps with claims. Speak to us.",
      keywords: [
        "medical insurance Kenya",
        "health insurance Kenya",
        "family medical cover Kenya",
        "corporate medical insurance Kenya",
        "group medical insurance for SMEs Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
    glossary: [
      {
        term: "Excess",
        definition:
          "The amount you pay towards a claim before the insurer pays the rest, as set out in the policy.",
      },
      {
        term: "Waiting period",
        definition:
          "The initial period of a policy during which certain benefits cannot be claimed.",
      },
      {
        term: "Pre-existing condition",
        definition:
          "A medical condition that existed, or showed symptoms, before the cover began.",
      },
      {
        term: "Co-payment",
        definition:
          "A fixed share of a treatment cost that the member pays, often per visit or per admission.",
      },
    ],
  },
  {
    slug: "general-insurance",
    published: true,
    pillar: "insurance",
    audience: "both",
    title: "General Insurance",
    h1: "General Insurance in Kenya",
    tagline: "Protection for the vehicles, property, and liabilities you rely on.",
    summary:
      "Non-life insurance placed with licensed insurers: motor, property, business, liability, and specialist covers, arranged around the risks you actually carry.",
    overview: [
      "General insurance protects against loss or damage to the things a person or business depends on: a vehicle, a building, stock, equipment, and the liability that comes with employing people or serving the public. It is arranged for a policy period, usually a year, and renewed after review.",
      "MGS Capital reviews what needs protecting, compares the covers available from licensed insurers, and explains the wording, limits, excesses, and exclusions that decide whether a claim is paid. We then help with the proposal, the documentation, and the policy issue, and remain available for renewals and claims. The classes of cover available and the insurers we place them with are confirmed in writing during your consultation.",
      "For a business, this is often several policies working together: motor for the fleet, fire and burglary for the premises, liability for the work you do, and WIBA for your staff. For an individual, it may be a single motor or domestic policy. Either way, the aim is the same: the right cover, understood before it is needed.",
    ],
    whoFor: [
      "Vehicle owners and fleet operators",
      "Homeowners, landlords, and tenants insuring contents",
      "Small and medium businesses protecting premises, stock, and equipment",
      "Contractors, professionals, and institutions carrying liability",
      "Transporters and traders moving goods by road, sea, or air",
    ],
    covers: [
      {
        title: "Motor insurance",
        description:
          "Private and commercial vehicles, from third-party only to comprehensive cover.",
        icon: "car",
      },
      {
        title: "Property and business assets",
        description:
          "Fire and allied perils, burglary, and contents cover for premises and stock.",
        icon: "building",
      },
      {
        title: "Liability and WIBA",
        description:
          "Public liability, professional indemnity, and work injury benefits cover for employers.",
        icon: "shield-check",
      },
      {
        title: "Marine and goods in transit",
        description:
          "Cover for goods moving between suppliers, ports, warehouses, and buyers.",
        icon: "ship",
      },
      {
        title: "Engineering and contractors' risks",
        description:
          "Cover for construction works, plant, and machinery during a project.",
        icon: "hard-hat",
      },
      {
        title: "Travel and domestic package",
        description:
          "Travel cover and combined home contents policies for individuals and families.",
        icon: "plane",
      },
    ],
    howItWorks: [
      {
        title: "Review the risk",
        description:
          "We look at what needs protecting, how it is used, and what a loss would cost you.",
      },
      {
        title: "Compare covers",
        description:
          "We compare insurers, policy wordings, limits, and excesses rather than premiums alone.",
      },
      {
        title: "Quotation",
        description:
          "You receive a quotation with the main terms explained in plain English.",
      },
      {
        title: "Proposal and documentation",
        description:
          "We help complete the proposal form and gather the supporting documents the insurer needs.",
      },
      {
        title: "Policy issue",
        description:
          "The insurer issues the policy and certificate; we check that the details match what you asked for.",
      },
      {
        title: "Renewals and claims",
        description:
          "We remind you before renewal and help manage claims and any changes in between.",
      },
    ],
    benefits: [
      "Cover matched to the actual risk rather than a generic package",
      "One adviser for several policies, so renewals and claims are coordinated",
      "Clear explanations of excesses, exclusions, and under-insurance",
      "Practical support when a claim has to be made",
    ],
    thingsToKnow: [
      "Cover depends on the policy wording, limits, excesses, and exclusions — not on the summary alone.",
      "Under-insurance can reduce a claim payout, because many policies apply average to partial losses.",
      "Motor third-party cover is a legal requirement in Kenya for vehicles on the road.",
      "Premiums are set by insurers and can change at renewal with claims experience and market conditions.",
      "Some covers, such as WIBA and certain liability policies, are statutory or contractual requirements for employers and contractors.",
    ],
    requirements: [
      "Identification and KRA PIN for individuals; registration and PIN for businesses",
      "Vehicle logbook or details of the vehicle to be insured",
      "Details of the property, stock, or equipment and its value",
      "Employee schedule for WIBA or group covers",
      "Claims history or the current policy, if you are switching",
    ],
    faqs: [
      {
        question: "What types of general insurance do you arrange?",
        answer:
          "We help with motor, property, fire and burglary, public liability, professional indemnity, WIBA, marine and goods in transit, engineering and contractors' risks, travel, and domestic package covers. The exact classes available are confirmed during your consultation, because they depend on the licensed insurers we are placing cover with at the time.",
      },
      {
        question: "Is motor insurance compulsory in Kenya?",
        answer:
          "Third-party motor insurance is a legal requirement for vehicles used on public roads. It covers injury or damage caused to other people and their property, but not your own vehicle. Comprehensive cover adds damage to your own vehicle, fire, and theft. We can explain the difference and help you choose the level that fits how the vehicle is used.",
      },
      {
        question: "What is the difference between third-party and comprehensive cover?",
        answer:
          "Third-party cover pays for damage or injury you cause to someone else. Comprehensive cover also pays for damage to your own vehicle, and usually fire and theft, subject to the policy terms. Comprehensive costs more and may carry an excess. The right choice depends on the vehicle's value, how it is financed, and your budget.",
      },
      {
        question: "What is WIBA and do I need it?",
        answer:
          "WIBA is the Work Injury Benefits Act cover that employers are required to provide for employees injured or taken ill at work. It pays statutory compensation for injury, disability, or death arising from employment. Employers should confirm their obligations under current law. We arrange the cover and help with the employee schedule and claims documentation.",
      },
      {
        question: "How is a claim handled?",
        answer:
          "You notify the insurer promptly, provide the policy details and evidence of the loss, and complete the claim forms. A loss adjuster may inspect the damage. The insurer then assesses the claim against the policy wording, limits, and excess. We help you gather documents, follow up with the insurer, and understand any decision that is made.",
      },
      {
        question: "Can I insure a business against fire and theft?",
        answer:
          "Yes. A commercial property policy can cover fire and allied perils, burglary, and contents, and can be extended to stock, equipment, and business interruption. The sum insured should reflect the cost of rebuilding or replacing what you have. We review the values with you so that the cover is not left short at claim time.",
      },
    ],
    related: ["insurance-premium-financing", "medical-insurance"],
    disclosure: disclosures.generalInsurance,
    seo: {
      title: "General Insurance in Kenya | MGS Capital",
      description:
        "Motor, property, liability, WIBA, and business insurance in Kenya, placed with licensed insurers. MGS Capital compares cover and supports claims.",
      keywords: [
        "general insurance Kenya",
        "motor insurance Kenya",
        "business insurance Kenya",
        "commercial insurance Kenya",
        "property insurance Kenya",
        "WIBA insurance Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
    glossary: [
      {
        term: "Excess",
        definition:
          "The first part of a claim that you pay yourself, as stated in the policy schedule.",
      },
      {
        term: "Third-party",
        definition:
          "Another person or their property, as opposed to you and your own vehicle or premises.",
      },
      {
        term: "Comprehensive",
        definition:
          "Cover that includes damage to your own vehicle as well as third-party liability.",
      },
      {
        term: "Under-insurance",
        definition:
          "Insuring property for less than its replacement or declared value, which can reduce a payout.",
      },
      {
        term: "WIBA",
        definition:
          "Work Injury Benefits Act cover for employees injured or taken ill in the course of work.",
      },
    ],
  },
  {
    slug: "insurance-premium-financing",
    published: true,
    pillar: "insurance",
    audience: "both",
    title: "Insurance Premium Financing",
    h1: "Insurance Premium Financing in Kenya",
    tagline: "Keep cover continuous without draining working capital.",
    summary:
      "A short-term credit arrangement that lets you pay an annual insurance premium in instalments while the policy stays active.",
    overview: [
      "Insurance premium financing is a short-term credit arrangement that spreads the cost of an annual premium over several months. Instead of finding the full amount at renewal, the client pays a deposit where required and repays the balance in instalments. The financer settles the premium with the insurer, so the cover starts or continues without a gap.",
      "It is most often used for commercial policies: motor and fleet, property, liability, and other annual covers where the premium is large relative to monthly cash flow. It can also help an individual facing a single large premium. Financing has a cost, and the terms are set by the financer, so the decision should be made with the numbers in front of you.",
      "MGS Capital helps you understand how the arrangement works, prepare the documents, and coordinate between the insurer and the financer. Approval, deposit, and repayment terms are confirmed in writing before you commit.",
    ],
    whoFor: [
      "Small and medium businesses with several policies renewing at once",
      "Fleet owners and transport operators",
      "Schools, institutions, and organisations with annual covers",
      "Contractors carrying project and liability insurance",
      "Individuals facing a large annual premium",
    ],
    covers: [
      {
        title: "Motor and fleet premiums",
        description:
          "Spreading the cost of private, commercial, and fleet motor cover.",
        icon: "car",
      },
      {
        title: "Property and fire premiums",
        description:
          "Premiums for premises, stock, and contents policies.",
        icon: "building",
      },
      {
        title: "Liability and commercial covers",
        description:
          "Public liability, professional indemnity, WIBA, and related policies.",
        icon: "shield-check",
      },
      {
        title: "Other annual covers",
        description:
          "Selected general insurance policies, subject to the financer's terms.",
        icon: "file-text",
      },
    ],
    howItWorks: [
      {
        title: "Choose the policy",
        description:
          "We agree the cover and the insurer, and confirm the premium that needs financing.",
      },
      {
        title: "Obtain the invoice",
        description:
          "The insurer issues a premium invoice or debit note for the policy period.",
      },
      {
        title: "Apply for financing",
        description:
          "The application goes to the financer with the documents it requires.",
      },
      {
        title: "Pay the deposit",
        description:
          "Where a deposit is required, it is paid before the arrangement is completed.",
      },
      {
        title: "Premium settled",
        description:
          "The financer pays the insurer, and the policy is issued or renewed without a gap.",
      },
      {
        title: "Repay in instalments",
        description:
          "You repay the financer over the agreed period, usually by standing order or cheques.",
      },
    ],
    benefits: [
      "Protects cash flow at renewal, when several premiums can fall due together",
      "Keeps cover continuous, so there is no uninsured gap",
      "Avoids tying up working capital in a single annual payment",
      "One coordinated process between insurer, financer, and client",
    ],
    thingsToKnow: [
      "Financing has a cost. The interest or charges are set by the financer and disclosed before you commit.",
      "Missing an instalment can put the cover at risk, depending on the partner terms.",
      "The arrangement is tied to a fixed policy period and usually cannot be moved to another policy.",
      "Credit is subject to approval, and the financer may ask for security or post-dated cheques.",
      "The insurer's premium and the financer's terms are separate agreements; read both.",
    ],
    requirements: [
      "Identification and KRA PIN for individuals",
      "Certificate of incorporation or business registration and company PIN for businesses",
      "Premium invoice or quotation from the insurer",
      "Post-dated cheques or another repayment arrangement accepted by the financer",
      "Financial information requested by the financer as part of credit assessment",
    ],
    faqs: [
      {
        question: "Which covers can be financed?",
        answer:
          "Annual general insurance premiums are the most common: motor and fleet, property, liability, and similar commercial covers. Some financers accept other annual policies. The final list depends on the financer's appetite. We confirm which of your policies can be financed before you apply, so you are not preparing documents for nothing.",
      },
      {
        question: "Is a deposit required?",
        answer:
          "Often, yes. Many arrangements require an initial deposit, with the balance spread over the remaining months. The percentage is set by the financer and can vary with the client's profile and the size of the premium. We confirm the deposit before the application is submitted so the cash-flow effect is clear.",
      },
      {
        question: "How many months can I spread payments over?",
        answer:
          "Repayment periods are set by the financer and usually run for several months within the policy year. The exact maximum depends on the arrangement and the premium. We do not quote a period until it has been confirmed in writing for your case, because the terms are not the same for every client.",
      },
      {
        question: "What happens if I miss an instalment?",
        answer:
          "A missed instalment can lead to penalties or, in a serious case, cancellation of the financing and the cover. Insurance must remain in force for the full policy period, so a lapse exposes you to uninsured risk. If you expect difficulty, speak to us early so the financer can be approached before the instalment falls overdue.",
      },
      {
        question: "Can I finance a renewal?",
        answer:
          "Yes, renewals are a common use. The process starts before the renewal date so that the premium is settled and the policy continues without a gap. Starting early matters, because credit assessment and insurer documentation take time. We plan the renewal with you so the cover does not lapse while the financing is arranged.",
      },
      {
        question: "Do I choose my own insurer?",
        answer:
          "Usually yes. The financing is separate from the insurance placement, so you can keep an insurer you are comfortable with, provided the financer accepts the policy and the premium invoice. Where the financer has requirements about the insurer or the policy wording, we confirm them before the application proceeds.",
      },
    ],
    related: ["general-insurance", "medical-insurance"],
    disclosure: disclosures.premiumFinancing,
    seo: {
      title: "Insurance Premium Financing in Kenya | MGS Capital",
      description:
        "Pay your annual insurance premium in instalments and keep cover active. MGS Capital explains premium financing for Kenyan businesses.",
      keywords: [
        "insurance premium financing Kenya",
        "pay insurance premium in instalments Kenya",
        "premium finance for businesses Kenya",
        "fleet insurance financing Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "retirement-plan-advisory",
    published: true,
    pillar: "retirement",
    audience: "both",
    title: "Retirement Plan Advisory",
    h1: "Retirement Plan Advisory in Kenya",
    tagline: "A target, a path, and plain answers about both.",
    summary:
      "Advice for individuals and employers on building a retirement plan: choosing a vehicle, setting contributions, projecting outcomes, and planning how benefits will be taken.",
    overview: [
      "Retirement planning starts with a simple question: what kind of life do you want after work, and what will it cost? From there, the work is about how much to save, where to hold the savings, and how to keep the plan on course as income and circumstances change.",
      "MGS Capital advises individuals and employers on the options available in Kenya: individual pension plans, occupational schemes, umbrella schemes, and how each fits alongside NSSF. We review existing savings and schemes, explain projections and costs plainly, and recommend a structure that matches your goals and time horizon. The scope of advice and the licence under which it is provided are confirmed in writing.",
      "For employers, the conversation includes scheme design, contribution levels, employee communication, and governance. For individuals, it is more personal: age, income, dependants, other savings, and the age at which you would like to stop working. In both cases, the plan is reviewed periodically rather than set once and forgotten.",
    ],
    whoFor: [
      "Salaried professionals planning for retirement",
      "Self-employed people and business owners without an employer scheme",
      "Employers setting up retirement benefits for staff",
      "Individuals with savings spread across several schemes",
      "People approaching retirement who need to plan how benefits will be taken",
    ],
    covers: [
      {
        title: "Individual pension plans",
        description:
          "A personal retirement savings vehicle for employed and self-employed people.",
        icon: "piggy-bank",
      },
      {
        title: "Occupational schemes",
        description:
          "Employer-sponsored schemes designed around the workforce and the business.",
        icon: "building",
      },
      {
        title: "Umbrella schemes",
        description:
          "A ready-made scheme structure that smaller employers can join.",
        icon: "layers",
      },
      {
        title: "NSSF alongside the plan",
        description:
          "How statutory contributions fit with voluntary retirement savings.",
        icon: "landmark",
      },
      {
        title: "Contributions and projections",
        description:
          "Setting contribution levels and testing whether they are likely to meet the goal.",
        icon: "calculator",
      },
      {
        title: "Benefit planning",
        description:
          "Planning how savings will be taken at retirement, within scheme and tax rules.",
        icon: "clock",
      },
    ],
    howItWorks: [
      {
        title: "A conversation",
        description:
          "We discuss your goals, age, income, dependants, and the age you hope to retire.",
      },
      {
        title: "Review what exists",
        description:
          "We look at current savings, schemes, contributions, and any previous benefits.",
      },
      {
        title: "Options and projections",
        description:
          "We compare vehicles and costs, and show what different contribution levels could mean.",
      },
      {
        title: "Recommended plan",
        description:
          "You receive a clear recommendation with the reasoning and the trade-offs set out.",
      },
      {
        title: "Set-up and contributions",
        description:
          "We help with the application and the contribution arrangements.",
      },
      {
        title: "Periodic reviews",
        description:
          "The plan is revisited as income, tax rules, and circumstances change.",
      },
    ],
    benefits: [
      "A clear target rather than a vague intention to save",
      "Options compared on cost, flexibility, and fit",
      "Projections explained in plain English, with assumptions shown",
      "A plan that can be adjusted as life changes",
    ],
    thingsToKnow: [
      "Pension savings are long-term, and access before retirement age is restricted by scheme rules and tax rules.",
      "Investment returns inside pension schemes are not guaranteed and can fall as well as rise.",
      "Fees and charges vary by provider and can materially affect the final fund.",
      "Tax treatment depends on current law and can change.",
      "A projection is an illustration based on assumptions, not a promise of the outcome.",
    ],
    requirements: [
      "Identification and KRA PIN",
      "Details of current income and existing retirement savings",
      "Statements from any existing schemes",
      "Employer details for an occupational scheme",
      "Information on dependants and beneficiary nominations",
    ],
    faqs: [
      {
        question: "How much should I save for retirement?",
        answer:
          "There is no single figure that suits everyone. It depends on the income you want in retirement, the age you start, your other savings, and how long you expect to need the money. A useful approach is to agree a target income, estimate the fund required, and then work backwards to a monthly contribution. We run that calculation with you.",
      },
      {
        question: "What is an individual pension plan?",
        answer:
          "An individual pension plan is a personal retirement savings account that you contribute to regularly, separate from any employer scheme. It is useful for self-employed people and for employees who want to save more than their workplace scheme allows. Contributions and access are governed by scheme rules and tax law, and returns are not guaranteed.",
      },
      {
        question: "What is an umbrella scheme?",
        answer:
          "An umbrella scheme is a ready-established retirement scheme that multiple employers can join, rather than each setting up its own. It can be a practical route for smaller employers who want to offer retirement benefits without the cost and administration of a standalone scheme. The employer joins as a participating employer and contributions are made under the scheme rules.",
      },
      {
        question: "Can the self-employed save for retirement?",
        answer:
          "Yes. Self-employed people can contribute to an individual pension plan or an umbrella scheme. Because there is no employer contribution, the discipline of a regular standing arrangement helps. The tax treatment of contributions depends on current rules, so we confirm the position before you set the amount. The earlier the saving starts, the more time it has to work.",
      },
      {
        question: "How does NSSF fit in?",
        answer:
          "NSSF is the statutory pension arrangement, and it provides a base level of retirement saving. A private plan sits on top of it. For employers, part of the NSSF contribution may be redirected to an approved private scheme through contracting out, subject to regulatory approval. We explain how the two interact and confirm the current rules with you.",
      },
      {
        question: "Can I change my contributions?",
        answer:
          "Usually yes, within the rules of the scheme. Many plans allow increases, and some allow reductions or a pause. Changes affect the final fund, so it is worth modelling the effect before deciding. Employer schemes may have their own rules and notice periods. We review the options with you and help with the paperwork.",
      },
      {
        question: "What are the tax rules?",
        answer:
          "Tax treatment of contributions, investment returns, and benefits depends on current Kenyan law and on the scheme. Rules can change, and individual circumstances differ. We explain the general position and, where the decision is significant, recommend confirmation from a tax adviser. We do not publish rates that may be out of date.",
      },
    ],
    related: ["pension-consolidation", "nssf-tier-2"],
    disclosure: disclosures.retirement,
    seo: {
      title: "Retirement Plan Advisory in Kenya | MGS Capital",
      description:
        "Plan your retirement with clear advice on pensions, contributions, and projections. MGS Capital advises individuals and employers in Kenya.",
      keywords: [
        "retirement planning Kenya",
        "individual pension plan Kenya",
        "retirement savings plan Kenya",
        "umbrella pension scheme Kenya",
        "occupational pension scheme Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "pension-consolidation",
    published: true,
    pillar: "retirement",
    audience: "individual",
    title: "Pension Consolidation",
    h1: "Pension Consolidation in Kenya",
    tagline: "Bring scattered retirement savings into one clear view.",
    summary:
      "Combining retirement savings held in several schemes into one, so they are easier to see, manage, and plan around.",
    overview: [
      "After several jobs, retirement savings can end up in several places: an old employer's scheme, a previous umbrella scheme, and perhaps an individual pension plan. Each has its own statement, fees, and rules. Consolidation brings those benefits together in one destination scheme so there is a single view of what you have.",
      "MGS Capital reviews the schemes side by side, including fees, performance, and the rules that affect a transfer. We agree the destination with you, submit the transfer requests, and follow them through to completion. The aim is to keep the savings invested for retirement, not to cash them out.",
      "A transfer can affect benefits, so the review comes first. Some schemes carry vesting rules, guarantees, or penalties that make consolidation less attractive. We set those out before any instruction is signed, and confirm the requirements with each scheme and the regulator as the process moves.",
    ],
    whoFor: [
      "Professionals who have changed employers more than once",
      "People with deferred benefits in several schemes",
      "Anyone who has lost track of an old retirement account",
      "Individuals who want one statement and one set of fees",
      "People reviewing their retirement arrangements before retirement",
    ],
    covers: [
      {
        title: "Scheme review",
        description:
          "Statements, fees, performance, and rules compared side by side.",
        icon: "layers",
      },
      {
        title: "Destination selection",
        description:
          "Agreeing the scheme that best fits your goals and the transfer rules.",
        icon: "landmark",
      },
      {
        title: "Transfer coordination",
        description:
          "Forms, consent, and follow-up with each scheme and administrator.",
        icon: "file-check",
      },
      {
        title: "Consolidated view",
        description:
          "A single picture of your retirement savings after the transfers complete.",
        icon: "list-checks",
      },
      {
        title: "Beneficiary review",
        description:
          "Checking nominations are current and consistent across the consolidated fund.",
        icon: "users",
      },
    ],
    howItWorks: [
      {
        title: "Gather statements",
        description:
          "We collect the latest statements and member numbers from each scheme.",
      },
      {
        title: "Review side by side",
        description:
          "We compare fees, performance, vesting, and scheme rules.",
      },
      {
        title: "Agree the destination",
        description:
          "You decide where the savings should go, with the trade-offs explained.",
      },
      {
        title: "Submit the transfers",
        description:
          "We complete and submit the transfer and consent forms to each scheme.",
      },
      {
        title: "Confirm completion",
        description:
          "We follow up until the benefits are received and reflected in the destination scheme.",
      },
      {
        title: "Provide the consolidated view",
        description:
          "You receive a clear summary of the position after consolidation.",
      },
    ],
    benefits: [
      "One clear picture of retirement savings across past employers",
      "Simpler tracking, statements, and beneficiary management",
      "A chance to compare costs and options before transferring",
      "Less risk of losing touch with an old scheme",
    ],
    thingsToKnow: [
      "Transfers can affect benefits, so scheme rules, vesting, fees, and tax implications must be reviewed first.",
      "Consolidation is about keeping savings invested for retirement, not cashing out.",
      "Some schemes impose exit charges or restrict transfers; these are checked before you decide.",
      "Transfer timelines depend on the schemes and their administrators, not on MGS Capital.",
      "Scheme and regulatory rules apply throughout, and a transfer may not be permitted in every case.",
    ],
    requirements: [
      "Identification and KRA PIN",
      "Member numbers and latest statements for each scheme",
      "Employer or scheme details for each past arrangement",
      "Completed transfer or consent forms",
      "Beneficiary nomination details",
    ],
    faqs: [
      {
        question: "Why consolidate my pensions?",
        answer:
          "Consolidation gives you one view of your retirement savings, one set of statements, and one place to manage beneficiaries. It also makes it easier to compare costs and returns and to plan how the fund will be used at retirement. The main benefit is clarity, but it should only be done after checking that a transfer does not remove a valuable benefit.",
      },
      {
        question: "Can I transfer from an old employer's scheme?",
        answer:
          "Often yes, if the scheme rules and the regulator permit it. Some schemes allow transfers to an approved destination, while others impose conditions or preserve certain benefits. You will need the member number, a recent statement, and consent. We review the rules first and only proceed where the transfer is allowed and makes sense for you.",
      },
      {
        question: "Will I lose any benefits or pay penalties?",
        answer:
          "It depends on the scheme. Some carry vesting rules, guaranteed benefits, or exit charges that would be lost or reduced on transfer. Others have none. That is why the review comes before the instruction. We set out what would be preserved and what would not, so you can decide with the full picture in front of you.",
      },
      {
        question: "How long does a transfer take?",
        answer:
          "It varies with the schemes and administrators involved. Gathering statements and submitting forms is the quick part; the receiving and paying schemes then process the transfer at their own pace. We follow up and keep you informed, but we do not promise a timeline that the schemes control. We confirm the expected process once the destination is agreed.",
      },
      {
        question: "What if I can't find an old scheme?",
        answer:
          "Start with old payslips, employer HR records, and any statements you still have. The scheme administrator or the employer's pension contact may be able to trace a membership using your ID and dates of employment. The Retirement Benefits Authority can also assist with lost or unclaimed benefits. We help you assemble what is needed to make the enquiry.",
      },
      {
        question: "Is consolidation taxable?",
        answer:
          "A transfer between approved retirement schemes is generally not a taxable event for the member, but the position depends on the schemes and current tax law. Cashing out would be different. We confirm the treatment for your case and recommend a tax adviser where the amount or structure makes it significant. We do not publish rates that may change.",
      },
    ],
    related: ["retirement-plan-advisory", "money-market-fund-advisory"],
    disclosure: disclosures.consolidation,
    seo: {
      title: "Pension Consolidation in Kenya | MGS Capital",
      description:
        "Combine pension schemes from past employers into one clear retirement fund. MGS Capital reviews fees and rules before any transfer.",
      keywords: [
        "pension consolidation Kenya",
        "combine pension schemes Kenya",
        "transfer pension Kenya",
        "consolidate retirement benefits Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "nssf-tier-2",
    published: true,
    pillar: "retirement",
    audience: "business",
    title: "NSSF Tier 2",
    h1: "NSSF Tier 2 Advisory in Kenya",
    tagline: "Understand the obligation before you decide the route.",
    summary:
      "Advisory and support for employers on NSSF Tier II contributions: understanding the obligation, weighing contracting out, and managing the application and transition.",
    overview: [
      "NSSF contributions are split into two tiers. Tier I always goes to NSSF. Tier II can, for an employer that chooses to, be redirected to a private scheme approved for contracting out. The decision is made at employer level, not employee by employee, and it requires approval from the Retirement Benefits Authority.",
      "MGS Capital helps employers understand the obligation, compare staying with NSSF against contracting out, and decide which route suits the workforce and the business. We review payroll and any existing pension arrangements, help select an existing scheme, an umbrella scheme, or a new scheme, and support the application and the transition.",
      "Contracting out is not automatic and approval takes time. Rules and limits change, so we confirm the current position with NSSF and the Retirement Benefits Authority before any application is prepared. The scope of what MGS Capital does — advice, scheme set-up, administration, or coordination with a provider — is confirmed in writing at the outset.",
    ],
    whoFor: [
      "Employers reviewing their statutory pension obligations",
      "HR and finance managers responsible for payroll compliance",
      "Company directors deciding on a retirement benefits strategy",
      "Small and medium businesses without an existing pension scheme",
      "Employers already contributing to a scheme and considering contracting out",
    ],
    covers: [
      {
        title: "Obligation review",
        description:
          "What Tier I and Tier II require of the employer, in plain language.",
        icon: "scale",
      },
      {
        title: "Staying or contracting out",
        description:
          "A side-by-side view of the two routes and what each means in practice.",
        icon: "layers",
      },
      {
        title: "Scheme selection",
        description:
          "Existing scheme, umbrella scheme, or a new scheme — assessed against the workforce.",
        icon: "landmark",
      },
      {
        title: "Application support",
        description:
          "Preparing the notice, forms, and supporting documents for approval.",
        icon: "file-text",
      },
      {
        title: "Transition",
        description:
          "Coordinating payroll changes, employee communication, and the first contributions.",
        icon: "users",
      },
      {
        title: "Ongoing compliance",
        description:
          "Keeping the arrangement current as rules, rates, and headcount change.",
        icon: "badge-check",
      },
    ],
    howItWorks: [
      {
        title: "Review payroll",
        description:
          "We look at headcount, payroll structure, and any existing pension arrangements.",
      },
      {
        title: "Compare the routes",
        description:
          "Staying with NSSF is compared with contracting out, including cost and administration.",
      },
      {
        title: "Choose the scheme",
        description:
          "You decide between an existing scheme, an umbrella scheme, or a new scheme.",
      },
      {
        title: "Prepare the application",
        description:
          "We help prepare the notice and documents required for regulatory approval.",
      },
      {
        title: "Transition",
        description:
          "Payroll and employee communication are adjusted, and contributions begin under the new arrangement.",
      },
      {
        title: "Support and review",
        description:
          "We help with ongoing compliance and revisit the arrangement as rules change.",
      },
    ],
    benefits: [
      "Clarity on a compliance obligation that is easy to misread",
      "An informed choice between staying with NSSF and contracting out",
      "Support with the paperwork and the approval process",
      "A retirement arrangement that suits the workforce, not just the file",
    ],
    thingsToKnow: [
      "Contracting out is not automatic, and the Retirement Benefits Authority must approve it.",
      "Applications generally need to be made in advance and a contracting-out certificate obtained.",
      "The scheme must meet the required benefit standard and be approved for contracting out.",
      "Rules, rates, and earnings limits change over time; we confirm the current position before acting.",
      "Employers remain responsible for compliance, and this is general information rather than legal advice.",
    ],
    requirements: [
      "Company registration documents and KRA PIN",
      "Payroll summary and employee headcount",
      "Details of any existing pension or provident scheme",
      "Board or management approval for the chosen route",
      "Scheme documents and member data required by the regulator",
    ],
    faqs: [
      {
        question: "What is NSSF Tier II?",
        answer:
          "NSSF contributions are divided into two tiers based on earnings. Tier I is the lower band and always goes to NSSF. Tier II covers earnings above that band and may be redirected by an employer to a private scheme approved for contracting out. The rates and earnings limits are set by NSSF and change over time.",
      },
      {
        question: "What is the difference between Tier I and Tier II?",
        answer:
          "Tier I is the portion of statutory contributions that must be paid to NSSF. Tier II is the portion above the Tier I earnings threshold, which an employer may choose to redirect to an approved private scheme instead of NSSF. The distinction is about where the contribution is paid, not about whether the employee is covered.",
      },
      {
        question: "Can an employer contract out of Tier II?",
        answer:
          "Yes, an employer can apply to redirect Tier II contributions to a private scheme approved for contracting out. The decision is made at employer level, not employee by employee, and it requires approval from the Retirement Benefits Authority and a contracting-out certificate. The scheme must meet the required benefit standard.",
      },
      {
        question: "Can individual employees opt out?",
        answer:
          "Not individually. Contracting out is an employer-level decision that applies to the eligible employees covered by the arrangement. An employee cannot simply choose to redirect their own Tier II contribution. Employers should communicate the change clearly, because it affects payslips and retirement benefits. We help prepare that communication.",
      },
      {
        question: "How long does contracting out take?",
        answer:
          "The process involves scheme selection, an application, regulatory review, and a transition period, so it is not immediate. The regulator generally expects advance notice before the intended effective date. We confirm the current requirements and plan backwards from your target date rather than promising a fixed turnaround that we do not control.",
      },
      {
        question: "What types of scheme qualify?",
        answer:
          "The destination must be a retirement benefits scheme approved for contracting out, which may be an occupational scheme, an umbrella scheme, or an individual scheme depending on the structure and the regulator's requirements. It must meet the required benefit standard. We assess the options against the workforce and confirm eligibility before applying.",
      },
      {
        question: "What does an employer need to apply?",
        answer:
          "Typically company registration and tax documents, payroll and employee data, details of the chosen scheme, board approval, and the prescribed application and notice forms. The exact list is confirmed with the scheme and the regulator. We prepare the pack with you and check it before submission, because incomplete applications cause most of the delay.",
      },
    ],
    related: ["retirement-plan-advisory", "pension-consolidation"],
    disclosure: disclosures.nssf,
    seo: {
      title: "NSSF Tier 2 Advisory in Kenya | MGS Capital",
      description:
        "Understand NSSF Tier II and whether contracting out suits your business. MGS Capital advises employers in Kenya. Speak to us today.",
      keywords: [
        "NSSF Tier 2 Kenya",
        "contract out of NSSF Tier II",
        "NSSF Tier 1 vs Tier 2",
        "NSSF opt out for employers Kenya",
        "umbrella pension scheme NSSF Tier 2",
      ],
    },
    reviewedDate: "2026-10-27",
    callout:
      "Rules and limits are set by NSSF and the Retirement Benefits Authority and change over time. We will confirm the current position with you.",
    explainer: {
      title: "Tier I and Tier II at a glance",
      intro:
        "In words only — no rates or limits, because those change and must be confirmed against current guidance.",
      points: [
        {
          title: "Tier I always goes to NSSF",
          body: "The lower band of statutory contributions is paid to the National Social Security Fund and cannot be redirected.",
        },
        {
          title: "Tier II can be redirected",
          body: "An employer may apply to send the upper band to a private scheme approved for contracting out, instead of NSSF.",
        },
        {
          title: "The decision is at employer level",
          body: "It is not an individual employee election. The employer applies, obtains approval, and communicates the change.",
        },
        {
          title: "Approval comes first",
          body: "Contracting out requires the Retirement Benefits Authority's approval and a certificate before contributions move.",
        },
      ],
    },
  },
  {
    slug: "money-market-fund-advisory",
    published: true,
    pillar: "investment",
    audience: "both",
    title: "Money Market Fund Advisory",
    h1: "Money Market Fund Advisory in Kenya",
    tagline: "A place for money you may need soon — with the risks explained.",
    summary:
      "Advice on choosing and using money market funds for short-term money, with costs, access, and risk set out plainly.",
    overview: [
      "A money market fund is a pooled investment that places money in short-term, high-quality instruments such as treasury bills, fixed deposits, and commercial paper. It is designed for money you may need in the near term, rather than for long-term growth. Units are bought from a fund managed by a licensed fund manager.",
      "MGS Capital advises on choosing and using these funds: what to look for, how access works, what the fees are, and how a fund fits alongside your other savings. We do not promise a return, and we do not quote a yield that is not current, sourced, and compliant. Returns vary with market rates and are not guaranteed.",
      "The work starts with your time horizon and liquidity needs. An emergency fund, a tax payment due in a few months, and a business's surplus cash have different requirements. We compare suitable funds, explain the trade-offs, and help with the account opening and funding process. How MGS Capital participates — advice, agency, or distribution — and the licence that covers it, is confirmed in writing.",
    ],
    whoFor: [
      "People building an emergency or short-term fund",
      "First-time investors who want a simple starting point",
      "Businesses holding surplus cash they may need soon",
      "Individuals parking money between larger decisions",
      "Anyone comparing money market funds and unsure what matters",
    ],
    covers: [
      {
        title: "Goal and horizon review",
        description:
          "How soon you need the money, and how much access you require.",
        icon: "clock",
      },
      {
        title: "Fund comparison",
        description:
          "Suitable funds compared on mandate, costs, access, and manager.",
        icon: "line-chart",
      },
      {
        title: "KYC and account opening",
        description:
          "The forms and documents needed to open an account with a fund manager.",
        icon: "file-check",
      },
      {
        title: "Funding the account",
        description:
          "Moving money in, and setting up a regular contribution if appropriate.",
        icon: "banknote",
      },
      {
        title: "Ongoing review",
        description:
          "Revisiting the fund as rates, needs, and other savings change.",
        icon: "list-checks",
      },
    ],
    howItWorks: [
      {
        title: "A conversation",
        description:
          "We discuss your goals, time horizon, and when you might need the money.",
      },
      {
        title: "Compare funds",
        description:
          "We set out suitable funds and the differences that matter to you.",
      },
      {
        title: "KYC and account opening",
        description:
          "We help assemble the documents and complete the fund manager's process.",
      },
      {
        title: "Fund the account",
        description:
          "Money is transferred to the fund, and units are allocated.",
      },
      {
        title: "Review",
        description:
          "We revisit the arrangement as your needs and market conditions change.",
      },
    ],
    benefits: [
      "Lower entry amounts than many other investments, depending on the fund",
      "Relatively easy access to your money, within the fund's settlement terms",
      "Professional management and diversification across short-term instruments",
      "An adviser to compare options and explain the costs",
    ],
    thingsToKnow: [
      "Returns are not guaranteed and vary with market rates.",
      "Fees and taxes apply and reduce the effective return.",
      "Money market funds are lower-risk than many investments but are not risk-free.",
      "We do not quote a yield unless it is current, sourced, and compliant.",
      "Access is not instant: withdrawal and settlement take time under the fund's rules.",
    ],
    requirements: [
      "Identification for individuals, or company documents for a business",
      "KRA PIN",
      "Proof of address",
      "Bank details for funding and withdrawals",
      "Completed KYC form and any source-of-funds information required",
    ],
    faqs: [
      {
        question: "What is a money market fund?",
        answer:
          "A money market fund is a pooled fund that invests in short-term, high-quality instruments such as treasury bills, fixed deposits, and commercial paper. Investors buy units, and the fund is managed by a licensed fund manager. It is designed for money you may need relatively soon, and returns vary with short-term interest rates.",
      },
      {
        question: "How is it different from a savings account?",
        answer:
          "A bank savings account holds a deposit with a bank, while a money market fund buys units in a pooled investment managed by a fund manager. Fund returns vary with the market and are not guaranteed, whereas a savings account pays a rate set by the bank. Access also differs: fund withdrawals are processed under the fund's rules, not instantly at a counter.",
      },
      {
        question: "What is the minimum investment?",
        answer:
          "Minimum amounts vary by fund, and some are quite low. We confirm the current minimum for each fund before you open an account, rather than quoting a figure that may have changed. The minimum is only one factor: the fund's mandate, costs, and withdrawal terms matter more over time.",
      },
      {
        question: "How quickly can I withdraw?",
        answer:
          "Withdrawal timelines depend on the fund manager and the fund's rules, and are usually measured in days rather than minutes. Some funds process requests faster than others. If you need money at short notice, that should be part of the fund choice from the start. We check the terms before you invest.",
      },
      {
        question: "Are returns guaranteed?",
        answer:
          "No. Money market funds are not guaranteed investments. Returns vary with short-term interest rates and the performance of the underlying instruments, and the value of an investment can go down as well as up. Past performance is not a reliable guide to future results. We do not quote a yield unless it is current and properly sourced.",
      },
      {
        question: "How are returns taxed?",
        answer:
          "Tax is applied to investment returns under current Kenyan law, and the position can differ by investor and by instrument. We explain the general treatment and confirm the current rules before you invest, but we do not give tax advice. For a significant sum, a tax adviser should confirm your position.",
      },
      {
        question: "Can a business invest?",
        answer:
          "Yes. Companies, partnerships, and institutions can hold money market fund units, usually through corporate account opening with the fund manager. It can suit surplus cash that is not needed for day-to-day operations but may be required within a known period. We help with the corporate KYC and the account set-up.",
      },
    ],
    related: ["retirement-plan-advisory", "pension-consolidation"],
    disclosure: disclosures.moneyMarket,
    seo: {
      title: "Money Market Fund Advisory in Kenya | MGS Capital",
      description:
        "Choose a money market fund with clear, unhurried advice on access, costs, and risk. MGS Capital advises individuals and businesses in Kenya.",
      keywords: [
        "money market fund advisory Kenya",
        "money market funds Kenya",
        "how to choose a money market fund Kenya",
        "investment adviser Kenya",
        "short-term investment Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "study-abroad-loans",
    published: true,
    pillar: "education",
    audience: "individual",
    title: "Study Abroad Loans",
    h1: "Study Abroad Loans in Kenya",
    tagline: "Funding that keeps an offer of a place within reach.",
    summary:
      "Financing to cover the costs of studying overseas, for students with an admission offer and the parents or sponsors behind them.",
    overview: [
      "Studying abroad involves several costs arriving at once: tuition, accommodation, travel, a visa, and health cover. A study abroad loan is financing designed to meet those costs so that an admission offer does not fail for want of funding.",
      "MGS Capital helps students and their sponsors understand the options, prepare the documentation, and submit an application to a lending partner. We explain the repayment terms, the effect of exchange rates, and what the lender will assess before you commit. The lenders we work with, the countries and institutions supported, and the disbursement arrangements are confirmed in writing.",
      "The process works best when it starts early. Admission letters, fee invoices, and sponsor documents take time to assemble, and credit assessment adds more. We help you plan backwards from the institution's payment deadline rather than rushing the file in the final week.",
    ],
    whoFor: [
      "Kenyan students admitted to an institution abroad",
      "Parents, guardians, or sponsors funding a student",
      "Students who need to cover a funding gap rather than the full cost",
      "Postgraduate students with a confirmed offer",
      "Families planning for an upcoming intake",
    ],
    covers: [
      {
        title: "Tuition and fees",
        description:
          "The institution's tuition and compulsory charges for the course.",
        icon: "graduation-cap",
      },
      {
        title: "Accommodation and living costs",
        description:
          "Housing and day-to-day living expenses for the study period.",
        icon: "home",
      },
      {
        title: "Flights and travel",
        description:
          "Travel to and from the country of study at the start of the course.",
        icon: "plane",
      },
      {
        title: "Visa and immigration costs",
        description:
          "Visa application fees and related immigration expenses.",
        icon: "globe",
      },
      {
        title: "Student health insurance",
        description:
          "Health cover required by the institution or the destination country.",
        icon: "heart-pulse",
      },
    ],
    howItWorks: [
      {
        title: "Initial consultation",
        description:
          "We discuss the course, the institution, the total cost, and the funding gap.",
      },
      {
        title: "Eligibility and cost review",
        description:
          "We check the likely eligibility and set out the full cost of borrowing.",
      },
      {
        title: "Documentation",
        description:
          "We help assemble the admission, identification, income, and sponsor documents.",
      },
      {
        title: "Submission",
        description:
          "The application goes to the lending partner with a complete file.",
      },
      {
        title: "Approval and disbursement",
        description:
          "On approval, funds are released according to the lender's arrangements.",
      },
    ],
    benefits: [
      "Access to education that savings alone may not cover",
      "A structured repayment plan instead of ad hoc borrowing",
      "Guidance with the paperwork and the lender's requirements",
      "A clear view of the total cost before you commit",
    ],
    thingsToKnow: [
      "The loan must be repaid with interest and fees, which are disclosed before you commit.",
      "Exchange-rate movement between the shilling and the study currency can change the real cost.",
      "Repayment may start during or after studies; the lender's terms set this out.",
      "Credit is subject to approval, and a guarantor, collateral, or sponsor support may be required.",
      "The loan does not guarantee admission, a visa, or the institution's acceptance.",
    ],
    requirements: [
      "Admission or offer letter from the institution",
      "Passport and national identification",
      "KRA PIN",
      "Proof of income or sponsor details",
      "Guarantor or collateral information, where required",
      "Fee invoice or statement of costs from the institution",
    ],
    faqs: [
      {
        question: "Can I apply before I receive my admission letter?",
        answer:
          "You can start the conversation and prepare documents, but a lender will normally need the admission or offer letter before it can assess the application. Starting early is still useful: it gives time to review affordability and assemble the sponsor and income documents. We map the timeline backwards from the institution's payment deadline.",
      },
      {
        question: "Do I need collateral or a guarantor?",
        answer:
          "It depends on the lender and the amount. Some facilities require a guarantor, some require security, and some rely on the sponsor's income and credit profile. We confirm the requirement before the application is prepared, so you are not asked for documents that will not be used. The lender makes the final credit decision.",
      },
      {
        question: "Which countries and institutions are supported?",
        answer:
          "Support depends on the lending partner and its appetite, not on a single global list. Recognised institutions and courses are easier to finance than unaccredited ones. We confirm the position for your specific offer before you apply. If a lender cannot support a particular destination, we say so early rather than raising expectations.",
      },
      {
        question: "Can a parent apply for a student?",
        answer:
          "Yes, a parent or sponsor can often be the borrower or a co-borrower, which may improve the assessment because the lender can look at the sponsor's income and credit history. The student remains the beneficiary of the funding. The right structure depends on the lender's policy and who will be repaying the loan.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Timelines vary with the lender and the completeness of the file. A full application with clear sponsor documents moves faster than one with gaps. We do not promise a fixed turnaround, because credit assessment and verification sit with the lender. We follow up and tell you what is outstanding so the process does not stall silently.",
      },
      {
        question: "What happens if I defer my studies?",
        answer:
          "You should tell the lender and us as soon as a deferral is likely. Disbursement may be paused or restructured, and repayment terms may need to change. Leaving it until the institution's deadline can create avoidable cost. We help coordinate the conversation with the lender and the institution so the funding matches the revised start date.",
      },
    ],
    related: ["money-market-fund-advisory", "medical-insurance"],
    disclosure: disclosures.studyAbroad,
    seo: {
      title: "Study Abroad Loans in Kenya | MGS Capital",
      description:
        "Finance tuition, living costs, and travel for study abroad. MGS Capital guides Kenyan students and sponsors through the loan process.",
      keywords: [
        "study abroad loans Kenya",
        "student loan for studying abroad Kenya",
        "education loan Kenya overseas",
        "fund studies abroad Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "trade-finance-solution",
    published: true,
    pillar: "enterprise",
    audience: "business",
    title: "Trade Finance Solution",
    h1: "Trade Finance Solutions in Kenya",
    tagline: "Working capital that moves at the pace of the trade cycle.",
    summary:
      "Financing and structuring support for businesses that buy and sell goods, so they can pay suppliers, fulfil orders, and bridge the gap between paying and being paid.",
    overview: [
      "Trade finance covers the financing and documentary support a business needs to move goods: paying a supplier before an order arrives, issuing a guarantee, or waiting for a buyer to settle an invoice. The right structure depends on the trade cycle, the counterparties, and the documents that support the transaction.",
      "MGS Capital works through the transaction with you, selects a structure that fits, and helps assemble the documentation a funder will require. We coordinate the submission and follow it through to disbursement or issuance and settlement. The instruments available and the funding partners we use are confirmed in writing.",
      "This is not a one-size product. An importer with a proforma invoice, a supplier to a large buyer with a purchase order, and an exporter waiting on receivables each need something different. The common thread is a clear transaction, complete documents, and a realistic view of cost and timing.",
    ],
    whoFor: [
      "Importers and exporters",
      "Wholesalers, distributors, and traders",
      "Suppliers to large buyers and institutions",
      "Growing SMEs with orders larger than their working capital",
      "Businesses with a clear transaction but a timing gap",
    ],
    covers: [
      {
        title: "Import financing",
        description:
          "Funding to pay overseas suppliers and clear goods for delivery.",
        icon: "ship",
      },
      {
        title: "Letters of credit",
        description:
          "Documentary support that gives buyer and seller a shared framework.",
        icon: "file-text",
      },
      {
        title: "Bank guarantees",
        description:
          "Guarantees supporting contractual obligations and performance.",
        icon: "shield-check",
      },
      {
        title: "Invoice and receivables financing",
        description:
          "Bridge the gap between issuing an invoice and being paid.",
        icon: "receipt",
      },
      {
        title: "Purchase order financing",
        description:
          "Funding to fulfil a confirmed order without draining working capital.",
        icon: "list-checks",
      },
      {
        title: "Supply-chain financing",
        description:
          "Structures that support suppliers within a larger buyer's chain.",
        icon: "truck",
      },
    ],
    howItWorks: [
      {
        title: "Understand the transaction",
        description:
          "We review the trade cycle, counterparties, amounts, and timing.",
      },
      {
        title: "Choose the structure",
        description:
          "The instrument or facility is matched to the transaction, not the other way round.",
      },
      {
        title: "Assemble documents",
        description:
          "We help prepare the proforma, contract, statements, and compliance documents.",
      },
      {
        title: "Submit to the funder",
        description:
          "The application goes to a funding partner with a complete file.",
      },
      {
        title: "Disbursement or issuance",
        description:
          "Funds are released or the instrument is issued according to the agreed terms.",
      },
      {
        title: "Settlement",
        description:
          "Repayment or settlement is managed in line with the transaction's cash cycle.",
      },
    ],
    benefits: [
      "Working capital preserved for the rest of the business",
      "Orders fulfilled without waiting for the buyer to pay",
      "Structured support with the documentary side of trade",
      "A structure matched to the transaction rather than a generic loan",
    ],
    thingsToKnow: [
      "Financing has a cost and may require security or a cash margin.",
      "Trade documents must be precise; discrepancies can delay payment or issuance.",
      "Currency movements and shipping timelines affect the outcome.",
      "Credit is subject to approval by the funding partner.",
      "The funder's terms, not MGS Capital's, govern the facility.",
    ],
    requirements: [
      "Company registration and tax compliance documents",
      "Proforma invoice or purchase order",
      "Supply or sales contract",
      "Bank statements",
      "Recent financial statements",
      "KYC for directors and beneficial owners",
    ],
    faqs: [
      {
        question: "What is trade finance?",
        answer:
          "Trade finance is financing and documentary support for the movement of goods. It helps a business pay a supplier, fulfil an order, or bridge the time between paying and being paid. Common structures include import financing, letters of credit, guarantees, invoice financing, and purchase order financing. The right one depends on the transaction.",
      },
      {
        question: "What is the difference between a letter of credit and a bank guarantee?",
        answer:
          "A letter of credit is a payment undertaking, usually used in international trade, that pays a seller when compliant documents are presented. A bank guarantee is an undertaking to pay a beneficiary if the applicant fails to meet an obligation, such as performance under a contract. They solve different problems and carry different documentation requirements.",
      },
      {
        question: "What is LPO financing?",
        answer:
          "LPO financing is funding against a confirmed purchase order, usually from a credible buyer. It allows a supplier to buy materials or produce goods without using its own working capital, and it is repaid from the proceeds of the order. The funder assesses the buyer, the order, and the supplier's ability to deliver.",
      },
      {
        question: "Who qualifies?",
        answer:
          "Businesses with a genuine transaction, a credible counterparty, and the documents to evidence it. Lenders usually look for registration and tax compliance, trading history, bank statements, and clear KYC. Size matters less than the quality of the transaction and the ability to repay. Each funder has its own credit appetite.",
      },
      {
        question: "How quickly can facilities be arranged?",
        answer:
          "It depends on the structure, the funder, and how complete the documents are. A straightforward invoice facility can move faster than a first-time letter of credit with a new counterparty. Timelines are set by the funder, and we do not promise a fixed turnaround. Starting with a complete file is the most reliable way to avoid delay.",
      },
      {
        question: "What security is needed?",
        answer:
          "Some facilities are secured by the goods, the receivables, or a cash margin; others rely on the strength of the buyer and the transaction. The funder decides. We confirm the likely security requirement early so the business can assess whether it can meet it. Providing security does not remove the need for a viable transaction.",
      },
    ],
    related: ["bid-bonds", "general-insurance"],
    disclosure: disclosures.tradeFinance,
    seo: {
      title: "Trade Finance Solutions in Kenya | MGS Capital",
      description:
        "Import financing, letters of credit, invoice and LPO financing for Kenyan businesses. MGS Capital structures trade finance around your cycle.",
      keywords: [
        "trade finance Kenya",
        "import financing Kenya",
        "LPO financing Kenya",
        "invoice discounting Kenya",
        "letter of credit Kenya",
        "supply chain financing Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "bid-bonds",
    published: true,
    pillar: "enterprise",
    audience: "business",
    title: "Bid Bonds",
    h1: "Bid Bonds in Kenya",
    tagline: "Tender security, issued to the letter of the tender.",
    summary:
      "Tender security arranged with a bank or insurer, so a bidder can meet the tender requirements without locking up cash.",
    overview: [
      "A bid bond — also called tender security or bid security — is a guarantee issued by a bank or insurer on a bidder's behalf. It assures the procuring entity that the bidder will sign the contract and provide any required performance security if the tender is awarded.",
      "MGS Capital reviews the tender document, confirms the amount, validity period, wording, and beneficiary, and coordinates issuance with the issuer. The bond must match the tender's requirements exactly; a bond that is the wrong amount or expires too early can disqualify an otherwise strong bid.",
      "Timing matters. Original documents usually have to be collected and submitted before the tender deadline, and issuers need time to assess the application. We help you start early, prepare the company and financial documents, and collect the original in time. Issuance is subject to assessment and the issuer's terms.",
    ],
    whoFor: [
      "Contractors bidding for public-sector tenders",
      "Suppliers and consultants responding to requests for proposals",
      "Businesses bidding for private-sector contracts",
      "Firms that want to preserve cash instead of lodging a deposit",
      "Bidders who need the wording checked against the tender document",
    ],
    covers: [
      {
        title: "Tender security",
        description:
          "A guarantee that supports the bidder's commitment to the tender terms.",
        icon: "shield-check",
      },
      {
        title: "Requirement review",
        description:
          "Amount, validity, beneficiary, and wording checked against the tender.",
        icon: "file-check",
      },
      {
        title: "Issuer coordination",
        description:
          "The application is prepared and submitted to a bank or insurer.",
        icon: "landmark",
      },
      {
        title: "Original document",
        description:
          "Collection and handover of the original bond before the deadline.",
        icon: "file-text",
      },
      {
        title: "Extensions",
        description:
          "Support if the tender timetable or validity period changes.",
        icon: "clock",
      },
    ],
    howItWorks: [
      {
        title: "Share the tender",
        description:
          "We review the tender document and the bond requirements it sets.",
      },
      {
        title: "Confirm the terms",
        description:
          "Amount, validity period, wording, and beneficiary are checked.",
      },
      {
        title: "Submit documents",
        description:
          "Company, tax, and financial documents go to the issuer for assessment.",
      },
      {
        title: "Issuance",
        description:
          "The bond is issued once the issuer's assessment and terms are satisfied.",
      },
      {
        title: "Collect the original",
        description:
          "The original is collected and delivered ahead of the tender deadline.",
      },
    ],
    benefits: [
      "Meet tender requirements without locking up a large cash deposit",
      "Preserve working capital for the contract itself",
      "Support with correct wording, amount, and validity",
      "A coordinated process from tender review to collection",
    ],
    thingsToKnow: [
      "The bond must match the tender's exact requirements: amount, validity, format, and acceptable issuers.",
      "Deadlines are strict, and a late or non-compliant bond can disqualify a bid.",
      "Issuance is subject to assessment and the issuer's terms.",
      "A bond may be called if the bidder fails to honour the tender obligations.",
      "Fees and any security required are set by the issuer.",
    ],
    requirements: [
      "Company registration documents",
      "Tax compliance documents",
      "Directors' identification",
      "The tender document or bid notice",
      "Recent financial statements or bank statements",
      "A signed application",
    ],
    faqs: [
      {
        question: "What is a bid bond and why do tenders require one?",
        answer:
          "A bid bond is a guarantee, issued by a bank or insurer, that a bidder will honour the tender terms if awarded the contract. Procuring entities require it to deter unserious bids and to have recourse if a winning bidder fails to sign or provide performance security. It substitutes for a cash deposit.",
      },
      {
        question: "How much does a bid bond cost?",
        answer:
          "The cost is set by the issuer and depends on the bond amount, the validity period, the security provided, and the bidder's profile. It is usually a fee rather than the full bond value, but the issuer may require a cash margin or counter-security. We confirm the cost before the application is submitted.",
      },
      {
        question: "How long does it take to issue?",
        answer:
          "Issuance time depends on the issuer and the completeness of the application. A known client with documents in order can move faster than a first-time applicant. Tender deadlines are strict, so we recommend starting as soon as the tender is published. We do not promise a turnaround that the issuer controls.",
      },
      {
        question: "What validity period do I need?",
        answer:
          "The tender document states the required validity, often a defined period beyond the bid submission date. The bond must remain valid for at least that long. If the tender timetable is extended, the bond may need to be extended too. We check the requirement and diarise the expiry so it does not lapse unnoticed.",
      },
      {
        question: "Who issues the bond?",
        answer:
          "Banks and licensed insurers issue bid bonds. The tender document may specify which issuers are acceptable, so the choice is not entirely free. We confirm the acceptable issuers before applying, then coordinate with one that meets the requirement. The issuer makes its own assessment and sets its terms.",
      },
      {
        question: "What happens to the bond if I win or lose?",
        answer:
          "If you lose, the bond is usually returned or allowed to expire according to its terms. If you win, it may be released once you sign the contract and provide the required performance security. If you fail to honour the tender, the bond may be called. We explain the conditions before issuance.",
      },
    ],
    related: ["trade-finance-solution", "general-insurance"],
    disclosure: disclosures.bidBonds,
    seo: {
      title: "Bid Bonds in Kenya | MGS Capital",
      description:
        "Arrange tender security that matches your bid documents, without locking up cash. MGS Capital coordinates bid bonds in Kenya.",
      keywords: [
        "bid bond Kenya",
        "tender security Kenya",
        "bid security guarantee Kenya",
        "how to get a bid bond in Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
  {
    slug: "fundraising-for-lending-companies",
    published: true,
    pillar: "enterprise",
    audience: "business",
    title: "Fundraising for Lending Companies",
    h1: "Fundraising for Lending Companies in Kenya",
    tagline: "A prepared, credible case for the capital behind your loan book.",
    summary:
      "Business-to-business advisory for lending companies raising the capital they need to grow their loan books, from funding-need assessment to closing.",
    overview: [
      "A lending company grows by lending, and lending requires capital. Raising that capital is a demanding process: the funding need has to be quantified, the portfolio has to be presented credibly, and the management team has to sustain a lengthy due diligence exercise while running the business.",
      "MGS Capital advises lending companies through that process. We assess the funding need, help prepare the financial model and information memorandum, position the portfolio and track record, identify suitable funders, and support due diligence through to negotiation and closing. The type of funding sought — debt, equity, or a structured facility — and the fee structure are confirmed in writing.",
      "This is a specialist service for institutions, not a retail investment product. It is not an offer of securities and not a solicitation of investment from the public. Outcomes depend on funder appetite and the borrower's performance, and no raise is guaranteed.",
    ],
    whoFor: [
      "Microfinance institutions",
      "Digital and mobile lenders",
      "Asset-finance and leasing companies",
      "Other licensed or licensable lenders",
      "Lending businesses preparing for a first institutional raise",
    ],
    audienceNote:
      "This service is for lending companies. It is not an offer of securities.",
    covers: [
      {
        title: "Funding-need assessment",
        description:
          "How much capital is required, for what, and over what horizon.",
        icon: "calculator",
      },
      {
        title: "Financial model and IM",
        description:
          "A clear model and information memorandum that present the business credibly.",
        icon: "file-text",
      },
      {
        title: "Portfolio positioning",
        description:
          "Loan-book quality, yield, and track record presented with the right metrics.",
        icon: "line-chart",
      },
      {
        title: "Funder identification",
        description:
          "Banks, development finance institutions, and private investors matched to the need.",
        icon: "handshake",
      },
      {
        title: "Due diligence support",
        description:
          "A managed data room and responses that keep the process moving.",
        icon: "list-checks",
      },
      {
        title: "Negotiation and closing",
        description:
          "Support through term sheets, conditions, and completion.",
        icon: "file-check",
      },
    ],
    howItWorks: [
      {
        title: "Discovery call",
        description:
          "We assess the funding need, the business model, and the timing.",
      },
      {
        title: "Readiness review",
        description:
          "Financials, portfolio quality, and governance are reviewed honestly.",
      },
      {
        title: "Prepare materials",
        description:
          "The model, information memorandum, and supporting documents are assembled.",
      },
      {
        title: "Outreach",
        description:
          "We introduce the opportunity to suitable funders and manage the responses.",
      },
      {
        title: "Due diligence",
        description:
          "We coordinate the data room and support management through questions.",
      },
      {
        title: "Negotiation and closing",
        description:
          "We support the term sheet discussion through to completion.",
      },
    ],
    benefits: [
      "A prepared, credible funding pitch rather than an unsolicited deck",
      "Access to a wider funder network",
      "Support through a demanding due diligence process",
      "More of management's time left for running the business",
    ],
    thingsToKnow: [
      "Raising money from investors or the public can be regulated and may require approvals.",
      "This page is for lending companies, not an offer of securities or a solicitation of retail investors.",
      "Outcomes depend on funder appetite and the borrower's performance, and are not guaranteed.",
      "Due diligence is intensive and can take months; management time is a real cost.",
      "Fee structure is confirmed in writing before work begins.",
    ],
    requirements: [
      "Audited or management financial statements",
      "Loan-book and portfolio-quality reports",
      "Business plan and financial projections",
      "Licences and evidence of regulatory standing",
      "Shareholder and management details",
      "Governance documents and cap table",
    ],
    faqs: [
      {
        question: "What does fundraising advisory involve?",
        answer:
          "It covers the work between deciding to raise capital and closing the transaction: quantifying the need, preparing the model and information memorandum, positioning the loan book, identifying funders, managing due diligence, and supporting negotiation. The adviser's job is to make the business easier to assess and to keep a complex process moving.",
      },
      {
        question: "Which types of lender do you work with?",
        answer:
          "The service is designed for lending companies such as microfinance institutions, digital and mobile lenders, asset-finance and leasing companies, and other licensed or licensable lenders. The common factor is a loan book that needs capital to grow. We confirm fit before starting, because not every business is ready for an institutional raise.",
      },
      {
        question: "What funding sources are available to lenders in Kenya?",
        answer:
          "Depending on the profile, sources can include commercial banks, development finance institutions, impact investors, private credit funds, and strategic investors. Debt, equity, and structured facilities solve different needs. We map the options to the business rather than approaching every funder with the same request.",
      },
      {
        question: "What documents do funders ask for?",
        answer:
          "Usually audited financials, portfolio and vintage data, a business plan and projections, licences, governance documents, and management information. The exact list depends on the funder and the instrument. We build a data room once and keep it current, so each conversation starts from a complete, consistent set.",
      },
      {
        question: "How long does a raise take?",
        answer:
          "A first institutional raise commonly takes several months from preparation to closing, and the timetable is controlled by funders and due diligence. A business that is ready moves faster than one that needs to fix its reporting first. We do not promise a closing date, but we do plan the sequence and flag what is likely to cause delay.",
      },
      {
        question: "Do you guarantee funding?",
        answer:
          "No. No adviser can guarantee that a raise will close. The outcome depends on funder appetite, the quality of the loan book, the business's performance, and the terms. What we can do is prepare the case properly, reach the right funders, and manage the process. Anyone promising a guaranteed raise should be treated with caution.",
      },
    ],
    related: ["trade-finance-solution", "money-market-fund-advisory"],
    disclosure: disclosures.fundraising,
    seo: {
      title: "Fundraising for Lending Companies in Kenya | MGS Capital",
      description:
        "Raise capital for your loan book with a prepared, credible funding case. MGS Capital advises lending companies in Kenya.",
      keywords: [
        "fundraising for lending companies Kenya",
        "raise capital for microfinance Kenya",
        "debt funding for lenders Kenya",
        "capital raising for digital lenders Kenya",
        "loan book funding Kenya",
      ],
    },
    reviewedDate: "2026-10-27",
  },
]

export const publishedServices = services.filter((service) => service.published)

export const getService = (slug: string) =>
  publishedServices.find((service) => service.slug === slug)

export const getServicesByPillar = (pillar: PillarSlug) =>
  publishedServices.filter((service) => service.pillar === pillar)

export const getRelatedServices = (service: Service) =>
  service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item))

export const audienceLabel = (audience: Audience) =>
  audience === "individual"
    ? "For individuals"
    : audience === "business"
      ? "For businesses"
      : "For individuals and businesses"
