import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-8 rounded-[40px] border border-[#A6D63A]/20 bg-gradient-to-br from-[#A6D63A]/10 to-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        {/* Formulario */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            # Contacto
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            ¿Listo para tener tu página web?
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Contame tu idea y trabajemos juntos para crear un sitio web moderno,
            profesional y adaptado a las necesidades de tu negocio.
          </p>

          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#A6D63A] focus:outline-none"
                placeholder="Nombre"
              />

              <input
                className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#A6D63A] focus:outline-none"
                placeholder="Correo"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#A6D63A] focus:outline-none"
                placeholder="Teléfono"
              />

              <input
                className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#A6D63A] focus:outline-none"
                placeholder="Negocio"
              />
            </div>

            <textarea
              className="min-h-36 rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#A6D63A] focus:outline-none"
              placeholder="Contame tu idea..."
            />

            <button className="mt-2 w-fit rounded-full bg-[#A6D63A] px-8 py-3 font-semibold text-[#081826] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(166,214,58,0.35)]">
              Solicitar presupuesto
            </button>
          </form>
        </div>

        {/* Información */}
        <div className="flex flex-col justify-center rounded-[32px] border border-white/10 bg-[#081826]/70 p-8">
          <h3 className="text-3xl font-semibold text-white">
            Hablemos de tu proyecto
          </h3>

          <p className="mt-5 leading-7 text-slate-300">
            Elegí el medio que prefieras. Estaré encantado de responder tus
            consultas y ayudarte a crear una página web que represente
            profesionalmente a tu negocio.
          </p>

          {/* Redes */}
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://wa.me/5493816870337"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_15px_35px_rgba(37,211,102,0.45)]"
            >
              <FaWhatsapp size={34} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E4405F] text-white shadow-lg transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-[0_15px_35px_rgba(228,64,95,0.45)]"
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_15px_35px_rgba(24,119,242,0.45)]"
            >
              <FaFacebookF size={30} />
            </a>
          </div>

          {/* Tarjeta de contacto */}
          <div className="mt-10 rounded-3xl border border-[#A6D63A]/20 bg-[#A6D63A]/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
              Contacto directo
            </p>

            <p className="mt-4 text-3xl font-bold text-white">
              +54 9 381 687 0337
            </p>

            <p className="mt-3 leading-7 text-slate-300">
              También podés completar el formulario y me pondré en contacto con
              vos a la brevedad para conversar sobre tu proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}