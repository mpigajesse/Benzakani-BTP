import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, company } from "@/data/site";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 transition-all duration-500",
        open ? "z-[60]" : "z-50",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
      style={{ transitionTimingFunction: "var(--ease-precise)" }}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          aria-label={`${company.name} — accueil`}
          className="group flex items-baseline gap-2"
        >
          <span className="font-display text-lg font-bold tracking-tight md:text-xl">
            BEN ZAKANI
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            BTP / EST. {company.founded}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "group relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-500",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                    style={{ transitionTimingFunction: "var(--ease-precise)" }}
                  />
                </span>
              )}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="hidden font-mono text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground xl:block"
            aria-label={`Appeler le ${company.phone}`}
          >
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="hidden items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent hover:border-accent md:inline-flex"
          >
            Démarrer un projet
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-border lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-0 bottom-0 z-[55] origin-top bg-background transition-all duration-500 lg:hidden",
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        )}
        style={{ transitionTimingFunction: "var(--ease-precise)" }}
      >
        <div className="container-editorial flex h-full flex-col justify-between pt-20 pb-10 md:pt-24">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {navLinks.map((l, i) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "group flex items-baseline justify-between border-b border-border py-5",
                    isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                  )
                }
                style={{
                  animation: open ? `fade-up 0.6s ${i * 60}ms var(--ease-precise) both` : undefined,
                }}
              >
                <span className="font-display text-3xl font-medium tracking-tight transition-colors duration-300">
                  {l.label}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {l.index}
                </span>
              </RouterNavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-between border border-foreground bg-foreground px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent hover:border-accent"
          >
            Démarrer un projet <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
