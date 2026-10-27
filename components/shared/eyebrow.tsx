import { cn } from "@/lib/utils"

export function Eyebrow({
  children,
  className,
  as: Component = "p",
}: {
  children: React.ReactNode
  className?: string
  as?: "p" | "span" | "div"
}) {
  return <Component className={cn("eyebrow", className)}>{children}</Component>
}
