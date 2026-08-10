"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493816870337";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const tiktok = process.env.NEXT_PUBLIC_TIKTOK_URL || "#";

  const mensajeWs = encodeURIComponent(
    "¡Hola! 👋 Vi tu sitio web CodeMáx.Dev y me interesa obtener información sobre el desarrollo de una página web.",
  );
  const urlWhatsapp = `https://wa.me/${numero}?text=${mensajeWs}`;

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Trabajos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#05111a] px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* FILA PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          {/* COLUMNA 1: MARCA Y DESCRIPCIÓN */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link
              href="#inicio"
              className="group flex items-center gap-2.5 text-lg font-semibold uppercase tracking-[0.2em] text-[#A6D63A] transition-all"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#A6D63A]/10 border border-[#A6D63A]/30 transition-transform group-hover:scale-105">
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
          </div>

          {/* COLUMNA 2: NAVEGACIÓN RÁPIDA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              Navegación
            </h4>

            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:flex-col lg:gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-[#A6D63A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: REDES SOCIALES */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              Redes Sociales
            </h4>

            <p className="mt-2 text-xs text-slate-400">
              Conectemos a través de nuestras redes oficiales.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href={urlWhatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110"
              >
                <FaWhatsapp className="text-base" />
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-all hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:scale-110"
              >
                <FaInstagram className="text-base" />
              </a>

              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-all hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href={tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 transition-all hover:border-white hover:bg-black hover:text-white hover:scale-110"
              >
                <FaTiktok className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* PIE INFERIOR (COPYRIGHT) */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-400">
            © 2026 <span className="font-semibold text-white">CodeMáx.Dev</span>
            . Todos los derechos reservados.
          </p>

          <p className="text-[11px] text-slate-500">
            v1.3.0 • Actualizado:{" "}
            <span className="text-slate-400">Agosto 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
