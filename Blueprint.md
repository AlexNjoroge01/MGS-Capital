# Blueprint — MGS Capital Limited

A premium, multi-page marketing website for **MGS Capital Limited**, a Kenyan financial services company led by **Lizzie Gitiche**.
This is the full build plan for the coding agent. Read it top to bottom, then build in the order given in **Section 19**.

> **Rules for the agent**
> 1. This is a **pure marketing site**. No database, no auth, no email service, no file storage, no calculators, no logins.
> 2. Do not invent facts about the business, its licences, partners, rates, fees, statistics, or reviews. Anything marked `CONFIRM` is a placeholder until Lizzie confirms it.
> 3. This is financial content (YMYL). Never write "guaranteed returns", "instant approval", "lowest rates", or "best in Kenya". Use the disclosure texts in §14.
> 4. Do not display any interest rate, yield, fee, NSSF rate or earnings limit unless it is supplied in writing, current, and dated. Those figures change.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| **Business** | MGS Capital Limited (the business card prints "MGS Capital Ltd"; use "MGS Capital Limited" for legal text and "MGS Capital" elsewhere, `CONFIRM`) |
| **Tagline (official)** | **Your fiduciary investment advisory partner** |
| **Description (official)** | MGS Capital is a financial services company offering insurance and investment advisory services |
| **Years in operation** | 3 years. Store a `foundingYear` in config (`CONFIRM` the year) and compute the figure so it never goes stale |
| **Owner / contact person** | Lizzie Gitiche (title `CONFIRM`, likely CEO) |
| **Office** | CPA Centre, Old Stanchart Building, 1st Floor. The city and street are not on the sheet, `CONFIRM` before using in addresses and schema |
| **Phone / WhatsApp** | +254 725 622 207 |
| **Emails on file** | `ceo@mgscapital.co.ke`, `lizzieconsult@gmail.com`, `operations.mgs@gmail.com`. Earlier material also showed `insurance@mgscapital.co.ke` (business card) and `beth.gitiche@gmail.com` (owner profile) |
| **Existing domain** | `www.mgscapital.co.ke` (printed on the card) |
| **Type** | Multi-page marketing website: Home, About, Services overview, one page per service, Contact, legal pages |
| **Primary goal** | Build trust and convert visitors into enquiries (call, WhatsApp, email, or a visit to the office) |
| **Secondary goal** | Rank for Kenyan insurance, pension, and investment-advisory searches and be cited by AI assistants |
| **Feel** | Premium, high-end, sophisticated, chic. Quiet confidence, long thin type, abundant white space |

**Decisions the agent should apply (and Lizzie should confirm):**
- **Public email:** show **one domain-based address** publicly (a Gmail address looks less credible for a financial brand, and a public `ceo@` inbox attracts spam). Recommend `enquiries@` or `insurance@mgscapital.co.ke`, or whichever domain address she prefers. Keep the other addresses out of the page source. The enquiry composer and mailto links read this single value from config.
- **Existing domain:** the card shows a live-looking domain and mailbox. Ask whether a site already exists. When deploying, **do not break the DNS email (MX) records**, or her business mailboxes will stop working.

---

## 2. The Business in Detail

> This profile is built from the company details sheet, the business card, and the owner's profile. Anything beyond those is a draft for Lizzie to confirm or correct before launch.

### 2.1 Who MGS Capital Limited is
MGS Capital Limited is a Kenyan financial services company, three years in operation, offering **insurance and investment advisory services**. It positions itself as a **fiduciary investment advisory partner**: an adviser that helps clients choose, structure, and fund the right insurance, retirement, investment, education, and business-finance solutions, and guides them through the paperwork. It is led by Lizzie Gitiche, the first point of contact for clients. Its office is at CPA Centre, Old Stanchart Building, 1st Floor.

The services serve two audiences: **individuals and families** (medical and general insurance, retirement planning, pension consolidation, money market fund advice, study abroad loans) and **businesses and institutions** (premium financing, NSSF Tier II, trade finance, bid bonds, and fundraising for lending companies).
*What "MGS" stands for: `CONFIRM`.*

### 2.2 Positioning and the word "fiduciary"
**Considered, trustworthy advice for people and businesses who take their financial decisions seriously.** Calm, knowledgeable, plain-English, never high-pressure.

- **Tagline:** "Your fiduciary investment advisory partner." Use it in the header area, hero eyebrow, footer, and metadata.
- **Brand voice:** calm, precise, warm, discreet. Explain jargon. No hype.
- **Compliance caution:** "fiduciary" implies a legal duty to act in the client's best interest. Use it as the client's official tagline, but before launch Lizzie must confirm the basis for it (licence, code of conduct, or a written commitment), and the About page should explain in one honest paragraph what it means in practice at MGS (for example how recommendations are made and how the firm is paid). Do not repeat the word in claims MGS cannot support.

### 2.3 Five pillars (the organising idea for the whole site)
Eleven services, grouped into five pillars. Pillars appear as groups on Home, in the header menu, and on the Services page. **Every service still has its own page.**

| # | Pillar | Services |
|---|---|---|
| 01 | **Insurance** | Medical Insurance · General Insurance · Insurance Premium Financing |
| 02 | **Retirement** | Retirement Plan Advisory · Pension Consolidation · NSSF Tier 2 |
| 03 | **Investment** | Money Market Fund Advisory |
| 04 | **Education** | Study Abroad Loans |
| 05 | **Enterprise** | Trade Finance Solution · Bid Bonds · Fundraising for Lending Companies |

Source of each service: ten come from the company details sheet. **Bid Bonds** appears on the business card but **not** on the sheet. `CONFIRM` it is still offered. The data file has a `published` flag so the page can be hidden without code changes.

### 2.4 Who we serve

| Segment | Typical need | Services |
|---|---|---|
| Individuals and families | Health cover, vehicle and property cover, retirement saving, short-term investing | Medical Insurance, General Insurance, Retirement Plan Advisory, Money Market Fund Advisory |
| Professionals with several past employers | One clear view of retirement savings | Pension Consolidation, Retirement Plan Advisory |
| Students and parents or sponsors | Funding overseas study | Study Abroad Loans |
| Employers, HR and finance managers, SMEs | Staff cover, pension compliance, spreading premiums | NSSF Tier 2, Medical Insurance (group), General Insurance, Insurance Premium Financing |
| Importers, exporters, traders, suppliers | Financing the trade cycle | Trade Finance Solution |
| Contractors, suppliers, consultants | Tender security | Bid Bonds |
| Lending companies (for example microfinance, digital, and asset-finance lenders) | Raising capital to fund their loan books | Fundraising for Lending Companies |

### 2.5 What makes it different (draft, `CONFIRM` every point)
- One point of contact, Lizzie, personally.
- An advisory mindset: options compared, costs and risks shown up front.
- Insurance, retirement, and financing under one roof, so clients get joined-up advice.
- Hands-on help with documentation and timelines.
- Three years of operating experience in the Kenyan market.

### 2.6 Regulatory posture
The services touch several regulated areas in Kenya. **Depending on the licences MGS Capital holds and the partners it works with**, the relevant bodies may include the Insurance Regulatory Authority (IRA) for insurance intermediation, the Retirement Benefits Authority (RBA) for pension matters including NSSF Tier II contracting out, the Capital Markets Authority (CMA) for investment advice and fundraising, and the Central Bank of Kenya (CBK) and other sector regulators for lending. **Do not display any licence, registration number, or partner name until Lizzie supplies it.** Leave a clearly styled slot in the footer and About page.

---

## 3. Services in Detail

Content specifications for the eleven service pages. Descriptions are **general explanations** of each product or advisory service. Anything specific to how MGS Capital delivers it (partners, fees, eligibility, turnaround, which instruments) is marked `CONFIRM` and must not be stated as fact until confirmed.

