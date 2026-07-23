import { FaWhatsapp } from "react-icons/fa";

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5493816870337"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)]"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}