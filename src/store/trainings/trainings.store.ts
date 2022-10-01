import { TrainingsDto } from '@api/dto/trainingsDto';
import { StoreConfig, EntityStore, EntityState } from '@datorama/akita';

export interface TrainingsState extends EntityState<TrainingsDto> {
  id: number;
}

const initialState: TrainingsState = {
  id: 0,
};

@StoreConfig({ name: 'trainings', resettable: false })
export class TrainingsStore extends EntityStore<TrainingsState> {
  constructor() {
    super(initialState);
  }
}

export const trainingsStore = new TrainingsStore();
