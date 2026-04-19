import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PortfolioProject {
  name: string;
  surface: string;
  levels: string;
  budget: number; // montant en DH
}

interface ClientGroup {
  client: string;
  projects: PortfolioProject[];
}

// ─── Data (source : dossier de références officiel) ──────────────────────────

const portfolio: ClientGroup[] = [
  {
    client: "Société Fondations Ilyass",
    projects: [
      { name: "Habitation MIFTAH EL KHIER N°937", surface: "130 m²", levels: "R+3", budget: 1_500_000 },
      { name: "Habitation BEN KASSEM II N°286", surface: "108 m²", levels: "R+3", budget: 1_300_000 },
      { name: "Habitation EL BAITAR N°29", surface: "118 m²", levels: "R+3", budget: 1_600_000 },
      { name: "Habitation TAOUFIK N°481", surface: "98 m²", levels: "R+3", budget: 1_100_000 },
      { name: "Habitation BEN KASSEM II N°256", surface: "108 m²", levels: "R+3+SS", budget: 16_000_000 },
      { name: "Immeuble ABRAR N°118", surface: "161 m²", levels: "R+3+SS+M", budget: 870_000 },
      { name: "Villa BASSATIN EL OULFA", surface: "20 m²", levels: "R+3", budget: 720_000 },
    ],
  },
  {
    client: "YTIB PROMO",
    projects: [
      { name: "Habitation LAHRAOUYINE", surface: "160 m²", levels: "R+3+SS+M", budget: 800_000 },
      { name: "Villa TIT MELLIL", surface: "300 m²", levels: "R+3", budget: 800_000 },
      { name: "Habitation EL BADR", surface: "160 m²", levels: "R+3+SS+M", budget: 750_000 },
      { name: "Habitation CHELLALAT lot 14", surface: "170 m²", levels: "R+3+SS+M", budget: 950_000 },
      { name: "Villa ALMAZ lot 174", surface: "200 m²", levels: "R+1+SS", budget: 750_000 },
    ],
  },
  {
    client: "État / Province de Settat",
    projects: [
      {
        name: "Siège 2ème Annexe Administrative + Poste Forces Auxiliaires, El Borouj",
        surface: "—",
        levels: "—",
        budget: 1_920_000,
      },
    ],
  },
  {
    client: "État / Province de Berrechid",
    projects: [
      {
        name: "Construction de 10 unités préscolaires — communes Laghnimiyine & Ouled Abbou",
        surface: "—",
        levels: "—",
        budget: 1_490_000,
      },
    ],
  },
  {
    client: "Rachid Taouss",
    projects: [
      {
        name: "Habitation COSTA N°237, double façade, Bouznika",
        surface: "130 m²",
        levels: "R+3",
        budget: 900_000,
      },
    ],
  },
  {
    client: "Bulk Building",
    projects: [
      {
        name: "Habitation MIFTAH EL KHIER, Settat",
        surface: "130 m²",
        levels: "R+3",
        budget: 700_000,
      },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function clientTotal(group: ClientGroup): number {
  return group.projects.reduce((sum, p) => sum + p.budget, 0);
}

const grandTotal = portfolio.reduce((sum, g) => sum + clientTotal(g), 0);
const totalProjects = portfolio.reduce((sum, g) => sum + g.projects.length, 0);

function formatBudget(dh: number): string {
  if (dh >= 1_000_000) {
    const m = dh / 1_000_000;
    const formatted = m % 1 === 0 ? m.toFixed(0) : parseFloat(m.toFixed(2)).toString();
    return `${formatted} M DH`;
  }
  return `${(dh / 1_000).toFixed(0)} K DH`;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const ClientsReferences = () => {
  return (
    <section className="border-t border-border bg-[hsl(var(--surface-raw))]">
      <div className="container-editorial py-20 md:py-28">

        {/* Section header */}
        <SectionLabel index="04" eyebrow="Références · Dossier officiel" />
        <h2 className="mt-10 text-4xl font-display md:text-5xl">
          Nos Références Clients
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Récapitulatif complet des {totalProjects} marchés exécutés depuis 2018 —{" "}
          {portfolio.length} donneurs d'ordre, {formatBudget(grandTotal)} de volume total.
        </p>

        {/* Per-client tables */}
        <div className="mt-14 space-y-10">
          {portfolio.map((group) => {
            const total = clientTotal(group);
            const count = group.projects.length;

            return (
              <div key={group.client} className="overflow-hidden border border-border bg-background">

                {/* Client header band */}
                <div className="flex items-center justify-between gap-4 border-b border-border bg-foreground px-5 py-3">
                  <span className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-background">
                    {group.client}
                  </span>
                  <div className="flex items-center gap-6">
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-background/55 sm:block">
                      {count} projet{count > 1 ? "s" : ""}
                    </span>
                    <span className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--accent))]">
                      {formatBudget(total)}
                    </span>
                  </div>
                </div>

                {/* Projects table */}
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border hover:bg-transparent">
                      <TableHead className="w-10 py-3 pl-5 pr-2 font-mono text-[10px] uppercase tracking-[0.14em]">
                        #
                      </TableHead>
                      <TableHead className="py-3 font-mono text-[10px] uppercase tracking-[0.14em]">
                        Désignation
                      </TableHead>
                      <TableHead className="hidden py-3 font-mono text-[10px] uppercase tracking-[0.14em] sm:table-cell">
                        Surface
                      </TableHead>
                      <TableHead className="hidden py-3 font-mono text-[10px] uppercase tracking-[0.14em] md:table-cell">
                        Niveaux
                      </TableHead>
                      <TableHead className="py-3 pr-5 text-right font-mono text-[10px] uppercase tracking-[0.14em]">
                        Montant
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {group.projects.map((proj, idx) => (
                      <TableRow
                        key={proj.name}
                        className="border-b border-border/50 last:border-0 hover:bg-muted/40"
                      >
                        <TableCell className="w-10 py-3.5 pl-5 pr-2 font-mono text-[11px] text-muted-foreground">
                          {String(idx + 1).padStart(2, "0")}
                        </TableCell>
                        <TableCell className="max-w-[300px] py-3.5 text-sm font-medium leading-snug">
                          {proj.name}
                        </TableCell>
                        <TableCell className="hidden py-3.5 font-mono text-[12px] text-muted-foreground sm:table-cell">
                          {proj.surface}
                        </TableCell>
                        <TableCell className="hidden py-3.5 font-mono text-[12px] text-muted-foreground md:table-cell">
                          {proj.levels}
                        </TableCell>
                        <TableCell className="py-3.5 pr-5 text-right font-mono text-[12px] font-medium tabular-nums">
                          {formatBudget(proj.budget)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  {count > 1 && (
                    <TableFooter>
                      <TableRow className="border-t border-border bg-muted/30 hover:bg-muted/30">
                        <TableCell
                          colSpan={4}
                          className="py-3 pl-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                        >
                          Sous-total — {group.client}
                        </TableCell>
                        <TableCell className="py-3 pr-5 text-right font-mono text-[13px] font-semibold tabular-nums text-accent">
                          {formatBudget(total)}
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  )}
                </Table>
              </div>
            );
          })}
        </div>

        {/* Grand total band */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-[hsl(var(--accent))] bg-foreground px-6 py-5 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/50">
              Volume total des marchés exécutés
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-background/65">
              {totalProjects} projets · {portfolio.length} clients · 2018 — 2024
            </p>
          </div>
          <p className="font-display text-4xl font-bold text-[hsl(var(--accent))] md:text-5xl">
            {formatBudget(grandTotal)}
          </p>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-between gap-6 bg-foreground px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent"
          >
            Lancer un projet <ArrowUpRight size={14} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-between gap-6 border border-border px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-foreground"
          >
            Nos prestations <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
