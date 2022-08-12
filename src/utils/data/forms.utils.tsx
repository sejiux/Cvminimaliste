import React from 'react';
import { ProfilDto } from '@api/dto/profilDto';
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { profilInital } from './initialValue.utils';

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
    label: 'Addresse',
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
