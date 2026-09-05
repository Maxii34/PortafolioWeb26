"use client";

import { FolderGit2, Sparkles, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  // Duplicamos la lista para generar el bucle infinito sin cortes visuales
  const doubleProjects = [...projects, ...projects];

  const soluciones = [
    "Sistemas de turnos y reservas",
    "Gestión de pedidos",
    "Gestión de clientes",
    "Automatizaciones",
  ];

  return (
    <section id="proyectos" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ENCABEZADO Y SERVICIOS INTEGRADOS */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          {/* COLUMNA IZQUIERDA: TÍTULO, LISTA ALINEADA Y ESLÓGAN */}
          <div className="lg:col-span-7 flex flex-col gap-4">
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

            {/* LISTA DE BADGES PERFECTAMENTE ALINEADA */}
            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              {soluciones.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-[#A6D63A]/50 hover:bg-[#A6D63A]/5"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#A6D63A] shrink-0" />
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
        </div>
      </div>

      {/* CONTENEDOR AUTO-SCROLL INFINITO */}
      <div className="mt-12 w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6">
          {doubleProjects.map((project, index) => (
            <div
              key={`${project.slug || project.title}-${index}`}
              className="w-75 sm:w-85 shrink-0"
            >
              <ProjectCard project={project} index={index % projects.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
