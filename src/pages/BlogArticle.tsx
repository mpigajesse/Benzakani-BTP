import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { articles } from "@/data/site";
import { articleBodies } from "@/data/articles/index";

type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "li"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

const parseRow = (line: string) =>
  line.split("|").slice(1, -1).map((c) => c.trim());

const isSeparator = (line: string) =>
  /^\|[\s\-|:]+\|$/.test(line);

function parseBody(raw: string): ContentBlock[] {
  const lines = raw.split("\n").map((l) => l.trimEnd()).filter((l) => l.length > 0);
  const blocks: ContentBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      // Need at least header + separator + 1 row
      if (tableLines.length >= 3 && isSeparator(tableLines[1])) {
        blocks.push({
          type: "table",
          headers: parseRow(tableLines[0]),
          rows: tableLines.slice(2).map(parseRow),
        });
      }
      continue;
    }

    if (line.startsWith("## "))      blocks.push({ type: "h2", text: line.slice(3) });
    else if (line.startsWith("### ")) blocks.push({ type: "h3", text: line.slice(4) });
    else if (line.startsWith("- "))  blocks.push({ type: "li", text: line.slice(2) });
    else                              blocks.push({ type: "p",  text: line });
    i++;
  }

  return blocks;
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const body = slug ? articleBodies[slug] : undefined;

  if (!article || !body) {
    return (
      <SiteLayout headerSpacer>
        <div className="container-editorial flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Article introuvable
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent hover:border-accent"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Retour au blog
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const blocks = parseBody(body);
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <SiteLayout headerSpacer>
      {/* ===== Hero ===== */}
      <section className="container-editorial pt-20 pb-12 md:pt-28 md:pb-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={12} aria-hidden="true" />
          Blog
        </Link>

        <div className="mt-8 flex flex-wrap items-baseline gap-3">
          <span className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {article.category}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {article.readTime} · {article.date}
          </span>
        </div>

        <h1 className="h-display mt-8 max-w-4xl text-4xl text-balance leading-tight md:text-6xl lg:text-7xl">
          {article.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {article.excerpt}
        </p>
      </section>

      {/* ===== Cover image ===== */}
      <figure className="container-editorial pb-16">
        <img
          src={article.image}
          alt={article.title}
          className="aspect-[16/8] w-full object-cover"
          loading="eager"
          width={1600}
          height={800}
        />
      </figure>

      {/* ===== Article body ===== */}
      <article className="container-editorial pb-28 md:pb-40">
        <div className="mx-auto max-w-3xl">
          {blocks.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="h-display mb-6 mt-14 text-2xl font-bold first:mt-0 md:text-3xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={i} className="mb-4 mt-10 font-display text-xl font-semibold md:text-2xl">
                  {block.text}
                </h3>
              );
            }
            if (block.type === "li") {
              return (
                <li key={i} className="ml-5 list-disc py-1 text-base leading-relaxed text-foreground/80">
                  {block.text}
                </li>
              );
            }
            if (block.type === "table") {
              return (
                <div key={i} className="my-8 overflow-x-auto rounded-none border border-border">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        {block.headers.map((h, j) => (
                          <th
                            key={j}
                            className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-foreground"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr key={j} className="border-b border-border last:border-0 even:bg-muted/20">
                          {row.map((cell, k) => (
                            <td key={k} className="px-4 py-3 text-foreground/80">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p key={i} className="mb-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      {/* ===== CTA ===== */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-24">
        <div className="container-editorial grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow-accent">Votre projet</p>
            <h2 className="h-display mt-4 text-3xl text-balance md:text-4xl">
              Prêt à démarrer votre construction ?
            </h2>
            <p className="mt-4 text-foreground/70">
              Nos équipes sont disponibles pour étudier votre projet et vous accompagner de A à Z.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:col-span-5 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent hover:border-accent"
            >
              Nous contacter →
            </Link>
            <Link
              to="/outils"
              className="inline-flex items-center gap-2 border border-border px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:border-foreground"
            >
              Estimer mon projet
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Related articles ===== */}
      {otherArticles.length > 0 && (
        <section className="container-editorial py-20 md:py-28">
          <h2 className="h-display mb-12 text-2xl md:text-3xl">Autres articles</h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {otherArticles.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/blog/${a.slug}`}
                  className="group block"
                  aria-label={`Lire l'article : ${a.title}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{a.category}</span>
                    <span>{a.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg text-balance leading-tight transition-colors group-hover:text-accent">
                    {a.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </SiteLayout>
  );
};

export default BlogArticle;
