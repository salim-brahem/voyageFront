import { DomaineActivite } from "./domaine-activite.model";
import { Employe } from "./employe.model";
import { User } from "./user.model";

export interface Entreprise {
  id: number;
  nomEntreprise: string;
  pays: string;
  logoUrl: string;
  adresse: string;
  telephone: string;
  domaine: DomaineActivite;
  employes: Employe[];
  user: User;
}
