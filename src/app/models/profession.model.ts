import { Employe } from "./employe.model";

export interface Profession {
  id: number;
  nom: string;
  employes: Employe[];
}
