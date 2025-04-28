import { Profession } from './profession.model';
import { Entreprise } from './entreprise.model';
import { User } from './user.model';

export interface Employe {
  id: number;
  firstname: string;
  lastname: string;
  adresse: string;
  telephone: string;
  profession: Profession;
  entreprise: Entreprise;
  user: User;
}
