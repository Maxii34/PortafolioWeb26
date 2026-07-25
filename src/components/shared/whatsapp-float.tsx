import { FaWhatsapp } from "react-icons/fa";

export function WhatsappFloat() {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const mensaje = encodeURIComponent(
    "¡Hola! 👋 Vi tu portfolio y me interesa obtener información sobre el desarrollo de una página web para mi negocio.",
  );

  const url = `https://wa.me/${numero}?text=${mensaje}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      {/* Mensaje */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-16
          right-0
          w-72
          translate-y-3
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div className="rounded-2xl bg-[#E5DDD5] p-3 shadow-2xl">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <FaWhatsapp />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                CodeMax.Dev
              </p>

              <p className="text-xs text-slate-500">En línea</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-3 shadow">
            <p className="text-sm leading-6 text-slate-700">
              👋 ¡Hola!
              <br />
              ¿Necesitás una página web para tu negocio?
              <br />
              Escribime y conversemos sin compromiso.
            </p>

            <p className="mt-2 text-right text-[11px] text-slate-400">ahora</p>
          </div>
        </div>
      </div>

      {/* Botón */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_20px_40px_rgba(37,211,102,0.35)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)]
        "
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}
