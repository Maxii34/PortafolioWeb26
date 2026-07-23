"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            Proyectos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Diseños que combinan estética, claridad y conversión.
          </h2>
        </div>
        <Link
          href="#contacto"
          className="text-sm font-semibold text-[#A6D63A] transition hover:text-lime-300"
        >
          Quiero algo similar →
        </Link>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#A6D63A]">
                {project.type}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <Link
                href={`/proyectos/${project.slug}`}
                className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#A6D63A] hover:text-[#A6D63A]"
              >
                Ver proyecto
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
