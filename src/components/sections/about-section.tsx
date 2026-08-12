"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Luz ambiental sutil de fondo */}
      <div className="absolute top-1/2 -left-32 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[#A6D63A]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* LAYOUT EDITORIAL ASIMÉTRICO */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* COLUMNA IZQUIERDA: IMAGEN CON ENTRADA DESDE LA IZQUIERDA (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:col-span-5 flex justify-center"
          >
            {/* Marco decorativo de luz detrás de la foto */}
            <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-[#A6D63A]/40 via-cyan-500/20 to-transparent blur-xl opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" />

            {/* CONTENEDOR DE LA IMAGEN CON GRUPO DE HOVER */}
            <div className="group relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 shadow-2xl transition-all duration-500 hover:border-[#A6D63A]/50 hover:shadow-[0_20px_50px_rgba(166,214,58,0.2)]">
              {/* IMAGEN: Transición de blanco/negro a color + Zoom suave */}
              <img
                src="/Miperfil.jpeg"
                alt="Maximiliano Ordoñez"
                className="h-full w-full object-cover object-center filter grayscale contrast-125 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:saturate-125"
              />

              {/* Degradado oscuro inferior sobre la foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081826] via-transparent to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-70" />

              {/* Nombre flotante sobre la foto */}
              <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
                  CodeMáx.Dev
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Maximiliano Ordoñez
                </h3>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: TEXTO Y CONTENIDOS CON ENTRADA DESDE LA DERECHA (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A6D63A]">
              <span className="h-1.5 w-6 rounded-full bg-[#A6D63A]" />
              <span>Desarrollo Web de Alto Nivel</span>
            </div>

            {/* Titular Principal */}
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
              Tu marca en manos de un profesional{" "}
              <span className="text-[#A6D63A]">
                comprometido con los resultados.
              </span>
            </h2>

            {/* Párrafo Comercial Conciso */}
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Diseño y desarrollo páginas web estratégicas, pensadas para
              transmitir máxima autoridad, cargar en tiempo récord y convertir
              visitas en clientes reales. Cada proyecto se trabaja de manera
              personalizada para asegurar un estándar de calidad impecable.
            </p>

            {/* 3 PILARES EJECUTIVOS (APARICIÓN EN CASCADA / STAGGER) */}
            <div className="mt-8 space-y-4 border-l border-white/10 pl-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <ShieldCheck className="h-5 w-5 text-[#A6D63A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Estándar de Calidad Impecable
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Sitios estables, protegidos y estructurados con código
                    moderno y limpio.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <Zap className="h-5 w-5 text-[#A6D63A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Rendimiento y Carga Ultra-Rápida
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Navegación fluida para que tus usuarios no pierdan un solo
                    segundo.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <Award className="h-5 w-5 text-[#A6D63A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Atención Personalizada
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Acompañamiento directo de principio a fin, sin
                    intermediarios.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* BOTÓN DE ACCIÓN CON REVELADO EN FADE-UP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 pt-2"
            >
              <Link
                href="#contacto"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#bdff22] to-[#A6D63A] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 shadow-[0_0_20px_rgba(166,214,58,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(166,214,58,0.6)] active:scale-95 animate-pulse-glow"
              >
                {/* Rayo de luz deslumbrante que cruza el botón */}
                <span className="absolute inset-0 -top-[100%] left-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

                <span className="relative z-10">Hablemos de tu proyecto</span>

                {/* Flecha con movimiento al hacer hover */}
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