### 3.1 Medical Insurance (Insurance pillar)
- **What it is:** health cover placed with licensed insurers, for individuals, families, and employers (group schemes). MGS compares options and helps the client choose suitable cover `CONFIRM insurers and how MGS is licensed to place cover`.
- **Typically covers (varies by plan):** inpatient care, outpatient care, maternity, dental, optical, chronic-condition management, and evacuation or international cover on some plans `CONFIRM`.
- **Who it's for:** individuals, families, SMEs, and larger employers wanting staff cover.
- **How it works:** (1) needs assessment, (2) comparison of covers, limits, and hospital networks, (3) quotation, (4) application and underwriting, (5) policy issue, (6) ongoing support including help with claims `CONFIRM`.
- **Benefits:** comparison across options in one conversation, cover matched to budget and needs, help understanding the fine print, support when claims arise `CONFIRM`.
- **Things to know:** waiting periods, exclusions (including pre-existing conditions), annual limits, co-payments, and premium reviews all differ between plans. Private cover is separate from statutory health cover (SHA), so explain how they work together `CONFIRM against current rules`.
- **FAQs:** What does medical insurance cover? What is a waiting period? Are pre-existing conditions covered? Can I add family members? How does group medical cover for a small business work? How do I make a claim? Can I pay the premium in instalments? (links to premium financing).
- **Target keywords:** medical insurance Kenya, health insurance Kenya, family medical cover Kenya, corporate medical insurance Kenya, group medical insurance for SMEs Kenya.

### 3.2 General Insurance (Insurance pillar)
- **What it is:** non-life insurance that protects vehicles, property, businesses, and liabilities against loss or damage, placed with licensed insurers `CONFIRM`.
- **Classes typically offered `CONFIRM which ones`:** motor (private and commercial), fire and allied perils, burglary, public liability, professional indemnity, marine and goods in transit, work injury benefits (WIBA), engineering and contractors' risks, travel, and domestic package covers.
- **Who it's for:** vehicle owners, homeowners, landlords, SMEs, contractors, institutions, and transporters.
- **How it works:** (1) review what needs protecting, (2) compare insurers and covers, (3) quotation, (4) proposal and documentation, (5) policy issue, (6) renewals and claims support `CONFIRM`.
- **Benefits:** the right cover for the actual risk, one adviser for multiple policies, renewal reminders and support `CONFIRM`.
- **Things to know:** cover depends on the wording, limits, excesses, and exclusions. Under-insurance can reduce a claim payout. Motor third-party cover is a legal requirement in Kenya. Premiums can be financed (links to premium financing).
- **FAQs:** What types of general insurance do you arrange? Is motor insurance compulsory? What is the difference between third-party and comprehensive cover? What is WIBA and do I need it? How is a claim handled? Can I insure a business against fire and theft?
- **Target keywords:** general insurance Kenya, motor insurance Kenya, business insurance Kenya, commercial insurance Kenya, property insurance Kenya, WIBA insurance Kenya.

### 3.3 Insurance Premium Financing (Insurance pillar)
- **What it is:** a short-term credit arrangement that lets a client pay an insurance premium in instalments over several months instead of one lump sum, while the cover stays active.
- **Typically used for:** annual general insurance covers (motor and fleet, property, liability, commercial), and other covers `CONFIRM`.
- **Who it's for:** SMEs, fleet owners, schools and institutions, and individuals facing a large annual premium.
- **How it works:** (1) choose the policy and insurer, (2) obtain the premium invoice, (3) apply for financing, (4) pay the initial deposit if required `CONFIRM`, (5) the financer settles the premium with the insurer, (6) the client repays in instalments.
- **Typically required** `CONFIRM`: ID and KRA PIN (individuals), certificate of incorporation or registration and company PIN (businesses), premium invoice or quotation, post-dated cheques or another repayment arrangement.
- **Benefits:** protects cash flow, keeps cover continuous so there are no gaps, avoids draining working capital.
- **Things to know:** financing has a cost, missing instalments can put the cover at risk `CONFIRM against partner terms`, the arrangement is tied to a fixed policy period, credit is subject to approval.
- **FAQs:** Which covers can be financed? Is a deposit required? How many months can I spread payments over? What happens if I miss an instalment? Can I finance a renewal? Do I choose my own insurer?
- **Target keywords:** insurance premium financing Kenya, pay insurance premium in instalments Kenya, premium finance for businesses Kenya, fleet insurance financing Kenya.

### 3.4 Retirement Plan Advisory (Retirement pillar)
- **What it is:** advice for individuals and employers on building a retirement plan: choosing between pension vehicles, setting contribution levels, projecting outcomes, and planning how benefits will be taken at retirement `CONFIRM scope and licence`.
- **Vehicles typically discussed:** individual pension plans, occupational schemes, umbrella schemes, and how they fit alongside NSSF.
- **Who it's for:** salaried professionals, the self-employed, business owners, and employers setting up staff retirement benefits.
- **How it works:** (1) a conversation about goals, age, income, and dependants, (2) a review of existing savings and schemes, (3) options and projections explained plainly, (4) recommended plan, (5) set-up and contributions, (6) periodic reviews.
- **Benefits:** a clear target and path, comparison of options and costs, savings that keep pace with life changes.
- **Things to know:** pension savings are generally long-term and access before retirement age is restricted by scheme rules and tax rules. Investment returns inside pension schemes are not guaranteed. Fees and charges vary by provider.
- **FAQs:** How much should I save for retirement? What is an individual pension plan? What is an umbrella scheme? Can the self-employed save for retirement? How does NSSF fit in? Can I change my contributions? What are the tax rules?
- **Target keywords:** retirement planning Kenya, individual pension plan Kenya, retirement savings plan Kenya, umbrella pension scheme Kenya, occupational pension scheme Kenya.

### 3.5 Pension Consolidation (Retirement pillar)
- **What it is:** combining retirement savings held in several places (for example schemes from past employers and individual pension plans) into one scheme, so they are easier to see, manage, and plan around.
- **Who it's for:** professionals who have changed jobs, people with deferred benefits in several schemes, and anyone who has lost track of old accounts.
- **How it works:** (1) gather statements from each scheme, (2) review fees, performance, and scheme rules side by side, (3) agree on the best destination scheme, (4) submit transfer requests, (5) confirm completion and provide a consolidated view.
- **Typically required** `CONFIRM`: ID and KRA PIN, member numbers and latest statements for each scheme, employer or scheme details, transfer or consent forms.
- **Benefits:** one clear picture of retirement savings, simpler tracking and beneficiary management, a chance to compare costs and options.
- **Things to know:** transfers can affect benefits, so scheme rules, vesting, fees, and tax implications must be reviewed first. Consolidation is about **keeping** savings invested for retirement, not cashing out. Scheme and regulatory rules apply.
- **FAQs:** Why consolidate my pensions? Can I transfer from an old employer's scheme? Will I lose any benefits or pay penalties? How long does a transfer take? What if I can't find an old scheme? Is consolidation taxable?
- **Target keywords:** pension consolidation Kenya, combine pension schemes Kenya, transfer pension Kenya, consolidate retirement benefits Kenya.

