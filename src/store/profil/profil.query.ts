import { Query } from '@datorama/akita';
import { ProfilDto } from '@api/dto/profilDto';
import { profilStore, ProfilStore } from './profil.store';

export class ProfilQuery extends Query<ProfilDto> {
  constructor(protected store: ProfilStore) {
    super(store);
  }

  profil$ = this.select();
}

export const profilQuery = new ProfilQuery(profilStore);
