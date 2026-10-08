"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Terminal,
  Send,
  Menu,
  X,
  Home,
  Layers,
  FolderGit2,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/cn";

const navLinks = [
  { hash: "#inicio", label: "Inicio", id: "inicio", icon: Home },
  { hash: "#servicios-principales", label: "Servicios", id: "servicios-principales", icon: Layers },
  { hash: "#proyectos", label: "Trabajos", id: "proyectos", icon: FolderGit2 },
  { hash: "#faq", label: "Dudas", id: "faq", icon: HelpCircle },
];

export function SiteHeader() {
  const pathname = usePathname();
  // Desde /proyectos los anchors deben apuntar al home (/#x),
  // en el home basta con el hash (#x) para el scroll suave.
  const prefix = pathname === "/" ? "" : "/";
  const href = (hash: string) => `${prefix}${hash}`;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled
              ? "border-[#A6D63A]/20 bg-[#081826]/85 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "border-white/10 bg-[#081826]/40 backdrop-blur-md"
          )}
        >
          {/* LOGO */}
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

          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                href={href(link.hash)}
                className={cn(
                  "group relative transition-all duration-300 hover:-translate-y-0.5",
                  active === link.id
                    ? "text-[#A6D63A]"
                    : "text-slate-300 hover:text-[#A6D63A]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#A6D63A] transition-all duration-300",
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}

            {/* BOTÓN CONTACTO */}
            <MagneticButton strength={14}>
              <Link
                href={href("#contacto")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#beff2d] to-[#A6D63A] px-5 py-2 font-semibold text-slate-900 shadow-[0_0_15px_rgba(166,214,58,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(166,214,58,0.6)] active:scale-95"
              >
                <span className="animate-shimmer pointer-events-none absolute inset-0 -top-[100%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <span className="relative z-10">Contacto</span>
                <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </nav>

          {/* BOTÓN HAMBURGUESA MOBILE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* MENÚ MOBILE FULLSCREEN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#081826]/95 px-5 pb-8 pt-28 backdrop-blur-2xl md:hidden"
          >
            <p className="px-1 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Menú
            </p>
            <div className="mt-3 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.hash}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, delay: 0.06 + i * 0.06 }}
                  className={cn(i > 0 && "border-t border-white/5")}
                >
                  <Link
                    href={href(link.hash)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 transition-colors active:bg-white/5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#A6D63A]/25 bg-[#A6D63A]/10">
                      <link.icon className="h-4 w-4 text-[#A6D63A]" />
                    </span>
                    <span className="font-display text-lg font-bold tracking-tight text-white">
                      {link.label}
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.32 }}
              className="mt-4"
            >
              <Link
                href={href("#contacto")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#A6D63A] to-[#beff2d] py-3 text-sm font-bold text-slate-900 shadow-[0_0_18px_rgba(166,214,58,0.35)]"
              >
                <span>Contacto</span>
                <Send className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
