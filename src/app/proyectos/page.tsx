import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import Footer from "@/components/shared/footer";
import { WhatsappFloat } from "@/components/shared/whatsapp-float";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsExplorer } from "./projects-explorer";

export const metadata: Metadata = {
  title: "Trabajos realizados",
  description:
    "Conocé los proyectos que impulsan negocios reales: sistemas de gestión, tiendas online y sitios web profesionales.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-10 lg:pt-40">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-[#A6D63A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <SectionHeading
          className="mt-6"
          eyebrow="Trabajos realizados"
          title="Proyectos que impulsan"
          highlight="negocios reales."
          description="Cada trabajo fue diseñado para convertir visitas en clientes. Filtrá por categoría y descubrí el detalle de cada caso."
        />

        <div className="mt-10">
          <ProjectsExplorer />
        </div>
      </main>
      <WhatsappFloat />
      <Footer />
    </div>
  );
}
