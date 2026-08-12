"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "¿Cuánto tarda crear una página web?",
    answer:
      "El tiempo depende de las funcionalidades del proyecto, pero un sitio web profesional suele entregarse en un plazo de entre 7 y 15 días hábiles.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Primero conversamos tu idea, diseñamos la propuesta visual y, tras tu aprobación, desarrollamos el sitio completo mostrando avances hasta el lanzamiento.",
  },
  {
    question: "¿Necesito contratar hosting y dominio?",
    answer:
      "No te preocupes por la parte técnica. Te asesoro y ayudo a configurar el mejor hosting y dominio para que tu web funcione perfecta.",
  },
  {
    question: "¿La página se verá bien en celulares?",
    answer:
      "Sí, 100%. Todos los proyectos están desarrollados con arquitectura Responsive, adaptándose perfectamente a smartphones, tablets y PC.",
  },
  {
    question: "¿Puedo solicitar ajustes durante el desarrollo?",
    answer:
      "Por supuesto. Revisamos avances periódicamente para realizar las modificaciones necesarias y garantizar que el resultado cumpla con tus expectativas.",
  },
  {
    question: "¿Qué material debo proporcionar para empezar?",
    answer:
      "Información básica de tu negocio, logo, servicios, textos y fotos que quieras incluir. Si no tenés todo listo, te ayudo a estructurarlo.",
  },
  {
    question: "¿El sitio queda optimizado para buscadores (SEO)?",
    answer:
      "Sí, aplico buenas prácticas de estructura, velocidad de carga y etiquetas para asegurar que Google indexe tu web de forma rápida y efectiva.",
  },
  {
    question: "¿Cómo se define el costo del proyecto?",
    answer:
      "El valor se adapta al tipo de web, cantidad de secciones y características especiales. Escríbeme y preparamos una propuesta personalizada a tu medida.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-12">
          {/* Luz ambiental de fondo */}
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#A6D63A]/10 blur-3xl pointer-events-none" />

          {/* GRID ASIMÉTRICA: IZQUIERDA INFORMACIÓN / DERECHA ACORDEÓN */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            {/* COLUMNA IZQUIERDA: CABECERA Y CTA DIRECTO */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Preguntas Frecuentes</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                ¿Tenés dudas antes de{" "}
                <span className="text-[#A6D63A]">comenzar?</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Acá respondo las consultas más habituales. Mi objetivo es que
                tengas total claridad en cada etapa del proceso.
              </p>

              {/* BLOQUE CTA A WHATSAPP / CONTACTO */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#081826]/80 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A6D63A]/20 text-[#A6D63A]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      ¿Tenés una consulta específica?
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Escribime directamente y lo resolvemos.
                    </p>
                  </div>
                </div>

                <Link
                  href="#contacto"
                  className="group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#A6D63A] via-[#beff2d] to-[#A6D63A] py-2.5 text-xs font-bold text-slate-900 shadow-[0_0_15px_rgba(166,214,58,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(166,214,58,0.6)] active:scale-[0.98] animate-pulse-glow"
                >
                  {/* Rayo de luz en movimiento continuo */}
                  <span className="absolute inset-0 -top-[100%] left-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

                  <span className="relative z-10">Hacer una pregunta</span>

                  {/* Flecha con movimiento dinámico en hover */}
                  <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* COLUMNA DERECHA: LISTA DE ACORDEONES */}
            <div className="space-y-3.5">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#A6D63A]/50 bg-[#081826]/90 shadow-[0_10px_25px_rgba(166,214,58,0.08)]"
                        : "border-white/10 bg-[#081826]/60 hover:border-white/20 hover:bg-[#081826]/80"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span
                        className={`text-sm font-bold transition-colors sm:text-base ${isOpen ? "text-[#A6D63A]" : "text-white"}`}
                      >
                        {item.question}
                      </span>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "border-[#A6D63A]/40 bg-[#A6D63A] text-slate-900"
                            : "border-white/10 bg-white/5 text-slate-400"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="px-5 pb-5 text-xs leading-relaxed text-slate-300 sm:text-sm border-t border-white/5 pt-3">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
