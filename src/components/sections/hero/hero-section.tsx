"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Palette,
  Zap,
  Smartphone,
  Search,
  MessageCircle,
  Users,
  Sliders,
  ThumbsUp,
} from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { projects } from "@/data/projects";

const HeroScene = dynamic(
  () => import("@/components/hero/hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

const techs = [
  { label: "Diseño profesional", icon: Palette },
  { label: "Carga ultra rápida", icon: Zap },
  { label: "Adaptado a celulares", icon: Smartphone },
  { label: "Posicionamiento en Google", icon: Search },
  { label: "Botón de WhatsApp", icon: MessageCircle },
  { label: "Más clientes", icon: Users },
  { label: "Fácil de administrar", icon: Sliders },
  { label: "Atención personalizada", icon: ThumbsUp },
];

const stats = [
  { value: `+${projects.length}`, label: "Proyectos online" },
  { value: "100%", label: "Diseño responsive" },
  { value: "7-15 días", label: "Entrega promedio" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-transparent">
      <HeroScene />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 pt-32 text-center sm:px-6 lg:px-10">
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
          <RevealText mode="mount" text="Llevá tu negocio a internet" />
          <br className="hidden sm:inline" />{" "}
          <RevealText
            mode="mount"
            text="Una web profesional para mostrar lo que hacés y conseguir nuevos clientes."
            delay={0.3}
            wordClassName="bg-gradient-to-r from-[#A6D63A] via-emerald-300 to-cyan-400 bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Diseño y desarrollo sitios web modernos, rápidos y adaptados a
          celulares para negocios, emprendimientos y profesionales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          {/* BOTÓN PRINCIPAL MAGNÉTICO */}
          <MagneticButton className="w-full sm:w-auto">
            <Link
              href="#contacto"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#beff2d] to-[#A6D63A] px-8 py-3.5 text-center font-bold text-[#081826] shadow-[0_0_15px_rgba(166,214,58,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(166,214,58,0.6)] active:scale-95"
            >
              <span className="animate-shimmer pointer-events-none absolute inset-0 -top-[100%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <span className="relative z-10">Solicitar presupuesto</span>
            </Link>
          </MagneticButton>

          {/* BOTÓN SECUNDARIO NEÓN GLASSMORPHISM */}
          <MagneticButton className="w-full sm:w-auto" strength={14}>
            <Link
              href="#proyectos"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#A6D63A]/40 bg-[#081826]/70 px-8 py-3.5 text-center font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A] hover:bg-[#A6D63A] hover:text-[#081826] hover:shadow-[0_0_25px_rgba(166,214,58,0.45)] active:scale-95"
            >
              <span className="relative z-10 font-semibold transition-colors duration-300">
                Ver proyectos
              </span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* STATS */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid w-full max-w-xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-4">
              <dt className="order-2 mt-1 block text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:text-[11px]">
                {s.label}
              </dt>
              <dd className="order-1 text-xl font-extrabold text-[#A6D63A] sm:text-2xl">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#sobre-mi"
        aria-label="Ir a Sobre mí"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-[#A6D63A]"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Descubrí más</span>
        <ChevronDown className="animate-scroll-hint h-5 w-5" />
      </motion.a>

      {/* MARQUEE TECHS */}
      <div className="mask-fade-x relative z-10 w-full overflow-hidden border-t border-white/10 bg-[#081826]/60 py-3 backdrop-blur-md">
        <div className="animate-marquee flex w-max gap-10">
          {[...techs, ...techs].map((t, i) => {
            const Icon = t.icon;
            return (
              <span
                key={`${t.label}-${i}`}
                className="flex items-center gap-10 text-xs font-bold uppercase tracking-[0.25em] text-slate-400"
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-[#A6D63A]" />
                  {t.label}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#A6D63A]" />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
