import { QueryEntity } from '@datorama/akita';
import { experiencesStore, ExperiencesStore, ExperiencesState } from './experiences.store';

export class ExperiencesQuery extends QueryEntity<ExperiencesState> {
  constructor(protected store: ExperiencesStore) {
    super(store);
  }

  experiences$ = this.selectAll();
  experienceId$ = this.selectCount();
}

export const experiencesQuery = new ExperiencesQuery(experiencesStore);
