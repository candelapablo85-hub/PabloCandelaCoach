export interface SiteConfig {
  siteName: string;
  author: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  gaId: string;
  bookTitle: string;
  bookSubtitle: string;
  bookHotmartUrl: string;
  coachingPrice: string;
  contactEmail: string;
  whatsappUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  oldVercelUrl: string;
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  siteName: "Pablo Candela",
  author: "Pablo Candela",
  siteUrl: "https://pablocandela.com", // [DOMINIO]: Reemplazar con tu dominio oficial (ej: https://pablocandela.com)
  defaultTitle: "Pablo Candela | Coaching Ontológico y de Negocios para Líderes Industriales",
  defaultDescription: "Acompañamiento especializado a líderes y supervisores de industria. Desarrollá liderazgo operativo, comunicación efectiva y gestión de equipos en planta. Autor de 'Si la vida te da la espalda...'",
  gaId: "[GA_ID]", // Reemplazar con tu ID de Google Analytics (ej: G-XXXXXXXXXX)
  bookTitle: "Si la vida te da la espalda...",
  bookSubtitle: "Herramientas de liderazgo y transformación personal desde la trinchera industrial",
  bookHotmartUrl: "[URL_HOTMART]", // Reemplazar con tu link de compra en Hotmart
  coachingPrice: "[PRECIO]", // Reemplazar con el precio y modalidad del programa
  contactEmail: "[EMAIL_CONTACTO]", // Reemplazar con tu email de contacto
  whatsappUrl: "https://wa.me/[WHATSAPP_NUMERO]?text=Hola%20Pablo,%20quiero%20coordinar%20una%20consulta%20de%20coaching",
  linkedinUrl: "https://www.linkedin.com/in/[LINKEDIN_PERFIL]",
  instagramUrl: "https://www.instagram.com/[INSTAGRAM_USUARIO]",
  oldVercelUrl: "si-la-vida-te-da-la-espalda.vercel.app",
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Coaching", href: "/coaching" },
    { label: "Libro", href: "/libro" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};
