import type { ReactNode } from "react";
import { Users, Ruler, HardHat, Hammer, TrendingUp, ShieldCheck, Star } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";

interface TeamCategory {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

interface FormationItem {
  icon: ReactNode;
  title: string;
  body: string;
}

const teamCategories: TeamCategory[] = [
  {
    number: "01",
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Direction & Gestion",
    description:
      "Une vision stratégique claire et un pilotage rigoureux des projets. La direction assure la cohérence globale, de l'offre commerciale à la livraison finale.",
  },
  {
    number: "02",
    icon: <Ruler size={22} strokeWidth={1.5} />,
    title: "Bureau d'Études",
    description:
      "Ingénieurs et techniciens pour la conception et le suivi technique. Des études d'exécution précises au service de la qualité constructive.",
  },
  {
    number: "03",
    icon: <HardHat size={22} strokeWidth={1.5} />,
    title: "Encadrement Chantier",
    description:
      "Chefs de chantier et conducteurs de travaux expérimentés. Un encadrement de proximité qui garantit le respect des délais et des standards qualité.",
  },
  {
    number: "04",
    icon: <Hammer size={22} strokeWidth={1.5} />,
    title: "Ouvriers Qualifiés",
    description:
      "Maçons, ferrailleurs, coffreurs et spécialistes second œuvre. Des compétences manuelles éprouvées, formées et entretenues en continu.",
  },
];

const formationItems: FormationItem[] = [
  {
    icon: <TrendingUp size={18} strokeWidth={1.5} />,
    title: "Montée en Compétences",
    body: "Investissement continu dans la formation — chaque collaborateur bénéficie d'un plan de développement adapté à son métier et à ses ambitions.",
  },
  {
    icon: <ShieldCheck size={18} strokeWidth={1.5} />,
    title: "Sécurité au Travail",
    body: "Sessions de sensibilisation régulières sur les bonnes pratiques et les équipements de protection. La sécurité est une responsabilité partagée.",
  },
  {
    icon: <Star size={18} strokeWidth={1.5} />,
    title: "Évolution de Carrière",
    body: "Promotion interne et développement personnel encouragés à tous les échelons. Les meilleurs talents sont détectés et accompagnés vers des responsabilités accrues.",
  },
];

export const CapitalHumain = () => {
  return (
    <section className="py-28 md:py-40">
      <div className="container-editorial">
        <SectionLabel index="05" eyebrow="Capital Humain" />

        <h2 className="h-display mt-10 max-w-4xl text-4xl text-balance md:text-6xl">
          La force de BEN ZAKANI réside dans ses{" "}
          <span className="text-muted-foreground">hommes et ses femmes.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
          Une équipe pluridisciplinaire, engagée et passionnée, qui partage une même culture
          de l'excellence. Chaque profil contribue à la chaîne de valeur, du premier trait de
          crayon à la remise des clés.
        </p>

        {/* 2×2 team grid */}
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {teamCategories.map((cat) => (
            <article
              key={cat.number}
              className="group relative bg-background p-10 transition-colors hover:bg-surface-raw md:p-12"
            >
              {/* Editorial number — large ghost */}
              <span
                className="absolute right-6 top-6 font-display text-[5rem] font-thin leading-none text-border select-none md:text-[6.5rem]"
                aria-hidden
              >
                {cat.number}
              </span>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 border border-border text-accent">
                {cat.icon}
              </div>

              <h3 className="h-display mt-6 text-xl md:text-2xl">{cat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs">
                {cat.description}
              </p>

              {/* Hover accent line */}
              <span
                className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                style={{ transitionTimingFunction: "var(--ease-precise)" }}
              />
            </article>
          ))}
        </div>

        {/* Formation & Développement strip */}
        <div className="mt-24">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] tracking-widest text-accent">Formation</span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Développement
            </span>
          </div>

          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {formationItems.map((item) => (
              <div key={item.title} className="bg-background p-8 md:p-10">
                <div className="inline-flex items-center gap-2 text-accent">
                  {item.icon}
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
                    {item.title}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
