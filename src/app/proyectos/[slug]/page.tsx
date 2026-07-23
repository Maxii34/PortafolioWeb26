import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "No se encontró el proyecto solicitado.",
    };
  }

  return {
    title: `${project.title} | CodeMás.Dev`,
    description: project.description,
    openGraph: {
      title: `${project.title} | CodeMás.Dev`,
      description: project.description,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#081826] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <Link href="/" className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-[#A6D63A] hover:text-[#A6D63A]">
          ← Volver al inicio
        </Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">{project.type}</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <img src={project.cover} alt={project.title} className="h-[420px] w-full rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.25)]" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <img src={image} alt={`${project.title} vista ${index + 1}`} className="h-72 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 rounded-[40px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Características</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-[#081826]/70 p-3">
                  <span className="text-[#A6D63A]">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Tecnologías usadas</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.technologies.map((tech) => (
                <div key={tech} className="rounded-[24px] border border-white/10 bg-[#081826]/70 p-5 text-center text-lg font-semibold text-white">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
