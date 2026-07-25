"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "¿Cuánto tarda crear una página web?",
    answer:
      "El tiempo depende del tamaño del proyecto y sus funcionalidades, pero normalmente una web profesional puede estar lista entre 7 y 15 días hábiles.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Primero conocemos tu idea, luego realizamos una propuesta visual. Una vez aprobada, comenzamos el desarrollo y mostramos avances durante el proceso hasta la entrega final.",
  },
  {
    question: "¿Necesito tener dominio y hosting?",
    answer:
      "No es obligatorio al principio. Podemos ayudarte a elegir y configurar el dominio y hosting adecuado para que tu sitio quede publicado correctamente.",
  },
  {
    question: "¿La página funciona en celulares?",
    answer:
      "Sí. Todas las páginas se desarrollan adaptadas para celulares, tablets y computadoras, ofreciendo una buena experiencia en cualquier dispositivo.",
  },
  {
    question: "¿Puedo pedir cambios durante el desarrollo?",
    answer:
      "Sí. Trabajamos revisando avances para realizar ajustes y asegurarnos de que el resultado final represente lo que necesitas.",
  },
  {
    question: "¿Qué necesito entregar para comenzar?",
    answer:
      "Necesitamos conocer tu negocio, servicios, imágenes, textos o cualquier información que quieras mostrar en la página. También podemos ayudarte a organizar el contenido.",
  },
  {
    question: "¿La página queda optimizada para Google?",
    answer:
      "Aplicamos buenas prácticas de estructura, velocidad y organización del contenido para ayudar a que tu sitio tenga una mejor base para posicionarse.",
  },
  {
    question: "¿Cuánto cuesta una página web?",
    answer:
      "El precio depende del tipo de página, cantidad de secciones y funcionalidades necesarias. Podemos preparar una propuesta personalizada según tu proyecto.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[20px] border border-white/10 bg-white/5 p-4 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            # Preguntas frecuentes
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Resolvemos las dudas más comunes antes de comenzar tu proyecto.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Queremos que tengas claridad sobre cada etapa del proceso y sepas
            qué esperar al trabajar juntos.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={item.question}
                className="rounded-[14px] border border-white/10 bg-[#081826]/70 p-5 transition-all duration-300 hover:border-[#A6D63A]/30"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A6D63A]/10 text-xl text-[#A6D63A]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="mt-4 overflow-hidden text-sm leading-7 text-slate-300"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
