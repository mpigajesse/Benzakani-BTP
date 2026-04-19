import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { cn } from "@/lib/utils";

/* =========================================================================
   COST ESTIMATOR
   Calibré sur 16 projets réels Benzakani-BTP (Casablanca / Settat — 2024).
   Toutes les valeurs en DH/m² SHOB. Fourchettes volontairement prudentes.

   Sources de calibration :
   - Habitation petite (80-110 m², R+3)       : 1,1 – 1,5 M DH  → ~3 000-4 500 DH/m²
   - Habitation moyenne (110-130 m², R+3)      : 1,5 – 1,6 M DH  → ~3 500-4 500 DH/m²
   - Habitation grande (130-170 m², R+3+SS)    : 0,8 – 1,6 M DH  → ~3 200-4 500 DH/m²
   - Villa (200-300 m², R+1 à R+3)             : 0,75 – 0,8 M DH → ~2 500-3 500 DH/m²
   - Grand complexe                            : jusqu'à 16 M DH
   - Bâtiment institutionnel / public          : 1,5 – 2 M DH
   - Établissement scolaire (10 unités)        : ~1,5 M DH
   ========================================================================= */

type ProjectType = "Construction neuve" | "Rénovation lourde" | "Extension";
type FinishLevel = "Gros œuvre seul" | "Second œuvre inclus" | "Haut de gamme";
type Region = "Grand Casablanca" | "Settat / Berrechid" | "Autres régions";

/* Base rates = gros œuvre + second œuvre standard, DH/m² SHOB */
const baseRates: Record<ProjectType, [number, number]> = {
  "Construction neuve": [3000, 5000],   // Gros œuvre ~3 000-4 000 ; clé en main ~5 000-7 000
  "Rénovation lourde":  [2500, 4000],   // Déconstruction partielle + remise à neuf
  Extension:            [3500, 5500],   // Structure existante à consolider
};

/* Finish multipliers — reflètent les données tarifaires réelles */
const finishMultiplier: Record<FinishLevel, number> = {
  "Gros œuvre seul":      0.75,   // ~3 000-4 000 DH/m²  (structure + fermeture)
  "Second œuvre inclus":  1.0,    // ~5 000-7 000 DH/m²  (valeur de référence)
  "Haut de gamme":        1.6,    // +2 000-3 000 DH/m² soit ~8 000-12 000 DH/m²
};

const regionMultiplier: Record<Region, number> = {
  "Grand Casablanca":    1.05,
  "Settat / Berrechid":  0.92,
  "Autres régions":      1.0,
};

/* =========================================================================
   RÉFÉRENCES TARIFAIRES — données issues des 16 projets réels
   ========================================================================= */
interface TarifRef {
  label: string;
  range: string;
  note: string;
}

const TARIF_REFS: TarifRef[] = [
  {
    label: "Gros œuvre seul",
    range: "3 000 – 4 000 DH/m²",
    note: "Structure béton armé + maçonnerie + fermeture",
  },
  {
    label: "Second œuvre inclus",
    range: "5 000 – 7 000 DH/m²",
    note: "Plomberie, électricité, revêtements standards",
  },
  {
    label: "Finitions haut de gamme",
    range: "+ 2 000 – 3 000 DH/m²",
    note: "Marbre, menuiseries aluminium, domotique",
  },
  {
    label: "Clé en main R+3",
    range: "8 000 – 12 000 DH/m²",
    note: "Livraison complète toutes prestations",
  },
];

interface ProjectRef {
  type: string;
  surface: string;
  niveaux: string;
  budget: string;
}

const PROJECT_REFS: ProjectRef[] = [
  {
    type: "Habitation (petite)",
    surface: "80 – 110 m²",
    niveaux: "R+3",
    budget: "1,1 – 1,5 M DH",
  },
  {
    type: "Habitation (moyenne)",
    surface: "110 – 130 m²",
    niveaux: "R+3",
    budget: "1,5 – 1,6 M DH",
  },
  {
    type: "Habitation (grande)",
    surface: "130 – 170 m²",
    niveaux: "R+3 + SS",
    budget: "0,8 – 1,6 M DH",
  },
  {
    type: "Villa",
    surface: "200 – 300 m²",
    niveaux: "R+1 à R+3",
    budget: "750 K – 800 K DH",
  },
  {
    type: "Établissement scolaire",
    surface: "10 unités",
    niveaux: "—",
    budget: "~1,5 M DH",
  },
  {
    type: "Bâtiment institutionnel",
    surface: "—",
    niveaux: "—",
    budget: "1,5 – 2 M DH",
  },
  {
    type: "Grand complexe",
    surface: "—",
    niveaux: "—",
    budget: "jusqu'à 16 M DH",
  },
];

const formatMAD = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(n / 1000) * 1000);

