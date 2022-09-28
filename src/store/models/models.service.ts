import { ModelsStore, modelsStore } from './models.store';
import { ID } from '@datorama/akita';
import { ProfilDto } from '@api/dto/profilDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { SkillDto } from '@api/dto/skillDto';
import { LanguageDto } from '@api/dto/languageDto';

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

  addTrainings = (value: TrainingsDto[]) => {
    this.store.update((state) => ({
      ...state,
      trainings: value,
    }));
  };

  addExperiences = (value: ExperiencesDto[]) => {
    this.store.update((state) => ({
      ...state,
      experiences: value,
    }));
  };

  addSkills = (value: SkillDto) => {
    this.store.update((state) => ({
      ...state,
      skill: value,
    }));
  };

  addLanguage = (value: LanguageDto) => {
    this.store.update((state) => ({
      ...state,
      language: value,
    }));
  };
}
export const modelsService = new ModelsService(modelsStore);
