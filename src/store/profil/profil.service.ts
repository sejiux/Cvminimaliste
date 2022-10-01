import { ProfilDto } from '@api/dto/profilDto';
import { profilStore, ProfilStore } from './profil.store';

export class ProfilService {
  constructor(private store: ProfilStore) {}

  addProfil = (value: ProfilDto) => {
    this.store.update(value);
  };
}
export const profilService = new ProfilService(profilStore);
