import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CapitalHumain } from "@/components/site/CapitalHumain";
import { QHSESection } from "@/components/site/QHSESection";
import { teamBlueprint, textureConcrete, values, stats, company, philosophie } from "@/data/site";
import { ficheIdentite } from "@/data/legal";

const timeline = [
  { year: "2015", title: "Fondation", body: "M. Yassine Sadouk fonde Benzakani BTP à Casablanca, avec une philosophie centrée sur la qualité, le respect des délais et la satisfaction client." },
  { year: "2018", title: "Premier marché institutionnel", body: "Lot structure pour la Province de Settat — 1 800 m² livrés en 9 mois." },
  { year: "2021", title: "Bureau d'études internalisé", body: "Création d'une cellule études d'exécution pour fiabiliser les budgets et délais." },
  { year: "2024", title: "Cap des 16 projets livrés", body: "32M DH de volume cumulé, 6 clients institutionnels, taux de respect des délais : 94%." },
];

const team = [
  { role: "Direction & Gestion", desc: "Vision stratégique et pilotage de l'entreprise." },
  { role: "Bureau d'Études", desc: "Ingénieurs et techniciens spécialisés en études d'exécution." },
  { role: "Encadrement Chantier", desc: "Chefs de chantier et conducteurs de travaux expérimentés." },
  { role: "Ouvriers Qualifiés", desc: "Maçons, ferrailleurs et coffreurs aux compétences éprouvées." },
];

