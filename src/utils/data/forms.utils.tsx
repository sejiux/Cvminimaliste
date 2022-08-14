import React from 'react';
import { ProfilDto } from '@api/dto/profilDto';
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiLinkedinBoxFill } from 'react-icons/ri';
import {
  profilInital,
  trainingInital,
  experienceInital,
  skillsInital,
  languageInitial,
} from './initialValue.utils';
import { ExperienceDto } from '@api/dto/experienceDto';
import { TrainingDto } from '@api/dto/trainingDto';

export const contactData = (profil: ProfilDto) => [
  {
    icon: <RiMapPin2Fill />,
    description: profil?.city,
  },
  {
    icon: <RiPhoneFill />,
    description: profil?.phone,
  },
  {
    icon: <RiMailFill />,
    description: profil?.mail,
  },
  {
    icon: <RiLinkedinBoxFill />,
    description: profil?.social,
  },
];

export const formsProfilOneCols = (profil: ProfilDto) => [
  {
    label: 'E-mail',
    type: 'email',
    name: 'mail',
    value: profil?.mail,
    initial: profilInital.mail,
  },
  {
    label: 'Adresse',
    type: 'text',
    name: 'city',
    value: profil?.city,
    initial: profilInital.city,
  },
  {
    label: 'Titre du profil',
    type: 'text',
    name: 'title',
    value: profil?.title,
    initial: profilInital.title,
  },
];

export const formsProfilTwoCols = (profil: ProfilDto) => [
  [
    {
      label: 'Nom',
      type: 'text',
      name: 'name',
      value: profil?.name,
      initial: profilInital.name,
    },
    {
      label: 'Prénom',
      type: 'text',
      name: 'firstName',
      value: profil?.firstName,
      initial: profilInital.firstName,
    },
  ],
  [
    {
      label: 'Téléphone',
      type: 'tel',
      name: 'phone',
      value: profil?.phone,
      initial: profilInital.phone,
    },
    {
      label: 'LinkedIn',
      type: 'text',
      name: 'social',
      value: profil?.social,
      initial: profilInital.social,
    },
  ],
];

export const formsTrainingsOneCols = (trainings: TrainingDto) => [
  {
    label: `Nom de l'établissement`,
    type: 'text',
    name: 'schoolName',
    value: trainings?.schoolName,
    initial: trainingInital.find((state) => state.schoolName)?.schoolName,
  },
  {
    label: 'Niveau',
    type: 'text',
    name: 'level',
    value: trainings?.level,
    initial: trainingInital.find((state) => state.level)?.level,
  },
];

export const formsTrainingsTwoCols = (trainings: TrainingDto) => [
  [
    {
      label: `Date de début`,
      type: 'date',
      name: 'from',
      value: trainings?.from,
      initial: trainingInital.find((state) => state.from)?.from,
    },
    {
      label: 'Date de fin',
      type: 'date',
      name: 'to',
      value: trainings?.to,
      initial: trainingInital.find((state) => state.to)?.to,
    },
  ],
];
