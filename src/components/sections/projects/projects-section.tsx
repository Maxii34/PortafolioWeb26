"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FolderGit2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/cn";

const soluciones = [
  "Sistemas de turnos y reservas",
  "Gestión de pedidos",
  "Gestión de clientes",
  "Automatizaciones",
];

export function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  // Arrastre con mouse (en touch el navegador lo maneja nativo)
  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || e.pointerType === "touch") return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    const d = drag.current;
    if (!d.down || !el) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 6) d.moved = true;
    el.scrollLeft = d.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.down = false;
  };

  // Si se arrastró, no disparar los links de la card
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="proyectos" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* ENCABEZADO */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-4 lg:col-span-9">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>Trabajos Destacados</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Proyectos que combinan{" "}
              <span className="text-[#A6D63A]">
                estética, velocidad y conversión.
              </span>
            </h2>

            {/* LISTA DE BADGES */}
            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              {soluciones.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-200 transition-all hover:border-[#A6D63A]/50 hover:bg-[#A6D63A]/5 sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A6D63A]" />
                  <span className="leading-none">{item}</span>
                </div>
              ))}
            </div>

            {/* ESLÓGAN */}
            <p className="mt-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A6D63A]">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span>Si puedes imaginarlo, se puede programar.</span>
            </p>
          </div>

          {/* FLECHAS DESKTOP */}
          <div className="hidden items-center justify-end gap-3 lg:col-span-3 lg:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              disabled={!canPrev}
              aria-label="Proyectos anteriores"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md transition-all hover:border-[#A6D63A]/50 hover:text-[#A6D63A] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              disabled={!canNext}
              aria-label="Proyectos siguientes"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md transition-all hover:border-[#A6D63A]/50 hover:text-[#A6D63A] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* CARRUSEL ARRASTRABLE (DESKTOP + TABLET) */}
      <div className="mt-12 hidden w-full lg:block">
        <div
          ref={trackRef}
          data-lenis-prevent
          onScroll={update}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          className={cn(
            "flex cursor-grab items-stretch gap-6 overflow-x-auto px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] py-4",
            "select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "active:cursor-grabbing"
          )}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* BARRA DE PROGRESO */}
        <div className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#A6D63A] to-cyan-400 transition-[width] duration-150"
              style={{ width: `${Math.max(progress * 100, 6)}%` }}
            />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Arrastrá para explorar →
          </p>
        </div>
      </div>

      {/* MARQUEE MOBILE (sin cambios) */}
      <div className="mt-12 w-full overflow-hidden py-4 lg:hidden">
        <div className="animate-marquee flex items-stretch gap-6">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="w-75 shrink-0 sm:w-85"
            >
              <ProjectCard project={project} index={index % projects.length} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA VER TODOS */}
      <div className="mx-auto mt-10 flex w-full max-w-7xl justify-center px-6 lg:px-10">
        <MagneticButton>
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/40 bg-[#081826]/70 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A] hover:bg-[#A6D63A] hover:text-[#081826] hover:shadow-[0_0_25px_rgba(166,214,58,0.45)]"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
