"use client";

import {
  Palette,
  Smartphone,
  Search,
  MessageSquare,
  Server,
  Zap,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const benefits = [
  {
    icon: Palette,
    label: "Diseño",
    title: "Diseño que genera confianza",
    description:
      "Una imagen moderna y profesional que transmite credibilidad desde el primer vistazo.",
  },
  {
    icon: Smartphone,
    label: "Responsive",
    title: "Adaptado a cualquier pantalla",
    description:
      "Tu página se verá perfecta en celulares, tablets y computadoras con experiencia fluida.",
  },
  {
    icon: Search,
    label: "SEO",
    title: "Preparado para Google",
    description:
      "Estructura optimizada para mejorar la posición y visibilidad de tu negocio en buscadores.",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    title: "Contacto en un clic",
    description:
      "Tus clientes podrán comunicarse contigo directo a tu WhatsApp para agilizar ventas.",
  },
  {
    icon: Server,
    label: "Hosting",
    title: "Hosting y dominio",
    description:
      "Te acompaño en la puesta en marcha para que tu sitio esté online sin complicaciones.",
  },
  {
    icon: Zap,
    label: "Velocidad",
    title: "Máximo rendimiento",
    description:
      "Carga ultrarrápida que mejora la experiencia del usuario y evita la pérdida de clientes.",
  },
  {
    icon: ShieldCheck,
    label: "Seguridad",
    title: "Sitio protegido",
    description:
      "Implementación de certificados SSL y buenas prácticas para la seguridad de tus visitas.",
  },
  {
    icon: Sliders,
    label: "Gestión",
    title: "Fácil de administrar",
    description:
      "Estructura lista para actualizar contenidos, textos o imágenes de forma muy sencilla.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* CONTENEDOR PRINCIPAL TIPO TARJETA PREMIUM */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8 lg:p-12">
          {/* Luz de fondo sutil */}
          <div className="animate-aurora pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A6D63A]/10 blur-3xl" />

          <SectionHeading
            eyebrow="Beneficios Clave"
            title="Más que una página web, una"
            highlight="herramienta para vender más."
            description="Cada proyecto reúne todos los componentes necesarios para transmitir valor, generar confianza inmediata y convertir visitantes en clientes."
          />

          {/* GRILLA DESKTOP (4 Columnas) */}
          <div className="mt-10 hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <SpotlightCard
                key={benefit.title}
                index={index}
                className="bg-[#081826]/80 hover:bg-[#081826]/95"
              >
                {/* CABECERA CON ICONO + NÚMERO */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A] transition-all duration-300 group-hover:bg-[#A6D63A] group-hover:text-slate-900 group-hover:shadow-[0_0_18px_rgba(166,214,58,0.45)]">
                    <benefit.icon className="h-4 w-4" />
                  </div>
                  <span className="font-display text-2xl font-bold text-white/10 transition-colors group-hover:text-[#A6D63A]/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300 transition-colors group-hover:border-[#A6D63A]/30 group-hover:text-[#A6D63A]">
                  {benefit.label}
                </span>

                {/* CONTENIDO */}
                <h3 className="mt-3 text-base font-bold text-white transition-colors group-hover:text-[#A6D63A]">
                  {benefit.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {benefit.description}
                </p>
              </SpotlightCard>
            ))}
          </div>

          {/* CARRUSEL MOBILE */}
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="min-w-[82%] snap-center">
                <SpotlightCard index={index} className="bg-[#081826]/80">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A]">
                    <benefit.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {benefit.description}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>

          <p className="mt-2 text-center text-[11px] text-slate-400 md:hidden">
            ← Deslizá para ver más beneficios →
          </p>
        </div>
      </div>
    </section>
  );
}
