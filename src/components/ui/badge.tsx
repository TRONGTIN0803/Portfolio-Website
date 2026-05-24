import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.045] px-3 py-1 font-mono text-[11px] text-neutral-300",
        className,
      )}
      {...props}
    />
  );
}
