"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsappFloat() {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const mensaje = encodeURIComponent(
    "¡Hola! 👋 Vi tu portfolio y me interesa obtener información sobre el desarrollo de una página web para mi negocio. ¿Podemos conversar?",
  );

  const url = `https://wa.me/${numero}?text=${mensaje}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)]"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
