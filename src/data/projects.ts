export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  cover: string;
  gallery: string[];
  features: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "petshop",
    title: "PetShop Premium",
    type: "Catálogo de productos",
    description:
      "Una tienda online elegante para un pet shop que necesitaba destacar sus productos y servicios con una propuesta premium.",
    cover:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Diseño premium y visual",
      "Catálogo con enfoque comercial",
      "Sección de contacto y WhatsApp",
      "Optimizado para dispositivos móviles",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "veterinaria",
    title: "Clínica Veterinaria",
    type: "Sitio institucional",
    description:
      "Un sitio institucional pensado para transmitir confianza, mostrar servicios y facilitar contacto para nuevas consultas.",
    cover:
      "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Experiencia cálida y profesional",
      "Sección de servicios y turnos",
      "Diseño limpio y accesible",
      "Alta velocidad de carga",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "hotel",
    title: "Hotel Boutique",
    type: "Sitio para hotel",
    description:
      "Un proyecto visual y elegante para mostrar habitaciones, experiencias y reservas con una estética premium.",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    features: [
      "Galería visual atractiva",
      "Diseño tipo marca premium",
      "Secciones para habitaciones y contacto",
      "Narrativa visual elegante",
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
];
