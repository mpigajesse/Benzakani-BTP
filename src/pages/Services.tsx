import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Factory, Landmark } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { MoyensMateriels } from "@/components/site/MoyensMateriels";
import { services } from "@/data/site";

const expertiseDomains = [
  {
    icon: Building2,
    title: "Bâtiments Résidentiels",
    description:
      "Construction d'immeubles d'habitation, de villas et de complexes résidentiels, du terrassement aux finitions, dans le respect des normes parasismiques.",
  },
  {
    icon: Factory,
    title: "Bâtiments Industriels",
    description:
      "Réalisation de hangars, usines et plateformes logistiques adaptés aux besoins spécifiques de chaque secteur d'activité.",
  },
  {
    icon: Landmark,
    title: "Ouvrages Fonctionnels",
    description:
      "Construction de bureaux, écoles, cliniques et centres commerciaux, alliant fonctionnalité, esthétique et durabilité.",
  },
];

const Services = () => {
  return (
    <SiteLayout headerSpacer>
      {/* ===== Header ===== */}
      <section className="container-editorial pt-20 pb-16 md:pt-28 md:pb-24">
        <SectionLabel index="02" eyebrow="Services" />
        <h1 className="h-display mt-12 max-w-5xl text-5xl text-balance md:text-7xl lg:text-[8rem]">
          Trois métiers,
          <span className="text-muted-foreground"> orchestrés sous une seule responsabilité.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-foreground/80 leading-relaxed">
          Nous prenons en charge l'ensemble du cycle de construction&nbsp;: vous avez un seul
          interlocuteur, un seul devis, un seul calendrier. Pas de sous-traitance opaque, pas de
          dilution de la responsabilité.
        </p>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] hover:border-accent hover:text-accent"
            >
              {s.index} / {s.name}
            </a>
          ))}
        </div>
      </section>

      {/* ===== Nos Domaines d'Expertise ===== */}
      <section className="border-t border-border bg-surface-raw py-20 md:py-28">
        <div className="container-editorial">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] tracking-widest text-accent">03</span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Construction &amp; Gros œuvre
            </span>
          </div>

          <h2 className="h-display mt-10 max-w-3xl text-4xl text-balance md:text-5xl lg:text-6xl">
            Nos Domaines d'Expertise
          </h2>

          <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
            {expertiseDomains.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="flex flex-col gap-6 bg-surface-raw p-8 md:p-10"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-accent/30 text-accent">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="h-display text-xl font-semibold leading-snug md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Service blocks alternating ===== */}
      {services.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-28 border-t border-border py-20 md:py-32 ${
              reversed ? "bg-surface-raw" : "bg-background"
            }`}
          >
            <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-16">
              <figure
                className={`md:col-span-6 ${reversed ? "md:order-2 md:col-start-7" : ""}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
                    style={{ transitionTimingFunction: "var(--ease-precise)" }}
                    loading="lazy"
                    width={1400}
                    height={1750}
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{s.name}</span>
                  <span>Réf. {s.index} / {services.length.toString().padStart(2, "0")}</span>
                </figcaption>
              </figure>

              <div className={`md:col-span-5 ${reversed ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  {s.index}
                </span>
                <h2 className="h-display mt-6 text-4xl text-balance md:text-6xl">{s.name}</h2>
                <p className="mt-3 font-display text-xl text-muted-foreground italic">
                  {s.tagline}
                </p>
                <p className="mt-8 leading-relaxed text-foreground/80">{s.description}</p>

                <div className="mt-10">
                  <p className="eyebrow">Périmètre type</p>
                  <ul className="mt-4 space-y-3">
                    {s.scope.map((item, idx) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-4 border-b border-border pb-3"
                      >
                        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {s.groups && s.groups.length > 0 && (
                  <div className="mt-10">
                    <p className="eyebrow">Détail des prestations</p>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      {s.groups.map((group) => (
                        <div
                          key={group.label}
                          className="border border-border p-5"
                        >
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                            {group.label}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-foreground/75"
                              >
                                <span
                                  className="mt-[0.45em] h-[4px] w-[4px] shrink-0 rounded-full bg-accent"
                                  aria-hidden="true"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 bg-foreground px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-background hover:bg-accent"
                >
                  Demander un devis {s.name.toLowerCase()} <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* ===== Process ===== */}
      <section className="bg-surface-deeper py-28 text-background md:py-40">
        <div className="container-editorial">
          <div className="flex items-baseline gap-4 text-background/40">
            <span className="font-mono text-[11px] tracking-widest text-accent">04</span>
            <span className="h-px flex-1 bg-background/20" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Méthode</span>
          </div>
          <h2 className="h-display mt-10 max-w-3xl text-4xl text-background md:text-6xl">
            Cinq jalons, une seule responsabilité.
          </h2>

          <ol className="mt-16 grid gap-px bg-background/15 md:grid-cols-5">
            {[
              { n: "01", t: "Brief & étude", b: "Visite, prise de côte, lecture des plans, première fourchette." },
              { n: "02", t: "Devis détaillé", b: "Métré poste par poste, planning contractuel, échéancier." },
              { n: "03", t: "Préparation chantier", b: "Études d'exécution, approvisionnements, sécurité, riverains." },
              { n: "04", t: "Exécution", b: "Suivi hebdo, reporting photo, jalons techniques validés." },
              { n: "05", t: "Réception & SAV", b: "Levée des réserves, garanties, visites 6 et 12 mois." },
            ].map((step) => (
              <li key={step.n} className="bg-surface-deeper p-8">
                <div className="font-mono text-[11px] tracking-widest text-accent">{step.n}</div>
                <h3 className="h-display mt-8 text-2xl">{step.t}</h3>
                <p className="mt-4 text-sm text-background/60 leading-relaxed">{step.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Moyens Matériels ===== */}
      <MoyensMateriels />

      {/* ===== CTA ===== */}
      <section className="container-editorial py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="h-display max-w-2xl text-4xl text-balance md:text-6xl">
            Un projet précis ? Estimez-le en deux minutes.
          </h2>
          <Link
            to="/outils"
            className="inline-flex items-center gap-3 border border-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-foreground hover:text-background"
          >
            Ouvrir l'estimateur <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Services;
