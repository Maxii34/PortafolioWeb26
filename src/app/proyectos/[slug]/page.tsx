import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Calendar,
  User,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { projects } from "@/data/projects";
import { SiteHeader } from "@/components/shared/site-header";
import Footer from "@/components/shared/footer";
import { WhatsappFloat } from "@/components/shared/whatsapp-float";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado | CodeMáx.Dev" };
  return {
    title: `${project.title} | CodeMáx.Dev`,
    description: project.description,
  };
}

export default async function ProyectoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { icon: Calendar, label: "Año", value: project.year },
    { icon: User, label: "Cliente", value: project.client },
    { icon: Briefcase, label: "Rol", value: project.role },
  ].filter((m) => m.value);

  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <div className="flex items-center justify-between">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-[#A6D63A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los proyectos
          </Link>
          <span className="rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
            {project.type}
          </span>
        </div>

        {/* ENCABEZADO */}
        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {project.longDescription ?? project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <MagneticButton>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#A6D63A] via-[#beff2d] to-[#A6D63A] px-8 py-3.5 text-sm font-bold text-[#081826] shadow-[0_0_15px_rgba(166,214,58,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(166,214,58,0.6)]"
              >
                <span>Visitar sitio online</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={12}>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/40 bg-[#081826]/70 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#A6D63A] hover:bg-[#A6D63A] hover:text-[#081826]"
              >
                <span>Quiero algo así</span>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* PORTADA */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
          <div className="relative aspect-video w-full bg-slate-900">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081826]/60 via-transparent to-transparent" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* FUNCIONALIDADES */}
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-xl font-extrabold text-white">
              Funcionalidades principales
            </h2>
            <ul className="mt-6 space-y-3.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A6D63A]" />
                  <span className="text-sm leading-relaxed text-slate-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {project.results && project.results.length > 0 ? (
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#A6D63A]">
                  <TrendingUp className="h-4 w-4" />
                  Resultados
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {project.results.map((result) => (
                    <li key={result} className="text-sm text-slate-200">
                      • {result}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* FICHA */}
          <aside className="h-fit rounded-[24px] border border-white/10 bg-[#081826]/80 p-8 backdrop-blur-md">
            <h2 className="text-xl font-extrabold text-white">
              Ficha del proyecto
            </h2>

            {meta.length > 0 ? (
              <dl className="mt-6 space-y-4">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#A6D63A]/30 bg-[#A6D63A]/10 text-[#A6D63A]">
                      <m.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {m.label}
                      </dt>
                      <dd className="text-sm font-semibold text-white">
                        {m.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Próximamente: año, cliente y rol del proyecto.
              </p>
            )}

            {project.technologies && project.technologies.length > 0 ? (
              <div className="mt-6 border-t border-white/10 pt-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Tecnologías
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3 py-1 text-xs font-semibold text-[#A6D63A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>

        {/* GALERÍA */}
        {project.gallery && project.gallery.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-xl font-extrabold text-white">Galería</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <div
                  key={img}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - captura`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* ANTERIOR / SIGUIENTE */}
        <nav className="mt-14 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
          <Link
            href={`/proyectos/${prev.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-[#A6D63A]/40"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              ← Anterior
            </span>
            <span className="mt-1 block font-bold text-white group-hover:text-[#A6D63A]">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/proyectos/${next.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-right backdrop-blur-md transition-all hover:border-[#A6D63A]/40"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Siguiente →
            </span>
            <span className="mt-1 flex items-center justify-end gap-2 font-bold text-white group-hover:text-[#A6D63A]">
              {next.title}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </nav>
      </main>
      <WhatsappFloat />
      <Footer />
    </div>
  );
}
