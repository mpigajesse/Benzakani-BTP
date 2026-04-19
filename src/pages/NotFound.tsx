import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Erreur 404
        </p>
        <h1 className="mb-4 font-display text-6xl font-bold tracking-tight">
          Page introuvable
        </h1>
        <p className="mb-8 text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent hover:border-accent"
        >
          Retour à l'accueil <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
