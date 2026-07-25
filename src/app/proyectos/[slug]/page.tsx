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
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-[#A6D63A] hover:text-[#A6D63A]"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
              {project.type}
            </p>

            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-8">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#A6D63A] px-6 py-3 font-semibold text-[#081826] transition hover:scale-105"
              >
                Ver proyecto
              </Link>
            </div>
          </div>

          <img
            src={project.cover}
            alt={project.title}
            className="h-[420px] w-full rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            Características
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[#081826]/70 p-4"
              >
                <span className="text-[#A6D63A]">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}