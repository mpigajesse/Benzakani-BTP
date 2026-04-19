import type { ReactNode } from "react";
import {
  Truck,
  Hammer,
  Ruler,
  ArrowUp,
  Droplets,
  Package,
} from "lucide-react";

interface EquipmentCategory {
  icon: ReactNode;
  name: string;
  description: string;
}

const categories: EquipmentCategory[] = [
  {
    icon: <Truck size={28} strokeWidth={1.5} />,
    name: "Transport de Chantier",
    description:
      "Véhicules dédiés à l'acheminement rapide des matériaux et à la mobilité des équipes sur site.",
  },
  {
    icon: <Hammer size={28} strokeWidth={1.5} />,
    name: "Gros Outillage",
    description:
      "Matériel lourd haute performance pour les travaux de gros œuvre et terrassement.",
  },
  {
    icon: <Ruler size={28} strokeWidth={1.5} />,
    name: "Équipements de Mesure",
    description:
      "Instruments de précision pour le contrôle qualité et la conformité des ouvrages.",
  },
  {
    icon: <ArrowUp size={28} strokeWidth={1.5} />,
    name: "Levage & Manutention",
    description:
      "Engins de levage adaptés aux contraintes de chaque chantier, du petit élément au préfabriqué lourd.",
  },
  {
    icon: <Droplets size={28} strokeWidth={1.5} />,
    name: "Pompage Béton",
    description:
      "Équipements de pompage longue portée pour la mise en œuvre du béton armé en toute sécurité.",
  },
  {
    icon: <Package size={28} strokeWidth={1.5} />,
    name: "Logistique & Approvisionnement",
    description:
      "Gestion optimisée des flux, stockage sécurisé et traçabilité des matériaux sur site.",
  },
];

export const MoyensMateriels = () => {
  return (
    <section className="border-t border-border bg-surface-raw py-28 md:py-40">
      <div className="container-editorial">
        {/* Section header */}
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-widest text-accent">05</span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
            Moyens techniques
          </span>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h-display text-4xl text-balance md:text-6xl">
              Nos Moyens Matériels
            </h2>
          </div>
          <div className="flex items-end">
            <p className="leading-relaxed text-foreground/70">
              Pour garantir l'autonomie et la réactivité sur nos chantiers, BEN ZAKANI dispose
              d'un parc matériel complet et performant, régulièrement entretenu et renouvelé.
            </p>
          </div>
        </div>

        {/* Equipment grid */}
        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="group relative bg-surface-raw p-8 transition-colors duration-300 hover:bg-background md:p-10"
            >
              {/* Icon */}
              <div className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                {cat.icon}
              </div>

              <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground">
                {cat.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {cat.description}
              </p>

              {/* Accent underline reveal */}
              <span
                className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                style={{ transitionTimingFunction: "var(--ease-precise)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
