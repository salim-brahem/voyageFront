import { Entreprise } from './entreprise.model';
import { Employe } from './employe.model';

export interface User {
  numUser: number;
  email: string;
  password: string;
  username: string;
  role: string;
  entreprise: Entreprise;
  employe: Employe;
}
