import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { faqs, company } from "@/data/site";
import { cn } from "@/lib/utils";

// Address split for two-line display
const ADDRESS_LINE1 = "Centre d'affaires Tit Mellil N°53 ETG 2 N°8";
const ADDRESS_LINE2 = "TIT MELLIL, Casablanca";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80, "Nom trop long"),
  email: z.string().trim().email("Email invalide").max(120),
  phone: z.string().trim().min(8, "Téléphone invalide").max(20),
  budget: z.string().trim().max(40).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Message trop court (20 caractères min.)")
    .max(2000, "Message trop long"),
});

const budgetRanges = ["< 500K DH", "500K – 1M DH", "1M – 3M DH", "3M – 10M DH", "> 10M DH"];

const Contact = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [budget, setBudget] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      budget,
      message: data.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const form = e.currentTarget;
    setSent(true);
    form.reset();
    setBudget("");
  };

  return (
    <SiteLayout headerSpacer>
      {/* ===== Split layout: form (left) / context (right) ===== */}
      <section className="border-b border-border">
        <div className="container-editorial grid gap-16 py-20 md:grid-cols-12 md:gap-20 md:py-28">
          {/* ----- LEFT: Form ----- */}
          <div className="md:col-span-7">
            <SectionLabel index="06" eyebrow="Démarrer un projet" />
            <h1 className="h-display mt-10 text-5xl text-balance md:text-7xl">
              Décrivez votre projet.
              <br />
              <span className="text-muted-foreground">Nous revenons sous 24h.</span>
            </h1>

            {sent ? (
              <div className="mt-12 flex items-start gap-4 border border-accent bg-accent/5 p-8 animate-fade-up">
                <Check className="mt-1 shrink-0 text-accent" />
                <div>
                  <h2 className="font-display text-2xl">Message reçu</h2>
                  <p className="mt-2 text-muted-foreground">
                    Un membre de notre équipe vous contactera sous 24h ouvrées.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 link-underline font-mono text-[11px] uppercase tracking-[0.18em]"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-12 space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Nom complet" name="name" placeholder="Ex : Mohamed Amine Benzakani" error={errors.name} required />
                  <Field label="Email" name="email" type="email" placeholder="votre@email.com" error={errors.email} required />
                  <Field label="Téléphone" name="phone" type="tel" placeholder="06 XX XX XX XX" error={errors.phone} required />
                  <div>
                    <label htmlFor="projectType" className="eyebrow">Type de projet</label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="mt-3 w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none"
                      defaultValue="Construction neuve"
                    >
                      <option value="Construction neuve">Construction neuve</option>
                      <option value="Rénovation">Rénovation</option>
                      <option value="Extension / surélévation">Extension / surélévation</option>
                      <option value="Étude technique">Étude technique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <p id="budget-label" className="eyebrow">Budget estimé</p>
                  <div role="group" aria-labelledby="budget-label" className="mt-3 flex flex-wrap gap-2">
                    {budgetRanges.map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setBudget(r)}
                        aria-pressed={budget === r}
                        className={cn(
                          "border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                          budget === r
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        )}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Localisation, surface envisagée, échéance, contraintes spécifiques…"
                    className="mt-3 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-6 pt-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs text-muted-foreground">
                    En envoyant ce formulaire, vous acceptez d'être recontacté par Benzakani BTP.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-background hover:bg-accent"
                  >
                    Envoyer la demande <ArrowUpRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ----- RIGHT: Coordinates ----- */}
          <aside className="md:col-span-4 md:col-start-9">
            <div className="sticky top-28 space-y-10">
              <div>
                <p className="eyebrow-accent">Siège — Casablanca</p>
                <address className="mt-4 not-italic text-lg leading-relaxed text-foreground/80">
                  {ADDRESS_LINE1}<br />
                  {ADDRESS_LINE2}
                </address>
              </div>

              <div className="space-y-3 border-t border-border pt-8">
                <p className="eyebrow">Direct</p>
                <a
                  href={`mailto:${company.email}`}
                  className="block font-display text-2xl hover:text-accent"
                >
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="block font-display text-2xl hover:text-accent"
                >
                  {company.phone}
                </a>
                <p className="text-muted-foreground">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Fax&nbsp;</span>
                  {company.fax}
                </p>
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  {company.website}
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <p className="eyebrow">Horaires</p>
                <p className="mt-3 text-muted-foreground">{company.hours}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Visites de chantier sur rendez-vous, samedi inclus.
                </p>
              </div>

              <div className="aspect-[4/3] overflow-hidden border border-border grid-blueprint">
                <div className="grid h-full place-items-center">
                  <p className="px-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Tit Mellil<br />33.5614° N · 7.4782° W
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="eyebrow">Informations légales</p>
                <ul className="mt-3 space-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  <li>RC&nbsp;&nbsp;&nbsp;{company.rc}</li>
                  <li>IF&nbsp;&nbsp;&nbsp;&nbsp;{company.if_num}</li>
                  <li>CNSS&nbsp;{company.cnss}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== FAQ accordion ===== */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="07" eyebrow="FAQ" />
            <h2 className="h-display mt-10 text-4xl md:text-5xl">
              Les questions
              <br />
              que l'on nous pose
              <br />
              vraiment.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Vous ne trouvez pas votre réponse ? Le formulaire ci-dessus reste le moyen le plus
              rapide.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg leading-snug md:text-xl">
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "shrink-0 font-mono text-xl text-muted-foreground transition-transform duration-500",
                          open && "rotate-45 text-accent"
                        )}
                        style={{ transitionTimingFunction: "var(--ease-precise)" }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-label={f.q}
                      className={cn(
                        "grid overflow-hidden transition-all duration-500",
                        open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                      )}
                      style={{ transitionTimingFunction: "var(--ease-precise)" }}
                    >
                      <div className="min-h-0">
                        <p className="max-w-prose pl-10 pr-4 text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="eyebrow">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      maxLength={120}
      placeholder={placeholder}
      required={required}
      aria-required={required ? "true" : undefined}
      aria-describedby={error ? `${name}-error` : undefined}
      className="mt-3 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
    />
    {error && (
      <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-destructive">
        {error}
      </p>
    )}
  </div>
);

export default Contact;
