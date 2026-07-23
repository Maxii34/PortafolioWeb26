const processSteps = [
  {
    title: "Contame tu idea",
    description: "Conversamos sobre tus objetivos, público y tono de marca.",
  },
  {
    title: "Diseño la propuesta",
    description: "Armamos estructura, estética y contenidos para tu proyecto.",
  },
  {
    title: "Desarrollo la página",
    description:
      "Construimos la web con foco en rendimiento, claridad y conversión.",
  },
  {
    title: "La publicamos",
    description: "La dejamos lista para que tu negocio empiece a crecer.",
  },
];

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Un proceso simple, claro y pensado para que avances con
            tranquilidad.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[24px] border border-white/10 bg-[#081826]/70 p-6"
            >
              {index < processSteps.length - 1 ? (
                <div className="absolute -right-3 top-8 hidden h-px w-6 bg-[#A6D63A]/40 lg:block" />
              ) : null}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A6D63A]/15 text-sm font-semibold text-[#A6D63A]">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
