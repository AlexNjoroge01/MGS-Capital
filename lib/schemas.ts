import { z } from "zod"

import { publishedServices } from "@/lib/services"

export const enquiryServiceValues = [
  ...publishedServices.map((service) => service.slug),
  "general",
] as const

export type EnquiryService = (typeof enquiryServiceValues)[number]

export const serviceOptions = [
  { value: "general", label: "General enquiry" },
  ...publishedServices.map((service) => ({
    value: service.slug,
    label: service.title,
  })),
]

/** Kenyan mobile formats: 07xx, 01xx, 2547xx, +2547xx. */
export const normaliseKenyanPhone = (value: string) => {
  const digits = value.replace(/[^\d+]/g, "")

  if (/^\+254(7|1)\d{8}$/.test(digits)) return digits
  if (/^254(7|1)\d{8}$/.test(digits)) return `+${digits}`
  if (/^0(7|1)\d{8}$/.test(digits)) return `+254${digits.slice(1)}`

  return null
}

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please use 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter a phone number.")
    .refine((value) => normaliseKenyanPhone(value) !== null, {
      message: "Enter a Kenyan mobile number, for example 0712 345 678.",
    }),
  service: z.enum(enquiryServiceValues),
  message: z
    .string()
    .trim()
    .max(800, "Please keep the message under 800 characters.")
    .optional(),
  channel: z.enum(["whatsapp", "email"]),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "Please confirm before continuing.",
    }),
})

export type EnquiryValues = z.infer<typeof enquirySchema>
