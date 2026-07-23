const benefits = [
  {
    title: "Diseño moderno",
    description: "Interfaces premium que transmiten calidad y elegancia.",
  },
  {
    title: "Responsive",
    description: "Todo se ve perfecto en celular, tablet y notebook.",
  },
  {
    title: "Optimización para Google",
    description: "Estructura preparada para posicionar mejor tu negocio.",
  },
  {
    title: "WhatsApp integrado",
    description: "Facilitamos que tus clientes te contacten de forma directa.",
  },
  {
    title: "Hosting y dominio",
    description: "Te acompañamos desde la publicación hasta la gestión básica.",
  },
  {
    title: "Carga rápida",
    description:
      "Velocidad y rendimiento para una mejor experiencia de usuario.",
  },
  {
    title: "Sitios seguros",
    description: "Aplicamos buenas prácticas para tranquilidad y confianza.",
  },
  {
    title: "Fácil administración",
    description: "Panel simple para actualizar textos, imágenes y contenidos.",
  },
];

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            Beneficios
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Todo lo que necesitas para lanzar una web profesional sin
            complicaciones.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[24px] border border-white/10 bg-[#081826]/70 p-5"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl bg-[#A6D63A]/15" />
              <h3 className="text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
