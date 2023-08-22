import { QueryEntity } from '@datorama/akita';
import { ModelsStore, modelsStore } from './models.store';
import { ModelsModel } from './models.model';

export class ModelsQuery extends QueryEntity<ModelsModel> {
  constructor(protected store: ModelsStore) {
    super(store);
  }

  modelIdSelected$ = this.select((state) => state.id);
  firstBgColor$ = this.select((state) => state.firstBgColor);
  secondBgColor$ = this.select((state) => state.secondBgColor);
  firstTextColor$ = this.select((state) => state.firstTextColor);
  secondTextColor$ = this.select((state) => state.secondTextColor);
  fontText$ = this.select((state) => state.fontText);
  fontTitle$ = this.select((state) => state.fontTitle);
}

export const modelsQuery = new ModelsQuery(modelsStore);
