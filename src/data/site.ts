// Centralized site data — single source of truth.
// Content adapted from Benzakani BTP corporate identity.

import heroConstruction from "@/assets/pdf-cover.jpg";
import textureConcrete from "@/assets/pdf-ouvrage.jpg";
import projectVilla from "@/assets/pdf-villa.jpg";
import projectInterior from "@/assets/pdf-projet-residential.jpg";
import teamBlueprint from "@/assets/pdf-equipe.jpg";
import serviceGros from "@/assets/pdf-elevation.jpg";
import serviceSecond from "@/assets/pdf-second-oeuvre.jpg";
import serviceFin from "@/assets/pdf-finitions-sol.jpg";
import pdfCover from "@/assets/pdf-cover.jpg";
import pdfProjetFacade from "@/assets/pdf-projet-facade.jpg";
import pdfProjetChantier from "@/assets/pdf-projet-chantier.jpg";
import pdfProjetResidential from "@/assets/pdf-projet-residential.jpg";
import pdfCoffrage from "@/assets/pdf-coffrage.jpg";
import pdfStructure from "@/assets/pdf-structure.jpg";
import pdfFondations from "@/assets/pdf-fondations.jpg";
import pdfStructureAvancee from "@/assets/pdf-structure-avancee.jpg";
import pdfChantierVue from "@/assets/pdf-chantier-vue.jpg";
import pdfOuvrage from "@/assets/pdf-ouvrage.jpg";
import pdfFerraillage from "@/assets/pdf-ferraillage.jpg";
import pdfDalle from "@/assets/pdf-dalle.jpg";
import pdfElevation from "@/assets/pdf-elevation.jpg";
import pdfFinitionsSol from "@/assets/pdf-finitions-sol.jpg";
import pdfCuisine from "@/assets/pdf-cuisine.jpg";
import pdfMenuiserie from "@/assets/pdf-menuiserie.jpg";
import pdfEquipe from "@/assets/pdf-equipe.jpg";
import pdfSecondOeuvre from "@/assets/pdf-second-oeuvre.jpg";
import pdfVilla from "@/assets/pdf-villa.jpg";
import pdfReferences from "@/assets/pdf-references.jpg";

export interface Company {
  name: string;
  short: string;
  founded: number;
  founder: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  fax: string;
  website: string;
  hours: string;
  capital: string;
  rc: string;
  if_num: string;
  cnss: string;
  taux_satisfaction: string;
}

export const company: Company = {
  name: "Benzakani BTP",
  short: "Benzakani",
  founded: 2015,
  founder: "Yassine Sadouk",
  city: "Casablanca",
  address: "Centre d'affaires Tit Mellil N°53 ETG 2 N°8, Tit Mellil, Casablanca",
  email: "benzakani@gmail.com",
  phone: "06 61 55 74 30",
  fax: "05 22 51 05 69",
  website: "www.benzakani.ma",
  hours: "Lundi — Vendredi · 08h30 — 18h00",
  capital: "100 000 DH",
  rc: "4345",
  if_num: "15277278",
  cnss: "4233558",
  taux_satisfaction: "98%",
};

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "10", label: "années d'expertise" },
  { value: "16", label: "projets livrés" },
  { value: "32M", label: "dh de volume" },
  { value: "06", label: "clients institutionnels" },
  { value: "98%", label: "satisfaction client" },
];

export type ServiceSubGroup = {
  label: string;
  items: string[];
};

