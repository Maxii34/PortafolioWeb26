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

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas optimizadas para captar clientes y promocionar productos enfocadas en convertir visitas en ventas.",
    icon: Rocket,
  },
  {
    title: "Sitios Institucionales",
    description:
      "Transmití seriedad y elegancia con un sitio web corporativo que refleje la autoridad de tu marca.",
    icon: Building2,
  },
  {
    title: "Catálogos Digitales",
    description:
      "Exhibí tus productos de forma organizada y moderna para que tus clientes consulten tu stock ágilmente.",
    icon: ShoppingBag,
  },
  {
    title: "Portafolios Profesionales",
    description:
      "Destacá tus proyectos y habilidades con una presentación impecable que genere un impacto inmediato.",
    icon: Briefcase,
  },
  {
    title: "Webs para Emprendedores",
    description:
      "Soluciones ágiles y accesibles para lanzar tu negocio con una presencia digital sólida desde el día uno.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* ENCABEZADO MÁS COMPACTO */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              Servicios Web
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Soluciones digitales para <span className="text-[#A6D63A]">impulsar tu negocio.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300 lg:text-base">
            Código moderno, velocidad extrema y diseño pensado para transmitir confianza.
          </p>
        </div>

        {/* GRILLA COMPACTA DESKTOP */}
        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}

          {/* TARJETA 6: CONTACTO DIRECTO (SIN BOTÓN) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative h-full"
          >
            <Link
              href="#contacto"
              className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#A6D63A]/40 bg-gradient-to-br from-[#A6D63A]/15 via-white/5 to-transparent p-6 shadow-md backdrop-blur-md transition-all hover:border-[#A6D63A] hover:shadow-[0_10px_30px_rgba(166,214,58,0.15)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A6D63A] text-slate-900 shadow-md">
                  <Send className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#A6D63A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#A6D63A]">
                  ¿Proyecto a medida?
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  Creamos planes personalizados adaptados a las necesidades exactas de tu negocio.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* CARRUSEL MOBILE COMPACTO */}
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden">
          {services.map((service, index) => (
            <div key={service.title} className="min-w-[80%] snap-center">
              <ServiceCard service={service} index={index} />
            </div>
          ))}

          <div className="min-w-[80%] snap-center">
            <Link
              href="#contacto"
              className="flex h-full flex-col justify-between rounded-2xl border border-[#A6D63A]/40 bg-gradient-to-br from-[#A6D63A]/15 via-white/5 to-transparent p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A6D63A] text-slate-900">
                  <Send className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#A6D63A]" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">¿Proyecto a medida?</h3>
                <p className="mt-1 text-xs text-slate-300">Hablemos para armar un plan personalizado.</p>
              </div>
            </Link>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400 lg:hidden">
          ← Deslizá para ver más →
        </p>

      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A]/40 hover:bg-white/[0.07]"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A] transition-colors group-hover:bg-[#A6D63A] group-hover:text-slate-900">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-500 opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#A6D63A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-[#A6D63A]">
        {service.title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-slate-300">
        {service.description}
      </p>
    </motion.article>
  );
}