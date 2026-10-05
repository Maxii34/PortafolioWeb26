"use client";

import Link from "next/link";
import { Building2, Rocket, ShoppingBag, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/cn";

const services = [
  {
    number: "01",
    title: "Landing Pages",
    description:
      "Páginas enfocadas en presentar un producto, servicio o campaña y generar consultas y nuevos clientes.",
    icon: Rocket,
    accent: "text-[#A6D63A]",
    tile: "border-[#A6D63A]/30 bg-[#A6D63A]/10",
  },
  {
    number: "02",
    title: "Sitios Web para Negocios",
    description:
      "Páginas profesionales para empresas, comercios y profesionales que quieren tener presencia online, mostrar sus servicios y facilitar el contacto con sus clientes.",
    icon: Building2,
    accent: "text-cyan-300",
    tile: "border-cyan-300/30 bg-cyan-300/10",
  },
  {
    number: "03",
    title: "Tiendas Online",
    description:
      "Sitios web para negocios que quieren mostrar y vender sus productos por internet, con una experiencia de compra moderna y adaptada a dispositivos móviles.",
    icon: ShoppingBag,
    accent: "text-emerald-300",
    tile: "border-emerald-300/30 bg-emerald-300/10",
  },
];

function BrowserBar() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
      <span className="h-2 w-2 rounded-full bg-red-400/70" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
      <span className="h-2 w-2 rounded-full bg-[#A6D63A]/70" />
      <span className="ml-3 h-4 flex-1 rounded-md bg-white/5" />
    </div>
  );
}

function LandingMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081826]/90">
      <BrowserBar />
      <div className="space-y-3 p-5">
        <div className="h-14 rounded-xl bg-gradient-to-r from-[#A6D63A]/50 via-emerald-300/30 to-cyan-400/40" />
        <div className="h-2.5 w-3/4 rounded-full bg-white/15" />
        <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
        <div className="h-8 w-28 rounded-full bg-[#A6D63A]" />
      </div>
    </div>
  );
}

function BusinessMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081826]/90">
      <BrowserBar />
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <div className="h-6 w-6 rounded-lg bg-cyan-300/50" />
          <div className="flex gap-2">
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="h-2 w-10 rounded-full bg-white/15" />
          </div>
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
          >
            <div className="h-8 w-8 shrink-0 rounded-lg bg-cyan-300/25" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-2/3 rounded-full bg-white/15" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoreMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081826]/90">
      <BrowserBar />
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-2.5"
            >
              <div className="h-12 rounded-lg bg-gradient-to-br from-emerald-300/30 to-cyan-400/20" />
              <div className="h-2 w-3/4 rounded-full bg-white/15" />
              <div className="h-5 w-14 rounded-full bg-[#A6D63A]/80" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mocks = [LandingMock, BusinessMock, StoreMock];

export function CoreServicesSection() {
  return (
    <section id="servicios-principales" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-12">
          <div className="animate-aurora pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#A6D63A]/10 blur-3xl" />

          <SectionHeading
            eyebrow="Servicios principales"
            title="Elegí el sitio ideal"
            highlight="para tu negocio."
            description="Tres soluciones claras, pensadas para cada etapa: presentar, posicionar o vender."
          />

          <div className="mt-12 space-y-5">
            {services.map((service, index) => {
              const Mock = mocks[index];
              const flip = index % 2 === 1;
              return (
                <SpotlightCard key={service.number} index={index}>
                  <div className="grid items-center gap-8 lg:grid-cols-12">
                    {/* NÚMERO + TEXTO */}
                    <div
                      className={cn(
                        "flex gap-5 lg:col-span-7",
                        flip && "lg:order-2"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="font-display hidden text-6xl font-bold leading-none text-white/10 transition-colors duration-300 group-hover:text-[#A6D63A]/25 sm:block lg:text-7xl"
                      >
                        {service.number}
                      </span>
                      <div>
                        <div
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105",
                            service.tile
                          )}
                        >
                          <service.icon
                            className={cn("h-6 w-6", service.accent)}
                          />
                        </div>
                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                          Servicio {service.number}
                        </p>
                        <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* DETALLE VISUAL */}
                    <div
                      className={cn(
                        "lg:col-span-5",
                        flip && "lg:order-1"
                      )}
                    >
                      <div className="transition-transform duration-500 group-hover:-translate-y-1">
                        <Mock />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-10 text-center">
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">
              ¿Necesitás una solución diferente?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Cada proyecto se adapta a las necesidades específicas de tu
              negocio.
            </p>
            <MagneticButton className="mt-6">
              <Link
                href="#contacto"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A6D63A] via-[#beff2d] to-[#A6D63A] px-8 py-3.5 text-sm font-bold text-[#081826] shadow-[0_0_15px_rgba(166,214,58,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(166,214,58,0.6)]"
              >
                <span className="animate-shimmer pointer-events-none absolute inset-0 -top-[100%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <span className="relative z-10">Hablar sobre mi proyecto</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
