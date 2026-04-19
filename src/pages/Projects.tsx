import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ClientsReferences } from "@/components/site/ClientsReferences";
import { projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = ["Tous", "Résidentiel", "Promotion", "Institutionnel", "Rénovation"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  // Stable index per project (not per filtered slice) so the asymmetric
  // height pattern does not reset when the user switches filters.
  const projectIndex = useMemo(
    () => new Map(projects.map((p, i) => [p.id, i])),
    []
  );

  return (
    <SiteLayout headerSpacer>
      {/* ===== Header ===== */}
      <section className="container-editorial pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionLabel index="03" eyebrow="Réalisations · 2018 → 2024" />
        <h1 className="h-display mt-12 max-w-5xl text-5xl text-balance md:text-7xl lg:text-[8rem]">
          16 projets livrés.
          <span className="text-muted-foreground"> Une seule signature.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-foreground/80">
          Chaque ouvrage ci-dessous a été conduit en totalité par nos équipes — du premier
          terrassement à la dernière visite de garantie.
        </p>
      </section>

      {/* ===== Filter bar ===== */}
      <section className="sticky top-16 z-30 border-y border-border bg-background/90 backdrop-blur md:top-20">
        <div className="container-editorial flex items-center justify-between gap-4 overflow-x-auto py-4">
          <div className="flex items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "shrink-0 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:block">
            {filtered.length.toString().padStart(2, "0")} projet{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* ===== Project grid (asymmetric: 2 cols, alternating heights) ===== */}
      <section className="container-editorial py-16 md:py-24">
        <ul className="grid gap-x-10 gap-y-20 md:grid-cols-2" aria-label="Liste des réalisations">
          {filtered.map((p) => {
            const stableIdx = projectIndex.get(p.id) ?? 0;
            const tall = stableIdx % 3 === 0;
            return (
              <li
                key={p.id}
                className={cn(
                  "group cursor-pointer",
                  stableIdx % 2 === 1 && "md:mt-24",
                )}
                onClick={() => setActive(p)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(p)}
                tabIndex={0}
                role="button"
                aria-label={`Voir le projet : ${p.title}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className={cn(
                      "w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105",
                      tall ? "aspect-[4/5]" : "aspect-[5/4]"
                    )}
                    style={{ transitionTimingFunction: "var(--ease-precise)" }}
                    loading="lazy"
                    width={1200}
                    height={1500}
                  />
                  <span
                    className="absolute left-4 top-4 bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                    aria-hidden="true"
                  >
                    {p.status}
                  </span>
                  <span
                    className="absolute right-4 bottom-4 bg-foreground/90 p-3 text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="mt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>
                    {p.category} · {p.location}
                  </span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-balance transition-colors group-hover:text-accent md:text-3xl">
                  {p.title}
                </h3>
                <dl className="mt-5 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <dt className="eyebrow">Surface</dt>
                    <dd className="mt-1">{p.surface}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Niveaux</dt>
                    <dd className="mt-1">{p.levels}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Budget</dt>
                    <dd className="mt-1">{p.budget}</dd>
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 && (
          <p className="py-24 text-center text-muted-foreground">
            Aucune réalisation dans cette catégorie pour le moment.
          </p>
        )}
      </section>

      {/* ===== Clients & References ===== */}
      <ClientsReferences />

      {/* ===== Modal ===== */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-surface-deeper/80 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <article
            className="relative grid max-h-[90vh] w-full max-w-5xl grid-rows-[auto_1fr] overflow-hidden bg-background md:grid-cols-2 md:grid-rows-1"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="h-64 w-full object-cover md:h-full"
              width={1200}
              height={1500}
            />
            <div className="flex flex-col gap-6 overflow-y-auto p-8 md:p-12">
              <button
                onClick={() => setActive(null)}
                className="self-end font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
                aria-label="Fermer le projet"
              >
                Fermer <span aria-hidden="true">✕</span>
              </button>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {active.category} · {active.year} · {active.status}
              </div>
              <h2 id="modal-project-title" className="h-display text-3xl md:text-4xl">{active.title}</h2>
              <p className="text-muted-foreground">
                Client&nbsp;: <span className="text-foreground">{active.client}</span>
                <br />
                Localisation&nbsp;: <span className="text-foreground">{active.location}</span>
              </p>
              <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
                <div>
                  <dt className="eyebrow">Surface</dt>
                  <dd className="mt-2 font-display text-2xl">{active.surface}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Niveaux</dt>
                  <dd className="mt-2 font-display text-2xl">{active.levels}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Budget</dt>
                  <dd className="mt-2 font-display text-2xl">{active.budget}</dd>
                </div>
              </dl>
              <Link
                to="/contact"
                className="mt-auto inline-flex items-center justify-between bg-foreground px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-background hover:bg-accent"
              >
                Lancer un projet similaire <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      )}
    </SiteLayout>
  );
};

export default Projects;
