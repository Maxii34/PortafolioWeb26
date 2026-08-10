"use client";

import { FaWhatsapp } from "react-icons/fa6";

export function WhatsappFloat() {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493816870337";

  const mensaje = encodeURIComponent(
    "¡Hola! 👋 Estuve viendo tu página web y me gustaría recibir información sobre el desarrollo de una página web para mi negocio."
  );

  const url = `https://wa.me/${numero}?text=${mensaje}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* BOTÓN CONTENEDOR CON ÁREA DE HOVER EXACTA */}
      <div className="group relative flex items-center justify-center">

        {/* MENSAJE EMERGENTE COMPACTO Y ABSOLUTO */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-16
            right-0
            w-60
            origin-bottom-right
            scale-90
            opacity-0
            transition-all
            duration-300
            ease-out
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <div className="overflow-hidden rounded-2xl border border-slate-300/30 bg-[#E5DDD5] p-2.5 shadow-2xl backdrop-blur-md">
            {/* Cabecera del chat reducida */}
            <div className="mb-1.5 flex items-center gap-2">
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
                <FaWhatsapp className="text-base" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#E5DDD5] bg-emerald-500" />
              </div>

              <div>
                <p className="text-[11px] font-bold leading-tight text-slate-900">
                  CodeMáx<span className="text-[#25D366]">.Dev</span>
                </p>

                <div className="flex items-center gap-1 mt-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <p className="text-[10px] font-medium text-slate-600">En línea</p>
                </div>
              </div>
            </div>

            {/* Mensaje tipo WhatsApp compacto */}
            <div className="rounded-xl bg-white p-2.5 shadow-sm">
              <p className="text-[11px] leading-relaxed text-slate-700">
                👋 ¡Hola! ¿Necesitás una web para tu negocio? Escribime sin compromiso.
              </p>

              <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400">
                <span>ahora</span>
                <span className="text-[#34B7F1] font-bold">✓✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTÓN FLOTANTE PRINCIPAL */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="
            relative
            flex
            h-13
            w-13
            sm:h-14
            sm:w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_10px_25px_rgba(37,211,102,0.4)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)]
            active:scale-95
          "
        >
          {/* Aura animada */}
          <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />

          <FaWhatsapp className="text-2xl sm:text-3xl" />

          {/* Badge de notificación no leída */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-extrabold text-white ring-2 ring-[#081826]">
            1
          </span>
        </a>

      </div>
    </div>
  );
}