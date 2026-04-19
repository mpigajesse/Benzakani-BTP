import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow?: string;
  children?: ReactNode;
};

/** Editorial section header: "00 / EYEBROW · description" */
export const SectionLabel = ({ index, eyebrow, children }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[11px] tracking-widest text-accent">{index}</span>
      <span className="h-px flex-1 bg-border" />
      {eyebrow && (
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </span>
      )}
      {children}
    </div>
  );
};
