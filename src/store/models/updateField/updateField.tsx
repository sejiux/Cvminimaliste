import React from 'react';
import { ProfilDto } from '@api/dto/profilDto';
import { modelsService } from '@store/models';
import { TrainingDto } from '@api/dto/trainingDto';
import { ExperienceDto } from '@api/dto/experienceDto';
import { ID } from '@datorama/akita';

const updateProfil = (newValue: ProfilDto) => {
  modelsService.addProfil(newValue);
};

const updateTrainings = (newValue: TrainingDto[]) => {
  modelsService.addTrainings(newValue);
};

const updateExperiences = (newValue: ExperienceDto[]) => {
  modelsService.addExperiences(newValue);
};

export const updateProfilField = (name: string, profil: ProfilDto | undefined) => (evt: any) => {
  if (profil) {
    updateProfil({ ...profil, [name]: evt.target.value });
  }
};

export const updateTrainingField =
  (name: string, trainings: TrainingDto[] | undefined, index: ID) => (evt: any) => {
    var newTrainings = trainings?.map((data, idx) => {
      if (idx !== index) {
        return data;
      }
      return { ...data, id: idx, [name]: evt.target.value };
    });
    updateTrainings(newTrainings!);
  };

export const updateExperienceField =
  (name: string, experiences: ExperienceDto[] | undefined, indexXp: ID) => (evt: any) => {
    var newExperiences = experiences?.map((data, idx) => {
      if (idx !== indexXp) {
        return data;
      }
      return { ...data, id: idx, [name]: evt.target.value };
    });
    updateExperiences(newExperiences!);
  };

export const updateEditorExperienceField =
  (name: string, experiences: ExperienceDto[] | undefined, indexXp: ID) =>
  (evt: any, editor?: any) => {
    const test = Array.from(editor.ui.componentFactory.names());
    console.log(test);
    const editorData: string = editor?.getData();
    var newExperiences = experiences?.map((data, idx) => {
      if (idx !== indexXp) {
        return data;
      }
      return { ...data, id: idx, [name]: editorData };
    });

    updateExperiences(newExperiences!);
  };
