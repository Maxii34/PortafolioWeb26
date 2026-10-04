"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { Terminal, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";
  const href = (hash: string) => `${prefix}${hash}`;
  const instagram =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/codemax.dev";
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493816870337";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const tiktok = process.env.NEXT_PUBLIC_TIKTOK_URL || "#";

  const mensajeWs = encodeURIComponent(
    "¡Hola! 👋 Vi tu sitio web CodeMáx.Dev y me interesa obtener información sobre el desarrollo de una página web."
  );
  const urlWhatsapp = `https://wa.me/${numero}?text=${mensajeWs}`;

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Trabajos" },
    { href: "#faq", label: "Dudas" },
    { href: "#contacto", label: "Contacto" },
  ];

  const socials = [
    { href: urlWhatsapp, label: "WhatsApp", icon: FaWhatsapp, hover: "hover:border-[#25D366] hover:bg-[#25D366]", external: true },
    { href: instagram, label: "Instagram", icon: FaInstagram, hover: "hover:border-[#E4405F] hover:bg-[#E4405F]", external: true },
    { href: facebook, label: "Facebook", icon: FaFacebookF, hover: "hover:border-[#1877F2] hover:bg-[#1877F2]", external: true },
    { href: tiktok, label: "TikTok", icon: FaTiktok, hover: "hover:border-white hover:bg-black", external: true },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05111a] px-6 pb-8 pt-12 lg:px-10">
      {/* Marca gigante de fondo */}
      <div
        aria-hidden="true"
        className="text-stroke-lime pointer-events-none select-none text-center font-display text-[18vw] font-bold leading-none opacity-20 lg:text-[11rem]"
      >
        CodeMáx
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* FILA PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          {/* COLUMNA 1: MARCA Y DESCRIPCIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <Link
              href={href("#inicio")}
              className="group flex items-center gap-2.5 text-lg font-semibold uppercase tracking-[0.2em] text-[#A6D63A] transition-all"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#A6D63A]/30 bg-[#A6D63A]/10 transition-transform group-hover:scale-105 group-hover:rotate-6">
                <Terminal className="h-5 w-5 text-[#A6D63A]" />
              </div>
              <span>
                CodeMáx<span className="text-white">.Dev</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              Diseño y desarrollo de sitios web modernos para negocios,
              emprendedores y profesionales que quieren transmitir confianza y
              vender más.
            </p>
          </motion.div>

          {/* COLUMNA 2: NAVEGACIÓN RÁPIDA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              Navegación
            </h4>

            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:flex-col lg:gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-[#A6D63A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMNA 3: CONTACTOS Y REDES SOCIALES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              Contactos
            </h4>

            {/* INFORMACIÓN DE CONTACTO */}
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-slate-300">
              <a
                href="mailto:codemax-dev@gmail.com"
                className="flex items-center gap-2.5 transition-colors hover:text-[#A6D63A]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#A6D63A]" />
                <span>codemax-dev@gmail.com</span>
              </a>

              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#A6D63A]" />
                <span>San Miguel de Tucumán, Argentina</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Conectemos a través de nuestras redes oficiales.
            </p>

            {/* BOTONES DE REDES SOCIALES */}
            <div className="mt-3 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:text-white hover:scale-110 ${s.hover}`}
                >
                  <s.icon className="text-base" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* PIE INFERIOR (COPYRIGHT) */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-400">
            © 2026 <span className="font-semibold text-white">CodeMáx.Dev</span>
            . Todos los derechos reservados.
          </p>

          <p className="text-[11px] text-slate-500">
            v1.3.0 • Actualizado:{" "}
            <span className="text-slate-400">Agosto 2026</span>
          </p>

          <a
            href={href("#inicio")}
            aria-label="Volver arriba"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A] transition-all hover:bg-[#A6D63A] hover:text-slate-900"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
