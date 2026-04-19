import { body as bodyNormes } from "./normes-parasismiques-maroc-2025";
import { body as bodyEntrepreneur } from "./choisir-entrepreneur-batiment-maroc";
import { body as bodyIsolation } from "./isolation-thermique-reduire-factures-40";
import { body as bodyGrosOeuvre } from "./gros-oeuvre-fondations-reussite-projet";
import { body as bodySecondOeuvre } from "./second-oeuvre-ame-technique-batiment";
import { body as bodyFinitions } from "./finitions-btp-tendances-2025-maroc";

export const articleBodies: Record<string, string> = {
  "normes-parasismiques-maroc-2025": bodyNormes,
  "choisir-entrepreneur-batiment-maroc": bodyEntrepreneur,
  "isolation-thermique-reduire-factures-40": bodyIsolation,
  "gros-oeuvre-fondations-reussite-projet": bodyGrosOeuvre,
  "second-oeuvre-ame-technique-batiment": bodySecondOeuvre,
  "finitions-btp-tendances-2025-maroc": bodyFinitions,
};
