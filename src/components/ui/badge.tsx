import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-card/80 px-3 py-1 font-mono text-[11px] uppercase tracking-normal text-violet-100",
        className,
      )}
      {...props}
    />
  );
}