const About = () => {
  return (
    <SiteLayout headerSpacer>
      {/* ===== Editorial intro ===== */}
      <section aria-labelledby="about-heading" className="container-editorial pt-20 pb-24 md:pt-28 md:pb-32">
        <SectionLabel index="01" eyebrow="À propos · Benzakani BTP" />
        <h1 id="about-heading" className="h-display mt-12 max-w-5xl text-5xl text-balance md:text-7xl lg:text-[8rem]">
          Une entreprise du bâtiment qui pense
          <span className="text-muted-foreground"> comme un atelier d'architecture.</span>
        </h1>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <p className="md:col-span-6 text-lg leading-relaxed text-foreground/80">
            Depuis sa création en {company.founded} par M.&nbsp;{company.founder}, Benzakani BTP
            a connu une croissance remarquable. Notre philosophie repose sur une approche centrée
            sur la qualité, le respect des délais et la satisfaction client, guidant chacune de
            nos actions au quotidien.
          </p>
          <dl className="grid grid-cols-2 gap-y-8 md:col-span-4 md:col-start-9">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="eyebrow">{s.label}</dt>
                <dd className="mt-2 font-display text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== Big image break ===== */}
      <section aria-label="Photo de chantier Benzakani BTP" className="relative">
        <img
          src={teamBlueprint}
          alt="Conducteur de travaux Benzakani étudiant les plans"
          className="aspect-[16/8] w-full object-cover"
          loading="lazy"
          width={1920}
          height={960}
        />
        <div className="container-editorial">
          <p className="-mt-10 ml-auto max-w-md bg-background p-8 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground md:-mt-14">
            <span className="text-accent">Cliché 03/24</span> — Réunion de chantier hebdomadaire,
            programme YTIB Promo · Berrechid.
          </p>
        </div>
      </section>

      {/* ===== Mission, asymmetric ===== */}
      <section aria-labelledby="mission-heading" className="container-editorial py-28 md:py-40">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="eyebrow-accent">Mission</p>
          </aside>
          <div className="md:col-span-9">
            <p id="mission-heading" className="h-display text-3xl text-balance md:text-5xl lg:text-6xl">
              "Notre mission est de bâtir des espaces de vie durables qui répondent aux exigences
              les plus élevées de nos clients."
            </p>
            <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
              Notre mission n'est pas de produire du mètre carré. Elle est de transformer
              l'intention d'un maître d'ouvrage en ouvrage construit, sans perte d'information
              entre les deux. Pour cela, un seul levier&nbsp;: la rigueur d'exécution.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Philosophy pillars ===== */}
      <section aria-labelledby="philosophie-heading" className="bg-surface-raw py-28 md:py-40">
        <div className="container-editorial">
          <SectionLabel index="02" eyebrow="Philosophie" />
          <h2 id="philosophie-heading" className="h-display mt-10 max-w-3xl text-4xl md:text-6xl">
            Trois piliers qui guident chacune de nos actions.
          </h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {philosophie.map((p, i) => (
              <div key={p.titre} className="bg-surface-raw p-10 md:p-12">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h-display mt-8 text-2xl md:text-3xl">{p.titre}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.texte}</p>
                {p.titre === "Proximité Client" && (
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-accent">
                    Taux de satisfaction&nbsp;: {company.taux_satisfaction}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Timeline horizontal ===== */}
      <section aria-labelledby="trajectoire-heading" className="py-28 md:py-40">
        <div className="container-editorial">
          <SectionLabel index="03" eyebrow="Trajectoire" />
          <h2 id="trajectoire-heading" className="h-display mt-10 max-w-3xl text-4xl md:text-6xl">
            Dix ans de chantiers cumulés, indexés à un seul standard.
          </h2>
        </div>
        <div className="mt-16 overflow-x-auto">
          <ol className="container-editorial flex min-w-max gap-px bg-border">
            {timeline.map((t) => (
              <li key={t.year} className="w-[280px] bg-surface-raw p-8 md:w-[340px] md:p-10">
                <div className="font-mono text-[11px] tracking-widest text-accent">{t.year}</div>
                <h3 className="h-display mt-8 text-3xl">{t.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Values, vertical list ===== */}
      <section aria-labelledby="valeurs-heading" className="container-editorial py-28 md:py-40">
        <SectionLabel index="04" eyebrow="Nos valeurs" />
        <h2 id="valeurs-heading" className="sr-only">Nos valeurs</h2>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {values.map((v) => (
            <article
              key={v.code}
              className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <span className="font-mono text-[11px] tracking-widest text-accent md:col-span-1">
                {v.code}
              </span>
              <h3 className="h-display text-4xl md:col-span-4 md:text-6xl">{v.name}</h3>
              <p className="text-foreground/70 leading-relaxed md:col-span-7">{v.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Capital Humain ===== */}
      <CapitalHumain />

      {/* ===== Team / Key personnel ===== */}
      <section aria-labelledby="equipe-heading" className="bg-surface-raw py-28 md:py-40">
        <div className="container-editorial">
          <SectionLabel index="06" eyebrow="Notre équipe" />
          <h2 id="equipe-heading" className="h-display mt-10 max-w-3xl text-4xl md:text-6xl">
            Des profils complémentaires, un seul standard d'exigence.
          </h2>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 md:grid-cols-4">
            {team.map((t, i) => (
              <div key={t.role} className="bg-surface-raw p-8 md:p-10">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h-display mt-6 text-xl md:text-2xl">{t.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Photo + caption ===== */}
      <section aria-labelledby="fondateur-heading" className="bg-surface-deeper py-24 text-background md:py-32">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p id="fondateur-heading" className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Note du fondateur
            </p>
            <p className="h-display mt-8 text-3xl text-balance text-background md:text-4xl">
              "Le bâtiment ne pardonne pas l'à-peu-près. Notre travail consiste à éliminer
              l'à-peu-près à chaque interface."
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
              {company.founder} — Fondateur
            </p>
          </div>
          <figure className="md:col-span-6 md:col-start-7">
            <img
              src={textureConcrete}
              alt="Texture béton brut, mur de fondation"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1600}
              height={1200}
            />
            <figcaption className="sr-only">Texture béton brut, mur de fondation — Benzakani BTP</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== Fiche d'Identité ===== */}
      <section aria-labelledby="identite-heading" className="container-editorial py-24 md:py-32">
        <SectionLabel index="07" eyebrow="Informations légales" />
        <h2 id="identite-heading" className="h-display mt-10 max-w-3xl text-4xl md:text-5xl">
          Fiche d'Identité de l'Entreprise
        </h2>
        <div className="mt-12 border border-border">
          <dl className="divide-y divide-border md:grid md:grid-cols-2 md:divide-y-0">
            {[
              { label: "Raison Sociale", value: ficheIdentite.raisonSociale },
              { label: "Forme Juridique", value: ficheIdentite.formeJuridique },
              { label: "Fondateur", value: ficheIdentite.fondateur },
              { label: "Date de Création", value: ficheIdentite.dateCreation },
              { label: "Capital Social", value: ficheIdentite.capitalSocial },
              { label: "N° RC", value: ficheIdentite.rc },
              { label: "Identifiant Fiscal", value: ficheIdentite.identifiantFiscal },
              { label: "N° CNSS", value: ficheIdentite.cnss },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={[
                  "flex items-baseline gap-4 px-8 py-5",
                  "md:border-b md:border-border",
                  i % 2 === 0 ? "md:border-r" : "",
                  i >= 6 ? "md:border-b-0" : "",
                ].join(" ")}
              >
                <dt className="w-40 shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </dt>
                <dd className="font-display text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== QHSE ===== */}
      <QHSESection />

      {/* ===== CTA ===== */}
      <section aria-labelledby="cta-heading" className="container-editorial py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 id="cta-heading" className="h-display max-w-2xl text-4xl text-balance md:text-6xl">
            Envie de voir ce que cela donne en chantier ?
          </h2>
          <Link
            to="/realisations"
            aria-label="Voir toutes les réalisations de Benzakani BTP"
            className="inline-flex items-center gap-3 border border-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
          >
            Voir les réalisations <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
