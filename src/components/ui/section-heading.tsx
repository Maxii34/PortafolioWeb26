"use client";

import { motion } from "framer-motion";
import { RevealText } from "./reveal-text";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto text-center", "max-w-3xl", className)}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#A6D63A] animate-pulse" />
        <span>{eyebrow}</span>
      </motion.div>

      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]">
        <RevealText text={title} />
        {highlight ? (
          <>
            {" "}
            <span className="bg-gradient-to-r from-[#A6D63A] via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              <RevealText text={highlight} delay={0.25} />
            </span>
          </>
        ) : null}
      </h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
