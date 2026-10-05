"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectListCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const extra = Math.max(project.features.length - 4, 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A]/40 hover:shadow-[0_20px_45px_rgba(166,214,58,0.12)]"
    >
      {/* PORTADA GRANDE */}
      <Link
        href={`/proyectos/${project.slug}`}
        className="relative block aspect-[16/10] shrink-0 overflow-hidden bg-slate-900"
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081826]/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A6D63A] backdrop-blur-md">
          {project.type}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#A6D63A] text-slate-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </Link>

      {/* CONTENIDO */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/proyectos/${project.slug}`}>
          <h3 className="text-xl font-extrabold text-white transition-colors group-hover:text-[#A6D63A]">
            {project.title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 min-h-[3rem] text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* FUNCIONALIDADES DESTACADAS */}
        <ul className="mt-4 min-h-[102px] space-y-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#A6D63A]" />
              <span className="text-xs leading-relaxed text-slate-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        {extra > 0 ? (
          <p className="mt-1 text-[11px] font-semibold text-slate-500">
            +{extra} funcionalidades más
          </p>
        ) : null}

        {/* ACCIONES */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#A6D63A] transition-all hover:gap-2.5"
          >
            Ver caso completo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${project.title} online`}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-[#A6D63A]/50 hover:text-[#A6D63A]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