export type Service = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  scope: string[];
  /** Structured sub-service groups from the official PDF (domaines, lots, etc.) */
  groups?: ServiceSubGroup[];
  image: string;
  /** Descriptive alt text matching the actual photo content */
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "gros-oeuvre",
    index: "01",
    name: "Gros œuvre",
    tagline: "La structure qui tient le projet",
    description:
      "Construction d'immeubles d'habitation, de villas et de complexes résidentiels, du terrassement aux finitions, dans le respect des normes parasismiques.",
    scope: [
      "Études d'exécution & note de calcul",
      "Fondations isolées, semelles filantes, radier",
      "Béton armé : poteaux, poutres, voiles, planchers",
      "Maçonnerie en briques creuses & agglos",
      "Étanchéité de soubassement",
    ],
    groups: [
      {
        label: "Domaines",
        items: [
          "Bâtiments Résidentiels",
          "Bâtiments Industriels",
          "Ouvrages Fonctionnels",
        ],
      },
      {
        label: "Prestations",
        items: [
          "Terrassement & Fondations",
          "Structure Béton Armé (poteaux, poutres, dalles, voiles)",
          "Maçonnerie Générale",
        ],
      },
    ],
    image: serviceGros,
    imageAlt: "Élévation de structure béton armé en chantier — Benzakani BTP",
  },
  {
    id: "second-oeuvre",
    index: "02",
    name: "Second œuvre",
    tagline: "L'âme technique du bâtiment",
    description:
      "Nous assurons l'ensemble des lots techniques et architecturaux pour rendre vos bâtiments fonctionnels et confortables.",
    scope: [
      "Installation électrique CFO/CFA",
      "Plomberie sanitaire & évacuation",
      "Isolation thermique & acoustique",
      "Climatisation, ventilation, chauffage",
      "Menuiseries aluminium, bois, PVC",
    ],
    groups: [
      {
        label: "Électricité",
        items: [
          "Courants forts et faibles",
          "Éclairage",
          "Domotique et sécurité",
        ],
      },
      {
        label: "Plomberie & Sanitaire",
        items: [
          "Réseaux d'eau",
          "Évacuation",
          "Installation d'équipements sanitaires",
        ],
      },
      {
        label: "Climatisation & Ventilation",
        items: [
          "Solutions CVC performantes pour un confort thermique optimal",
        ],
      },
      {
        label: "Plâtrerie & Peinture",
        items: [
          "Cloisons",
          "Faux-plafonds",
          "Revêtements muraux soignés",
        ],
      },
    ],
    image: serviceSecond,
    imageAlt: "Travaux de second œuvre — installation technique en cours — Benzakani BTP",
  },
  {
    id: "finitions",
    index: "03",
    name: "Finitions & Aménagements",
    tagline: "La précision visible au quotidien",
    description:
      "Carrelage grand format, peinture, faux-plafonds, revêtements, ferronnerie. C'est ce que vos clients voient en premier — nous y appliquons le niveau d'exigence d'un atelier d'architecture.",
    scope: [
      "Carrelage, marbre, granito",
      "Enduits décoratifs, tadelakt, peinture",
      "Faux-plafonds plâtre & BA13",
      "Ferronnerie & garde-corps",
      "Réception, livraison, levée des réserves",
    ],
    groups: [
      {
        label: "Revêtements de Sol & Mur",
        items: [
          "Pose experte de marbre",
          "Carrelage grand format",
          "Faïence",
        ],
      },
      {
        label: "Cuisines & Sanitaires",
        items: [
          "Installation de cuisines modernes équipées",
          "Salles de bain haut de gamme",
        ],
      },
      {
        label: "Menuiserie & Agencement",
        items: [
          "Travaux de menuiserie bois et aluminium",
          "Placards et dressings sur mesure",
        ],
      },
    ],
    image: serviceFin,
    imageAlt: "Finitions sol en marbre et carrelage grand format — Benzakani BTP",
  },
];

export interface Value {
  code: string;
  name: string;
  title: string;
  body: string;
  description: string;
}

export const values: Value[] = [
  {
    code: "V/01",
    name: "Excellence",
    title: "Excellence",
    body: "Viser la perfection dans chaque détail. Un ouvrage durable se reconnaît à ce qu'on ne voit pas.",
    description: "Nous visons la perfection dans chaque détail, garantissant des ouvrages durables et esthétiques.",
  },
  {
    code: "V/02",
    name: "Intégrité",
    title: "Intégrité",
    body: "Transparence sur les prix, les délais, les imprévus. Pas de surprise au moment de la facture finale.",
    description: "La transparence et l'honnêteté guident toutes nos relations avec nos clients, partenaires et collaborateurs.",
  },
  {
    code: "V/03",
    name: "Innovation",
    title: "Innovation",
    body: "Méthodes modernes de gestion de chantier, matériaux performants, suivi numérique.",
    description: "Nous adoptons les dernières technologies et méthodes de construction pour optimiser nos performances.",
  },
  {
    code: "V/04",
    name: "Respect",
    title: "Respect",
    body: "Du planning, de l'environnement, des riverains, et des hommes qui bâtissent l'ouvrage.",
    description: "Respect des délais, de l'environnement et des normes de sécurité pour un chantier responsable.",
  },
];

export const mission =
  "Notre mission est de bâtir des espaces de vie durables qui répondent aux exigences les plus élevées de nos clients.";

export interface PhilosophieItem {
  titre: string;
  texte: string;
}

