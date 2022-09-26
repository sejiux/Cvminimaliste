import { ModelsStore, modelsStore } from './models.store';
import { ID } from '@datorama/akita';
import { ProfilDto } from '@api/dto/profilDto';
import { TrainingDto } from '@api/dto/trainingDto';
import { ExperienceDto } from '@api/dto/experienceDto';

export class ModelsService {
  constructor(private store: ModelsStore) {}

  handleModelSelected = (modelID: ID) => {
    this.store.update((state) => ({
      ...state,
      id: modelID,
    }));
  };

  addProfil = (value: ProfilDto) => {
    this.store.update((state) => ({
      ...state,
      profil: value,
    }));
  };

  addTrainings = (value: TrainingDto[]) => {
    this.store.update((state) => ({
      ...state,
      trainings: value,
    }));
  };

  addExperiences = (value: ExperienceDto[]) => {
    this.store.update((state) => ({
      ...state,
      experiences: value,
    }));
  };
}
export const modelsService = new ModelsService(modelsStore);
