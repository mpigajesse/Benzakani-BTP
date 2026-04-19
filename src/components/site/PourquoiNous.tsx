const pillars = [
  {
    number: "01",
    title: "Expertise Éprouvée",
    description:
      "Des années d'expérience sur des projets complexes et variés, garantissant une maîtrise technique sans faille.",
  },
  {
    number: "02",
    title: "Respect des Engagements",
    description:
      "Une gestion rigoureuse des plannings et des budgets pour une livraison conforme à vos attentes.",
  },
  {
    number: "03",
    title: "Qualité Supérieure",
    description:
      "Sélection des meilleurs matériaux et contrôle qualité strict à chaque étape de la construction.",
  },
  {
    number: "04",
    title: "Service Client Dédié",
    description:
      "Une écoute active et un accompagnement personnalisé tout au long de votre projet.",
  },
] as const;

export const PourquoiNous = () => {
  return (
    <section className="bg-surface-deeper py-28 text-background md:py-40">
      <div className="container-editorial">
        {/* Section header */}
        <div className="flex items-baseline gap-4 text-background/40">
          <span className="font-mono text-[11px] tracking-widest text-accent">05</span>
          <span className="h-px flex-1 bg-background/20" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Pourquoi nous</span>
        </div>

        <h2 className="h-display mt-12 max-w-3xl text-4xl text-background md:text-6xl lg:text-7xl">
          Pourquoi choisir BEN ZAKANI&nbsp;?
        </h2>

        {/* 2×2 grid */}
        <div className="mt-20 grid gap-px bg-background/15 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group relative bg-surface-deeper p-10 transition-colors hover:bg-surface-deep md:p-14"
            >
              {/* Large editorial number */}
              <span
                className="block font-display text-[6rem] font-thin leading-none text-background/10 select-none md:text-[8rem]"
                aria-hidden="true"
              >
                {pillar.number}
              </span>

              <h3 className="h-display mt-6 text-2xl text-background md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-relaxed text-background/60">{pillar.description}</p>

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
