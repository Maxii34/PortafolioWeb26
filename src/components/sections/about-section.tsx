"use client";

import {
  FaLaptopCode,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaCodeBranch,
} from "react-icons/fa";

export function AboutSection() {
  const portafolioDev = process.env.NEXT_PUBLIC_PORTAFOLIODEV_URL || "#";

  return (
    <section id="sobre-mi" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Luz de fondo ambiental para acentuar el relieve de la tarjeta */}
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[90%] max-w-7xl rounded-[40px]  blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* TARJETA PRINCIPAL CON SOMBRA PROFUNDA */}
        <div className="relative overflow-hidden rounded-[32px] bg-slate-50 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.45)] border border-white/60 lg:p-14">
          {/* Elemento decorativo de fondo */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A6D63A]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
            {/* 1. INFORMACIÓN Y PERFIL */}
            <div className="flex-1">
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
                <span className="h-2 w-2 rounded-full bg-[#82aa26]" />
                Sobre mí
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Hola, soy{" "}
                <span className="text-[#6c9119]">Maximiliano Ordoñez.</span>
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={portafolioDev}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <FaLaptopCode className="text-[#A6D63A]" />
                  <span>Full Stack Developer</span>
                  <FaExternalLinkAlt className="ml-1 text-xs text-slate-400" />
                </a>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Especialista en desarrollo web enfocado en transformar negocios
                a través de plataformas digitales rápidas, atractivas y
                optimizadas para ventas.
              </p>

              <blockquote className="mt-4 border-l-4 border-[#82aa26] pl-4 text-base italic font-medium text-slate-700">
                "No construyo solo páginas web; creo herramientas digitales que
                transmiten confianza inmediata y ayudan a tu negocio a vender
                más."
              </blockquote>

              {/* PUNTOS CLAVE DE VALOR */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-200/50 border border-slate-200/70 transition-transform hover:-translate-y-1">
                  <FaRocket className="mt-1 h-5 w-5 shrink-0 text-[#82aa26]" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Velocidad Pro
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Carga ultrarrápida para no perder clientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-200/50 border border-slate-200/70 transition-transform hover:-translate-y-1">
                  <FaMobileAlt className="mt-1 h-5 w-5 shrink-0 text-[#82aa26]" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Responsive
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Perfecto en celulares, tablets y PC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-200/50 border border-slate-200/70 transition-transform hover:-translate-y-1">
                  <FaShieldAlt className="mt-1 h-5 w-5 shrink-0 text-[#82aa26]" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Seguridad
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Estructuras modernas y confiables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. COMPOSICIÓN VISUAL DE LA FOTO (REFORZADA) */}
            <div className="mx-auto shrink-0 lg:mx-0">
              <div className="relative p-6 sm:p-8 rounded-[36px] bg-gradient-to-br from-white via-slate-100/80 to-slate-200/60 border border-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.08)]">
                {/* Rejilla técnica de fondo en la tarjeta de foto */}
                <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:1.25rem_1.25rem]" />

                {/* Badge Flotante Superior */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-xl border border-slate-800 whitespace-nowrap">
                  <FaCodeBranch className="text-[#A6D63A]" />
                  <span>Código Limpio & Escalable</span>
                </div>

                {/* Contenedor central de la foto */}
                <div className="relative z-10">
                  {/* Resplandor verdoso */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A6D63A] to-cyan-400 blur-xl opacity-30" />

                  <div className="relative rounded-full p-2 bg-white shadow-xl border-2 border-slate-200">
                    <img
                      src="Miperfil.jpeg"
                      alt="Maximiliano Ordoñez - Desarrollador Web"
                      className="h-60 w-60 rounded-full object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                    />
                  </div>
                </div>

                {/* Badge Flotante Inferior */}
                <div className="absolute -bottom-4 right-4 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-slate-200/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A6D63A]/20 text-[#6c9119]">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900 leading-none">
                      Desarrollo Web
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">
                      100% Personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
