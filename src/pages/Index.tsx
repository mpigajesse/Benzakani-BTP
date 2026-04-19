import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { PourquoiNous } from "@/components/site/PourquoiNous";
import {
  heroConstruction,
  projectVilla,
  services,
  stats,
  values,
  articles,
  company,
} from "@/data/site";

const Index = () => {
  return (
    <SiteLayout>
      {/* ============================== HERO ============================== */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-surface-deeper text-background">
        <img
          src={heroConstruction}
          alt="Chantier Benzakani BTP au coucher du soleil"
          className="absolute inset-0 h-full w-full object-cover opacity-60 animate-scale-in"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-deeper via-surface-deeper/40 to-surface-deeper/70" />
        <div className="absolute inset-0 grid-blueprint opacity-[0.06]" aria-hidden="true" />

        <div className="container-editorial relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20">
          {/* Top meta row */}
          <div className="absolute left-6 right-6 top-28 flex items-baseline justify-between text-background/60 md:left-10 md:right-10 lg:left-16 lg:right-16">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
              N°00 / Vue d'ensemble
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] md:inline">
              {company.city} · 33.5731° N · 7.5898° W
            </span>
          </div>

          <h1 className="h-display max-w-[18ch] text-[14vw] leading-[0.92] text-background md:text-[8.5vw] lg:text-[7.5vw]">
            <span className="block overflow-hidden">
              <span className="block animate-reveal" style={{ animationDelay: "0.1s" }}>
                Bâtir avec
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block animate-reveal italic font-light text-background/70"
                style={{ animationDelay: "0.25s" }}
              >
                la précision
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-reveal" style={{ animationDelay: "0.4s" }}>
                d'un atelier.
              </span>
            </span>
          </h1>

          <div className="mt-12 grid items-end gap-8 md:grid-cols-12 md:gap-10">
            <p
              className="max-w-prose text-pretty text-base leading-relaxed text-background/75 md:col-span-5 md:text-lg animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              Fondée en {company.founded} par M.&nbsp;{company.founder}, Benzakani BTP est une entreprise
              marocaine de référence dans le secteur de la construction et des travaux publics.
              Notre mission&nbsp;: bâtir des espaces de vie durables qui répondent aux exigences les
              plus élevées de nos clients.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 md:col-span-4 md:col-start-9 md:justify-end animate-fade-up"
              style={{ animationDelay: "0.85s" }}
            >
              <Link
                to="/realisations"
                className="group inline-flex items-center gap-3 bg-accent px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Voir les réalisations
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" aria-hidden="true" />
              </Link>
              <Link
                to="/outils"
                className="inline-flex items-center gap-3 border border-background/30 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-background hover:border-accent hover:text-accent"
              >
                Estimer un budget
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-background/15 sm:grid-cols-3 md:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-surface-deeper/80 p-6 backdrop-blur-sm md:p-8 animate-fade-up"
                style={{ animationDelay: `${1 + i * 0.08}s` }}
              >
                <div className="font-display text-4xl font-medium text-background md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-background/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CLIENTS ============================== */}
      <ClientsMarquee />

      {/* ============================== MANIFESTO ============================== */}
      <section className="container-editorial py-28 md:py-40">
        <SectionLabel index="01" eyebrow="Manifeste" />
        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-20">
          <p className="md:col-span-7 md:col-start-1">
            <span className="h-display block text-3xl text-balance text-foreground md:text-5xl lg:text-6xl">
              Un ouvrage durable se reconnaît à ce qu'on ne voit pas&nbsp;:
              <span className="text-muted-foreground">
                {" "}une fondation au millimètre, une coordination sans bruit, une exécution qui
                tient la promesse du dessin.
              </span>
            </span>
          </p>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground leading-relaxed">
              Notre méthode tient en trois engagements&nbsp;: respect du calendrier, transparence du
              budget, qualité contrôlée à chaque jalon. Nous travaillons aussi bien sur des plans
              d'architecte que sur conception-réalisation.
            </p>
            <Link
              to="/a-propos"
              className="mt-8 link-underline font-mono text-[12px] uppercase tracking-[0.18em]"
            >
              Notre histoire <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================== SERVICES ============================== */}
      <section className="bg-surface-raw py-28 md:py-40">
        <div className="container-editorial">
          <SectionLabel index="02" eyebrow="Trois métiers, un seul standard" />
          <h2 className="h-display mt-12 max-w-3xl text-4xl text-balance md:text-6xl lg:text-7xl">
            De la fondation à la dernière couche de peinture.
          </h2>
        </div>

        <div className="mt-16">
          {services.map((s, i) => (
            <Link
              key={s.id}
              to={`/services#${s.id}`}
              className="group relative block border-t border-border last:border-b"
            >
              <div className="container-editorial grid items-center gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-12">
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground md:col-span-1">
                  {s.index}
                </span>
                <h3 className="h-display text-3xl md:col-span-4 md:text-5xl lg:text-6xl">
                  {s.name}
                </h3>
                <p className="text-muted-foreground md:col-span-4">{s.tagline}</p>
                <div className="flex items-center justify-end md:col-span-3">
                  <ArrowUpRight
                    size={28}
                    className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-accent"
                    style={{ transitionTimingFunction: "var(--ease-precise)" }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              {/* Reveal image on hover - desktop */}
              <div
                className="pointer-events-none absolute right-12 top-1/2 hidden h-32 w-44 -translate-y-1/2 overflow-hidden opacity-0 transition-opacity duration-500 lg:block group-hover:opacity-100"
                style={{ transitionTimingFunction: "var(--ease-precise)" }}
                aria-hidden="true"
              >
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================== FEATURED PROJECT ============================== */}
      <section className="container-editorial py-28 md:py-40">
        <SectionLabel index="03" eyebrow="Projet phare" />
        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-10">
          <figure className="md:col-span-7">
            <div className="overflow-hidden">
              <img
                src={projectVilla}
                alt="Villa R+3 livrée par Benzakani BTP"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                style={{ transitionTimingFunction: "var(--ease-precise)" }}
                loading="lazy"
                width={1600}
                height={2000}
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>Habitation Miftah El Khier — N°937</span>
              <span>2023 / Casablanca</span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between md:col-span-4 md:col-start-9">
            <div>
              <p className="eyebrow-accent">Étude de cas</p>
              <h2 className="h-display mt-6 text-3xl text-balance md:text-4xl lg:text-5xl">
                130 m² sur quatre niveaux, livrés dans les délais&nbsp;— et sous le budget annoncé.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Une mission complète&nbsp;: étude d'exécution, gros œuvre, second œuvre, finitions
                premium. Coordination directe avec l'architecte, suivi hebdomadaire du maître
                d'ouvrage, livraison en 11 mois.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-border pt-8">
              <div>
                <dt className="eyebrow">Surface</dt>
                <dd className="mt-1 font-display text-2xl">130 m²</dd>
              </div>
              <div>
                <dt className="eyebrow">Niveaux</dt>
                <dd className="mt-1 font-display text-2xl">R+3</dd>
              </div>
              <div>
                <dt className="eyebrow">Budget</dt>
                <dd className="mt-1 font-display text-2xl">1.5M DH</dd>
              </div>
              <div>
                <dt className="eyebrow">Délai</dt>
                <dd className="mt-1 font-display text-2xl">11 mois</dd>
              </div>
            </dl>

            <Link
              to="/realisations"
              className="mt-10 link-underline font-mono text-[12px] uppercase tracking-[0.18em]"
            >
              Voir toutes les réalisations <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================== VALUES (asymmetric grid) ============================== */}
      <section className="bg-surface-deeper py-28 text-background md:py-40">
        <div className="container-editorial">
          <div className="flex items-baseline gap-4 text-background/40">
            <span className="font-mono text-[11px] tracking-widest text-accent">04</span>
            <span className="h-px flex-1 bg-background/20" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Valeurs</span>
          </div>

          <h2 className="h-display mt-12 max-w-4xl text-4xl text-background md:text-6xl lg:text-7xl">
            Quatre principes qui survivent à chaque chantier.
          </h2>

          <div className="mt-20 grid gap-px bg-background/15 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article
                key={v.code}
                className="group relative bg-surface-deeper p-8 transition-colors hover:bg-surface-deep md:p-10"
              >
                <div className="font-mono text-[11px] tracking-widest text-accent">{v.code}</div>
                <h3 className="h-display mt-10 text-3xl">{v.name}</h3>
                <p className="mt-4 text-background/60 leading-relaxed">{v.body}</p>
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                  style={{ transitionTimingFunction: "var(--ease-precise)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== POURQUOI NOUS ============================== */}
      <PourquoiNous />

      {/* ============================== TESTIMONIALS ============================== */}
      <section className="bg-surface-raw py-28 md:py-40">
        <div className="container-editorial">
          <SectionLabel index="05" eyebrow="Ce que nos clients disent" />

          {/* Stat headline */}
          <div className="mt-12 flex flex-wrap items-baseline gap-6">
            <span className="h-display font-display text-5xl font-medium text-foreground sm:text-6xl md:text-8xl lg:text-9xl">
              98%
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                de satisfaction
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                client
              </p>
            </div>
          </div>

          {/* 2×2 theme cards */}
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
            {[
              {
                theme: "Respect des Délais",
                quote: "Chaque jalon a été tenu. Livraison conforme au planning contractualisé, sans surprise.",
              },
              {
                theme: "Qualité des Finitions",
                quote: "Un niveau de finition qui dépasse les standards du marché — chaque détail soigné.",
              },
              {
                theme: "Communication",
                quote: "Suivi hebdomadaire clair, réponses rapides, aucun imprévu laissé sans explication.",
              },
              {
                theme: "Rapport Qualité-Prix",
                quote: "Budget respecté, matériaux premium. Une valeur réelle à chaque dirham engagé.",
              },
            ].map((t) => (
              <article
                key={t.theme}
                className="group relative flex flex-col gap-5 bg-surface-raw p-8 transition-colors hover:bg-background md:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                      aria-hidden
                    />
                  ))}
                </div>

                <blockquote className="flex-1">
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <footer>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {t.theme}
                  </p>
                </footer>

                {/* Hover accent line */}
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                  style={{ transitionTimingFunction: "var(--ease-precise)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== INSIGHTS PREVIEW ============================== */}
      <section className="container-editorial py-28 md:py-40">
        <div className="flex items-end justify-between gap-8">
          <div>
            <SectionLabel index="06" eyebrow="Insights" />
            <h2 className="h-display mt-10 text-4xl md:text-6xl">Le journal du chantier.</h2>
          </div>
          <Link
            to="/blog"
            className="hidden link-underline font-mono text-[12px] uppercase tracking-[0.18em] md:inline-flex"
          >
            Tous les articles <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} to="/blog" className="group block">
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  style={{ transitionTimingFunction: "var(--ease-precise)" }}
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{a.category}</span>
                <span>{a.readTime}</span>
              </div>
              <h3 className="mt-3 font-display text-xl text-balance leading-tight transition-colors group-hover:text-accent md:text-2xl">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="border-t border-border">
        <div className="container-editorial grid gap-10 py-24 md:grid-cols-12 md:items-center md:py-32">
          <div className="md:col-span-8">
            <p className="eyebrow-accent">Prochaine étape</p>
            <h2 className="h-display mt-6 text-4xl text-balance md:text-6xl lg:text-7xl">
              Décrivez votre projet. Nous revenons sous 24h avec une première lecture chiffrée.
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:col-span-4 md:items-end">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-between gap-3 bg-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-background hover:bg-accent md:w-auto"
            >
              Démarrer <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to="/outils"
              className="inline-flex w-full items-center justify-between gap-3 border border-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] hover:border-accent hover:text-accent md:w-auto"
            >
              Simuler un budget <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
