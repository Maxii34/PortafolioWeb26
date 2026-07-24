import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081826]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#inicio" className="text-lg font-semibold uppercase tracking-[0.2em] text-[#A6D63A]">
          CodeMáx.Dev
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="#inicio" className="transition hover:text-white">Inicio</Link>
          <Link href="#sobre-mi" className="transition hover:text-white">Sobre mí</Link>
          <Link href="#servicios" className="transition hover:text-white">Servicios</Link>
          <Link href="#proyectos" className="transition hover:text-white">Proyectos</Link>
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
  );
}
