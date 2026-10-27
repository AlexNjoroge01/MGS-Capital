import type { Faq } from "@/lib/services"

/** Cross-service questions for Home and About (answer-first, 40–70 words). */
export const homeFaqs: Faq[] = [
  {
    question: "What does MGS Capital do?",
    answer:
      "MGS Capital Limited is a Kenyan financial services company offering insurance and investment advisory services. It helps individuals, families, and businesses with medical and general insurance, premium financing, retirement planning, pension consolidation, NSSF Tier II, money market fund advice, study abroad loans, trade finance, bid bonds, and fundraising for lending companies.",
  },
  {
    question: "Who will I deal with?",
    answer:
      "Lizzie Gitiche leads the firm and is the first point of contact for clients. You can call or message her directly on +254 725 622 207, or send an enquiry through the contact page. The aim is one consistent point of contact, rather than being passed between departments.",
  },
  {
    question: "Do I have to visit the office?",
    answer:
      "No. Many conversations start by phone or WhatsApp. If you prefer to meet in person, the office is at CPA Centre, Old Stanchart Building, 1st Floor. Please call ahead so that a time can be arranged. The address is on the contact page, with a link to find it on the map.",
  },
  {
    question: "How do I start a conversation?",
    answer:
      "Call or send a WhatsApp message with a sentence about what you need. If you would rather write, use the enquiry composer on the contact page, which opens WhatsApp or your email app with the message ready to send. Nothing you type is stored on this website.",
  },
  {
    question: "Can you help if I already have cover or a pension?",
    answer:
      "Yes. A review often starts with what already exists: a policy approaching renewal, a group scheme, or pension benefits held in more than one place. We compare the current arrangement with the alternatives and explain whether a change is worth making, including what a transfer or switch might cost.",
  },
]

export const aboutFaqs: Faq[] = [
  {
    question: "What kind of clients does MGS Capital work with?",
    answer:
      "Individuals and families arranging health or general cover, professionals reviewing retirement savings, students and sponsors funding study abroad, and businesses of different sizes — from SMEs needing staff cover or premium financing to lenders raising capital for their loan books. The common thread is a decision worth taking seriously.",
  },
  {
    question: "How does MGS Capital approach advice?",
    answer:
      "The approach is deliberately unhurried: understand the goal, compare the options, show the costs and risks plainly, then help with the paperwork through to completion. Recommendations are explained in conversation, and the detail that depends on a provider's terms is confirmed before you commit to anything.",
  },
  {
    question: "Where is the office?",
    answer:
      "The office is at CPA Centre, Old Stanchart Building, 1st Floor. The building is listed in the contact details, with a link to find it on Google Maps. Please call ahead before visiting so that someone is available to meet you. The full postal address is confirmed on request while the city detail is finalised.",
  },
  {
    question: "How is the firm regulated?",
    answer:
      "The services touch regulated areas in Kenya, including insurance intermediation, retirement benefits, investments, and lending. Licence and registration details are published on this site once they have been supplied and verified. We do not display a licence number or partner name until it is confirmed in writing.",
  },
]

/** Shown on the About page under "What we believe". */
export const principles = [
  {
    title: "Clarity",
    body: "Plain language, written down where it matters. If a cost, limit, or risk is not clear, it is not yet explained.",
  },
  {
    title: "Care",
    body: "Advice begins with your circumstances, not with a product. The recommendation follows the conversation.",
  },
  {
    title: "Discretion",
    body: "Financial affairs are private. Conversations are treated as confidential and shared only where you ask us to.",
  },
  {
    title: "Diligence",
    body: "The paperwork matters. We follow documents through to completion rather than leaving them at submission.",
  },
]

export const approachSteps = [
  {
    number: "01",
    title: "Listen",
    body: "Understand the goal, the people involved, the timeline, and what you have already considered.",
  },
  {
    number: "02",
    title: "Advise",
    body: "Compare the options and explain costs, limits, and risks plainly — including what we would not recommend.",
  },
  {
    number: "03",
    title: "Guide",
    body: "Support with the application, the documents, and the follow-up, through to completion and review.",
  },
]

export const howWeWork = [
  {
    number: "01",
    title: "Consultation",
    body: "A first conversation about the decision in front of you, with no obligation.",
  },
  {
    number: "02",
    title: "Review",
    body: "A look at the options, the existing arrangements, and the costs and risks that matter.",
  },
  {
    number: "03",
    title: "Application or placement",
    body: "The chosen route is put in motion, with the paperwork prepared and checked.",
  },
  {
    number: "04",
    title: "Follow-through",
    body: "We stay with it until the policy, scheme, or facility is in place, and review at the right intervals.",
  },
]

export const servedSegments = [
  {
    segment: "Individuals and families",
    need: "Health cover, vehicle and property cover, retirement saving, short-term investing",
    serviceSlugs: [
      "medical-insurance",
      "general-insurance",
      "retirement-plan-advisory",
      "money-market-fund-advisory",
    ],
  },
  {
    segment: "Professionals with several past employers",
    need: "One clear view of retirement savings",
    serviceSlugs: ["pension-consolidation", "retirement-plan-advisory"],
  },
  {
    segment: "Students, parents, and sponsors",
    need: "Funding overseas study",
    serviceSlugs: ["study-abroad-loans"],
  },
  {
    segment: "Employers, HR, and finance managers",
    need: "Staff cover, pension compliance, spreading premiums",
    serviceSlugs: [
      "nssf-tier-2",
      "medical-insurance",
      "general-insurance",
      "insurance-premium-financing",
    ],
  },
  {
    segment: "Importers, exporters, and traders",
    need: "Financing the trade cycle",
    serviceSlugs: ["trade-finance-solution"],
  },
  {
    segment: "Contractors, suppliers, and consultants",
    need: "Tender security",
    serviceSlugs: ["bid-bonds"],
  },
  {
    segment: "Lending companies",
    need: "Raising capital to fund their loan books",
    serviceSlugs: ["fundraising-for-lending-companies"],
  },
]
