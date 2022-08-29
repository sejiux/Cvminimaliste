import { ProfilDto } from '@api/dto/profilDto';
import React, { useState, useEffect } from 'react';
import { modelsService } from '@store/models';
import { TrainingDto } from '@api/dto/trainingDto';
import { ExperienceDto } from '@api/dto/experienceDto';
import { ListDto } from '@api/dto/listDto';
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

export const updateListField =
  (
    name: string,
    experiences: ExperienceDto[] | undefined,
    indexXp: number,
    lists: ListDto[],
    indexLists: number
  ) =>
  (evt: any) => {
    var newList = lists?.map((dataList, id) => {
      if (indexLists !== id) {
        return dataList;
      }
      return { ...dataList, id: id, [name]: evt.target.value };
    });

    var newExperiences = experiences?.map((data, idx) => {
      if (idx !== indexXp) {
        return data;
      }
      return {
        ...data,
        id: indexXp,
        lists: newList,
      };
    });
    console.log('newList', newExperiences);
    updateExperiences(newExperiences!);
  };
