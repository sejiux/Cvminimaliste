import { ModelsStore, modelsStore } from './models.store';
import { ID } from '@datorama/akita';
import { ProfilDto } from '@api/dto/profilDto';

export class ModelsService {
  constructor(private store: ModelsStore) {}

  handleModelSelected = (modelID: ID) => {
    this.store.update((state) => ({
      ...state,
      id: modelID,
    }));
  };

  addProfil = (value: ProfilDto) => {
    this.store.update((state) => ({
      ...state,
      profil: value,
    }));
  };
}
export const modelsService = new ModelsService(modelsStore);
