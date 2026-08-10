"use client";

import { motion } from "framer-motion";
import {
  MessageSquareCode,
  PenTool,
  CheckCircle2,
  Code2,
  Rocket,
  GitCommit,
} from "lucide-react";

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
  return (
    <section id="proceso" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* CONTENEDOR PRINCIPAL */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-12">
          
          {/* Elemento decorativo de luz */}
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

          {/* ENCABEZADO */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              <GitCommit className="h-3.5 w-3.5" />
              <span>Flujo de Trabajo</span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Un proceso claro para crear tu web <span className="text-[#A6D63A]">sin complicaciones.</span>
            </h2>

            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              Te acompañamos paso a paso, desde la idea inicial hasta la publicación definitiva de tu proyecto.
            </p>
          </div>

          {/* PASOS EN DESKTOP (5 Columnas conectadas por línea) */}
          <div className="relative mt-14 hidden lg:block">
            {/* Línea horizontal de progreso detrás de las tarjetas */}
            <div className="absolute top-11 left-10 right-10 h-0.5 bg-gradient-to-r from-[#A6D63A]/80 via-emerald-400/40 to-cyan-400/80 -z-0" />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {processSteps.map((step, index) => (
                <ProcessCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* CARRUSEL MOBILE COMPACTO */}
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden">
            {processSteps.map((step, index) => (
              <div key={step.title} className="min-w-[82%] snap-center">
                <ProcessCard step={step} index={index} />
              </div>
            ))}
          </div>

          <p className="mt-2 text-center text-[11px] text-slate-400 lg:hidden">
            ← Deslizá para ver las etapas del proceso →
          </p>

        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    description: string;
  };
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#081826]/85 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A]/40 hover:bg-[#081826]/95 hover:shadow-[0_10px_25px_rgba(166,214,58,0.1)]"
    >
      <div>
        {/* CABECERA DE PASO CON ICONO */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A] shadow-md transition-colors group-hover:bg-[#A6D63A] group-hover:text-slate-900">
            <Icon className="h-5 w-5" />
          </div>

          <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold text-[#A6D63A]">
            0{index + 1}
          </span>
        </div>

        {/* TITULO Y SUBTITULO */}
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
      </div>
    </motion.article>
  );
}