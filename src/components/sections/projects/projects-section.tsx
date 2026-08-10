"use client";

import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  // Duplicamos la lista para generar el bucle infinito sin cortes visuales
  const doubleProjects = [...projects, ...projects];

  return (
    <section id="proyectos" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ENCABEZADO */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>Trabajos Destacados</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Proyectos que combinan{" "}
              <span className="text-[#A6D63A]">
                estética, velocidad y conversión.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-300 sm:text-base">
            Pasa el cursor sobre las tarjetas para pausar el movimiento y
            explorar cada proyecto.
          </p>
        </div>
      </div>

      {/* CONTENEDOR AUTO-SCROLL INFINITO (CUBRE ANCHO COMPLETO SIN SCROLLBARS) */}
      <div className="mt-12 w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6">
          {doubleProjects.map((project, index) => (
            <div
              key={`${project.slug || project.title}-${index}`}
              className="w-[300px] sm:w-[340px] shrink-0"
            >
              <ProjectCard project={project} index={index % projects.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
