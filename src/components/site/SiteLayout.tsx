import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { navLinks } from "@/data/site";

const TITRE_SITE = "Benzakani BTP — Construction & Travaux Publics au Maroc";

type Props = {
  children: ReactNode;
  /** Ajoute un padding-top égal à la hauteur du header fixe (true sur les pages sans hero plein écran). */
  headerSpacer?: boolean;
  /** Titre de l'onglet ; à défaut, le libellé de la page dans la navigation. */
  title?: string;
};

export const SiteLayout = ({ children, headerSpacer = false, title }: Props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Chaque page avait le même titre d'onglet : impossible de distinguer
  // plusieurs onglets ou de partager une page précise.
  useEffect(() => {
    const libelle = title ?? navLinks.find((l) => l.to === pathname && l.to !== "/")?.label;
    document.title = libelle ? `${libelle} — Benzakani BTP` : TITRE_SITE;
  }, [pathname, title]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className={headerSpacer ? "pt-16 md:pt-20" : ""}>{children}</main>
      <SiteFooter />
    </div>
  );
};
