import { ModelsStore, modelsStore } from './models.store';
import { ID } from '@datorama/akita';

export class ModelsService {
  constructor(private store: ModelsStore) {}

  handleModelSelected = (modelID: ID) => {
    this.store.update((state) => ({
      ...state,
      id: modelID,
    }));
  };
}
export const modelsService = new ModelsService(modelsStore);
