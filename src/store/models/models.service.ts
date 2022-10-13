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

  addFirstBgColor = (color: string) => {
    this.store.update((state) => ({
      ...state,
      firstBgColor: color,
    }));
  };

  addSecondBgColor = (color: string) => {
    this.store.update((state) => ({
      ...state,
      secondBgColor: color,
    }));
  };

  addFirstTextColor = (color: string) => {
    this.store.update((state) => ({
      ...state,
      firstTextColor: color,
    }));
  };

  addSecondTextColor = (color: string) => {
    this.store.update((state) => ({
      ...state,
      secondTextColor: color,
    }));
  };
}
export const modelsService = new ModelsService(modelsStore);
