import { StoreConfig, EntityStore } from '@datorama/akita';
import { profilInital } from '@utils/data/initialValue.utils';
import { ModelsModel } from './models.model';

const initialState: ModelsModel = {
  id: 0,
  profil: profilInital,
  trainings: [],
  experiences: [],
  skill: [],
  language: [],
};

@StoreConfig({ name: 'models', resettable: false })
export class ModelsStore extends EntityStore<ModelsModel> {
  constructor() {
    super(initialState);
  }
}

export const modelsStore = new ModelsStore();
