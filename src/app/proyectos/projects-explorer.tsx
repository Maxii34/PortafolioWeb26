"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { cn } from "@/lib/cn";

const ALL = "Todos";

export function ProjectsExplorer() {
  const types = [ALL, ...Array.from(new Set(projects.map((p) => p.type)))];
  const [filter, setFilter] = useState(ALL);

  const visible =
    filter === ALL ? projects : projects.filter((p) => p.type === filter);

  return (
    <div>
      {/* FILTROS */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(type)}
            className={cn(
              "rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300",
              filter === type
                ? "border-[#A6D63A] bg-[#A6D63A] text-slate-900 shadow-[0_0_20px_rgba(166,214,58,0.4)]"
                : "border-white/10 bg-white/5 text-slate-300 hover:border-[#A6D63A]/50 hover:text-[#A6D63A]"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* GRILLA */}
      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="flex"
            >
              <ProjectCard
                project={project}
                index={index}
                className="w-full sm:w-full"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-center text-sm text-slate-400">
        Mostrando {visible.length} de {projects.length} proyectos
      </p>
    </div>
  );
}
