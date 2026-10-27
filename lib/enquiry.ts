import { siteConfig } from "@/lib/site-config"
import { normaliseKenyanPhone } from "@/lib/schemas"
import { getService } from "@/lib/services"

type EnquiryLinkInput = {
  name: string
  phone: string
  service: string
  message?: string
  channel: "whatsapp" | "email"
}

const serviceLabel = (value: string) =>
  value === "general" ? "General enquiry" : (getService(value)?.title ?? value)

export function buildEnquiryLinks(input: EnquiryLinkInput) {
  const phone = normaliseKenyanPhone(input.phone) ?? input.phone
  const service = serviceLabel(input.service)
  const lines = [
    `Name: ${input.name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    input.message ? `Message: ${input.message}` : null,
  ].filter(Boolean)

  const body = lines.join("\n")

  return {
    whatsapp: `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
      `Hello MGS Capital,\n\n${body}`
    )}`,
    email: `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Enquiry — ${service}`
    )}&body=${encodeURIComponent(`Hello MGS Capital,\n\n${body}\n`)}`,
  }[input.channel]
}

export const contactLinks = {
  call: siteConfig.phone.href,
  whatsapp: `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.message
  )}`,
  email: `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Enquiry from the MGS Capital website"
  )}`,
}