export const philosophie: PhilosophieItem[] = [
  {
    titre: "Innovation Continue",
    texte:
      "Nous adoptons les dernières technologies et méthodes de construction pour garantir des résultats optimaux.",
  },
  {
    titre: "Engagement Qualité",
    texte:
      "Chaque projet est traité avec le plus grand soin, du premier coup de pioche à la livraison finale.",
  },
  {
    titre: "Proximité Client",
    texte:
      "Nous établissons une relation de confiance durable.",
  },
];

export interface PourquoiNousItem {
  num: string;
  titre: string;
  desc: string;
}

export const pourquoiNous: PourquoiNousItem[] = [
  {
    num: "01",
    titre: "Expertise Éprouvée",
    desc: "Des années d'expérience sur des projets complexes et variés, garantissant une maîtrise technique sans faille.",
  },
  {
    num: "02",
    titre: "Respect des Engagements",
    desc: "Une gestion rigoureuse des plannings et des budgets pour une livraison conforme à vos attentes.",
  },
  {
    num: "03",
    titre: "Qualité Supérieure",
    desc: "Sélection des meilleurs matériaux et contrôle qualité strict à chaque étape de la construction.",
  },
  {
    num: "04",
    titre: "Service Client Dédié",
    desc: "Une écoute active et un accompagnement personnalisé tout au long de votre projet.",
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  location: string;
  category: "Résidentiel" | "Promotion" | "Institutionnel" | "Rénovation";
  surface: string;
  levels: string;
  year: number;
  status: "Livré" | "En cours";
  image: string;
};

export const projects: Project[] = [
  // ── Société Fondations Ilyass (7 projets) ─────────────────────────────────
  {
    id: "miftah-937",
    title: "Habitation MIFTAH EL KHIER N°937",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "130 m²",
    levels: "R+3",
    year: 2022,
    status: "Livré",
    image: pdfProjetFacade,
  },
  {
    id: "ben-kassem-286",
    title: "Habitation BEN KASSEM II N°286",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "108 m²",
    levels: "R+3",
    year: 2022,
    status: "Livré",
    image: pdfProjetResidential,
  },
  {
    id: "el-baitar-29",
    title: "Habitation EL BAITAR N°29",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "118 m²",
    levels: "R+3",
    year: 2022,
    status: "Livré",
    image: pdfCoffrage,
  },
  {
    id: "taoufik-481",
    title: "Habitation TAOUFIK N°481",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "98 m²",
    levels: "R+3",
    year: 2021,
    status: "Livré",
    image: pdfStructure,
  },
  {
    id: "ben-kassem-256",
    title: "Habitation BEN KASSEM II N°256",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "108 m²",
    levels: "R+3+SS",
    year: 2023,
    status: "Livré",
    image: pdfElevation,
  },
  {
    id: "abrar-118",
    title: "Immeuble ABRAR N°118",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "161 m²",
    levels: "R+3+SS+M",
    year: 2021,
    status: "Livré",
    image: pdfDalle,
  },
  {
    id: "bassatin-el-oulfa",
    title: "Villa BASSATIN EL OULFA",
    client: "Société Fondations Ilyass",
    location: "Casablanca",
    category: "Résidentiel",
    surface: "200 m²",
    levels: "R+3",
    year: 2020,
    status: "Livré",
    image: pdfVilla,
  },
  // ── YTIB PROMO (5 projets) ────────────────────────────────────────────────
  {
    id: "ytib-lahraouyine",
    title: "Habitation LAHRAOUYINE",
    client: "YTIB PROMO",
    location: "Lahraouyine",
    category: "Promotion",
    surface: "160 m²",
    levels: "R+3+SS+M",
    year: 2022,
    status: "Livré",
    image: pdfProjetChantier,
  },
  {
    id: "ytib-tit-mellil",
    title: "Villa TIT MELLIL",
    client: "YTIB PROMO",
    location: "Tit Mellil",
    category: "Promotion",
    surface: "300 m²",
    levels: "R+3",
    year: 2022,
    status: "Livré",
    image: pdfChantierVue,
  },
  {
    id: "ytib-el-badr",
    title: "Habitation EL BADR",
    client: "YTIB PROMO",
    location: "Province de Berrechid",
    category: "Promotion",
    surface: "160 m²",
    levels: "R+3+SS+M",
    year: 2022,
    status: "Livré",
    image: pdfStructureAvancee,
  },
  {
    id: "ytib-chellalat",
    title: "Habitation CHELLALAT lot 14",
    client: "YTIB PROMO",
    location: "Province de Berrechid",
    category: "Promotion",
    surface: "170 m²",
    levels: "R+3+SS+M",
    year: 2023,
    status: "Livré",
    image: pdfFondations,
  },
  {
    id: "ytib-almaz",
    title: "Villa ALMAZ lot 174",
    client: "YTIB PROMO",
    location: "Province de Berrechid",
    category: "Promotion",
    surface: "200 m²",
    levels: "R+1+SS",
    year: 2023,
    status: "Livré",
    image: pdfOuvrage,
  },
  // ── État / Province de Settat (1 projet) ──────────────────────────────────
  {
    id: "settat-annexe",
    title: "Siège 2ème Annexe Administrative + Poste Forces Auxiliaires, El Borouj",
    client: "Province de Settat",
    location: "El Borouj",
    category: "Institutionnel",
    surface: "—",
    levels: "—",
    year: 2021,
    status: "Livré",
    image: pdfReferences,
  },
  // ── État / Province de Berrechid (1 projet) ───────────────────────────────
  {
    id: "berrechid-prescolaires",
    title: "Construction de 10 unités préscolaires aux communes Laghnimiyine et Ouled Abbou",
    client: "Province de Berrechid",
    location: "Laghnimiyine & Ouled Abbou",
    category: "Institutionnel",
    surface: "—",
    levels: "—",
    year: 2022,
    status: "Livré",
    image: pdfFerraillage,
  },
  // ── Rachid Taouss (1 projet) ──────────────────────────────────────────────
  {
    id: "costa-237-bouznika",
    title: "Habitation COSTA N°237, double façade, Bouznika",
    client: "Rachid Taouss",
    location: "Bouznika",
    category: "Résidentiel",
    surface: "130 m²",
    levels: "R+3",
    year: 2023,
    status: "Livré",
    image: pdfFinitionsSol,
  },
  // ── Bulk Building (1 projet) ──────────────────────────────────────────────
  {
    id: "miftah-settat-bulk",
    title: "Habitation MIFTAH EL KHIER, Settat",
    client: "Bulk Building",
    location: "Settat",
    category: "Résidentiel",
    surface: "130 m²",
    levels: "R+3",
    year: 2023,
    status: "Livré",
    image: pdfSecondOeuvre,
  },
];

export type ClientEntry = {
  name: string;
  sector: string;
};

export const clients: ClientEntry[] = [
  { name: "Société Fondations Ilyass", sector: "Entreprises" },
  { name: "YTIB Promo",                sector: "Promoteurs" },
  { name: "Province de Settat",        sector: "État & Collectivités" },
  { name: "Province de Berrechid",     sector: "État & Collectivités" },
  { name: "Rachid Taouss",             sector: "Particuliers" },
  { name: "Bulk Building",             sector: "Entreprises" },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Quels sont les délais moyens pour un projet de villa ?",
    a: "Pour une villa R+1 / R+2 standard (200 à 400 m²), comptez entre 10 et 14 mois entre l'ouverture du chantier et la remise des clés, finitions incluses. Le planning détaillé est contractualisé dès la signature du marché.",
  },
  {
    q: "Proposez-vous des garanties sur vos travaux ?",
    a: "Oui — garantie de parfait achèvement (1 an), garantie biennale sur les équipements, et garantie décennale sur le gros œuvre, conformément à la réglementation marocaine.",
  },
  {
    q: "Dans quelles régions intervenez-vous ?",
    a: "Notre périmètre principal couvre le Grand Casablanca, Settat, Berrechid, Mohammedia et Tit Mellil. Pour des projets supérieurs à 5M DH, nous intervenons sur l'ensemble du Royaume.",
  },
  {
    q: "Comment obtenir un devis gratuit ?",
    a: "Deux voies : utilisez notre estimateur en ligne pour une fourchette indicative en 2 minutes, ou contactez-nous pour un métré détaillé sur la base de vos plans (gratuit, sans engagement).",
  },
  {
    q: "Travaillez-vous avec des architectes partenaires ?",
    a: "Oui. Nous collaborons régulièrement avec des cabinets d'architecture et bureaux d'études partenaires, et nous travaillons aussi sur plans fournis par votre propre maître d'œuvre.",
  },
  {
    q: "Quels sont vos modes de paiement acceptés ?",
    a: "Échéancier classique : 30% à la signature, paiements intermédiaires liés à l'avancement (jalons techniques validés), 10% à la réception. Virement bancaire ou chèque certifié.",
  },
  {
    q: "Proposez-vous un service après-vente ?",
    a: "Oui. Une visite de contrôle à 6 mois et une à 12 mois sont incluses, plus une ligne dédiée pour signaler toute anomalie pendant la durée des garanties légales.",
  },
  {
    q: "Réalisez-vous des projets de rénovation ?",
    a: "Oui, de la rénovation lourde (restructuration, surélévation) à la rénovation d'étage. Un diagnostic préalable est systématique pour sécuriser le périmètre et le budget.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

export const articles: Article[] = [
  {
    slug: "normes-parasismiques-maroc-2025",
    title: "Normes parasismiques au Maroc : ce qu'il faut savoir en 2025",
    excerpt:
      "RPS 2000 version 2011, zonage sismique national, règles de conception parasismique des bâtiments neufs et existants : ce que chaque maître d'ouvrage doit exiger de son entrepreneur en 2025.",
    category: "Réglementation",
    readTime: "8 min",
    date: "15 mars 2025",
    image: heroConstruction,
  },
  {
    slug: "choisir-entrepreneur-batiment-maroc",
    title: "Comment choisir votre entrepreneur en bâtiment au Maroc",
    excerpt:
      "Références vérifiables, registre de commerce, assurances décennales, capacité technique et financière : le guide complet pour ne pas confier votre projet au mauvais interlocuteur.",
    category: "Conseil",
    readTime: "7 min",
    date: "28 février 2025",
    image: teamBlueprint,
  },
  {
    slug: "isolation-thermique-reduire-factures-40",
    title: "Isolation thermique : réduire vos factures de 40 %",
    excerpt:
      "Murs, toiture-terrasse, ponts thermiques : comment une enveloppe correctement isolée réduit la facture énergétique de 40 % et améliore le confort d'été comme d'hiver au Maroc.",
    category: "Technique",
    readTime: "6 min",
    date: "14 février 2025",
    image: textureConcrete,
  },
  {
    slug: "gros-oeuvre-fondations-reussite-projet",
    title: "Le gros œuvre : fondations de la réussite de votre projet",
    excerpt:
      "Terrassement, fondations, béton armé, maçonnerie : comprendre les phases structurelles d'un chantier pour mieux suivre l'avancement et anticiper les risques avant la mise hors d'eau.",
    category: "Technique",
    readTime: "9 min",
    date: "30 janvier 2025",
    image: serviceGros,
  },
  {
    slug: "second-oeuvre-ame-technique-batiment",
    title: "Second œuvre : l'âme technique de votre bâtiment",
    excerpt:
      "Électricité CFO/CFA, plomberie, CVC, plâtrerie, menuiseries : le second œuvre représente jusqu'à 45 % du coût total d'un ouvrage. Découvrez comment le piloter sans dérive de budget.",
    category: "Technique",
    readTime: "8 min",
    date: "16 janvier 2025",
    image: serviceSecond,
  },
  {
    slug: "finitions-btp-tendances-2025-maroc",
    title: "Finitions BTP : les tendances 2025 au Maroc",
    excerpt:
      "Grand format, tadelakt contemporain, enduits décoratifs, marbre local et faux-plafonds architecturaux : les finitions qui valorisent vos livraisons résidentielles et tertiaires cette année.",
    category: "Tendances",
    readTime: "6 min",
    date: "04 janvier 2025",
    image: serviceFin,
  },
];

export interface NavLink {
  to: string;
  label: string;
  index: string;
}

export const navLinks: NavLink[] = [
  { to: "/", label: "Accueil", index: "00" },
  { to: "/a-propos", label: "À propos", index: "01" },
  { to: "/services", label: "Services", index: "02" },
  { to: "/realisations", label: "Réalisations", index: "03" },
  { to: "/blog", label: "Blog", index: "04" },
  { to: "/outils", label: "Outils", index: "05" },
  { to: "/contact", label: "Contact", index: "06" },
];

export {
  heroConstruction,
  textureConcrete,
  projectVilla,
  projectInterior,
  teamBlueprint,
  serviceGros,
  serviceSecond,
  serviceFin,
};

export interface RevenuePoint {
  year: number;
  value: number;
  label: string;
}

export const revenueData: RevenuePoint[] = [
  { year: 2018, value: 0.9,  label: "900K DH" },
  { year: 2019, value: 2,    label: "2M DH" },
  { year: 2020, value: 4,    label: "4M DH" },
  { year: 2021, value: 9,    label: "9M DH" },
  { year: 2022, value: 12,   label: "12M DH" },
  { year: 2023, value: 14,   label: "14M DH" },
  { year: 2024, value: 16,   label: "16M DH" },
];
