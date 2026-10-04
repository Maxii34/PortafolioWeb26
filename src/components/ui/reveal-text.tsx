"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function RevealText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = (motion as unknown as Record<string, typeof motion.div>)[Tag] ?? motion.span;

  return (
    <MotionTag
      className={cn("inline", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-1 -mb-1 align-bottom"
          variants={{ hidden: {}, show: {} }}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.7, ease: EASE_PREMIUM },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </motion.span>
      ))}
    </MotionTag>
  );
}
