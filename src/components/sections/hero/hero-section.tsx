"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden py-24 lg:py-32 bg-transparent">
      {/* IMAGEN DE FONDO Y CAPAS DE FUSIÓN */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
          alt="Desarrollo Web Profesional"
          className="h-full w-full object-cover object-center opacity-20"
        />

        {/* Gradiente suave para integrar la imagen con la rejilla global */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081826] via-transparent to-[#081826]/70" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Tu negocio o emprendimiento <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#A6D63A] via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              merece una página web profesional.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Diseño de sitios web modernos para emprendedores, negocios y
            profesionales que quieren transmitir confianza y conseguir más
            clientes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* BOTÓN PRINCIPAL CON SHIMMER Y RESPLANDOR CONTINUO */}
            <Link
              href="#contacto"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#beff2d] to-[#A6D63A] px-8 py-3.5 text-center font-bold text-[#081826] shadow-[0_0_15px_rgba(166,214,58,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(166,214,58,0.6)] active:scale-95 animate-pulse-glow"
            >
              {/* Rayo de luz deslumbrante */}
              <span className="absolute inset-0 -top-[100%] left-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

              <span className="relative z-10">Solicitar presupuesto</span>
            </Link>

            {/* BOTÓN SECUNDARIO CON ESTILO NEÓN GLASSMORPHISM */}
            <Link
              href="#proyectos"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-[#A6D63A]/40 bg-[#081826]/70 px-8 py-3.5 text-center font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A] hover:bg-[#A6D63A] hover:text-[#081826] hover:shadow-[0_0_25px_rgba(166,214,58,0.45)] active:scale-95"
            >
              {/* Destello sutil de luz interno */}
              <span className="absolute inset-0 -top-[100%] left-0 w-1/2 bg-gradient-to-r from-transparent via-[#A6D63A]/20 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

              {/* Resplandor neón en expansión al hacer hover */}
              <span className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-[#A6D63A]/20 blur-md transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:bg-[#A6D63A]" />

              <span className="relative z-10 font-semibold transition-colors duration-300">
                Ver proyectos
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
