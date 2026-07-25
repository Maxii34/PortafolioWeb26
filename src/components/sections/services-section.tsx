"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas diseñadas para captar clientes, promocionar un servicio o lanzar un producto con un objetivo claro: generar más consultas y ventas.",
    icon: "01",
  },
  {
    title: "Sitios Institucionales",
    description:
      "Transmití una imagen profesional y generá confianza con un sitio web que refleje la calidad y seriedad de tu empresa.",
    icon: "02",
  },
  {
    title: "Catálogo de Productos",
    description:
      "Mostrá tus productos de forma organizada y atractiva para que tus clientes encuentren fácilmente lo que buscan.",
    icon: "03",
  },
  {
    title: "Portfolios Profesionales",
    description:
      "Destacá tus proyectos, experiencia y habilidades con un portfolio moderno que genere una excelente primera impresión.",
    icon: "04",
  },
  {
    title: "Webs para Emprendedores",
    description:
      "Una solución moderna para impulsar tu negocio desde Internet y empezar a atraer clientes desde el primer día.",
    icon: "05",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
    >
      <div className="max-w-2xl">
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Diseño y desarrollo de páginas web que ayudan a tu negocio a crecer.
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
          Cada proyecto está pensado para transmitir confianza, destacar tu
          marca y convertir visitantes en potenciales clientes.
        </p>
      </div>


      {/* Desktop */}
      <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
          />
        ))}
      </div>


      {/* Mobile Carousel */}
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 lg:hidden">
        {services.map((service) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="min-w-[85%] snap-center"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-slate-400 lg:hidden">
        Desliza para ver más servicios →
      </p>

    </section>
  );
}


function ServiceCard({
  service,
}: {
  service: {
    title: string;
    description: string;
    icon: string;
  };
}) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      className="h-full rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#A6D63A]/30"
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
    </motion.article>
  );
}