import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LOCALE,
  SITE_LOCATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { faqItems } from "@/data/faq";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const OG_TITLE = `Diseño Web Profesional para Negocios | ${SITE_NAME}`;
const OG_IMAGE = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: OG_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: OG_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Diseño y desarrollo web profesional`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#negocio`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      email: SITE_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_LOCATION,
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#sitio`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: SITE_LOCALE,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative min-h-full flex flex-col bg-[#081826] font-sans text-white selection:bg-[#A6D63A] selection:text-[#081826]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <ScrollProgress />
          <div className="noise-overlay" aria-hidden="true" />
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
            <div className="animate-aurora absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#A6D63A]/15 blur-[140px]" />
            <div className="animate-aurora absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px] [animation-delay:-6s]" />
          </div>

          {/* Contenido principal sobre el fondo */}
          <div className="relative z-10 flex min-h-full flex-col">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
