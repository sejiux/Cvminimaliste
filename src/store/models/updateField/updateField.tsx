import { ProfilDto } from '@api/dto/profilDto';
import React, { useState, useEffect } from 'react';
import { modelsService } from '@store/models';

const updateProfil = (newValue: ProfilDto) => {
  modelsService.addProfil(newValue);
};

export const updateProfilField = (name: string, profil: ProfilDto | undefined) => (value: any) => {
  if (profil) {
    updateProfil({ ...profil, [name]: value.target.value });
  }
};
