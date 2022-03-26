import { Knjiga } from './knjiga.model';

export interface Clan {
  id: number;
  ime: string;
  knjiga: Knjiga;
}
