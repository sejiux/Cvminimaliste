import { QueryEntity } from '@datorama/akita';
import { ModelsStore, modelsStore } from './models.store';
import { ModelsModel } from './models.model';

export class ModelsQuery extends QueryEntity<ModelsModel> {
  constructor(protected store: ModelsStore) {
    super(store);
  }

  modelIdSelected$ = this.select((state) => state.id);
  profil$ = this.select((state) => state.profil);
  trainings$ = this.select((state) => state.trainings);
  experiences$ = this.select((state) => state.experiences);
  skill$ = this.select((state) => state.skill);
  language$ = this.select((state) => state.language);
}

export const modelsQuery = new ModelsQuery(modelsStore);
