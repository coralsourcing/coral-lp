import * as React from "react"
import { cn } from "@/lib/utils"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerClassName?: string
}

export default function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 md:py-24", className)} {...props}>
      <div className={cn("container mx-auto max-w-[1200px] px-6", containerClassName)}>
        {children}
      </div>
    </section>
  )
}


