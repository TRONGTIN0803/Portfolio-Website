"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={false}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: [0.92, 1], y: [10, 0] }}
      viewport={immediate ? undefined : { once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
