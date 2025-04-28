import { Entreprise } from './entreprise.model';

export interface DomaineActivite {
  id: number;
  nom: string;
  entreprises: Entreprise[];
}
