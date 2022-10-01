import { QueryEntity } from '@datorama/akita';
import { TrainingsState, TrainingsStore, trainingsStore } from './trainings.store';
import { TrainingsDto } from '@api/dto/trainingsDto';

export class TrainingsQuery extends QueryEntity<TrainingsState> {
  constructor(protected store: TrainingsStore) {
    super(store);
  }
  trainings$ = this.selectAll();
  trainingId$ = this.selectCount();
}

export const trainingsQuery = new TrainingsQuery(trainingsStore);
