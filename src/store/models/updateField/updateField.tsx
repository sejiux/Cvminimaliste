import { ProfilDto } from '@api/dto/profilDto';
import React, { useState, useEffect } from 'react';
import { modelsService } from '@store/models';
import { TrainingDto } from '@api/dto/trainingDto';

const updateProfil = (newValue: ProfilDto) => {
  modelsService.addProfil(newValue);
};

const updateTraining = (newValue: TrainingDto[]) => {
  modelsService.addTraining(newValue);
};

export const updateProfilField = (name: string, profil: ProfilDto | undefined) => (evt: any) => {
  if (profil) {
    updateProfil({ ...profil, [name]: evt.target.value });
  }
};

export const updateTrainingField =
  (name: string, training: TrainingDto[] | undefined, index: number) => (evt: any) => {
    var newTrainings = training?.map((data, idx) => {
      if (idx !== index) {
        return data;
      }
      return { ...data, id: idx, [name]: evt.target.value };
    });
    updateTraining(newTrainings!);
  };
