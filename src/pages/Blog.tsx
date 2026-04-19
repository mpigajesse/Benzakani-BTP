import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { articles } from "@/data/site";

const categories = Array.from(new Set(articles.map((a) => a.category)));

const Blog = () => {
  const [featured, ...rest] = articles;

  return (
    <SiteLayout headerSpacer>
      {/* ===== Editorial header ===== */}
      <section className="container-editorial pt-20 pb-16 md:pt-28 md:pb-20">
        <SectionLabel index="04" eyebrow={`Insights · ${articles.length} entrées`} />
        <h1 className="h-display mt-12 max-w-5xl text-5xl text-balance md:text-7xl lg:text-[8rem]">
          Notes du chantier.
          <span className="text-muted-foreground"> Pour ceux qui construisent vraiment.</span>
        </h1>
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ===== Featured article — magazine layout ===== */}
      <section className="container-editorial pb-24">
        <Link to={`/blog/${featured.slug}`} className="group block" aria-label={`Lire l'article : ${featured.title}`}>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <figure className="md:col-span-7 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                style={{ transitionTimingFunction: "var(--ease-precise)" }}
                loading="eager"
                fetchPriority="high"
                width={1600}
                height={1000}
              />
            </figure>
            <div className="flex flex-col justify-end md:col-span-5">
              <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                <span>{featured.category}</span>
                <span className="text-muted-foreground">{featured.readTime} · {featured.date}</span>
              </div>
              <h2 className="h-display mt-6 text-4xl text-balance leading-tight transition-colors group-hover:text-accent md:text-6xl">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-prose text-lg text-foreground/80 leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em]">
                Lire l'article <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ===== Articles list — editorial table ===== */}
      <section className="border-t border-border bg-surface-raw">
        <div className="container-editorial py-20 md:py-28">
          <h2 className="h-display text-3xl md:text-4xl">Tous les articles</h2>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {rest.map((a, i) => (
              <li key={a.slug}>
                <Link
                  to={`/blog/${a.slug}`}
                  className="group grid items-center gap-6 py-8 transition-colors hover:bg-background md:grid-cols-12 md:gap-10 md:py-10"
                  aria-label={`Lire l'article : ${a.title}`}
                >
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground md:col-span-1">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-xl text-balance leading-tight transition-colors group-hover:text-accent md:text-2xl">
                      {a.title}
                    </h3>
                  </div>
                  <p className="hidden text-sm text-muted-foreground md:col-span-3 md:block">
                    {a.excerpt.slice(0, 90)}…
                  </p>
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">
                    <span>{a.category}</span>
                  </div>
                  <div className="flex items-center justify-end font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:col-span-1">
                    <span>{a.readTime}</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="ml-3 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className="bg-surface-deeper py-24 text-background md:py-32">
        <div className="container-editorial grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow-accent">Restez informé</p>
            <h2 className="h-display mt-6 text-4xl text-balance text-background md:text-5xl">
              Une lettre par mois. Aucune publicité, jamais.
            </h2>
            <p className="mt-4 text-background/60">
              Réglementations marocaines, prix matériaux, retours d'expérience chantier.
            </p>
          </div>
          <form
            className="flex w-full items-center gap-0 border border-background/30 md:col-span-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="nl-email" className="sr-only">Email</label>
            <input
              id="nl-email"
              type="email"
              required
              maxLength={120}
              placeholder="vous@domaine.ma"
              className="w-full bg-transparent px-5 py-4 text-background placeholder:text-background/40 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-accent px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground hover:opacity-90"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;
