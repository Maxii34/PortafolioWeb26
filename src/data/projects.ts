export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  cover: string;
  features: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: "dogtor-veterinaria",
    title: "Dogtor Veterinaria",
    type: "Sistema de gestión",
    description:
      "Una plataforma diseñada para clínicas veterinarias que permite administrar turnos, pacientes e historias clínicas desde un solo lugar, simplificando el trabajo diario del equipo.",
    cover: "/img/dot01.png",
    link: "https://dogtorveterinaria.netlify.app/",
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
    cover: "/img/hotel01.png",
    link: "https://sintaxhotelv2max.netlify.app/",
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
    type: "Sitio web de recetas",
    description:
      "Sitio pensado para publicar recetas y contenido gastronómico con una administración sencilla que permite actualizar información rápidamente.",
    cover: "/img/receta01.png",
    link: "https://blogderecetasmax.netlify.app/",
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
    cover: "/img/pet01.png",
    description:
      "Un e-commerce desarrollado para facilitar la venta de productos para mascotas, con una experiencia de compra rápida y un catálogo organizado.",
    link: "https://petshop-v2-apolo.netlify.app/",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Filtros por categorías",
      "Panel de administración",
    ],
  },

  {
    slug: "lorepelu-turnos",
    title: "LorePelu Turnos",
    type: "Sistema de gestión",
    description:
      "Una plataforma pensada para peluquerías que permite reservar turnos online, administrar servicios y gestionar comentarios de clientes desde un panel simple e intuitivo.",
    cover: "/img/pelulore.png",
    link: "https://sistematurnospl.netlify.app/",
    features: [
      "Reserva de turnos online",
      "Gestión de servicios",
      "Panel administrativo por roles",
      "Comentarios y valoraciones de clientes",
    ],
  },
];