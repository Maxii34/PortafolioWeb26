"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

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

const benefits = [
  { title: "Diseño moderno", description: "Interfaces premium que transmiten calidad y elegancia." },
  { title: "Responsive", description: "Todo se ve perfecto en celular, tablet y notebook." },
  { title: "Optimización para Google", description: "Estructura preparada para posicionar mejor tu negocio." },
  { title: "WhatsApp integrado", description: "Facilitamos que tus clientes te contacten de forma directa." },
  { title: "Hosting y dominio", description: "Te acompañamos desde la publicación hasta la gestión básica." },
  { title: "Carga rápida", description: "Velocidad y rendimiento para una mejor experiencia de usuario." },
  { title: "Sitios seguros", description: "Aplicamos buenas prácticas para tranquilidad y confianza." },
  { title: "Fácil administración", description: "Panel simple para actualizar textos, imágenes y contenidos." },
];

const processSteps = [
  { title: "Contame tu idea", description: "Conversamos sobre tus objetivos, público y tono de marca." },
  { title: "Diseño la propuesta", description: "Armamos estructura, estética y contenidos para tu proyecto." },
  { title: "Desarrollo la página", description: "Construimos la web con foco en rendimiento, claridad y conversión." },
  { title: "La publicamos", description: "La dejamos lista para que tu negocio empiece a crecer." },
];

const faqItems = [
  {
    question: "¿Cuánto tarda crear una web?",
    answer:
      "Depende del alcance, pero en general entregamos un proyecto inicial en un rango de 7 a 15 días hábiles.",
  },
  {
    question: "¿Necesito comprar un dominio?",
    answer:
      "No es obligatorio desde el inicio, pero sí te recomendamos tenerlo para que la web se vea más profesional." ,
  },
  {
    question: "¿Puedo modificar la página después?",
    answer:
      "Sí. Diseñamos sitios fáciles de actualizar para que puedas cambiar textos, fotos o servicios cuando lo necesites.",
  },
  {
    question: "¿Se adapta al celular?",
    answer:
      "Por supuesto. Cada proyecto se desarrolla con una experiencia móvil cuidada y responsive desde el comienzo.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "El precio varía según la complejidad, la cantidad de páginas y las funcionalidades. Puedo armar una propuesta acorde a tu presupuesto.",
  },
];

