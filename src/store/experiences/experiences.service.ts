import { ExperiencesDto } from '@api/dto/experiencesDto';
import { ID } from '@datorama/akita';
import { experiencesStore, ExperiencesStore } from './experiences.store';

export class ExperiencesService {
  constructor(private store: ExperiencesStore) {}

  addExperiences = (value: ExperiencesDto[]) => {
    this.store.upsertMany(value);
  };

  deleteExperience = (id: ID) => {
    this.store.remove(id);
  };
}
export const experiencesService = new ExperiencesService(experiencesStore);
