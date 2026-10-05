"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, FolderGit2, Mail, Compass } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const shortcuts = [
  { href: "/#servicios-principales", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center text-white sm:px-6">
      {/* Luces de fondo ambientales */}
      <div className="animate-aurora pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#A6D63A]/10 blur-[120px]" />
      <div className="animate-aurora pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] [animation-delay:-6s]" />

      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]"
        >
          <Compass className="h-3.5 w-3.5" />
          <span>Error 404</span>
        </motion.div>

        {/* NÚMERO GIGANTE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative my-2 select-none"
        >
          <span className="font-display bg-gradient-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-[120px] font-bold leading-none tracking-tighter text-transparent sm:text-[180px]">
            404
          </span>
          <div className="absolute inset-0 -z-10 rounded-full bg-[#A6D63A]/20 blur-3xl" />
        </motion.div>

        {/* MENSAJE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Esta página no existe{" "}
            <span className="text-[#A6D63A]">o fue movida.</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            No te preocupes, seguí explorando: conocé los servicios, mirá los
            proyectos realizados o escribime directamente.
          </p>
        </motion.div>

        {/* ACCIONES */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <MagneticButton className="w-full sm:w-auto">
            <Link
              href="/"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#bdff22] to-[#A6D63A] px-8 py-3.5 text-sm font-bold text-[#081826] shadow-[0_0_20px_rgba(166,214,58,0.3)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(166,214,58,0.6)]"
            >
              <span className="animate-shimmer pointer-events-none absolute inset-0 -top-[100%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <Home className="relative z-10 h-4 w-4" />
              <span className="relative z-10">Volver al inicio</span>
            </Link>
          </MagneticButton>

          <MagneticButton className="w-full sm:w-auto" strength={14}>
            <Link
              href="/proyectos"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#A6D63A]/40 bg-[#081826]/70 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A] hover:bg-[#A6D63A] hover:text-[#081826]"
            >
              <FolderGit2 className="h-4 w-4" />
              <span>Ver proyectos</span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* ATAJOS */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          aria-label="Secciones del sitio"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6"
        >
          {shortcuts.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-[#A6D63A]"
            >
              {s.label === "Contacto" ? (
                <Mail className="h-3.5 w-3.5" />
              ) : null}
              {s.label}
            </Link>
          ))}
        </motion.nav>
      </div>

      {/* PIE */}
      <div className="absolute bottom-6 text-center text-xs text-slate-500">
        © 2026 <span className="font-semibold text-slate-300">CodeMáx.Dev</span>
      </div>
    </div>
  );
}