const stats = [
  { value: "+10", label: "proyectos realizados" },
  { value: "100%", label: "responsive" },
  { value: "<2s", label: "carga rápida" },
  { value: "SEO", label: "optimizado" },
];

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#081826] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081826]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="#inicio" className="text-lg font-semibold tracking-[0.2em] text-[#A6D63A] uppercase">
            CodeMás.Dev
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="#inicio" className="transition hover:text-white">Inicio</Link>
            <Link href="#servicios" className="transition hover:text-white">Servicios</Link>
            <Link href="#proyectos" className="transition hover:text-white">Proyectos</Link>
            <Link href="#sobre-mi" className="transition hover:text-white">Sobre mí</Link>
            <Link href="#contacto" className="transition hover:text-white">Contacto</Link>
          </nav>
          <Link
            href="#contacto"
            className="rounded-full bg-[#A6D63A] px-4 py-2 text-sm font-semibold text-[#081826] transition hover:scale-[1.02]"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-6 inline-flex rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-4 py-2 text-sm font-medium text-[#A6D63A]">
              Desarrollo web premium para negocios que quieren crecer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Tu negocio merece una página web profesional.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Diseño de sitios web modernos para emprendedores, negocios y profesionales que quieren transmitir confianza y conseguir más clientes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contacto" className="rounded-full bg-[#A6D63A] px-6 py-3 text-center font-semibold text-[#081826] transition hover:scale-[1.02]">
                Solicitar presupuesto
              </Link>
              <Link href="#proyectos" className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-[#A6D63A] hover:text-[#A6D63A]">
                Ver proyectos
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-semibold text-[#A6D63A]">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#A6D63A]/20 blur-3xl" />
            <div className="absolute bottom-8 right-0 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="rounded-[24px] border border-white/10 bg-[#081826] p-4">
                <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A6D63A]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Preview</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.8fr]">
                  <div className="rounded-[24px] border border-white/10 bg-slate-950/80 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">The Studio</p>
                        <p className="text-xs text-slate-400">Landing page premium</p>
                      </div>
                      <div className="rounded-full bg-[#A6D63A]/20 px-3 py-1 text-xs text-[#A6D63A]">Nuevo</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-24 rounded-[18px] bg-gradient-to-r from-[#A6D63A]/30 to-cyan-500/10" />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="h-16 rounded-[16px] border border-white/10 bg-white/5" />
                        <div className="h-16 rounded-[16px] border border-white/10 bg-white/5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Celular</p>
                      <div className="mx-auto mt-4 h-48 w-28 rounded-[24px] border border-white/10 bg-slate-950 p-2">
                        <div className="h-full rounded-[18px] bg-gradient-to-b from-white/10 to-transparent p-3 text-center">
                          <div className="mx-auto mb-3 h-2 w-12 rounded-full bg-white/20" />
                          <div className="h-10 rounded-[12px] bg-[#A6D63A]/20" />
                          <div className="mt-3 h-12 rounded-[12px] bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-10 rounded-[40px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#A6D63A]/30 to-transparent blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                alt="Maximiliano desarrollando sitios web"
                className="relative h-[420px] w-full rounded-[32px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Sobre mí</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Hola, soy Maximiliano.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Soy desarrollador web especializado en crear sitios modernos, rápidos y adaptables para pequeños negocios, emprendedores y empresas. Mi objetivo es ayudarte a transmitir una imagen profesional en Internet mediante páginas web atractivas, optimizadas y fáciles de usar.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                No vendo solamente una página. Ayudo a que tu negocio tenga una presencia profesional y confiable desde el primer contacto.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Comunicación directa",
                  "Atención personalizada",
                  "Diseño moderno",
                  "Sitios rápidos",
                  "Compatible con celulares",
                  "Enfoque en resultados",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#081826]/70 p-3 text-sm text-slate-300">
                    <span className="text-[#A6D63A]">✔</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Servicios</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Soluciones pensadas para vender mejor y comunicar con claridad.</h2>
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
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <Link href="#contacto" className="mt-6 inline-flex text-sm font-semibold text-[#A6D63A] transition hover:text-lime-300">
                  Solicitar presupuesto →
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Beneficios</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Todo lo que necesitas para lanzar una web profesional sin complicaciones.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[24px] border border-white/10 bg-[#081826]/70 p-5">
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-[#A6D63A]/15" />
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Proyectos</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Diseños que combinan estética, claridad y conversión.</h2>
            </div>
            <Link href="#contacto" className="text-sm font-semibold text-[#A6D63A] transition hover:text-lime-300">
              Quiero algo similar →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.slug}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
              >
                <img src={project.cover} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#A6D63A]">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  <Link href={`/proyectos/${project.slug}`} className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#A6D63A] hover:text-[#A6D63A]">
                    Ver proyecto
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Cómo trabajamos</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Un proceso simple, claro y pensado para que avances con tranquilidad.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative rounded-[24px] border border-white/10 bg-[#081826]/70 p-6">
                  {index < processSteps.length - 1 ? <div className="absolute -right-3 top-8 hidden h-px w-6 bg-[#A6D63A]/40 lg:block" /> : null}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A6D63A]/15 text-sm font-semibold text-[#A6D63A]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Testimonios</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Sección preparada para mostrar resultados reales y confianza.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Cliente demo",
                role: "Profesional independiente",
                quote: "“Esta sección está preparada para sumar testimonios reales cuando llegue el momento.”",
              },
              {
                name: "Negocio demo",
                role: "Emprendimiento local",
                quote: "“El contenido de ejemplo permite mostrar la estructura antes de incorporar feedback real.”",
              },
              {
                name: "Marca demo",
                role: "Pequeña empresa",
                quote: "“Una presentación limpia y profesional ayuda mucho a generar confianza desde el inicio.”",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-8 text-slate-300">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Preguntas frecuentes</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Todo lo que suele surgir antes de comenzar.</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.question} className="rounded-[24px] border border-white/10 bg-[#081826]/70 p-5">
                    <button
                      className="flex w-full items-center justify-between text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="text-lg font-semibold text-white">{item.question}</span>
                      <span className="text-2xl text-[#A6D63A]">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-8 rounded-[40px] border border-[#A6D63A]/20 bg-gradient-to-br from-[#A6D63A]/10 to-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">¿Listo para tener tu página web?</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Hablemos sobre tu negocio, tus objetivos y la mejor forma de convertir tu presencia online en una ventaja real.
              </p>
              <form className="mt-8 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Nombre" />
                  <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Correo" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Teléfono" />
                  <input className="rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Negocio" />
                </div>
                <textarea className="min-h-32 rounded-2xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm outline-none ring-0" placeholder="Contame tu idea" />
                <button className="w-fit rounded-full bg-[#A6D63A] px-6 py-3 font-semibold text-[#081826] transition hover:scale-[1.02]">
                  Solicitar presupuesto
                </button>
              </form>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#081826]/70 p-6">
              <h3 className="text-xl font-semibold text-white">Conectemos</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
                  WhatsApp
                </a>
                <a href="mailto:maximiliano@codemas.dev" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
                  maximiliano@codemas.dev
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#A6D63A]">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition hover:scale-105"
      >
        ☎
      </a>

      <footer className="border-t border-white/10 bg-[#06131d] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-[0.2em] text-[#A6D63A] uppercase">CodeMás.Dev</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Desarrollo de sitios web premium para negocios que quieren destacar y vender mejor.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Links rápidos</p>
              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <Link href="#servicios" className="block hover:text-white">Servicios</Link>
                <Link href="#proyectos" className="block hover:text-white">Proyectos</Link>
                <Link href="#contacto" className="block hover:text-white">Contacto</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Contacto</p>
              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <a href="mailto:maximiliano@codemas.dev" className="block hover:text-white">maximiliano@codemas.dev</a>
                <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer" className="block hover:text-white">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 CodeMás.Dev. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