const Tools = () => {
  const [type, setType] = useState<ProjectType>("Construction neuve");
  const [finish, setFinish] = useState<FinishLevel>("Second œuvre inclus");
  const [region, setRegion] = useState<Region>("Grand Casablanca");
  const [surface, setSurface] = useState<number>(150);
  const [levels, setLevels] = useState<number>(2);

  const result = useMemo(() => {
    const [low, high] = baseRates[type];
    const fm = finishMultiplier[finish];
    const rm = regionMultiplier[region];
    const totalSurface = surface * levels;
    const lowTotal = low * fm * rm * totalSurface;
    const highTotal = high * fm * rm * totalSurface;
    return {
      lowPerM2: low * fm * rm,
      highPerM2: high * fm * rm,
      lowTotal,
      highTotal,
      totalSurface,
    };
  }, [type, finish, region, surface, levels]);

  const reset = () => {
    setType("Construction neuve");
    setFinish("Second œuvre inclus");
    setRegion("Grand Casablanca");
    setSurface(150);
    setLevels(2);
  };

  return (
    <SiteLayout headerSpacer>
      {/* ===== Header ===== */}
      <section className="container-editorial pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionLabel index="05" eyebrow="Outils · Estimateur" />
        <h1 className="h-display mt-12 max-w-5xl text-5xl text-balance md:text-7xl lg:text-[8rem]">
          Combien coûte
          <span className="text-muted-foreground"> votre projet&nbsp;?</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/80">
          Une fourchette indicative, calculée à partir de nos prix de revient réels pour des
          projets comparables sur le marché marocain. Pour un chiffrage contractuel, contactez-nous.
        </p>
      </section>

      {/* ===== Estimator workbench ===== */}
      <section className="border-y border-border bg-surface-raw">
        <div className="container-editorial grid gap-12 py-16 md:grid-cols-12 md:gap-16 md:py-24">
          {/* ----- LEFT: Inputs ----- */}
          <div className="md:col-span-7">
            <div className="flex items-baseline justify-between">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Paramètres
              </h2>
              <button
                type="button"
                onClick={reset}
                aria-label="Réinitialiser les paramètres"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                <RotateCcw size={12} aria-hidden="true" /> Réinitialiser
              </button>
            </div>

            <div className="mt-8 space-y-12">
              <ChoiceGroup
                label="Type de projet"
                options={["Construction neuve", "Rénovation lourde", "Extension"]}
                value={type}
                onChange={(v) => setType(v as ProjectType)}
              />
              <ChoiceGroup
                label="Niveau de finition"
                options={["Gros œuvre seul", "Second œuvre inclus", "Haut de gamme"]}
                value={finish}
                onChange={(v) => setFinish(v as FinishLevel)}
              />
              <ChoiceGroup
                label="Localisation"
                options={["Grand Casablanca", "Settat / Berrechid", "Autres régions"]}
                value={region}
                onChange={(v) => setRegion(v as Region)}
              />

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="surface" className="eyebrow">
                    Surface au sol (m²)
                  </label>
                  <span className="font-display text-2xl">{surface} m²</span>
                </div>
                <input
                  id="surface"
                  type="range"
                  min={50}
                  max={1000}
                  step={10}
                  value={surface}
                  aria-valuetext={`${surface} m²`}
                  onChange={(e) => setSurface(Number(e.target.value))}
                  className="mt-4 w-full accent-accent"
                />
                <div className="mt-1 flex justify-between font-mono text-[10px] tracking-widest text-muted-foreground">
                  <span>50</span><span>1000</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="levels" className="eyebrow">
                    Nombre de niveaux
                  </label>
                  <span className="font-display text-2xl">
                    {levels === 1 ? "RDC" : `R+${levels - 1}`}
                  </span>
                </div>
                <input
                  id="levels"
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={levels}
                  aria-valuetext={levels === 1 ? "RDC" : `R+${levels - 1}`}
                  onChange={(e) => setLevels(Number(e.target.value))}
                  className="mt-4 w-full accent-accent"
                />
                <div className="mt-1 flex justify-between font-mono text-[10px] tracking-widest text-muted-foreground">
                  <span>RDC</span><span>R+1</span><span>R+2</span><span>R+3</span><span>R+4</span>
                </div>
              </div>
            </div>
          </div>

          {/* ----- RIGHT: Result ----- */}
          <aside className="md:col-span-4 md:col-start-9">
            <div className="sticky top-28 bg-surface-deeper p-8 text-background md:p-10" aria-live="polite" aria-atomic="true">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Estimation indicative
              </p>

              <div className="mt-8">
                <p className="text-background/50 text-sm">Fourchette de budget</p>
                <p className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                  {formatMAD(result.lowTotal)}
                  <span className="text-background/40"> – </span>
                  {formatMAD(result.highTotal)}
                  <span className="ml-2 text-base text-background/60">DH</span>
                </p>
              </div>

              <dl className="mt-8 space-y-4 border-t border-background/15 pt-8 text-sm">
                <Row label="Surface bâtie totale" value={`${result.totalSurface} m²`} />
                <Row
                  label="Prix au m²"
                  value={`${formatMAD(result.lowPerM2)} – ${formatMAD(result.highPerM2)} DH`}
                />
                <Row label="Type" value={type} />
                <Row label="Finition" value={finish} />
                <Row label="Région" value={region} />
              </dl>

              <Link
                to="/contact"
                className="mt-10 inline-flex w-full items-center justify-between bg-accent px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground hover:opacity-90"
              >
                Obtenir un chiffrage détaillé <ArrowUpRight size={14} aria-hidden="true" />
              </Link>

              <p className="mt-6 text-xs text-background/50 leading-relaxed">
                * Estimation hors étude de sol, foncier, taxes et honoraires d'architecte.
                Les prix réels peuvent varier selon les contraintes du site et les choix techniques.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== Methodology ===== */}
      <section className="container-editorial py-24 md:py-32">
        <SectionLabel index="06" eyebrow="Méthodologie" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Données de marché",
              b: "Les fourchettes au m² sont calibrées sur 16 projets réels livrés par Benzakani-BTP, indexés sur l'évolution des matériaux au Maroc.",
            },
            {
              t: "Modulation par paramètres",
              b: "Trois variables principales : type d'opération, niveau de finition, région. Le coût est ensuite multiplié par la surface bâtie totale.",
            },
            {
              t: "Limites du calcul",
              b: "L'outil ne remplace pas un métré. Pour un projet réel, prévoyez 5 à 10% d'aléas et faites établir un devis détaillé.",
            },
          ].map((item) => (
            <article key={item.t}>
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.b}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Références Tarifaires ===== */}
      <section className="border-t border-border">
        <div className="container-editorial py-24 md:py-32">
          <SectionLabel index="07" eyebrow="Références Tarifaires" />
          <h2 className="mt-12 font-display text-3xl md:text-4xl">
            Barèmes issus de nos projets réels
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Ces références sont extraites du carnet de 16 projets livrés et constituent la base de
            calibration de notre estimateur.
          </p>

          {/* Prix au m² */}
          <div className="mt-16">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Prix au m² estimatif
            </h3>
            <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {TARIF_REFS.map((ref) => (
                <div key={ref.label} className="bg-background p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {ref.label}
                  </p>
                  <p className="mt-3 font-display text-xl leading-snug md:text-2xl">
                    {ref.range}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {ref.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projets de référence */}
          <div className="mt-16">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Projets de référence
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table
                className="w-full border-collapse font-mono text-[12px]"
                aria-label="Projets de référence Benzakani-BTP"
              >
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="pb-3 pr-8 text-left font-normal uppercase tracking-[0.14em] text-muted-foreground">
                      Type
                    </th>
                    <th scope="col" className="pb-3 pr-8 text-left font-normal uppercase tracking-[0.14em] text-muted-foreground">
                      Surface
                    </th>
                    <th scope="col" className="pb-3 pr-8 text-left font-normal uppercase tracking-[0.14em] text-muted-foreground">
                      Niveaux
                    </th>
                    <th scope="col" className="pb-3 text-right font-normal uppercase tracking-[0.14em] text-muted-foreground">
                      Budget indicatif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PROJECT_REFS.map((ref, i) => (
                    <tr
                      key={ref.type}
                      className={cn(
                        "border-b border-border/50 transition-colors hover:bg-surface-raw",
                        i === PROJECT_REFS.length - 1 && "border-b-0"
                      )}
                    >
                      <td className="py-4 pr-8 text-foreground">{ref.type}</td>
                      <td className="py-4 pr-8 text-muted-foreground">{ref.surface}</td>
                      <td className="py-4 pr-8 text-muted-foreground">{ref.niveaux}</td>
                      <td className="py-4 text-right font-semibold text-foreground">
                        {ref.budget}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              * Budgets hors foncier, étude de sol, taxes et honoraires d'architecte. Données issues
              du carnet de commandes Benzakani-BTP — région Casablanca / Settat.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-accent"
            >
              Demander un chiffrage sur mesure <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

const ChoiceGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => {
  const labelId = `choice-group-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div>
      <p id={labelId} className="eyebrow">{label}</p>
      <div role="group" aria-labelledby={labelId} className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={cn(
              "border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
              value === o
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline justify-between gap-4">
    <dt className="text-background/50">{label}</dt>
    <dd className="text-right text-background">{value}</dd>
  </div>
);

export default Tools;
