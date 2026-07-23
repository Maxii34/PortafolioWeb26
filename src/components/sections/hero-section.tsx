"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="mb-6 inline-flex rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-4 py-2 text-sm font-medium text-[#A6D63A]">
          Desarrollo web para negocios que quieren crecer
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-5xl">
          Tu negocio o emprendimiento{" "}
          <span className="block text-xl font-normal text-slate-300 sm:text-2xl lg:text-3xl mt-2">
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

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#A6D63A]/20 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="rounded-[24px] border border-white/10 bg-[#081826] p-4">
            <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#A6D63A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Preview
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.8fr]">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/80 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      The Studio
                    </p>
                    <p className="text-xs text-slate-400">Landing page</p>
                  </div>
                  <div className="rounded-full bg-[#A6D63A]/20 px-3 py-1 text-xs text-[#A6D63A]">
                    Nuevo
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-[18px] bg-gradient-to-r from-[#A6D63A]/30 to-cyan-500/10" />
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="h-16 rounded-[16px] border border-white/10 bg-white/5" />
                    <div className="h-16 rounded-[16px] border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Celular
                  </p>
                  <div className="mx-auto mt-4 h-48 w-28 rounded-[24px] border border-white/10 bg-slate-950 p-2">
                    <div className="h-full rounded-[18px] bg-gradient-to-b from-white/10 to-transparent p-3 text-center">
                      <div className="mx-auto mb-3 h-2 w-12 rounded-full bg-white/20" />
                      <div className="h-10 rounded-[12px] bg-[#A6D63A]/20" />
                      <div className="mt-3 h-12 rounded-[12px] bg-white/10" />
                    </div>
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
