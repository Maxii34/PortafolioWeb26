"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Send, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Trabajos" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* LOGO */}
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

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#A6D63A]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#A6D63A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* BOTÓN CONTACTO */}
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#A6D63A] px-5 py-2 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-[#b8ea42] hover:shadow-[0_0_20px_rgba(166,214,58,0.4)]"
          >
            <span>Contacto</span>
            <Send className="h-4 w-4" />
          </Link>
        </nav>

        {/* BOTÓN HAMBURGUESA MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MENÚ RESPONSIVE MOBILE */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#081826]/90 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 transition-colors hover:text-[#A6D63A]"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-white/10" />
            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#A6D63A] py-3 font-semibold text-slate-900"
            >
              <span>Contacto</span>
              <Send className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}