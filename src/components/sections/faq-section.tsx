"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "¿Cuánto tarda crear una web?",
    answer: "Depende del alcance, pero en general entregamos un proyecto inicial en un rango de 7 a 15 días hábiles.",
  },
  {
    question: "¿Necesito comprar un dominio?",
    answer: "No es obligatorio desde el inicio, pero sí te recomendamos tenerlo para que la web se vea más profesional.",
  },
  {
    question: "¿Puedo modificar la página después?",
    answer: "Sí. Diseñamos sitios fáciles de actualizar para que puedas cambiar textos, fotos o servicios cuando lo necesites.",
  },
  {
    question: "¿Se adapta al celular?",
    answer: "Por supuesto. Cada proyecto se desarrolla con una experiencia móvil cuidada y responsive desde el comienzo.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "El precio varía según la complejidad, la cantidad de páginas y las funcionalidades. Puedo armar una propuesta acorde a tu presupuesto.",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Todo lo que suele surgir antes de comenzar.
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={item.question} className="rounded-[24px] border border-white/10 bg-[#081826]/70 p-5">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span className="text-lg font-semibold text-white">{item.question}</span>
                  <span className="text-2xl text-[#A6D63A]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
