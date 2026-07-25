export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  cover: string;
  gallery: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "dogtor-veterinaria",
    title: "Dogtor Veterinaria",
    type: "Sistema de gestión",
    description:
      "Una plataforma diseñada para clínicas veterinarias que permite administrar turnos, pacientes e historias clínicas desde un solo lugar, simplificando el trabajo diario del equipo.",
    cover: "/img/Dog1.png",
    gallery: ["/img/Dog1.png", "/img/Dog2.png", "/img/Dog3.png"],
    features: [
      "Gestión de turnos",
      "Administración de pacientes",
      "Historias clínicas digitales",
      "Panel intuitivo y fácil de usar",
    ],
  },

  {
    slug: "sintax-hotel",
    title: "Sintax Hotel",
    type: "Sistema para hoteles",
    description:
      "Una solución para hoteles que facilita la administración de reservas, habitaciones y huéspedes mediante una interfaz clara y organizada.",
    cover: "/img/Sintax01.png",
    gallery: ["/img/Sintax01.png", "/img/Sintax02.png", "/img/Sintax03.png"],
    features: [
      "Gestión de reservas",
      "Control de habitaciones",
      "Administración de huéspedes",
      "Panel administrativo",
    ],
  },

  {
    slug: "blog-recetas",
    title: "Blog de Recetas",
    type: "Blog profesional",
    description:
      "Sitio pensado para publicar recetas y contenido gastronómico con una administración sencilla que permite actualizar información rápidamente.",
    cover: "/img/Tarta1.png",
    gallery: [
      "/img/Tarta1.png",
      "/img/Tarta2.png",
      "/img/Tarta3.png",
      "/img/Tarta4.png",
    ],
    features: [
      "Publicación de recetas",
      "Panel de administración",
      "Buscador de contenido",
      "Diseño adaptable a celulares",
    ],
  },

  {
    slug: "apolo-petshop",
    title: "Apolo PetShop",
    type: "Tienda online",
    description:
      "Un e-commerce desarrollado para facilitar la venta de productos para mascotas, con una experiencia de compra rápida y un catálogo organizado.",
    cover: "/img/Apolo01.png",
    gallery: [
      "/img/Apolo01.png",
      "/img/Apolo02.png",
      "/img/Apolo03.png",
      "/img/Apolo04.png",
      "/img/Apolo05.png",
      "/img/Apolo06.png",
    ],
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Filtros por categorías",
      "Panel de administración",
    ],
  },
];
