"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Building2,
  ShoppingBag,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas enfocadas en presentar tu producto o servicio y generar nuevos clientes.",
    icon: Rocket,
  },
  {
    title: "Sitios Institucionales",
    description:
      "Páginas para profesionales, servicios y empresas que buscan tener una presencia online profesional.",
    icon: Building2,
  },
  {
    title: "Catálogos Digitales",
    description:
      "Mostrá tus productos de forma organizada para que tus clientes puedan conocerlos fácilmente.",
    icon: ShoppingBag,
  },
  {
    title: "Portafolios Profesionales",
    description:
      "Presentá tus proyectos, trabajos y habilidades de forma clara y profesional.",
    icon: Briefcase,
  },
  {
    title: "Webs para Emprendedores",
    description:
      "Páginas simples y funcionales para mostrar tu emprendimiento y llegar a más personas.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Servicios Web"
          title="¿Qué tipo de página web necesitas?"
          highlight="Soluciones digitales para impulsar tu negocio."
          description="Plataformas web optimizadas en rendimiento, seguridad y experiencia de usuario."
        />

        {/* GRILLA BENTO DESKTOP */}
        <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-3">
          {services.map((service, index) => (
            <SpotlightCard key={service.title} index={index}>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A] transition-all duration-300 group-hover:bg-[#A6D63A] group-hover:text-slate-900 group-hover:shadow-[0_0_20px_rgba(166,214,58,0.4)]">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-[#A6D63A]/25">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-[#A6D63A]">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {service.description}
              </p>
            </SpotlightCard>
          ))}

          {/* TARJETA 6: CONTACTO DIRECTO */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="group relative h-full"
          >
            <Link
              href="#contacto"
              className="flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-[#A6D63A]/40 bg-gradient-to-br from-[#A6D63A]/15 via-white/5 to-transparent p-6 shadow-md backdrop-blur-md transition-all hover:border-[#A6D63A] hover:shadow-[0_10px_30px_rgba(166,214,58,0.15)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#A6D63A] text-slate-900 shadow-[0_0_20px_rgba(166,214,58,0.4)]">
                  <Send className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#A6D63A] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#A6D63A]">
                  ¿Proyecto a medida?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                  Creamos planes personalizados adaptados a las necesidades
                  exactas de tu negocio.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* CARRUSEL MOBILE */}
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden">
          {services.map((service, index) => (
            <div key={service.title} className="min-w-[80%] snap-center">
              <SpotlightCard index={index}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A]">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </SpotlightCard>
            </div>
          ))}

          <div className="min-w-[80%] snap-center">
            <Link
              href="#contacto"
              className="flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-[#A6D63A]/40 bg-gradient-to-br from-[#A6D63A]/15 via-white/5 to-transparent p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A6D63A] text-slate-900">
                  <Send className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#A6D63A]" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">
                  ¿Proyecto a medida?
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Hablemos para armar un plan personalizado.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <p className="mt-2 text-center text-[11px] text-slate-400 lg:hidden">
          ← Deslizá para ver más →
        </p>
      </div>
    </section>
  );
}