### 3.6 NSSF Tier 2 (Retirement pillar)
- **What it is:** advisory and support for employers on **NSSF Tier II contributions**: understanding the obligation, deciding whether to keep Tier II with NSSF or **contract out** to an RBA-approved private scheme, and managing the application and transition `CONFIRM exactly what MGS does (advice only, scheme set-up, administration, or partnering with a provider)`.
- **Background the page can explain (general, verify against current NSSF and RBA guidance before publishing):**
  - NSSF contributions are split into two tiers. **Tier I always goes to NSSF.**
  - **Tier II can be redirected by the employer** to a private scheme that is approved for contracting out, which can be an occupational, umbrella, or individual scheme.
  - Contracting out is generally done **at employer level**, not employee by employee, and needs approval from the Retirement Benefits Authority. Employers have generally been required to apply in advance (sources cite at least 60 days' notice) and obtain a contracting-out certificate. The scheme must meet the required benefit standard.
  - Contribution rates and earnings limits change in phases over time. **Do not publish figures** unless they are dated, sourced from NSSF or RBA, and kept current.
- **Who it's for:** employers, HR and finance managers, company directors, and SMEs; also employees who want to understand their payslip.
- **How it works:** (1) review payroll and any existing pension arrangements, (2) compare staying with NSSF against contracting out, (3) choose the route: existing scheme, an umbrella scheme, or a new scheme, (4) prepare the application and notice, (5) transition and ongoing compliance support.
- **Benefits:** clarity on a compliance obligation, informed choice between options, support with the paperwork, a retirement arrangement that suits the workforce.
- **Things to know:** contracting out is not automatic, approval takes time, rules and limits change, and the arrangement must meet statutory standards. Employers remain responsible for compliance. This is general information, not legal advice.
- **FAQs:** What is NSSF Tier II? What is the difference between Tier I and Tier II? Can an employer contract out of Tier II? Can individual employees opt out? How long does contracting out take? What types of scheme qualify? What does an employer need to apply?
- **Target keywords:** NSSF Tier 2 Kenya, contract out of NSSF Tier II, NSSF Tier 1 vs Tier 2, NSSF opt out for employers Kenya, umbrella pension scheme NSSF Tier 2.

### 3.7 Money Market Fund Advisory (Investment pillar)
- **What it is:** advice on using money market funds: pooled funds that place money in short-term, high-quality instruments such as treasury bills, fixed deposits, and commercial paper. MGS **advises** on choosing and using funds run by licensed fund managers `CONFIRM how MGS participates (advice only, agent, or distributor) and which licence covers it`.
- **Who it's for:** people building an emergency or short-term fund, first-time investors, and businesses with surplus cash they may need soon.
- **How it works:** (1) a conversation about goals, time horizon, and liquidity needs, (2) an overview and comparison of suitable funds, (3) KYC and account opening, (4) funding the account, (5) ongoing review.
- **Typically required** `CONFIRM`: ID or company documents, KRA PIN, proof of address, bank details, KYC form.
- **Benefits:** low entry amounts (varies by fund), relatively easy access to money, professional management, diversification across short-term instruments, an adviser to compare options.
- **Things to know:** **returns are not guaranteed** and vary with market rates. Fees and taxes apply. Money market funds are lower-risk than many investments but are **not risk-free**. Never quote a yield unless it is current, sourced, and compliant.
- **FAQs:** What is a money market fund? How is it different from a savings account? What is the minimum investment? How quickly can I withdraw? Are returns guaranteed? How are returns taxed? Can a business invest?
- **Target keywords:** money market fund advisory Kenya, money market funds Kenya, how to choose a money market fund Kenya, investment adviser Kenya, short-term investment Kenya.

### 3.8 Study Abroad Loans (Education pillar)
- **What it is:** financing to cover the costs of studying at an overseas institution, so a student with an admission offer is not blocked by funding.
- **Typically covers:** tuition and fees, accommodation and living costs, flights and travel, visa and immigration costs, student health insurance `CONFIRM`.
- **Who it's for:** Kenyan students admitted abroad, and parents, guardians, or sponsors funding them.
- **How it works:** (1) initial consultation, (2) eligibility and cost review, (3) documentation, (4) submission to the lending partner `CONFIRM`, (5) approval and disbursement `CONFIRM` (direct to the institution or to the student).
- **Typically required** `CONFIRM`: admission or offer letter, passport, ID and KRA PIN, proof of income or sponsor details, guarantor or collateral, fee invoice.
- **Benefits:** access to education that savings alone may not cover, structured repayment, guidance with paperwork.
- **Things to know:** the loan must be repaid with interest and fees. Exchange-rate movement between the shilling and the study currency can change the real cost. Repayment may start during or after studies `CONFIRM`. Credit is subject to approval.
- **FAQs:** Can I apply before I receive my admission letter? Do I need collateral or a guarantor? Which countries and institutions are supported? Can a parent apply for a student? How long does approval take? What happens if I defer my studies?
- **Target keywords:** study abroad loans Kenya, student loan for studying abroad Kenya, education loan Kenya overseas, fund studies abroad Kenya.

### 3.9 Trade Finance Solution (Enterprise pillar)
- **What it is:** financing and structuring support for businesses that buy and sell goods, so they can pay suppliers, fulfil orders, and manage the gap between paying and getting paid `CONFIRM the instruments MGS arranges`.
- **Instruments typically included `CONFIRM which`:** import financing, letters of credit, bank guarantees, invoice and receivables financing, purchase-order (LPO) financing, and supply-chain financing.
- **Who it's for:** importers, exporters, wholesalers, distributors, suppliers to large buyers, and growing SMEs.
- **How it works:** (1) understand the trade cycle and the transaction, (2) choose the right structure, (3) assemble documents, (4) submit to the funding partner `CONFIRM`, (5) disbursement or issuance, (6) settlement and repayment.
- **Typically required** `CONFIRM`: company registration and tax compliance documents, proforma invoice or purchase order, supply or sales contract, bank statements, recent financial statements, KYC for directors.
- **Benefits:** working capital preserved, orders fulfilled without waiting for payment, structured support with the documentary side of trade.
- **Things to know:** financing has a cost and may require security. Trade documents must be precise. Currency movements and timelines affect outcomes. Credit is subject to approval.
- **FAQs:** What is trade finance? What is the difference between a letter of credit and a bank guarantee? What is LPO financing? Who qualifies? How quickly can facilities be arranged? What security is needed?
- **Target keywords:** trade finance Kenya, import financing Kenya, LPO financing Kenya, invoice discounting Kenya, letter of credit Kenya, supply chain financing Kenya.

### 3.10 Bid Bonds (Enterprise pillar) `CONFIRM still offered, it is on the card but not on the sheet`
- **What it is:** a bid bond (also called tender security or bid security) is a guarantee issued by a bank or insurer on a bidder's behalf. It assures the procuring entity that the bidder will sign the contract and provide any required performance security if awarded the tender.
- **Who it's for:** contractors, suppliers, and consultants bidding for public or private-sector tenders.
- **How it works:** (1) share the tender document and requirements, (2) confirm the amount, validity period, wording, and beneficiary, (3) submit company and financial documents for assessment, (4) issuance, (5) collect the original bond ahead of the tender deadline.
- **Typically required** `CONFIRM`: company registration documents, tax compliance, directors' IDs, the tender document or bid notice, recent financial or bank statements, a signed application.
- **Benefits:** meet tender requirements without locking up large cash deposits, preserve working capital, support with correct wording and timing.
- **Things to know:** the bond must match the tender's exact requirements (amount, validity, format, acceptable issuers). Deadlines are strict. Issuance is subject to assessment and the issuer's terms.
- **FAQs:** What is a bid bond and why do tenders require one? How much does a bid bond cost? How long does it take to issue? What validity period do I need? Who issues the bond? What happens to the bond if I win or lose?
- **Target keywords:** bid bond Kenya, tender security Kenya, bid security guarantee Kenya, how to get a bid bond in Kenya.

### 3.11 Fundraising for Lending Companies (Enterprise pillar)
- **What it is:** a **business-to-business** advisory service that helps lending companies raise the capital they need to grow their loan books `CONFIRM scope: debt, equity, or structured facilities, and the type of lenders served`.
- **What MGS typically helps with `CONFIRM`:** assessing funding needs, preparing the financial model and an information memorandum, positioning the portfolio and track record, identifying suitable funders (banks, development finance institutions, impact and private investors), supporting due diligence, and assisting with negotiation through to closing.
- **Who it's for:** microfinance institutions, digital and mobile lenders, asset-finance and leasing companies, and other licensed or licensable lenders.
- **How it works:** (1) discovery call and funding-need assessment, (2) readiness review of financials, portfolio, and governance, (3) preparation of funding materials, (4) introductions and outreach to funders, (5) due diligence support, (6) negotiation and closing support.
- **Typically required** `CONFIRM`: audited or management financial statements, loan-book and portfolio-quality reports, business plan and projections, licences and regulatory standing, shareholder and management details, governance documents.
- **Benefits:** a prepared, credible funding pitch, access to a wider funder network, support through a demanding process, more time for management to run the business.
- **Things to know:** raising money from investors or the public can be regulated and may require approvals. This page is for lending companies, **not an offer of securities and not a solicitation of retail investors**. Outcomes depend on funder appetite and the borrower's performance and are not guaranteed. Fee structure `CONFIRM`.
- **FAQs:** What does fundraising advisory involve? Which types of lender do you work with? What funding sources are available to lenders in Kenya? What documents do funders ask for? How long does a raise take? Do you guarantee funding?
- **Target keywords:** fundraising for lending companies Kenya, raise capital for microfinance Kenya, debt funding for lenders Kenya, capital raising for digital lenders Kenya, loan book funding Kenya.

---

## 4. Tech Stack

| Layer | Technology | Use on this site |
|---|---|---|
| Framework | **Next.js 16.4.1, App Router** | Static generation, metadata API, `sitemap`/`robots`, OG images |
| Language | **TypeScript** (strict) | Whole project |
| Styling | **Tailwind CSS** (v4, CSS-first tokens) | All styling, design tokens in one place |
| UI components | **shadcn/ui, install the full component set** | See the map in §11 |
| Icons | **Lucide React** | Thin stroke (1–1.25px) only, to match the thin typography |
| Animation | **Framer Motion** | Slow, understated reveals and hairline draw-ins |
| Notifications | **Sonner** | Copy-to-clipboard and enquiry feedback toasts |
| Forms | **React Hook Form + Zod** | One tiny client-side enquiry form (no server, see §10.5) |
| Hosting | **Vercel** | Deployment, Analytics, Speed Insights |

**Deliberately not used:** Resend, React Email, Cloudinary, Prisma, PostgreSQL, NextAuth, Zustand, TanStack Query, Vercel Cron. Images live in the repository and are optimised by `next/image`. Anything "selected" (such as a pre-selected service) travels through the URL.

**Version notes for the agent (verify against the Next.js 16 docs):**
- `params` and `searchParams` are async in page components (`params` is a Promise).
- Turbopack is the default bundler.
- `useSearchParams` in a client component must sit inside a `Suspense` boundary.
- Pin the exact version `16.4.1`.

---

## 5. Site Map & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Brand statement, five pillars with their services, approach, about teaser, visit-us, FAQ teaser, CTA |
| `/about` | About | Story, Lizzie's profile, what "fiduciary" means here, values, credentials |
| `/services` | Services overview | All eleven services grouped by pillar, with an at-a-glance table |
| `/services/medical-insurance` | Service | Insurance |
| `/services/general-insurance` | Service | Insurance |
| `/services/insurance-premium-financing` | Service | Insurance |
| `/services/retirement-plan-advisory` | Service | Retirement |
| `/services/pension-consolidation` | Service | Retirement |
| `/services/nssf-tier-2` | Service | Retirement |
| `/services/money-market-fund-advisory` | Service | Investment |
| `/services/study-abroad-loans` | Service | Education |
| `/services/trade-finance-solution` | Service | Enterprise |
| `/services/bid-bonds` | Service | Enterprise (hide if not confirmed) |
| `/services/fundraising-for-lending-companies` | Service | Enterprise |
| `/contact` | Contact | Call, WhatsApp, email, office address, enquiry composer, hours |
| `/privacy`, `/terms`, `/disclosures` | Legal | Trust and compliance |
| `/not-found` | 404 | Branded, with links to services |

Service pages come from **one dynamic route** (`/services/[slug]`) using `generateStaticParams`, `dynamicParams = false`, and a typed data file (§8). Only services with `published: true` are generated, listed, linked, and included in the sitemap and schema. All pages are statically generated.

**Related services shown at the bottom of each service page (two each):**

| Service | Related |
|---|---|
| Medical Insurance | General Insurance, Insurance Premium Financing |
| General Insurance | Insurance Premium Financing, Medical Insurance |
| Insurance Premium Financing | General Insurance, Medical Insurance |
| Retirement Plan Advisory | Pension Consolidation, NSSF Tier 2 |
| Pension Consolidation | Retirement Plan Advisory, Money Market Fund Advisory |
| NSSF Tier 2 | Retirement Plan Advisory, Pension Consolidation |
| Money Market Fund Advisory | Retirement Plan Advisory, Pension Consolidation |
| Study Abroad Loans | Money Market Fund Advisory, Medical Insurance |
| Trade Finance Solution | Bid Bonds, General Insurance |
| Bid Bonds | Trade Finance Solution, General Insurance |
| Fundraising for Lending Companies | Trade Finance Solution, Money Market Fund Advisory |

---

## 6. Design System

The look must **flow from the logo**: a geometric "M" monogram in graphite, crossed by a silver ribbon, with bronze wedges behind. The brand is quiet and metallic. Colour is used sparingly. White space does most of the work.

### 6.1 Colour tokens (derived from the logo)
Sample exact values from the logo files with an eyedropper. The values below are close approximations.

| Token | Approx. hex | Use |
|---|---|---|
| `white` | `#FFFFFF` | Main page background |
| `ivory` | `#F7F6F2` | Alternating section backgrounds |
| `stone` | `#B9BBB3` | The warm grey of the logo backdrop. Image backgrounds and large soft panels only |
| `graphite` | `#30373A` | Headings, body text, primary buttons |
| `graphite-deep` | `#1E2326` | CTA band and footer background |
| `muted` | `#5E676B` | Secondary text |
| `silver` | `#8C979D` | Ribbon colour, icons, secondary lines |
| `silver-light` | `#C9CED1` | Hairline dividers and borders |
| `silver-mist` | `#E8EAEB` | Subtle fills, skeletons, input borders |
| `bronze` | `#A8845A` | Accent: italic words, numerals, thin rules, hover underline. **Large text and decoration only** (about 3.4:1 on white) |
| `bronze-deep` | `#8A6B45` | Bronze for small text and links (about 4.9:1 on white, passes AA) |

Rules:
- White and ivory dominate. Graphite is text and button colour. Bronze is the single accent, used in tiny doses. Silver gives structure through hairlines.
- **Do not** use the orange and forest green from the business card. They belong to the printed stationery. Keep the site monochrome-plus-bronze.
- A subtle **silver ribbon gradient** (silver-light to silver, 135°) may be used for the diagonal motif and thin dividers. No other gradients.
- Single light theme. No dark-mode toggle in Phase 1. Dark moments come from the `graphite-deep` CTA band and footer.

### 6.2 Typography: long, thin, elegant
- **Display (headlines, numerals, quotes):** **Cormorant Garamond**, weight **300** with **300 italic** for emphasis, weight 400 for sub-headings. Load via `next/font/google`.
- **Body and UI:** **Jost** (geometric, close to the logo wordmark), weights **300** for long text, **400** for small text and UI, **500** for buttons and tiny labels. Provide system fallbacks.
- **Eyebrow labels:** Jost 400, 12px, **uppercase**, letter-spacing about 0.28em, in `bronze-deep`. This echoes the wide-spaced "MGS CAPITAL" wordmark.
- **Scale (desktop / mobile):** H1 `clamp(52px, 7.5vw, 104px)` / ~44px, weight 300, line-height 1.04, tracking -0.01em; H2 48–64px / 34px; H3 28–32px / 24px; body 18–19px / 17px, line-height 1.8; small 14px.
- **Italic emphasis:** in headlines, one word in Cormorant light italic coloured `bronze`.
- **Large thin numerals** (01 to 05) in Cormorant 300, `silver-light` or `bronze`, 80–140px.
- **Readability guard:** never use Jost 300 below 17px. Use weight 400 below that. Keep text colour at `graphite` or `muted`.
- Max line length about 60–65 characters.

### 6.3 Space, shape, depth
- **White space is the design.** Section padding 160–200px desktop, 96px mobile. When in doubt, add space. Do not fill empty areas.
- **Grid:** 12-column, container max 1280px. Prefer **asymmetric editorial layouts**.
- **Radius:** minimal, 0–4px.
- **Lines, not boxes:** structure through **1px hairlines** in `silver-light`. Avoid card shadows.
- **Buttons:** primary is a solid `graphite` rectangle, uppercase tracked Jost 500 at 12–13px, generous padding, fills `bronze-deep` on hover. Secondary is a hairline outline that fills graphite on hover. Text links get a thin bronze underline that grows on hover.
- **Monogram motif:** the logo's M as a very large, very faint watermark (3–6% opacity) in the hero, CTA band, and footer. A diagonal ribbon line can echo the crossing stroke as a divider.
- **Image frames:** plain rectangles with sharp or tiny-radius corners, with an optional hairline offset frame (a thin outline displaced 12–16px behind the image) as a signature detail.

### 6.4 Motion (Framer Motion)
- Slow and quiet. Fade plus 12–20px rise, 0.8–1.0s, custom ease-out, once per element.
- Hairlines **draw in** left to right on entering the viewport.
- Image reveal by soft fade, no bounce or zoom-pop.
- Hover: link underlines grow, pillar rows shift 8px and reveal an arrow, images scale 1.02 over 1.2s.
- Respect `prefers-reduced-motion` and disable all of the above.
- Elegance is restraint.

### 6.5 Imagery (no Cloudinary: local files)
- Store images in `/public/images/<section>/`, import statically where possible so `next/image` generates blur placeholders. Export AVIF/WebP at sensible widths.
- **Treatment:** one consistent grade: slightly desaturated, warm neutrals, soft natural light, plenty of negative space.
- **Subjects (editorial, not stock-cliché):** a real portrait of Lizzie (essential for trust), the office and building exterior or reception (supports the physical-address trust signal), modern architecture and glass, abstract graphite, silver, and bronze textures, hands and documents. Per pillar: families and professionals (insurance), calm everyday life (retirement), campus or airport moments (education), warehouse, port, or trucks (trade), construction sites (bid bonds), business meetings (fundraising). Prefer Kenyan and African subjects.
- Use only properly licensed images. Avoid tropes (handshakes, piles of coins, upward arrows).
- Every image has meaningful alt text.
- **Logo files:** the supplied logos are photos and a speckled print. Obtain or **vectorise a clean SVG** of the monogram and wordmark in full colour, single-colour graphite, and white (for the dark footer). Also make a monogram-only version for the favicon and watermark.

---

## 7. Project Structure

```
mgs-capital/
├─ app/
│  ├─ layout.tsx                 fonts, metadata, JSON-LD (Organization/FinancialService), Toaster, analytics
│  ├─ page.tsx                   Home
│  ├─ about/page.tsx
│  ├─ services/
│  │  ├─ page.tsx                Services overview
│  │  └─ [slug]/page.tsx         Service template (static params)
│  ├─ contact/page.tsx
│  ├─ privacy/page.tsx
│  ├─ terms/page.tsx
│  ├─ disclosures/page.tsx
│  ├─ not-found.tsx
│  ├─ globals.css
│  ├─ sitemap.ts
│  ├─ robots.ts
│  ├─ manifest.ts
│  ├─ opengraph-image.tsx        default OG image
│  └─ services/[slug]/opengraph-image.tsx   per-service OG image
├─ components/
│  ├─ ui/                        shadcn (full set)
│  ├─ layout/                    site-header, services-menu, mobile-nav, site-footer, whatsapp-button
│  ├─ sections/                  hero, pillars, approach, about-teaser, visit-us, faq-teaser, cta-band,
│  │                             service-hero, service-overview, who-for, how-it-works,
│  │                             benefits-considerations, requirements-table, service-faq,
│  │                             related-services, contact-details, enquiry-composer
│  ├─ shared/                    logo, monogram-watermark, hairline, reveal, eyebrow,
│  │                             section-heading, framed-image, breadcrumbs, disclosure-note
│  └─ seo/                       json-ld
├─ lib/
│  ├─ site-config.ts
│  ├─ pillars.ts
│  ├─ services.ts
│  ├─ faqs.ts
│  ├─ disclosures.ts
│  ├─ seo.ts
│  ├─ enquiry.ts                 builds WhatsApp and mailto links
│  └─ schemas.ts                 Zod schema for the enquiry form
├─ public/
│  ├─ images/…
│  ├─ logo/…                     SVGs
│  └─ llms.txt
└─ .env.example
```

---

## 8. Data Model

Everything the site says about the business lives in typed config files so edits never touch components.

**`site-config`:** legal name (MGS Capital Limited), short name, tagline ("Your fiduciary investment advisory partner"), description, owner name and title `CONFIRM`, `foundingYear` `CONFIRM` (years in operation is computed), phone (display, E.164, WhatsApp), **one public email**, internal emails (not rendered), office address (CPA Centre, Old Stanchart Building, 1st Floor, plus city and street `CONFIRM`), map link, hours `CONFIRM`, social links (empty until they exist), regulatory registrations (empty until supplied), canonical site URL, default OG image.

**`pillars`:** `slug`, `number`, `name`, `promise`, `serviceSlugs[]`, `image`.

**`services`** (array, eleven entries). Fields: `slug`, `published` (boolean), `pillar`, `audience` (`individual`, `business`, or `both`), `title`, `h1`, `tagline`, `summary`, `overview` (2–3 paragraphs), `whoFor[]`, `covers[]`, `howItWorks[]` (step title plus description), `benefits[]`, `thingsToKnow[]`, `requirements[]` (flagged as typical), `faqs[]`, `related[]`, `disclosure`, `image` (with alt), `seo` (title, description, keywords), `reviewedDate`. Content comes from §3.

**`faqs`:** global FAQs for Home and About.

**FAQ answers:** 40–70 words, answer-first.

**Enquiry schema (Zod):** `name` (2–80), `phone` (Kenyan formats accepted: `07xx`, `01xx`, `+254…`, normalised), `service` (enum of published services, plus "General enquiry"), `message` (optional, max 800), `channel` (`whatsapp` or `email`), `consent` (must be true).

---

## 9. Layout Shell

### 9.1 Header
- Transparent over the hero, turning white with a hairline bottom border after a small scroll. Sticky.
- Left: the logo (monogram plus wordmark, graphite). Centre or right: thin uppercase tracked links (**Home, About, Services, Contact**). **Services** opens a shadcn **NavigationMenu** panel organised by the **five pillars**, each with its services as links (two-column layout, thin pillar numbers, one-line pillar promise). A slim outlined **Enquire** button sits on the right.
- Mobile: logo plus a thin hamburger that opens a **full-height Sheet** with large Cormorant Light links. Services expand into pillar groups (Accordion), then the phone number and WhatsApp link.
- Active page shown with a fine bronze underline.

### 9.2 Footer (`graphite-deep`, generous padding)
- Large faint monogram watermark.
- Columns: **Brand** (white logo, tagline, two-line description), **Services** (grouped by pillar, all published services), **Company** (About, Contact, Disclosures, Privacy, Terms), **Contact** (phone, public email, office address, hours).
- **Regulatory strip:** licence and registration details (empty until supplied) plus the general disclaimer from §14.
- Bottom bar: © current year (generated dynamically) MGS Capital Limited. All rights reserved. "Last updated" month and year.

### 9.3 Floating contact
A small, discreet WhatsApp icon button (bottom-right) with a Tooltip ("Chat on WhatsApp") and a pre-filled message. No pulsing. Keep clear of the mobile safe area.

---

## 10. Page-by-Page Build Guide

### 10.1 Home (`/`)
Sections in order, each separated by generous white space and a hairline.

1. **Hero:** full viewport, mostly white, faint monogram watermark at the right. Eyebrow: "MGS CAPITAL LIMITED · YOUR FIDUCIARY INVESTMENT ADVISORY PARTNER". **H1:** "Insurance and investment advice, *considered.*" Subtext (Jost 300, large): "A Kenyan financial services company offering insurance and investment advisory services for individuals, families, and businesses." Buttons: **Explore services** (solid graphite) and **Speak with Lizzie** (outline). Thin "Scroll" cue.
2. **Trust strip:** a thin row of four facts separated by hairlines: "3 years in operation" (computed), "Eleven services" (computed from data), "Office visits welcome" `CONFIRM`, "Licensed and regulated" **only once licence details are supplied**.
3. **Statement:** one large centred Cormorant Light paragraph: "We help people and businesses choose, structure, and fund the right protection, retirement, investment, and growth solutions, with advice they can trust." Key phrase in bronze italic.
4. **Five pillars (signature section):** a tall list of five wide rows separated by hairlines. Each row: large thin numeral (01 to 05), pillar name as eyebrow, pillar promise in Cormorant 300 at 40–56px, and the pillar's services as small underlined links beneath. On hover the row shifts slightly and a framed image preview fades in (desktop). On mobile, rows stack with a small image. Every service link goes to its page.
5. **Our approach:** three columns separated by vertical hairlines: **Listen** (understand the goal), **Advise** (compare options and explain costs and risks plainly), **Guide** (support with paperwork through to completion). `CONFIRM` wording.
6. **Meet Lizzie:** asymmetrical split: framed portrait, short bio `CONFIRM`, link to About.
7. **Who we serve:** a quiet table of segments from §2.4 with links to services.
8. **Visit us:** office address (CPA Centre, Old Stanchart Building, 1st Floor), hours `CONFIRM`, a link to the map, and an exterior or reception photo.
9. **FAQ teaser:** shadcn **Accordion** with 5 cross-service questions.
10. **CTA band:** `graphite-deep`, monogram watermark, thin headline "Let's talk about what you're planning." Buttons: Call, WhatsApp, Email (white outline).

### 10.2 About (`/about`)
- Hero: eyebrow "ABOUT", H1 "A calmer way to approach *advice.*" `CONFIRM`.
- **Our story:** the company's three years, its purpose `CONFIRM` (write placeholder prose clearly marked as draft).
- **Lizzie Gitiche:** portrait, role `CONFIRM`, background and experience `CONFIRM`, short quote.
- **What "fiduciary" means at MGS:** one honest paragraph (see §2.2). Hide until Lizzie supplies the wording.
- **What we believe:** four principles (clarity, care, discretion, diligence) as thin-ruled columns.
- **Credentials and regulation:** licences, registrations, partners (hidden until supplied, never fabricated).
- **How we work:** four steps (consultation, review, application or placement, follow-through).
- CTA band.

### 10.3 Services overview (`/services`)
- Hero: H1 "Eleven ways we help you *move forward.*" (number computed from data).
- **Pillar sections** (anchors `#insurance`, `#retirement`, `#investment`, `#education`, `#enterprise`): each with numeral, pillar promise, and its services as hairline rows with a one-line summary, "For individuals" or "For businesses" tag (**Badge**), and an arrow.
- **At-a-glance table** (shadcn **Table**): columns Service, Best for, What it helps with, Key thing to know. Eleven rows grouped by pillar.
- **Not sure where to start?** short block with Call and WhatsApp.
- CTA band.

### 10.4 Service pages (`/services/[slug]`, one template, eleven instances)
All service pages share one structure. Full text of every section is in the HTML (no content behind tabs or click-to-reveal, except FAQ answers in the Accordion, which still render in the DOM).

1. **Breadcrumbs:** Home / Services / *Service name* (shadcn **Breadcrumb**, thin).
2. **Hero:** eyebrow with pillar number and name (for example "02 · RETIREMENT"), **H1 with the keyword** (for example "NSSF Tier 2 Advisory in Kenya"), one-paragraph summary, buttons **Enquire about this service** (to `/contact?service=<slug>`) and **Call +254 725 622 207**. Framed image alongside. A small badge shows "For individuals", "For businesses", or "For both".
3. **Overview:** two columns, long-form intro (2–3 paragraphs).
4. **Who it's for:** hairline-separated list.
5. **What it covers:** thin-ruled grid of 4–6 items with thin-stroke icons.
6. **How it works:** numbered steps joined by a vertical hairline that draws in on scroll.
7. **Benefits and Things to know:** two columns. The right column is titled **"Things to know"** and honestly lists costs, risks, and limits.
8. **Typically required:** checklist or table labelled "Typical requirements. Your exact list will be confirmed during your consultation." `CONFIRM`.
9. **FAQ:** Accordion, 6–7 questions, the same data feeds FAQPage JSON-LD.
10. **Disclosure note:** subtle shadcn **Alert** or small print with the service-specific disclosure from §14.
11. **Related services:** two elegant cards (see §5).
12. **CTA band.**
Show **"Reviewed: <Month Year>"** under the hero and keep it genuinely current.

Service-specific notes:
- **NSSF Tier 2:** include a short "Tier I and Tier II at a glance" explainer using words only (no rates or limits) and a prominent note: "Rules and limits are set by NSSF and the Retirement Benefits Authority and change over time. We will confirm the current position with you."
- **Fundraising for Lending Companies:** put a visible line near the top: "This service is for lending companies. It is not an offer of securities."
- **Medical Insurance and General Insurance:** include a short glossary using **HoverCard** for terms like "excess", "waiting period", "third-party".

### 10.5 Contact (`/contact`)
- Hero: eyebrow "CONTACT", H1 "Let's begin with a *conversation.*"
- Left: contact details as thin-ruled rows: **Phone** (tap to call), **WhatsApp** (opens chat), **Email** (the single public address), **Office** (CPA Centre, Old Stanchart Building, 1st Floor, city `CONFIRM`), **Hours** `CONFIRM`. Phone and email have a copy icon with a Tooltip and a Sonner toast ("Phone number copied"). A link (not an iframe) to the office on Google Maps.
- Right: **Enquiry composer**, a minimal **client-side-only** form (no server, nothing stored):
  - Fields: Name, Phone, **Service** (shadcn **Select** grouped by pillar with `SelectGroup`, pre-selected from `?service=`, plus "General enquiry"), Message (optional **Textarea**), preferred channel (**RadioGroup**: WhatsApp or Email), consent **Checkbox**: "I understand this will open WhatsApp or my email app so I can send this message to MGS Capital."
  - Validate with React Hook Form and Zod. Thin inline errors.
  - On submit, build a pre-filled `wa.me` link or `mailto:` link, open it, show a Sonner toast ("Opening WhatsApp…"), and show a fallback link in case the browser blocks it.
  - Wrap the component in `Suspense` (it reads the query string), with a Skeleton fallback.
  - If Lizzie prefers zero forms, drop the composer and keep the links.

### 10.6 Legal pages
`/privacy`, `/terms`, `/disclosures`: clean, readable long-form pages in the same typographic style. Drafts must be **reviewed by a Kenyan lawyer or compliance adviser** before launch. The privacy page should reflect Kenya's Data Protection Act, 2019, state that the site stores no enquiry data (the composer opens WhatsApp or email), and mention analytics. `CONFIRM` the business's own data-protection registration obligations.

### 10.7 404
Branded page, thin Cormorant "Page not found", links to Home and Services.

---

## 11. shadcn/ui Component Map

Install the **full shadcn/ui component set** so the agent never hand-builds a substitute. Restyle everything with the tokens in §6 (sharp radius, hairline borders, graphite and bronze) so nothing looks default.

| Component | Where it's used |
|---|---|
| `button` | All CTAs (solid graphite, outline, ghost, link) |
| `navigation-menu` | Desktop header with pillar-grouped Services panel |
| `sheet` | Mobile navigation |
| `accordion` | FAQs, mobile service groups |
| `breadcrumb` | Service pages |
| `table` | Services at-a-glance, requirements |
| `card` | Related services (flat, hairline, no shadow) |
| `badge` | Pillar labels, audience tags, "Reviewed" tag |
| `alert` | Disclosure notes, "not an offer of securities" line |
| `separator` | Hairlines |
| `tooltip` | Copy icons, WhatsApp button |
| `hover-card` | Glossary hints (excess, waiting period, vesting, yield, letter of credit) |
| `skeleton` | Image placeholders, `Suspense` fallback for the composer |
| `aspect-ratio` | Image frames |
| `form`, `input`, `textarea`, `select`, `radio-group`, `checkbox`, `label` | Enquiry composer |
| `sonner` | Toasts (mount `Toaster` once in the root layout) |
| `avatar` | Lizzie's profile |
| `carousel` | Optional: future testimonials or insights |
| `scroll-area`, `dialog`, `drawer`, `popover`, `collapsible`, `toggle`, `toggle-group`, and the rest | Installed and available, used only if a design need appears |

---

## 12. Rendering, Performance, Accessibility

- All pages are **statically generated Server Components**. Client components only for the header scroll state, mobile nav, Framer Motion wrappers, and the enquiry composer.
- Fonts via `next/font` (Cormorant Garamond and Jost), only the weights listed, `display: swap`, Latin subset.
- The hero is the LCP element. Give it `priority` and explicit dimensions. Do not animate it.
- **Targets (mobile, throttled 4G):** LCP < 2.5s, INP < 200ms, CLS < 0.1. Lighthouse Performance 90+, Accessibility 95+, SEO 100, Best Practices 95+.
- Lazy-load everything below the fold. Reserve image space. Keep first load under about 1.5MB, because many visitors are on mobile data.
- **Accessibility:** semantic landmarks, skip link, visible `bronze-deep` focus rings, keyboard-friendly navigation menu and accordion, AA contrast (use `bronze-deep`, not `bronze`, for small text), 44×44px tap targets, always-visible form labels, `aria-describedby` for errors, reduced-motion support. Test thin fonts at small sizes on a real mid-range Android phone.

---

## 13. SEO

### 13.1 Keyword strategy
Validate volumes in Google Keyword Planner and Search Console after launch. Use keywords naturally, never stuffed. Each service page targets its own cluster, which is the main SEO advantage of this multi-page structure.

| Page | Primary | Secondary and long-tail |
|---|---|---|
| Home | insurance and investment advisory Kenya, financial services Kenya | investment adviser Kenya, insurance advisory Kenya, financial advisory firm Kenya, financial services `+ city once confirmed` |
| Medical Insurance | medical insurance Kenya | health insurance Kenya, family medical cover Kenya, corporate medical insurance Kenya, group medical insurance for SMEs Kenya |
| General Insurance | general insurance Kenya | motor insurance Kenya, business insurance Kenya, commercial insurance Kenya, property insurance Kenya, WIBA insurance Kenya |
| Insurance Premium Financing | insurance premium financing Kenya | pay insurance premium in instalments Kenya, premium finance for SMEs Kenya, fleet insurance financing Kenya |
| Retirement Plan Advisory | retirement planning Kenya | individual pension plan Kenya, retirement savings plan Kenya, umbrella pension scheme Kenya, occupational pension scheme Kenya |
| Pension Consolidation | pension consolidation Kenya | combine pension schemes Kenya, transfer pension Kenya, merge retirement benefits Kenya |
| NSSF Tier 2 | NSSF Tier 2 Kenya | contract out of NSSF Tier II, NSSF Tier 1 vs Tier 2, NSSF opt out for employers Kenya, how to contract out of NSSF Tier II |
| Money Market Fund Advisory | money market fund advisory Kenya | money market funds Kenya, how to choose a money market fund Kenya, short-term investment Kenya |
| Study Abroad Loans | study abroad loans Kenya | student loan for studying abroad Kenya, education loan Kenya overseas, fund my studies abroad Kenya |
| Trade Finance Solution | trade finance Kenya | import financing Kenya, LPO financing Kenya, invoice discounting Kenya, letter of credit Kenya, supply chain financing Kenya |
| Bid Bonds | bid bond Kenya | tender security Kenya, bid security guarantee Kenya, how to get a bid bond in Kenya |
| Fundraising for Lending Companies | fundraising for lending companies Kenya | raise capital for microfinance Kenya, debt funding for lenders Kenya, capital raising for digital lenders Kenya |
| Question-style (FAQs) | what is a bid bond, what is premium financing, what is NSSF Tier II, how does pension consolidation work, what is a money market fund, how to fund studies abroad, what is trade finance | |

Avoid superlatives ("best", "cheapest") and anything that implies guaranteed outcomes.

### 13.2 On-page rules
- **Title tags** (≤60 characters, template `%s | MGS Capital Limited`):
  - Home: `Insurance & Investment Advisory in Kenya | MGS Capital`
  - `Medical Insurance in Kenya | MGS Capital`
  - `General Insurance in Kenya | MGS Capital`
  - `Insurance Premium Financing in Kenya | MGS Capital`
  - `Retirement Plan Advisory in Kenya | MGS Capital`
  - `Pension Consolidation in Kenya | MGS Capital`
  - `NSSF Tier 2 Advisory in Kenya | MGS Capital`
  - `Money Market Fund Advisory in Kenya | MGS Capital`
  - `Study Abroad Loans in Kenya | MGS Capital`
  - `Trade Finance Solutions in Kenya | MGS Capital`
  - `Bid Bonds in Kenya | MGS Capital`
  - `Fundraising for Lending Companies in Kenya | MGS Capital`
- **Meta descriptions** (≤155 characters), unique per page, plain-English benefit plus a soft call to action. Example: `Understand NSSF Tier II and whether contracting out suits your business. MGS Capital advises employers in Kenya. Speak to us today.`
- **Headings:** exactly one H1 per page. One H2 per major section. No skipped levels.
- **Internal links** with descriptive anchor text ("insurance premium financing in Kenya"), not "click here".
- **Alt text** describes the image honestly.
- `<html lang="en-KE">`. Canonical URL on every page.

### 13.3 Technical implementation
- **Metadata API** per page: `metadataBase`, title template, description, canonical, Open Graph (type website, locale `en_KE`, image), Twitter (summary_large_image), `robots`.
- **`sitemap.ts`** lists all published routes with `lastModified`. **`robots.ts`** allows all, points at the sitemap, and includes the AI crawler rules in §15.
- **OG images** generated with Next's `ImageResponse`: white background, monogram, page title in Cormorant. Bundle the font file in the repo.
- Favicon (monogram), apple icon, `manifest.ts` with graphite and white.
- **JSON-LD** (server-rendered, escape `<`):
  - **`FinancialService`** on every page (schema.org subtype of LocalBusiness): `name`, `legalName`, `url`, `logo`, `image`, `description`, `slogan` (the tagline), `telephone`, `email` (public one only), `address` (once complete), `areaServed` (Kenya), `openingHoursSpecification` `CONFIRM`, `foundingDate` `CONFIRM`, `sameAs`, `founder`/`employee` as `Person` (Lizzie Gitiche), `hasOfferCatalog` listing the published services. Add the more specific `InsuranceAgency` type **only if** MGS is licensed as an insurance intermediary.
  - **`WebSite`** with the site name.
  - **`Service`** on each service page (`serviceType`, `provider`, `areaServed`, `description`).
  - **`FAQPage`** on each service page and Home, built from the same data as the visible FAQ.
  - **`BreadcrumbList`** on service pages.
  - `Review`/`AggregateRating` only if real, visible reviews exist.
- Validate with Google's Rich Results Test and the Schema.org validator.

### 13.4 Local and trust SEO
1. Create and verify a **Google Business Profile** at the office address (CPA Centre, Old Stanchart Building, 1st Floor) with accurate categories (for example a financial consultant, and an insurance-related category **only if** licensed). Add services, hours, phone, website, photos of the office and team.
2. Keep **name, address, phone, and email identical** across the site, Google, Facebook, LinkedIn, and directories.
3. Ask satisfied clients for Google reviews (with consent) and reply to each.
4. List in credible Kenyan business directories and relevant professional bodies.
5. Add UTM tags to the GBP website link.
6. **E-E-A-T for a financial site:** a named expert with a real bio and photo, visible licences and registrations, a physical address, clear contact details, honest "Things to know" sections, a "Reviewed" date on each service page, and sources where statistics are cited. Never publish statistics you cannot source.

### 13.5 Phase 2 content ideas
A `/insights` section with practical guides: "NSSF Tier I vs Tier II explained", "How to contract out of NSSF Tier II: an employer's checklist", "Choosing medical insurance: a plain-English guide", "What is a bid bond?", "How premium financing works", "Why consolidate your pensions?", "Money market funds explained", "Funding your studies abroad: a checklist". These capture question-style searches and AI citations.

---

## 14. Compliance & Disclosures (drafts, to be reviewed by a compliance professional)

Place the general disclaimer in the footer, the full set on `/disclosures`, and the matching one on each service page.

- **General:** "Information on this website is general in nature and does not constitute financial, investment, insurance, tax, or legal advice. Products and services are subject to eligibility, terms and conditions, and applicable regulation."
- **Medical Insurance:** "Cover, limits, waiting periods, and exclusions vary by insurer and plan. Please read the policy terms before you buy."
- **General Insurance:** "Cover is subject to the insurer's policy wording, limits, and exclusions. Premiums are set by insurers."
- **Insurance Premium Financing:** "Financing is subject to approval and terms. Failure to pay instalments may affect your insurance cover." `CONFIRM against partner terms`
- **Retirement Plan Advisory:** "Retirement savings are long-term. Investment returns are not guaranteed and can go down as well as up. Tax and scheme rules apply."
- **Pension Consolidation:** "Transferring retirement benefits can affect your entitlements. Review scheme rules, fees, and tax implications before you transfer."
- **NSSF Tier 2:** "NSSF and Retirement Benefits Authority rules, rates, and limits change over time. This information is general and is not legal advice. Contracting out requires regulatory approval."
- **Money Market Fund Advisory:** "Investments in money market funds are not guaranteed. The value of an investment and the income from it can go down as well as up, and past performance is not a reliable guide to future results."
- **Study Abroad Loans:** "Credit is subject to approval. Interest, fees, and terms apply and will be disclosed before you commit. Exchange-rate movements can affect the cost of repayment."
- **Trade Finance Solution:** "Facilities are subject to credit approval, security, and the funder's terms. Costs and timelines vary."
- **Bid Bonds:** "Issuance is subject to assessment and the issuer's terms. Bonds must meet the specific requirements of the procuring entity."
- **Fundraising for Lending Companies:** "This service is for lending companies. It is not an offer of securities or a solicitation of investment from the public. Fundraising outcomes are not guaranteed."

Additional rules:
- Show **no rates, yields, fees, approval times, NSSF contribution rates, or earnings limits** unless supplied in writing, current, and dated, with the source.
- Name **no partner bank, insurer, fund manager, lender, or funder** unless confirmed and permitted.
- No testimonials unless real and consented.
- "Fiduciary" claims: see §2.2.

---

## 15. AI SEO (Generative Engine / Answer Engine Optimisation)

Goal: get assistants such as ChatGPT, Gemini, Perplexity, and Claude to describe MGS Capital accurately and cite its pages when asked things like "what is a bid bond in Kenya?", "how do I contract out of NSSF Tier II?", or "how can I pay my insurance premium in instalments?".

1. **Static, server-rendered HTML.** All copy is in the initial HTML. Many AI crawlers do not run JavaScript.
2. **Allow AI crawlers** in `robots.ts`: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`. Verify current bot names in each vendor's documentation before shipping.
3. **Answer-first FAQs.** Open with the direct answer in one or two sentences, then context. Self-contained, quotable passages of 40–70 words. This is the most valuable AI-SEO asset on the site.
4. **One entity description,** reused everywhere (About, JSON-LD `description`, Google Business Profile, social bios): *"MGS Capital Limited is a Kenyan financial services company offering insurance and investment advisory services, including medical and general insurance, insurance premium financing, retirement plan advisory, pension consolidation, NSSF Tier II advisory, money market fund advisory, study abroad loans, trade finance, bid bonds, and fundraising support for lending companies. It is led by Lizzie Gitiche."* Add the office location once confirmed.
5. **Structured data and `sameAs`** links to every profile so AI systems connect the website to the same entity.
6. **Concrete, honest facts:** who each service is for, how it works step by step, typical requirements, and the risks. Models quote specifics and favour balanced sources.
7. **Freshness and expertise signals:** "Reviewed" dates, a named expert, accurate regulatory details. Keep NSSF content especially current.
8. **Third-party corroboration:** reviews, directory listings, professional profiles, and helpful published answers elsewhere. AI answers rely heavily on sources beyond the site.
9. **`llms.txt`** in `/public`: a short markdown summary of the business, the services (grouped by pillar) with links, and contact details. Cheap to add, but support is not guaranteed and its impact is unproven, so treat it as a bonus.
10. **Vary phrasing naturally:** "bid bond" and "tender security", "premium financing" and "paying premiums in instalments", "NSSF Tier 2" and "NSSF Tier II", "money market fund" and "MMF".
11. **Monitor monthly:** ask 8–10 relevant questions in major AI assistants and record whether MGS Capital is mentioned and described correctly.

---

## 16. Analytics & Tracking
- **Vercel Analytics** and **Speed Insights** (cookieless).
- **Google Search Console** (domain property) and **Bing Webmaster Tools**: submit the sitemap.
- Optional GA4. If added, add a small cookie notice.
- Track events: click-to-call, WhatsApp click, email click, composer submit, service-page CTA clicks (with service name), and `/contact?service=` arrivals.

---

## 17. Environment Variables
`.env.example` (no real values committed):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, JSON-LD |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `254725622207` |
| `NEXT_PUBLIC_GA_ID` | Optional |

No API keys are needed. The public email lives in `site-config`.

---

## 18. Content Checklist (collect from Lizzie before launch)
1. What does "MGS" stand for, the founding year, and a short company story?
2. Lizzie's title (CEO?), bio, qualifications, and a high-quality portrait.
3. What "fiduciary" means in practice at MGS, and the basis for using it.
4. Licences, registrations, and regulators (IRA, RBA, CMA, CBK, SASRA, or others) and permission to display them.
5. Partner insurers, lenders, funders, fund managers, and banks she is allowed to name (if any).
6. For **each of the eleven services**: exact scope, eligibility, typical requirements, turnaround, whether fees or rates may be published, and the real process. Specifically:
   - **NSSF Tier 2:** advice only, scheme set-up, or administration? Which schemes does MGS work with?
   - **Money Market Fund Advisory:** advice only, or also distribution? Under which licence?
   - **Fundraising for Lending Companies:** debt, equity, or both? Which lenders? Fee model?
   - **Trade Finance Solution:** which instruments?
   - **Medical and General Insurance:** which classes and insurers?
   - **Bid Bonds:** is it still offered (card yes, sheet no)?
7. The office: city and street, floor, landmarks, opening hours, parking or access notes, and office and team photos.
8. Which **single email** to show publicly (domain-based preferred). Confirm the other addresses stay private.
9. Clean logo files (SVG, or high-resolution PNG).
10. Existing website, social profiles, and Google Business Profile.
11. Real client testimonials with written consent.
12. Preferred WhatsApp greeting text.
13. Confirmation that existing mailboxes and DNS records will be preserved at deployment.

---

## 19. Build Order (Execution Plan for the Agent)

Complete each phase and tick its checks before moving on.

### Phase 0: Setup
1. Create the Next.js 16.4.1 App Router project with TypeScript, Tailwind, ESLint, `app/` directory, alias `@/`.
2. Install and configure shadcn/ui (**full component set**), Lucide, Framer Motion, React Hook Form, Zod, Sonner. Configure `next/font` (Cormorant Garamond, Jost).
- ✅ Dev server runs, lint and type-check pass.

### Phase 1: Design system
1. Define colour, type, spacing, radius, and motion tokens (§6) in `globals.css`. Re-theme shadcn variables to sharp radius, hairline borders, graphite and bronze.
2. Build shared components: `Logo`, `MonogramWatermark`, `Hairline` (draw-in), `Reveal`, `Eyebrow`, `SectionHeading`, `FramedImage`, `Breadcrumbs`, `DisclosureNote`, button variants.
3. Create a temporary style page to verify the type scale, colours, and buttons.
- ✅ The style page feels airy, thin, and metallic, with bronze used sparingly.

### Phase 2: Data and shell
1. `site-config`, `pillars`, `services` (all eleven, with `published` flags), `faqs`, `disclosures` from §3 and §14.
2. Header (transparent to solid, pillar-grouped NavigationMenu, mobile Sheet with accordion), footer, floating WhatsApp button, root layout with Toaster and analytics, skip link, `not-found`.
- ✅ Navigation works on desktop and mobile with all routes stubbed.

### Phase 3: Home
Build the Home page in the order of §10.1. The pillars section is the priority and must feel excellent.
- ✅ Responsive at 360 / 768 / 1024 / 1440px, ample white space, smooth hover states and reveals.

### Phase 4: Services
1. Build the `[slug]` template with `generateStaticParams`, `dynamicParams = false`, and the `published` filter, then all components in §10.4.
2. Populate all eleven services from the data file. Add per-service OG images.
3. Build the Services overview with pillar sections and the at-a-glance table.
- ✅ Every published service page renders from data with breadcrumbs, FAQs, disclosure notes, and related services. Unpublished services appear nowhere.

### Phase 5: About, Contact, legal
1. About page.
2. Contact page with details, office address, copy-to-clipboard toasts, and the client-side enquiry composer (WhatsApp or mailto, `?service=` pre-selection, `Suspense` wrapper).
3. Privacy, Terms, Disclosures pages (draft text).
- ✅ The composer validates, opens a correctly pre-filled WhatsApp or email draft, and shows Sonner feedback. Nothing is sent to any server.

### Phase 6: SEO and AI SEO
1. Metadata for every page, OG images, favicon, manifest, sitemap, robots (with AI crawler rules), `llms.txt`.
2. JSON-LD (`FinancialService`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`).
3. Heading outline audit, alt text audit, internal-link audit.
- ✅ Rich Results Test passes. View-source shows all key text. Lighthouse SEO 100.

