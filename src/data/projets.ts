export type ClientType = "promoteur" | "institutionnel" | "prive" | "entreprise";

export type ProjetType =
  | "habitation"
  | "villa"
  | "immeuble"
  | "institutionnel"
  | "prescolaire";

export type Projet = {
  id: string;
  nom: string;
  type: ProjetType;
  surface?: number;
  etages?: string;
  budgetDH: number;
  ville?: string;
  description?: string;
};

export type Client = {
  id: string;
  nom: string;
  type: ClientType;
  nbProjets: number;
  totalDH: number;
  projets: Projet[];
};

export const clients: Client[] = [
  {
    id: "client-1",
    nom: "Société Fondations Ilyass",
    type: "promoteur",
    nbProjets: 7,
    totalDH: 23_090_000,
    projets: [
      {
        id: "proj-1-1",
        nom: "Habitation MIFTAH EL KHIER N°937",
        type: "habitation",
        surface: 130,
        etages: "R+3",
        budgetDH: 1_500_000,
      },
      {
        id: "proj-1-2",
        nom: "Habitation BEN KASSEM II N°286",
        type: "habitation",
        surface: 108,
        etages: "R+3",
        budgetDH: 1_300_000,
      },
      {
        id: "proj-1-3",
        nom: "Habitation EL BAITAR N°29",
        type: "habitation",
        surface: 118,
        etages: "R+3",
        budgetDH: 1_600_000,
      },
      {
        id: "proj-1-4",
        nom: "Habitation TAOUFIK N°481",
        type: "habitation",
        surface: 98,
        etages: "R+3",
        budgetDH: 1_100_000,
      },
      {
        id: "proj-1-5",
        nom: "Habitation BEN KASSEM II N°256",
        type: "habitation",
        surface: 108,
        etages: "R+3+SS",
        budgetDH: 16_000_000,
      },
      {
        id: "proj-1-6",
        nom: "Immeuble ABRAR N°118",
        type: "immeuble",
        surface: 161,
        etages: "R+3+SS+M",
        budgetDH: 870_000,
      },
      {
        id: "proj-1-7",
        nom: "Villa BASSATIN EL OULFA",
        type: "villa",
        surface: 20,
        etages: "R+3",
        budgetDH: 720_000,
      },
    ],
  },
  {
    id: "client-2",
    nom: "YTIB PROMO",
    type: "promoteur",
    nbProjets: 5,
    totalDH: 4_050_000,
    projets: [
      {
        id: "proj-2-1",
        nom: "Habitation LAHRAOUYINE",
        type: "habitation",
        surface: 160,
        etages: "R+3+SS+M",
        budgetDH: 800_000,
      },
      {
        id: "proj-2-2",
        nom: "Villa TIT MELLIL",
        type: "villa",
        surface: 300,
        etages: "R+3",
        budgetDH: 800_000,
      },
      {
        id: "proj-2-3",
        nom: "Habitation EL BADR",
        type: "habitation",
        surface: 160,
        etages: "R+3+SS+M",
        budgetDH: 750_000,
      },
      {
        id: "proj-2-4",
        nom: "Habitation CHELLALAT lot 14",
        type: "habitation",
        surface: 170,
        etages: "R+3+SS+M",
        budgetDH: 950_000,
      },
      {
        id: "proj-2-5",
        nom: "Villa ALMAZ lot 174",
        type: "villa",
        surface: 200,
        etages: "R+1+SS",
        budgetDH: 750_000,
      },
    ],
  },
  {
    id: "client-3",
    nom: "État / Province de Settat",
    type: "institutionnel",
    nbProjets: 1,
    totalDH: 1_920_000,
    projets: [
      {
        id: "proj-3-1",
        nom: "Siège 2ème Annexe Administrative + Poste Forces Auxiliaires, El Borouj",
        type: "institutionnel",
        budgetDH: 1_920_000,
        ville: "El Borouj",
        description:
          "Construction du siège de la 2ème annexe administrative et poste des forces auxiliaires",
      },
    ],
  },
  {
    id: "client-4",
    nom: "État / Province de Berrechid",
    type: "institutionnel",
    nbProjets: 1,
    totalDH: 1_490_000,
    projets: [
      {
        id: "proj-4-1",
        nom: "Construction de 10 unités préscolaires aux communes Laghnimiyine et Ouled Abbou",
        type: "prescolaire",
        budgetDH: 1_490_000,
        ville: "Berrechid",
        description:
          "Construction de 10 unités préscolaires réparties entre les communes de Laghnimiyine et Ouled Abbou",
      },
    ],
  },
  {
    id: "client-5",
    nom: "Rachid Taouss",
    type: "prive",
    nbProjets: 1,
    totalDH: 900_000,
    projets: [
      {
        id: "proj-5-1",
        nom: "Habitation COSTA N°237",
        type: "habitation",
        surface: 130,
        etages: "R+3",
        budgetDH: 900_000,
        ville: "Bouznika",
        description: "Habitation double façade",
      },
    ],
  },
  {
    id: "client-6",
    nom: "Bulk Building",
    type: "entreprise",
    nbProjets: 1,
    totalDH: 700_000,
    projets: [
      {
        id: "proj-6-1",
        nom: "Habitation MIFTAH EL KHIER",
        type: "habitation",
        surface: 130,
        etages: "R+3",
        budgetDH: 700_000,
        ville: "Settat",
      },
    ],
  },
];

export const tousLesProjets: Projet[] = clients.flatMap(
  (client) => client.projets
);

/** Volume d'affaires total — doit correspondre à 32 150 000 DH (source : dossier officiel). */
export const totalGeneral: number = clients.reduce(
  (sum, client) => sum + client.totalDH,
  0
);
