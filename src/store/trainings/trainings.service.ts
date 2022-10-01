import { TrainingsDto } from '@api/dto/trainingsDto';
import { ID } from '@datorama/akita';
import { TrainingsStore, trainingsStore } from './trainings.store';

export class TrainingsService {
  constructor(private store: TrainingsStore) {}

  addTrainings = (value: TrainingsDto[]) => {
    this.store.upsertMany(value);
  };

  deleteTraining = (id: ID) => {
    this.store.remove(id);
  };
}
export const trainingsService = new TrainingsService(trainingsStore);
