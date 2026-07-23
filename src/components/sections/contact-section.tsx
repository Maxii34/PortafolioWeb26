export function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-8 rounded-[40px] border border-[#A6D63A]/20 bg-gradient-to-br from-[#A6D63A]/10 to-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Contacto</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">¿Listo para tener tu página web?</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Hablemos sobre tu negocio, tus objetivos y la mejor forma de convertir tu presencia online en una ventaja real.
          </p>
          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Nombre" />
              <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Correo" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Teléfono" />
              <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Negocio" />
            </div>
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Contame tu idea" />
            <button className="w-fit rounded-full bg-[#A6D63A] px-6 py-3 font-semibold text-[#081826] transition hover:scale-[1.02]">
              Solicitar presupuesto
            </button>
          </form>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#081826]/70 p-6">
          <h3 className="text-xl font-semibold text-white">Conectemos</h3>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
              WhatsApp
            </a>
            <a href="mailto:maximiliano@codemas.dev" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
              maximiliano@codemas.dev
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
