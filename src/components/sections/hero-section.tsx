"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32">
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-5xl">
          Tu negocio o emprendimiento
          <span className="mt-2 block text-xl font-normal text-slate-300 sm:text-2xl lg:text-3xl">
            merece una página web profesional.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Diseño de sitios web modernos para emprendedores, negocios y
          profesionales que quieren transmitir confianza y conseguir más
          clientes.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contacto"
            className="rounded-full bg-[#A6D63A] px-6 py-3 text-center font-semibold text-[#081826] transition hover:scale-[1.02]"
          >
            Solicitar presupuesto
          </Link>

          <Link
            href="#proyectos"
            className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-[#A6D63A] hover:text-[#A6D63A]"
          >
            Ver proyectos
          </Link>
        </div>
      </motion.div>

      {/* Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="hidden rounded-2xl border border-white/10 bg-white/5 p-4 lg:block"
      >
        <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#A6D63A]/20 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="rounded-[18px] border border-white/10 bg-[#081826] p-4">
            {/* Barra navegador */}
            <div className="mb-5 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#A6D63A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              <span className="text-xs tracking-[0.2em] text-slate-400">
                Vista previa
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.75fr]">
              {/* Landing */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                {/* Navbar */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-semibold text-white">
                    Tu Empresa
                  </span>

                  <div className="flex gap-4 text-xs text-slate-400">
                    <span>Inicio</span>
                    <span>Servicios</span>
                    <span>Contacto</span>
                  </div>
                </div>

                {/* Hero */}
                <div className="rounded-2xl bg-gradient-to-r from-[#A6D63A]/20 to-cyan-500/10 p-5">
                  <h3 className="text-lg font-semibold text-white">
                    Haz crecer tu negocio
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Una página web moderna que inspira confianza y convierte
                    visitantes en clientes.
                  </p>

                  <div className="mt-5 h-9 w-36 rounded-full bg-[#A6D63A]" />
                </div>

                {/* Servicios */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-sm font-semibold text-white">
                      Diseño moderno
                    </p>

                    <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-sm font-semibold text-white">
                      Adaptado a móviles
                    </p>

                    <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Móvil */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-400">
                  Vista móvil
                </p>

                <div className="mx-auto mt-4 h-56 w-32 rounded-[28px] border border-white/10 bg-slate-950 p-2">
                  <div className="flex h-full flex-col rounded-[20px] bg-gradient-to-b from-white/10 to-transparent p-3">
                    <div className="mx-auto h-2 w-12 rounded-full bg-white/20" />

                    <div className="mt-4 rounded-xl bg-[#A6D63A]/20 p-3">
                      <div className="h-3 w-16 rounded-full bg-white/40" />

                      <div className="mt-2 h-2 w-full rounded-full bg-white/10" />

                      <div className="mt-1 h-2 w-3/4 rounded-full bg-white/10" />
                    </div>

                    <div className="mt-4 h-10 rounded-xl bg-white/10" />

                    <div className="mt-3 h-10 rounded-xl bg-white/10" />

                    <div className="mt-auto h-8 rounded-full bg-[#A6D63A]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}