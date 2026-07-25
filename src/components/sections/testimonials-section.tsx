export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
          Testimonios
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Sección preparada para mostrar resultados reales y confianza.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {[
          {
            name: "Cliente demo",
            role: "Profesional independiente",
            quote:
              "“Esta sección está preparada para sumar testimonios reales cuando llegue el momento.”",
          },
          {
            name: "Negocio demo",
            role: "Emprendimiento local",
            quote:
              "“El contenido de ejemplo permite mostrar la estructura antes de incorporar feedback real.”",
          },
          {
            name: "Marca demo",
            role: "Pequeña empresa",
            quote:
              "“Una presentación limpia y profesional ayuda mucho a generar confianza desde el inicio.”",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm leading-8 text-slate-300">
              {testimonial.quote}
            </p>
            <div className="mt-6">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
