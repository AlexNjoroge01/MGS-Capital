"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowUpRight, Check } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { buttonStyles } from "@/components/shared/button-styles"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { buildEnquiryLinks } from "@/lib/enquiry"
import { pillars } from "@/lib/pillars"
import { enquirySchema, type EnquiryValues } from "@/lib/schemas"
import { getServicesByPillar, getService } from "@/lib/services"

export function EnquiryComposer() {
  const searchParams = useSearchParams()
  const requested = searchParams.get("service")
  const initialService =
    requested && getService(requested) ? requested : "general"

  const [fallback, setFallback] = useState<{
    href: string
    label: string
  } | null>(null)

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      service: initialService as EnquiryValues["service"],
      message: "",
      channel: "whatsapp",
      consent: false,
    },
  })

  useEffect(() => {
    if (requested && getService(requested)) {
      setValue("service", requested as EnquiryValues["service"])
    }
  }, [requested, setValue])

  // useWatch keeps the React Compiler able to memoise this component; the
  // `watch()` helper returned by useForm cannot be memoised safely.
  const channel = useWatch({
    control,
    name: "channel",
    defaultValue: "whatsapp",
  })
  const consent = useWatch({ control, name: "consent", defaultValue: false })
  const service = useWatch({
    control,
    name: "service",
    defaultValue: initialService as EnquiryValues["service"],
  })

  const onSubmit = (values: EnquiryValues) => {
    const href = buildEnquiryLinks({
      name: values.name,
      phone: values.phone,
      service: values.service,
      message: values.message,
      channel: values.channel,
    })

    setFallback({
      href,
      label:
        values.channel === "whatsapp"
          ? "Open WhatsApp with this message"
          : "Open your email app with this message",
    })

    if (values.channel === "whatsapp") {
      toast.success("Opening WhatsApp…")
      window.open(href, "_blank", "noopener,noreferrer")
    } else {
      toast.success("Opening your email app…")
      window.location.assign(href)
    }
  }

  const serviceGroups = pillars
    .map((pillar) => ({
      pillar,
      services: getServicesByPillar(pillar.slug),
    }))
    .filter((group) => group.services.length > 0)

  return (
    <div className="border border-silver-light bg-white p-6 sm:p-8 lg:p-10">
      <p className="text-[0.5625rem] tracking-[0.2em] text-bronze-deep uppercase">
        Enquiry composer
      </p>
      <h2 className="mt-3 font-display text-[1.75rem] leading-tight font-light">
        Write it once, send it your way.
      </h2>
      <p className="mt-3 text-[0.8125rem] leading-relaxed font-light text-ink-muted">
        This form does not send anything to a server. It opens WhatsApp or your
        email app with the message ready for you to send. Nothing is stored on
        this website.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" className="field-label">
              Name
            </Label>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1.5 text-[0.75rem] text-destructive"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="field-label">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="0712 345 678"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1.5 text-[0.75rem] text-destructive"
              >
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="service" className="field-label">
            Service
          </Label>
          <Select
            value={service}
            onValueChange={(value) =>
              setValue("service", value as EnquiryValues["service"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger
              id="service"
              className="h-11 w-full justify-between"
              aria-invalid={Boolean(errors.service)}
            >
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General enquiry</SelectItem>
              {serviceGroups.map((group) => (
                <SelectGroup key={group.pillar.slug}>
                  <SelectLabel className="text-[0.5625rem] tracking-[0.18em] text-bronze-deep uppercase">
                    {group.pillar.number} · {group.pillar.name}
                  </SelectLabel>
                  {group.services.map((item) => (
                    <SelectItem key={item.slug} value={item.slug}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-1.5 text-[0.6875rem] text-ink-muted">
            {service === "general"
              ? "Choose a service if you already know, or leave it as a general enquiry."
              : "This service will be named in the message."}
          </p>
        </div>

        <fieldset>
          <legend className="field-label">Preferred channel</legend>
          <RadioGroup
            value={channel}
            onValueChange={(value) =>
              setValue("channel", value as EnquiryValues["channel"])
            }
            className="grid grid-cols-2 gap-3"
          >
            <Label
              htmlFor="channel-whatsapp"
              className="flex cursor-pointer items-center gap-2.5 border border-silver-light px-4 py-3 text-[0.8125rem] font-normal tracking-normal normal-case transition-colors has-[[data-state=checked]]:border-bronze-deep"
            >
              <RadioGroupItem id="channel-whatsapp" value="whatsapp" />
              WhatsApp
            </Label>
            <Label
              htmlFor="channel-email"
              className="flex cursor-pointer items-center gap-2.5 border border-silver-light px-4 py-3 text-[0.8125rem] font-normal tracking-normal normal-case transition-colors has-[[data-state=checked]]:border-bronze-deep"
            >
              <RadioGroupItem id="channel-email" value="email" />
              Email
            </Label>
          </RadioGroup>
        </fieldset>

        <div>
          <Label htmlFor="message" className="field-label">
            Message <span className="normal-case">(optional)</span>
          </Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="A sentence or two about what you need."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1.5 text-[0.75rem] text-destructive"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(value) => setValue("consent", value === true)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5"
            />
            <Label
              htmlFor="consent"
              className="text-[0.8125rem] leading-relaxed font-light tracking-normal text-ink-muted normal-case"
            >
              I understand this will open WhatsApp or my email app so I can send
              this message to MGS Capital.
            </Label>
          </div>
          {errors.consent && (
            <p
              id="consent-error"
              className="mt-2 text-[0.75rem] text-destructive"
            >
              {errors.consent.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`${buttonStyles.primary} w-full`}
        >
          {channel === "whatsapp" ? "Open WhatsApp" : "Open email app"}
          <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
        </Button>

        {fallback && (
          <div className="border border-silver-light bg-ivory p-4">
            <p className="flex items-start gap-2 text-[0.75rem] leading-relaxed text-ink-muted">
              <Check
                className="mt-0.5 size-3.5 shrink-0 text-bronze-deep"
                strokeWidth={1.4}
                aria-hidden
              />
              If nothing opened, use this link instead:
            </p>
            <a
              href={fallback.href}
              target={channel === "whatsapp" ? "_blank" : undefined}
              rel={channel === "whatsapp" ? "noopener noreferrer" : undefined}
              className="body-link mt-2 inline-block text-[0.8125rem]"
            >
              {fallback.label}
            </a>
          </div>
        )}

        <p className="text-[0.6875rem] leading-relaxed text-silver">
          By sending a message you consent to MGS Capital using your details to
          respond to your enquiry. See the{" "}
          <a href="/privacy" className="body-link">
            privacy notice
          </a>
          .
        </p>
      </form>
    </div>
  )
}

export function EnquiryComposerSkeleton() {
  return (
    <div className="border border-silver-light bg-white p-6 sm:p-8 lg:p-10">
      <div className="h-2 w-24 animate-pulse bg-silver-mist" />
      <div className="mt-5 h-7 w-2/3 animate-pulse bg-silver-mist" />
      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="h-11 animate-pulse bg-silver-mist" />
          <div className="h-11 animate-pulse bg-silver-mist" />
        </div>
        <div className="h-11 animate-pulse bg-silver-mist" />
        <div className="h-24 animate-pulse bg-silver-mist" />
        <div className="h-12 w-full animate-pulse bg-silver-mist" />
      </div>
      <span className="sr-only">Loading the enquiry form</span>
    </div>
  )
}
