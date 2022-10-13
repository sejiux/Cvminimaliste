import { StoreConfig, EntityStore } from '@datorama/akita';
import { ModelsModel } from './models.model';

const initialState: ModelsModel = {
  id: 0,
  firstColor: '',
  secondColor: '',
};

@StoreConfig({ name: 'models', resettable: false })
export class ModelsStore extends EntityStore<ModelsModel> {
  constructor() {
    super(initialState);
  }
}

export const modelsStore = new ModelsStore();
