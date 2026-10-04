"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquareCode,
  PenTool,
  CheckCircle2,
  Code2,
  Rocket,
  GitCommit,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const processSteps = [
  {
    icon: MessageSquareCode,
    title: "1. Descubrimiento",
    subtitle: "Conocemos tu idea",
    description:
      "Conversamos sobre tu negocio, objetivos y lo que necesitas transmitir para crear una solución acorde a tu marca.",
  },
  {
    icon: PenTool,
    title: "2. Prototipado",
    subtitle: "Diseño visual",
    description:
      "Diseñamos una propuesta visual con la estructura y estilo de la página para validar la experiencia antes de programar.",
  },
  {
    icon: CheckCircle2,
    title: "3. Feedback",
    subtitle: "Revisión y ajustes",
    description:
      "Te mostramos la propuesta y realizamos los cambios necesarios hasta lograr la representación exacta de tu idea.",
  },
  {
    icon: Code2,
    title: "4. Desarrollo",
    subtitle: "Programación web",
    description:
      "Programamos el sitio con código limpio y mostramos avances periódicos para que conozcas la evolución constante.",
  },
  {
    icon: Rocket,
    title: "5. Lanzamiento",
    subtitle: "Publicación final",
    description:
      "Revisamos los últimos detalles, optimizamos la velocidad y publicamos tu página web lista para recibir clientes.",
  },
];

export function ProcessSection() {
  const fillRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  // Barra de progreso que se llena con el scroll (desktop)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: desktopRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-12">
          {/* Elemento decorativo de luz */}
          <div className="animate-aurora pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <SectionHeading
            eyebrow="Flujo de Trabajo"
            title="Un proceso claro para crear tu web"
            highlight="sin complicaciones."
            description="Te acompañamos paso a paso, desde la idea inicial hasta la publicación definitiva de tu proyecto."
          />

          {/* PASOS EN DESKTOP (5 Columnas conectadas por línea de progreso) */}
          <div ref={desktopRef} className="relative mt-14 hidden lg:block">
            {/* Línea base + relleno animado */}
            <div className="absolute inset-x-10 top-11 -z-0 h-0.5 bg-white/10" />
            <div className="absolute inset-x-10 top-11 -z-0 h-0.5 overflow-hidden">
              <div
                ref={fillRef}
                className="h-full w-full origin-left bg-gradient-to-r from-[#A6D63A] via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(166,214,58,0.7)]"
              />
            </div>

            <div className="relative z-10 grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <SpotlightCard
                  key={step.title}
                  index={index}
                  className="bg-[#081826]/85 hover:bg-[#081826]/95"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A] shadow-md transition-all duration-300 group-hover:bg-[#A6D63A] group-hover:text-slate-900 group-hover:shadow-[0_0_18px_rgba(166,214,58,0.45)]">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold text-[#A6D63A]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {step.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#A6D63A]">
                      {step.title.split(". ")[1]}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* CARRUSEL MOBILE */}
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden">
            {processSteps.map((step, index) => (
              <div key={step.title} className="min-w-[82%] snap-center">
                <SpotlightCard index={index} className="bg-[#081826]/85">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A]">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold text-[#A6D63A]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {step.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {step.title.split(". ")[1]}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>

          <p className="mt-2 flex items-center justify-center gap-2 text-center text-[11px] text-slate-400 lg:hidden">
            <GitCommit className="h-3.5 w-3.5 text-[#A6D63A]" />
            Deslizá para ver las etapas del proceso →
          </p>
        </div>
      </div>
    </section>
  );
}
