import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-[#06131d] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-[0.2em] text-[#A6D63A] uppercase">
              CodeMax.Dev
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Desarrollo de sitios web para negocios que quieren
              destacar y vender mejor.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Links rápidos</p>
              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <Link href="#servicios" className="block hover:text-white">
                  Servicios
                </Link>
                <Link href="#proyectos" className="block hover:text-white">
                  Proyectos
                </Link>
                <Link href="#contacto" className="block hover:text-white">
                  Contacto
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Contacto</p>
              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <a
                  href="mailto:maximiliano@codemas.dev"
                  className="block hover:text-white"
                >
                  maximiliano@codemas.dev
                </a>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 CodeMax.Dev. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
