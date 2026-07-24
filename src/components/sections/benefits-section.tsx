const benefits = [
  {
    label: "Diseño",
    title: "Diseño que genera confianza",
    description:
      "Una imagen moderna y profesional que transmite credibilidad desde el primer vistazo.",
  },
  {
    label: "Responsive",
    title: "Adaptado a cualquier dispositivo",
    description:
      "Tu página se verá perfecta en celulares, tablets y computadoras, ofreciendo una excelente experiencia.",
  },
  {
    label: "SEO",
    title: "Preparado para Google",
    description:
      "Estructura optimizada para mejorar la visibilidad de tu negocio en los motores de búsqueda.",
  },
  {
    label: "WhatsApp",
    title: "Contacto directo",
    description:
      "Tus clientes podrán comunicarse contigo con un solo clic, facilitando consultas y ventas.",
  },
  {
    label: "Hosting",
    title: "Hosting y dominio",
    description:
      "Te acompaño en todo el proceso para que tu sitio esté online sin complicaciones técnicas.",
  },
  {
    label: "Velocidad",
    title: "Máximo rendimiento",
    description:
      "Páginas rápidas y optimizadas que mejoran la experiencia del usuario y reducen el abandono.",
  },
  {
    label: "Seguridad",
    title: "Sitio protegido",
    description:
      "Implemento buenas prácticas para proteger tu sitio y brindar mayor confianza a tus visitantes.",
  },
  {
    label: "Administración",
    title: "Fácil de administrar",
    description:
      "Podrás actualizar contenido e imágenes de forma sencilla cuando lo necesites.",
  },
];

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            # Beneficios
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Más que una página web, una herramienta para hacer crecer tu
            negocio.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Cada sitio está desarrollado para transmitir confianza, ofrecer una
            excelente experiencia al usuario y ayudarte a conseguir más clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-[24px] border border-white/10 bg-[#081826]/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#A6D63A]/30 hover:shadow-[0_15px_40px_rgba(166,214,58,0.12)]"
            >
              <span className="inline-flex rounded-full border border-[#A6D63A]/20 bg-[#A6D63A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#A6D63A] transition-colors duration-300 group-hover:bg-[#A6D63A] group-hover:text-[#081826]">
                {benefit.label}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}