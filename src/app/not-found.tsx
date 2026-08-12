"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Terminal, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#081826] px-6 text-white">
      
      {/* Luces de fondo ambientales */}
      <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-[#A6D63A]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        
        {/* BADGE DE ADVERTENCIA */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]"
        >
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>Error 404 • Página no encontrada</span>
        </motion.div>

        {/* NÚMERO 404 GIGANTE CON EFECTO DE GLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative my-4 select-none"
        >
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 sm:text-[180px]">
            404
          </h1>
          {/* Resplandor neón detrás del número */}
          <div className="absolute inset-0 -z-10 bg-[#A6D63A]/20 blur-3xl rounded-full" />
        </motion.div>

        {/* MENSAJE EXPLICATIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Parece que te has salido de la ruta.
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            La página que estás buscando no existe, cambió de dirección o se movió temporalmente. No te preocupes, podés volver al sitio principal.
          </p>
        </motion.div>

        {/* TERMINAL MINIATURE / DETALLE TÉCNICO VIRTUAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-[#05111a]/90 p-4 text-left shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
            <Terminal className="h-4 w-4 text-[#A6D63A]" />
            <span className="text-[11px] font-mono text-slate-400">system_log.sh</span>
          </div>
          <div className="mt-2 font-mono text-xs text-slate-300 space-y-1">
            <p><span className="text-red-400">GET</span> /ruta-desconocida <span className="text-red-400">404 (Not Found)</span></p>
            <p className="text-slate-500">// Redirigiendo sugerida: /inicio</p>
          </div>
        </motion.div>

        {/* BOTÓN DE ACCIÓN CON SHIMMER Y PULSO NEÓN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#bdff22] to-[#A6D63A] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 shadow-[0_0_20px_rgba(166,214,58,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(166,214,58,0.6)] active:scale-95 animate-pulse-glow"
          >
            {/* Rayo de luz deslumbrante */}
            <span className="absolute inset-0 -top-[100%] left-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

            <Home className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Volver al Inicio</span>
            <ArrowLeft className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </motion.div>

      </div>

      {/* FOOTER MINI */}
      <div className="absolute bottom-6 text-center text-xs text-slate-500">
        © 2026 <span className="font-semibold text-slate-300">CodeMáx.Dev</span> • Todos los derechos reservados.
      </div>
    </div>
  );
}