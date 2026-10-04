"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { MagneticButton } from "@/components/ui/magnetic-button";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Calidad y desarrollo profesional",
    text: "Código moderno, estructura sólida y sitios preparados para crecer junto con tu negocio.",
  },
  {
    icon: Zap,
    title: "Rendimiento y velocidad",
    text: "Páginas rápidas y optimizadas para ofrecer una navegación fluida desde cualquier dispositivo.",
  },
  {
    icon: Award,
    title: "Atención personalizada",
    text: "Me involucro directamente en cada proyecto para entender lo que necesitás y acompañarte durante todo el proceso.",
  },
];

export function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="sobre-mi" className="relative overflow-hidden py-20 lg:py-32">
      {/* Luz ambiental sutil de fondo */}
      <div className="animate-aurora pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#A6D63A]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
                  CodeMáx.Dev
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
              <span>Desarrollo Web</span>
              <span className="h-1.5 w-6 rounded-full bg-[#A6D63A]" />
            </div>

            {/* Titular Principal */}
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              <RevealText text="Una web profesional para que tu negocio" />{" "}
              <RevealText
                text="transmita confianza y llegue a más clientes."
                delay={0.25}
                wordClassName="text-[#A6D63A]"
              />
            </h2>

            {/* Párrafo Comercial Conciso */}
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Diseño y desarrollo páginas web modernas, rápidas y adaptadas a
              cualquier dispositivo. Cada proyecto se construye de forma
              personalizada, pensando en tu negocio, tus objetivos y en ofrecer
              una experiencia clara para tus clientes.
            </p>

            {/* 3 PILARES EJECUTIVOS (APARICIÓN EN CASCADA / STAGGER) */}
            <div className="mt-8 space-y-4 border-l border-white/10 pl-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex items-start gap-3"
                >
                  <pillar.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A6D63A] transition-transform duration-300 group-hover:scale-125" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {pillar.text}
                    </p>
                  </div>
                </motion.div>
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
