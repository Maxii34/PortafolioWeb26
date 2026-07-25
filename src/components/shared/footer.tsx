import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06131d] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <div className="max-w-sm">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#A6D63A]">
            CodeMax.Dev
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Desarrollo de sitios web para negocios que quieren destacar y
            vender mejor.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-slate-500">
          © 2026 CodeMax.Dev. Todos los derechos reservados.
        </p>

        <p className="mt-2 text-xs tracking-wide text-slate-600">
          Versión <span className="font-medium text-slate-400">v1.3.0</span>
          <span className="mx-2">•</span>
          Última actualización:{" "}
          <span className="text-slate-400">25 de julio de 2026</span>
        </p>
      </div>
    </footer>
  );
}