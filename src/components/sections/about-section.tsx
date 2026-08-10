"use client";

import {
  FaLaptopCode,
  FaExternalLinkAlt,
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";

export function AboutSection() {
  const portafolioDev = process.env.NEXT_PUBLIC_PORTAFOLIODEV_URL || "#";

  return (
    <section id="sobre-mi" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* TARJETA CONTENEDORA GLASSMORPHISM (TEMA OSCURO TÉCNICO) */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-12">
          
          {/* Luces de fondo internas */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A6D63A]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
            
            {/* 1. TARJETA COMPACTA DE PERFIL (FOTO + PROFILE BADGE) */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative p-4 sm:p-6 rounded-3xl border border-white/10 bg-[#081826]/80 shadow-lg backdrop-blur-md w-full max-w-sm">
                
                {/* Badge Superior */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#A6D63A]">
                  <FaCodeBranch />
                  <span>Código Limpio & Escalable</span>
                </div>

                {/* Foto Redonda en Marcador */}
                <div className="relative mx-auto mt-5 h-36 w-36 sm:h-44 sm:w-44">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A6D63A] to-cyan-400 blur-md opacity-40" />
                  <img
                    src="Miperfil.jpeg"
                    alt="Maximiliano Ordoñez"
                    className="relative h-full w-full rounded-full object-cover border-2 border-white/20 shadow-xl"
                  />
                </div>

                {/* Datos rápidos en la foto */}
                <h3 className="mt-4 text-xl font-extrabold text-white">
                  Maximiliano Ordoñez
                </h3>

                <div className="mt-3 flex justify-center">
                  <a
                    href={portafolioDev}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-[#A6D63A] hover:bg-[#A6D63A] hover:text-slate-900"
                  >
                    <FaLaptopCode className="text-[#A6D63A] group-hover:text-slate-900" />
                    <span>Full Stack Developer</span>
                    <FaExternalLinkAlt className="text-[10px] opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. TEXTO Y PUNTOS DE VALOR */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
                <span className="h-2 w-2 rounded-full bg-[#A6D63A]" />
                Sobre mí
              </div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Transformo ideas en páginas web que <span className="text-[#A6D63A]">generan confianza y ventas.</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Especialista en desarrollo web enfocado en crear plataformas rápidas, atractivas y totalmente adaptadas a las necesidades de cada negocio.
              </p>

              <blockquote className="mt-4 border-l-2 border-[#A6D63A] pl-3 text-xs sm:text-sm italic font-medium text-slate-300">
                "No construyo solo páginas web; creo herramientas digitales que ayudan a tu marca a competir y destacar."
              </blockquote>

              {/* GRILLA COMPACTA DE PUNTOS CLAVE (3 COLUMNAS EN DESKTOP / INLINE EN MOBILE) */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#081826]/70 p-3 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A6D63A]/15 text-[#A6D63A]">
                    <FaRocket className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Velocidad Pro</h4>
                    <p className="text-[10px] text-slate-400">Carga ultrarrápida.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#081826]/70 p-3 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A6D63A]/15 text-[#A6D63A]">
                    <FaMobileAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Responsive</h4>
                    <p className="text-[10px] text-slate-400">Perfecto en celulares.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#081826]/70 p-3 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#A6D63A]/15 text-[#A6D63A]">
                    <FaShieldAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Seguridad</h4>
                    <p className="text-[10px] text-slate-400">Estructura moderna.</p>
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