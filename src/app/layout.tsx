import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codemaxdev-sigma.vercel.app"),

  title: "CodeMáx.Dev | Desarrollo Web.",

  description:
    "Diseño y desarrollo páginas web profesionales para negocios, emprendedores y profesionales. Landing pages, sitios institucionales y tiendas online.",

  keywords: [
    "desarrollo web",
    "diseño web",
    "páginas web",
    "landing page",
    "sitios web",
    "tiendas online",
    "desarrollador web",
    "Next.js",
    "React",
  ],

  openGraph: {
    title: "CodeMáx.Dev | Desarrollo Web.",
    description:
      "Diseño y desarrollo páginas web profesionales para negocios, emprendedores y profesionales.",
    type: "website",
    url: "https://codemaxdev-sigma.vercel.app",
    siteName: "CodeMáx.Dev",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative min-h-full flex flex-col bg-[#081826] text-white selection:bg-[#A6D63A] selection:text-[#081826]">
        <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden">
          {/* Patrón de rejilla con visibilidad aumentada y degradé vertical */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Luces Neón de Fondo */}
          <div className="absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#A6D63A]/15 blur-[140px]" />
          <div className="absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
        </div>

        {/* Contenido principal sobre el fondo */}
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
