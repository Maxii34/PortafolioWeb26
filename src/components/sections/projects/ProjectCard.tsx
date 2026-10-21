"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const detailHref = `/proyectos/${project.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={cn(
        "group flex h-full w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A]/40 hover:bg-white/[0.07] hover:shadow-[0_15px_35px_rgba(166,214,58,0.1)] sm:w-[340px]",
        className
      )}
    >
      {/* PREVIEW DE IMAGEN */}
      <Link
        href={detailHref}
        aria-label={`Ver detalles de ${project.title}`}
        className="relative block h-48 overflow-hidden bg-slate-900"
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 300px, 340px"
          draggable={false}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081826] via-[#081826]/20 to-transparent" />

        <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#A6D63A] backdrop-blur-md">
          {project.type}
        </span>
      </Link>

      {/* DETALLES */}
      <div className="flex flex-1 flex-col p-5">
        <div className="pb-5">
          <Link href={detailHref}>
            <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#A6D63A]">
              {project.title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 min-h-[60px] text-xs leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>

        {/* ACCIONES */}
        <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-3.5">
          <Link
            href={detailHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-[#A6D63A]/50 hover:bg-[#A6D63A] hover:text-slate-900"
          >
            <span>Ver caso completo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${project.title} online`}
            title="Abrir sitio en vivo"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#A6D63A]/50 hover:text-[#A6D63A]"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
