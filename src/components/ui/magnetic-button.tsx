"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
} & Omit<React.ComponentProps<typeof motion.div>, "children" | "className">;

export function MagneticButton({
  children,
  className,
  strength = 18,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${
      (y / rect.height) * strength
    }px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={cn("inline-block transition-transform duration-200", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
