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

function GenericLaptopMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0B2233]/95 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
      {/* Barra navegador */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-[#A6D63A]/70" />
        <span className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white/5 px-3 text-[10px] font-medium text-slate-400">
          tu-negocio.com
        </span>
      </div>
      {/* Página genérica */}
      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="h-5 w-5 rounded-lg bg-[#A6D63A]/70 shadow-[0_0_14px_rgba(166,214,58,0.5)]" />
          <div className="flex gap-2">
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="h-5 w-14 rounded-full bg-[#A6D63A]/80" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:items-center">
          <div className="space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-white/20" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
            <div className="h-2.5 w-2/3 rounded-full bg-[#A6D63A]/40" />
            <div className="flex gap-2 pt-1">
              <div className="h-6 w-20 rounded-full bg-[#A6D63A] shadow-[0_0_18px_rgba(166,214,58,0.5)]" />
              <div className="h-6 w-20 rounded-full border border-white/20 bg-white/5" />
            </div>
          </div>
          <div className="h-24 rounded-xl bg-gradient-to-br from-[#A6D63A]/50 via-emerald-300/25 to-cyan-400/35 sm:h-28" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="space-y-1.5 rounded-xl border border-white/10 bg-white/5 p-2.5"
            >
              <div className="h-8 rounded-lg bg-white/10" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GenericPhoneMock() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#0B2233]/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      {/* Notch */}
      <div className="flex justify-center border-b border-white/10 py-2">
        <div className="h-1.5 w-16 rounded-full bg-white/15" />
      </div>
      <div className="space-y-2.5 p-3">
        <div className="flex items-center justify-between">
          <div className="h-4 w-4 rounded-md bg-[#A6D63A]/70" />
          <div className="h-1.5 w-12 rounded-full bg-white/15" />
        </div>
        <div className="h-16 rounded-xl bg-gradient-to-br from-[#A6D63A]/50 via-emerald-300/25 to-cyan-400/35" />
        <div className="h-2 w-3/4 rounded-full bg-white/20" />
        <div className="h-2 w-1/2 rounded-full bg-white/10" />
        <div className="h-6 w-full rounded-full bg-[#A6D63A]/90" />
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"
          >
            <div className="h-7 w-7 shrink-0 rounded-lg bg-white/10" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
            text="Webs rápidas que atraen clientes."
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
          Diseño páginas modernas y adaptadas a celulares para negocios y
          profesionales.
        </motion.p>

        {/* SHOWCASE pegado al texto — un solo bloque */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative mx-auto mt-6 w-full max-w-2xl"
        >
          {/* Resplandor detrás (mismo tono que el texto) */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-0 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(166,214,58,0.22),rgba(34,211,238,0.10),transparent_70%)] blur-2xl"
          />
          <div
            className="animate-float-slow relative [transform:perspective(1200px)_rotateX(8deg)]"
          >
            <GenericLaptopMock />
            {/* Fundido inferior: el visual se disuelve hacia los botones */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-2xl bg-gradient-to-t from-[#081826] via-[#081826]/60 to-transparent"
            />
            {/* Base laptop */}
            <div className="relative mx-auto h-2.5 w-[92%] rounded-b-2xl bg-gradient-to-b from-white/20 to-white/5" />
            <div className="relative mx-auto h-1 w-[70%] rounded-b-xl bg-white/10" />
          </div>

          {/* Cel flotante pegado a la laptop */}
          <div className="absolute -bottom-4 right-1 w-24 sm:-right-4 sm:w-36">
            <div
              className="animate-float-slow relative"
              style={{ animationDelay: "-3s" }}
            >
              <GenericPhoneMock />
            </div>
          </div>

          {/* Chips sobre los bordes del visual, no afuera */}
          <div className="absolute left-2 top-8">
            <div
              className="animate-float-slow flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#081826]/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md"
              style={{ animationDelay: "-1.5s" }}
            >
              <Smartphone className="h-3.5 w-3.5 text-[#A6D63A]" />
              Responsive
            </div>
          </div>
          <div className="absolute bottom-10 left-2">
            <div
              className="animate-float-slow flex items-center gap-2 rounded-full border border-white/15 bg-[#081826]/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md"
              style={{ animationDelay: "-5s" }}
            >
              <Search className="h-3.5 w-3.5 text-cyan-300" />
              SEO + Rápida
            </div>
          </div>
        </motion.div>

        {/* BOTONES debajo del visual: ya no dividen texto + imagen */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
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
          transition={{ duration: 0.6, delay: 1.0 }}
          className="relative z-10 mt-8 grid w-full max-w-xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
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
