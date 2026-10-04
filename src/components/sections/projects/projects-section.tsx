"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderGit2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { MagneticButton } from "@/components/ui/magnetic-button";

const soluciones = [
  "Sistemas de turnos y reservas",
  "Gestión de pedidos",
  "Gestión de clientes",
  "Automatizaciones",
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll horizontal con pin en desktop (GSAP ScrollTrigger)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* ENCABEZADO */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-4 lg:col-span-7">
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
            <p className="hidden text-[11px] uppercase tracking-[0.25em] text-slate-500 lg:block">
              Deslizá para explorar →
            </p>
          </div>
        </div>
      </div>

      {/* TRACK HORIZONTAL PINNEADO (DESKTOP) */}
      <div className="mt-12 hidden w-full overflow-hidden py-4 lg:block">
        <div ref={trackRef} className="flex w-max items-stretch gap-6 px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* MARQUEE MOBILE (fallback sin pin) */}
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
