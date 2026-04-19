import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type Props = {
  children: ReactNode;
  /** Ajoute un padding-top égal à la hauteur du header fixe (true sur les pages sans hero plein écran). */
  headerSpacer?: boolean;
};

export const SiteLayout = ({ children, headerSpacer = false }: Props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className={headerSpacer ? "pt-16 md:pt-20" : ""}>{children}</main>
      <SiteFooter />
    </div>
  );
};
