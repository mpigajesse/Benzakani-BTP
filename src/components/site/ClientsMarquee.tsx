import { clients, type ClientEntry } from "@/data/site";

export const ClientsMarquee = () => {
  const loop: ClientEntry[] = [...clients, ...clients];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-6">
      <div className="marquee">
        {loop.map((c, i) => (
          <span key={`${c.name}-${i}`} className="inline-flex items-center">
            <span className="inline-flex flex-col items-start gap-0.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground leading-tight">
                {c.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent leading-tight">
                {c.sector}
              </span>
            </span>
            <span className="mx-8 text-muted-foreground/50 select-none" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
