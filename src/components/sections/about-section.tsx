import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export function AboutSection() {
  const portafolioDev = process.env.NEXT_PUBLIC_PORTAFOLIODEV_URL;

  return (
    <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Contenido */}
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
              # Sobre mí
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Hola, soy Maximiliano Ordoñez.
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={portafolioDev}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-4 py-2 text-sm font-medium text-[#A6D63A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A6D63A] hover:bg-[#A6D63A]/20"
              >
                <FaLaptopCode />
                Full Stack Developer
                <FaCode className="text-base" />
              </a>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Soy desarrollador web especializado en crear sitios modernos,
              rápidos y adaptables para pequeños negocios, emprendedores y
              empresas. Mi objetivo es ayudarte a transmitir una imagen
              profesional en Internet mediante páginas web atractivas,
              optimizadas y fáciles de usar.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              No vendo solamente una página. Ayudo a que tu negocio tenga una
              presencia profesional y confiable desde el primer contacto.
            </p>
          </div>

          {/* Imagen */}
          <div className="mx-auto shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#A6D63A]/20 blur-3xl" />

              <img
                src="Miperfil.jpeg"
                alt="Maximiliano desarrollando sitios web"
                className="relative h-[260px] w-[260px] rounded-full border-4 border-[#A6D63A]/20 object-cover shadow-[0_25px_80px_rgba(0,0,0,0.35)] lg:h-[300px] lg:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
