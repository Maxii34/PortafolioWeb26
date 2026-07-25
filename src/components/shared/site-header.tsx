import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081826]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="#inicio"
          className="text-lg font-semibold uppercase tracking-[0.2em] text-[#A6D63A]"
        >
          CodeMáx.Dev
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            href="#inicio"
            className="group relative text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#A6D63A]"
          >
            Inicio
            <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#A6D63A] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#sobre-mi"
            className="group relative text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#A6D63A]"
          >
            Sobre mí
            <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#A6D63A] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#servicios"
            className="group relative text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#A6D63A]"
          >
            Servicios
            <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#A6D63A] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#proyectos"
            className="group relative text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#A6D63A]"
          >
            Proyectos
            <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#A6D63A] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#contacto"
            className="rounded-full bg-[#A6D63A] px-5 py-2 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#A6D63A]/30"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
