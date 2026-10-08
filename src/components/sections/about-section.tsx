"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, BadgeCheck, Cpu } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { MagneticButton } from "@/components/ui/magnetic-button";

const highlights = [
  { icon: GraduationCap, label: "Formación continua" },
  { icon: BadgeCheck, label: "Buenas prácticas" },
  { icon: Cpu, label: "Tecnología actual" },
];

export function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="sobre-mi" className="relative overflow-hidden py-14 lg:py-20">
      {/* Luz ambiental sutil de fondo */}
      <div className="animate-aurora pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#A6D63A]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* LAYOUT EDITORIAL ASIMÉTRICO */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* COLUMNA IZQUIERDA: IMAGEN CON PARALLAX (5 COLS) */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:col-span-5"
          >
            {/* Marco decorativo de luz detrás de la foto */}
            <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-[#A6D63A]/40 via-cyan-500/20 to-transparent opacity-60 blur-xl transition-all duration-700" />

            {/* CONTENEDOR DE LA IMAGEN CON GRUPO DE HOVER */}
            <motion.div
              whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              style={{ transformPerspective: 900 }}
              className="group relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/15 shadow-2xl transition-colors duration-500 hover:border-[#A6D63A]/50 hover:shadow-[0_20px_50px_rgba(166,214,58,0.2)]"
            >
              {/* IMAGEN con parallax interno: Transición de blanco/negro a color + Zoom suave */}
              <motion.div style={{ y: imgY }} className="absolute -inset-y-[10%] inset-x-0">
                <Image
                  src="/Miperfil.jpeg"
                  alt="Maximiliano Ordoñez"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={false}
                  className="h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-125"
                />
              </motion.div>

              {/* Degradado oscuro inferior sobre la foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081826] via-transparent to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-70" />

              {/* Nombre flotante sobre la foto */}
              <div className="absolute inset-x-6 bottom-6 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
                  Desarrollador Full Stack
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Maximiliano Ordoñez
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: TEXTO Y CONTENIDOS (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A6D63A]">
              <span className="h-1.5 w-6 rounded-full bg-[#A6D63A]" />
              <span>Sobre mí</span>
              <span className="h-1.5 w-6 rounded-full bg-[#A6D63A]" />
            </div>

            {/* Titular Principal */}
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              <RevealText text="Desarrollo soluciones web" />{" "}
              <RevealText
                text="con una visión profesional."
                delay={0.25}
                wordClassName="text-[#A6D63A]"
              />
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Soy desarrollador Full Stack, con formación especializada y
              actualización constante en nuevas tecnologías y herramientas de
              desarrollo.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Trabajo en cada proyecto buscando combinar{" "}
              <strong className="font-semibold text-white">
                calidad, funcionalidad
              </strong>{" "}
              y una{" "}
              <strong className="font-semibold text-white">
                buena experiencia para el usuario
              </strong>
              .
            </p>

            {/* Diferenciales */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {highlights.map((h, i) => (
                <motion.span
                  key={h.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-[#A6D63A]/40 hover:text-white"
                >
                  <h.icon className="h-4 w-4 shrink-0 text-[#A6D63A]" />
                  {h.label}
                </motion.span>
              ))}
            </div>

            {/* BOTÓN DE ACCIÓN MAGNÉTICO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 pt-2"
            >
              <MagneticButton>
                <Link
                  href="#contacto"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#bdff22] to-[#A6D63A] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 shadow-[0_0_20px_rgba(166,214,58,0.3)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(166,214,58,0.6)] active:scale-95"
                >
                  <span className="animate-shimmer pointer-events-none absolute inset-0 -top-[100%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  <span className="relative z-10">Hablemos de tu proyecto</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
