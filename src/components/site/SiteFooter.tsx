import { Link } from "react-router-dom";
import { company, navLinks } from "@/data/site";

export const SiteFooter = () => {
  return (
    <footer className="bg-surface-deeper text-background/80">
      <div className="container-editorial pt-24 pb-10">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Lockup */}
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Bâtir avec rigueur — depuis {company.founded}
            </div>
            <h2 className="mt-6 h-display text-4xl text-background md:text-5xl lg:text-6xl">
              Un projet en tête ?<br />
              <span className="text-background/50">Parlons-en avant le premier croquis.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-background/40 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:border-accent hover:text-accent"
            >
              Prendre contact <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/40">
              Navigation
            </p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-baseline gap-3 text-background/80 hover:text-background"
                  >
                    <span className="font-mono text-[10px] text-background/30">{l.index}</span>
                    <span className="border-b border-transparent transition-colors group-hover:border-accent">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/40">
              Atelier
            </p>
            <address className="mt-6 not-italic leading-relaxed text-background/70">
              {company.address}
            </address>
            <p className="mt-4 text-background/70">
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
              <br />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {company.phone}
              </a>
              <br />
              <span className="text-background/50">Fax : {company.fax}</span>
            </p>
            <p className="mt-4 text-sm text-background/50">{company.hours}</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-background/10 pt-8 text-[12px] text-background/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            RC · {company.rc} — SARL au capital de {company.capital} — IF · {company.if_num}
          </p>
        </div>
      </div>
    </footer>
  );
};
