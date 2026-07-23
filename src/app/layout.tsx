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
  title: "CodeMás.Dev | Desarrollo web freelance premium",
  description:
    "Diseño y desarrollo de sitios web modernos para negocios, emprendedores y profesionales que quieren crecer con una presencia digital profesional.",
  keywords: ["desarrollo web", "freelance", "landing page", "sitios web", "Next.js"],
  openGraph: {
    title: "CodeMás.Dev | Desarrollo web freelance premium",
    description:
      "Diseño y desarrollo de sitios web modernos para negocios, emprendedores y profesionales.",
    type: "website",
    url: "https://codemas.dev",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#081826] text-white">{children}</body>
    </html>
  );
}