### Phase 7: Polish
1. Motion pass (reveals, hairline draw-ins, hover states), reduced-motion handling.
2. Image optimisation, `sizes`, blur placeholders, CLS check.
3. Accessibility pass with extra attention to thin-font legibility and contrast.
- ✅ Lighthouse targets from §12 met on mobile.

### Phase 8: Launch
1. Replace every `CONFIRM` with real information. Remove anything unconfirmed. Hide unconfirmed services with `published: false`.
2. Have a compliance professional review §14 and the legal pages.
3. Deploy to Vercel, connect `mgscapital.co.ke`, **preserve existing MX and email DNS records**, set env vars.
4. Submit the sitemap to Search Console and Bing. Create the Google Business Profile at the office address and the social profiles, then add `sameAs` links.
5. Final QA on a real Android phone and an iPhone, on a slow network. Test every call, WhatsApp, and email link, the composer, 404, and OG previews.

---

## 20. Definition of Done
- Feels premium, high-end, and chic: long thin type, abundant white space, hairline structure, logo-derived palette (graphite, silver, bronze) with restrained accents.
- Home, About, Services overview, all published service pages, Contact, and legal pages are live, consistent, and fully responsive.
- The official tagline, description, years in operation, office address, and contact details appear correctly and consistently.
- Every service page has its own keyword-focused H1, overview, process, honest "Things to know", FAQs, disclosure, and related links.
- No server code, no email service, no file storage. Enquiries reach MGS Capital via call, WhatsApp, or the visitor's own email app.
- No fabricated licences, partners, rates, statistics, or reviews. All `CONFIRM` items resolved and compliance review done.
- Structured data valid, content readable without JavaScript, Lighthouse targets met, Google Business Profile and Search Console set up.