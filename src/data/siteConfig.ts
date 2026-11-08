export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  siteName: string;
  author: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  gaId: string;
  bookTitle: string;
  bookSubtitle: string;
  bookUrl: string;
  bookHotmartUrl: string;
  coachingPrice: string;
  contactEmail: string;
  whatsappNumber: string;
  whatsappUrl: string;
  whatsappConsultationUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  navLinks: NavLink[];
}

export const siteConfig: SiteConfig = {
  siteName: "Pablo Candela",
  author: "Pablo Candela",
  siteUrl: "https://pablocandela.com", // Cuando esté el dominio definitivo
  defaultTitle: "Pablo Candela | Coaching Ontológico para Liderar",
  defaultDescription: "Desarrollo de auto-liderazgo y gestión humana para mandos medios en entornos empresariales. Del coaching a la gestión efectiva de equipos.",
  gaId: "[GA_ID]",
  bookTitle: "Si la vida te da la espalda... Tocale el culo",
  bookSubtitle: "Un espacio para repensar cómo nos paramos frente a la vida, con menos culpa y más actitud. Una charla con mates, anécdotas reales y una dosis de humor para quienes se animan a mirar sus derrotas con una sonrisa.",
  bookUrl: "https://si-la-vida-te-da-la-espalda.vercel.app/",
  bookHotmartUrl: "https://si-la-vida-te-da-la-espalda.vercel.app/",
  coachingPrice: "A convenir",
  contactEmail: "candelapablo85@gmail.com",
  whatsappNumber: "+54 336 4012374",
  whatsappUrl: "https://wa.me/543364012374?text=Quiero%20tener%20mi%20sesi%C3%B3n%20...",
  whatsappConsultationUrl: "https://wa.me/543364012374?text=Hola%20Pablo,%20quiero%20coordinar%20una%20consulta%20de%20coaching",
  linkedinUrl: "https://www.linkedin.com/in/pablo-candela-coach/",
  instagramUrl: "https://www.instagram.com/pablocandela.coach/?hl=es-la",
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Coaching", href: "/coaching" },
    { label: "Libro", href: "https://si-la-vida-te-da-la-espalda.vercel.app/", external: true },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};
