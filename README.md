# Benzakani BTP

Site vitrine d'une entreprise de construction et de travaux publics basée à Casablanca : présentation de l'entreprise, services (gros œuvre, second œuvre, finitions), réalisations, estimation de budget et articles de conseil.

**Démo en ligne : [benzakani-btp.onrender.com](https://benzakani-btp.onrender.com)**
Site statique, sans envoi de données : le formulaire de contact prépare un e-mail dans la messagerie du visiteur. La démo met environ 50 secondes à se réveiller au premier accès.

---

## Pages

| Page | Contenu |
| --- | --- |
| Accueil | Présentation, chiffres clés, savoir-faire, appel à projet |
| À propos | Histoire de l'entreprise, équipe, valeurs |
| Services | Gros œuvre, second œuvre, finitions |
| Réalisations | Projets livrés (villas et immeubles de R+1 à R+3) avec photos |
| Outils | Estimateur de budget : surface, type de bien et niveau de prestation donnent une fourchette en DH/m² |
| Blog | Articles de conseil : choisir un entrepreneur, normes parasismiques, isolation thermique… |
| Contact | Formulaire qui ouvre un e-mail pré-rempli, coordonnées |

## Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18.3 | Framework UI principal |
| TypeScript | 5.8 | Typage statique |
| Vite | 5.4 | Bundler et serveur de développement |
| TailwindCSS | 3.4 | Styles utilitaires + tokens design personnalisés |
| Shadcn UI | — | Composants UI accessibles (basés sur Radix UI) |
| Radix UI | — | Primitives UI accessibles et non stylisées |
| React Router | 6.30 | Routage côté client |
| TanStack Query | 5.83 | Gestion de l'état serveur et du cache |
| React Hook Form | 7.61 | Gestion des formulaires |
| Zod | 3.25 | Validation des schémas et des formulaires |
| Recharts | 2.15 | Graphiques et visualisations de données |
| Lucide React | 0.462 | Bibliothèque d'icônes |
| Vitest | 3.2 | Tests unitaires et d'intégration |
| Testing Library | 16.0 | Utilitaires de test pour les composants React |

## Prérequis

- Node.js 18+
- npm ou pnpm

## Installation

```bash
# Clone du projet
git clone https://github.com/mpigajesse/Benzakani-BTP.git

# Accéder au répertoire du projet
cd Benzakani-BTP

# Installer les dépendances
npm install

# Démarrer en développement
npm run dev
```

## Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (http://localhost:8080) |
| `npm run build` | Build de production |
| `npm run build:dev` | Build en mode développement |
| `npm run preview` | Prévisualiser le build de production |
| `npm run test` | Tests unitaires (Vitest, mode run unique) |
| `npm run test:watch` | Tests unitaires en mode watch |
| `npm run lint` | Analyse statique ESLint |

## Auteur

Jesse MPIGA-ODOUMBA — [portfolio](https://mpj.indevs.in) · [GitHub](https://github.com/mpigajesse)
