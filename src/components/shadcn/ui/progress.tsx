import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-6 w-full overflow-hidden rounded-full bg-white", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-deepBlue transition-all"
      style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
    />
    <p className={`absolute z-50 -top-[1px] left-[49%] text-[12px] ${(value ?? 0) > 50 && "text-white"}`}>{value}%</p>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
