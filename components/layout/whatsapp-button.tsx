import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { whatsappLink } from "@/lib/site-config"

export function WhatsAppButton() {
  return (
    <TooltipProvider delayDuration={200}>
      <div
        className="fixed right-5 z-40 sm:right-7"
        style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)" }}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-11 items-center justify-center border border-silver-light bg-white/95 text-graphite shadow-[0_10px_30px_-18px_rgba(30,35,38,0.5)] backdrop-blur transition-colors duration-300 hover:border-bronze-deep hover:text-bronze-deep sm:size-12"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-5">
                <path
                  d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.2A8.5 8.5 0 1 0 12 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8.6c.4-.1.8 0 1 .5l.5 1c.1.3 0 .5-.2.7l-.5.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.5c.2-.2.5-.3.7-.2l1 .5c.4.2.6.6.5 1-.2 1-.9 1.5-1.8 1.5-2.9-.2-5.3-2.6-5.4-5.5 0-.9.5-1.6 1.5-1.7Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={10}>
            Chat on WhatsApp
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
