"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas enfocadas en convertir visitas en clientes con mensajes claros y llamados a la acción precisos.",
    icon: "01",
  },
  {
    title: "Sitios Institucionales",
    description:
      "Presencia profesional para negocios que necesitan confianza, autoridad y una imagen sólida online.",
    icon: "02",
  },
  {
    title: "Catálogo de Productos",
    description:
      "Experiencias atractivas para mostrar productos con una navegación simple y atractiva.",
    icon: "03",
  },
  {
    title: "Portfolios",
    description:
      "Diseños elegantes para destacar tu trabajo con una identidad visual potente y memorable.",
    icon: "04",
  },
  {
    title: "Hoteles",
    description:
      "Herramientas visuales y funcionales para mostrar habitaciones, servicios y reservas con fluidez.",
    icon: "05",
  },
  {
    title: "Veterinarias",
    description:
      "Paginas pensadas para generar confianza y facilitar la comunicación con nuevos clientes.",
    icon: "06",
  },
  {
    title: "Emprendimientos",
    description:
      "Soluciones rápidas y escalables para startups y negocios en crecimiento.",
    icon: "07",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
          Servicios
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Soluciones pensadas para vender mejor y comunicar con claridad.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <motion.article
            key={service.title}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A6D63A]/15 text-lg font-semibold text-[#A6D63A]">
              {service.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {service.description}
            </p>
            <Link
              href="#contacto"
              className="mt-6 inline-flex text-sm font-semibold text-[#A6D63A] transition hover:text-lime-300"
            >
              Solicitar presupuesto →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
