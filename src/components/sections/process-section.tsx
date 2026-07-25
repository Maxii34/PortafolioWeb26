"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Conocemos tu idea",
    description:
      "Conversamos sobre tu negocio, objetivos y lo que necesitas transmitir para crear una solución acorde a tu marca.",
  },
  {
    title: "Creamos el prototipo",
    description:
      "Diseñamos una propuesta visual con la estructura y estilo de la página para que puedas verla antes de comenzar.",
  },
  {
    title: "Revisamos y ajustamos",
    description:
      "Te mostramos la propuesta y realizamos cambios hasta lograr un diseño que represente tu idea.",
  },
  {
    title: "Desarrollamos tu sitio",
    description:
      "Programamos la página y mostramos avances periódicamente para que conozcas la evolución del proyecto.",
  },
  {
    title: "Publicamos tu página",
    description:
      "Revisamos el resultado final y dejamos tu sitio funcionando en el hosting.",
  },
];

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[20px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            # Cómo trabajamos
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Un proceso transparente para crear tu página sin complicaciones.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Te acompañamos en cada etapa, desde la idea inicial hasta la
            publicación final del proyecto.
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 lg:hidden">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="min-w-[85%] snap-center"
            >
              <ProcessCard step={step} index={index} />
            </motion.div>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-slate-400 lg:hidden">
          Desliza para ver el proceso →
        </p>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: {
    title: string;
    description: string;
  };
  index: number;
}) {
  return (
    <div className="h-full rounded-[14px] border border-white/10 bg-[#081826]/70 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#A6D63A]/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A6D63A]/20 bg-[#A6D63A]/10 text-sm font-semibold text-[#A6D63A]">
        0{index + 1}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">
        {step.description}
      </p>
    </div>
  );
}
