"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            # Proyectos
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Diseños que combinan estética, claridad y conversión.
          </h2>
        </div>
      </div>

      <div className="mt-12">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group flex w-[88%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:border-[#A6D63A]/40 hover:shadow-2xl hover:shadow-[#A6D63A]/10 sm:w-[70%] md:w-[48%] lg:w-auto"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/20 to-transparent" />

                <span className="absolute left-5 top-5 rounded-md border border-[#A6D63A]/30 bg-[#A6D63A]/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#A6D63A] backdrop-blur">
                  {project.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#A6D63A]">
                    {project.title}
                  </h3>

                  <div className="mt-3 h-1 w-12 rounded-full bg-[#A6D63A] transition-all duration-300 group-hover:w-20" />
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <Link
                  href={`/proyectos/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-white transition-all duration-300 hover:text-[#A6D63A]"
                >
                  Ver proyecto

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}