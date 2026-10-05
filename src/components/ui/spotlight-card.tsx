"use client";

import { motion } from "framer-motion";
import { setSpotlightVars, staggerDelay } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function SpotlightCard({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: staggerDelay(index) }}
      whileHover={{ y: -5 }}
      onMouseMove={setSpotlightVars}
      className={cn(
        "spotlight-card group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md backdrop-blur-md transition-colors duration-300 hover:border-[#A6D63A]/40 hover:bg-white/[0.07]",
        className
      )}
    >
      {children}
    </motion.article>
  );
}
