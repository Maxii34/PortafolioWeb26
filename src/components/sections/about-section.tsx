export function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-10 rounded-[40px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div className="relative mx-auto max-w-sm">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#A6D63A]/30 to-transparent blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
            alt="Maximiliano desarrollando sitios web"
            className="relative h-[420px] w-full rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Sobre mí</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Hola, soy Maximiliano.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Soy desarrollador web especializado en crear sitios modernos, rápidos y adaptables para pequeños negocios, emprendedores y empresas. Mi objetivo es ayudarte a transmitir una imagen profesional en Internet mediante páginas web atractivas, optimizadas y fáciles de usar.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            No vendo solamente una página. Ayudo a que tu negocio tenga una presencia profesional y confiable desde el primer contacto.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Comunicación directa",
              "Atención personalizada",
              "Diseño moderno",
              "Sitios rápidos",
              "Compatible con celulares",
              "Enfoque en resultados",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#081826]/70 p-3 text-sm text-slate-300">
                <span className="text-[#A6D63A]">✔</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
