import { ExperiencesDto } from '@api/dto/experiencesDto';
import { StoreConfig, EntityStore, EntityState } from '@datorama/akita';

export interface ExperiencesState extends EntityState<ExperiencesDto> {
  id: number;
}

const initialState: ExperiencesState = {
  id: 0,
};

@StoreConfig({ name: 'experiences', resettable: false })
export class ExperiencesStore extends EntityStore<ExperiencesState> {
  constructor() {
    super(initialState);
  }
}

export const experiencesStore = new ExperiencesStore();
