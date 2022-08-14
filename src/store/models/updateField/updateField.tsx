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

export const updateProfilField = (name: string, profil: ProfilDto | undefined) => (value: any) => {
  if (profil) {
    updateProfil({ ...profil, [name]: value.target.value });
  }
};

export const updateTrainingField =
  (name: string, training: TrainingDto[] | undefined, trains: TrainingDto, index: number) =>
  (value: any) => {
    var array: any[] = [];
    array.push({ ...trains, [name]: value.target.value });
    const test = [...training!, ...array];
    console.log('trainingSpread', test);
  };
