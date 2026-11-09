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
  siteUrl: "https://pablocandelacoach.vercel.app",
  defaultTitle: "Pablo Candela | Coaching Ontológico para Liderar",
  defaultDescription: "Desarrollo de auto-liderazgo y gestión humana para mandos medios en entornos empresariales. Del coaching a la gestión efectiva de equipos.",
  gaId: "[GA_ID]",
  bookTitle: "Si la vida te da la espalda...Tocale el culo",
  bookSubtitle: "Un espacio para repensar cómo nos paramos frente a la vida, con menos culpa y más actitud. Una charla con mates, anécdotas reales y una dosis de humor para quienes se animan a mirar sus derrotas con una sonrisa.",
  bookUrl: "https://si-la-vida-te-da-la-espalda.vercel.app/",
  bookHotmartUrl: "https://si-la-vida-te-da-la-espalda.vercel.app/",
  coachingPrice: "A convenir",
  contactEmail: "candelapablo85@gmail.com",
  whatsappNumber: "+54 336 4012374",
  whatsappUrl: "https://wa.me/543364012374?text=Hola%20Pablo%2C%20quiero%20consultar%20por%20....",
  whatsappConsultationUrl: "https://wa.me/543364012374?text=Hola%20Pablo%2C%20quiero%20consultar%20por%20....",
  linkedinUrl: "https://www.linkedin.com/in/pablo-candela-coach/",
  instagramUrl: "https://www.instagram.com/pablocandela.coach/?hl=es-la",
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Coaching", href: "/coaching" },
    { label: "Autoliderazgo", href: "/coaching/autoliderazgo" },
    { label: "Emprendedores", href: "/coaching/emprendedores" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};
