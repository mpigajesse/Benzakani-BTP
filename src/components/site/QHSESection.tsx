import { Shield, Leaf, CheckCircle2, type LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";

interface Pillar {
  icon: LucideIcon;
  code: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Shield,
    code: "01",
    title: "Sécurité au Travail",
    description:
      "Port obligatoire des EPI, formation continue du personnel et respect strict des normes de sécurité sur tous nos chantiers.",
  },
  {
    icon: Leaf,
    code: "02",
    title: "Respect de l'Environnement",
    description:
      "Gestion responsable des déchets de chantier, optimisation des ressources et minimisation de l'impact environnemental.",
  },
  {
    icon: CheckCircle2,
    code: "03",
    title: "Assurance Qualité",
    description:
      "Contrôles rigoureux à chaque étape de la construction pour garantir la conformité aux exigences techniques et réglementaires.",
  },
];

export const QHSESection = () => {
  return (
    <section className="relative bg-surface-deeper text-background overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 grid-blueprint opacity-[0.04] pointer-events-none" aria-hidden="true" />

      <div className="container-editorial relative py-28 md:py-40">
        <SectionLabel index="04" eyebrow="Engagements QHSE" />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <h2 className="h-display text-4xl text-balance text-background md:text-5xl lg:text-6xl">
            Excellence &amp; Rigueur
          </h2>
          <p className="self-end text-background/60 leading-relaxed md:max-w-md md:justify-self-end">
            Qualité, Hygiène, Sécurité, Environnement — quatre engagements qui
            structurent chaque décision prise sur nos chantiers.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-background/10" />

        {/* Three pillars */}
        <div className="grid divide-y divide-background/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map(({ icon: Icon, code, title, description }) => (
            <article
              key={code}
              className="group flex flex-col gap-8 px-0 py-12 md:px-10 md:py-14 md:first:pl-0 md:last:pr-0"
            >
              {/* Icon + code */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center border border-accent/40 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/10"
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[11px] tracking-widest text-background/30">
                  {code}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <h3 className="h-display text-2xl text-background md:text-3xl">{title}</h3>
                <p className="text-sm leading-relaxed text-background/60">{description}</p>
              </div>

              {/* Accent line on hover */}
              <div className="mt-auto h-px w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
