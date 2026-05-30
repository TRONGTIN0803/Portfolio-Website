import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-violet-500 px-5 py-3 text-white shadow-[0_18px_50px_-26px_rgba(124,92,255,0.75)] hover:-translate-y-0.5 hover:bg-violet-400",
        secondary:
          "border border-white/10 bg-card/85 px-5 py-3 text-foreground hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-white/[0.06]",
        ghost:
          "px-3 py-2 text-muted hover:bg-white/[0.055] hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
