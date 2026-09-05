"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface Project {
  slug?: string;
  title: string;
  type: string;
  description: string;
  cover: string;
  link: string;
  technologies?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group flex h-full min-w-70 max-w-85 shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A]/40 hover:bg-white/[0.07] hover:shadow-[0_15px_35px_rgba(166,214,58,0.1)] sm:min-w-[320px]"
    >
      {/* PREVIEW DE IMAGEN */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#081826] via-[#081826]/20 to-transparent" />

        <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#A6D63A] backdrop-blur-md">
          {project.type}
        </span>
      </div>

      {/* DETALLES */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#A6D63A]">
            {project.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-3">
            {project.description}
          </p>

          {project.technologies && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* BOTÓN DE ACCIÓN */}
        <div className="mt-5 pt-3.5 border-t border-white/5">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 group-hover:border-[#A6D63A]/40 group-hover:bg-[#A6D63A] group-hover:text-slate-900"
          >
            <span>Ver trabajo online</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
