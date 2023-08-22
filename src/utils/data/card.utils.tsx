import React, { FC } from 'react';
import IconChoice from '@images/card-choice.svg';
import IconDownload from '@images/card-download.svg';
import IconUpdate from '@images/card-update.svg';
import { isMobile } from '@utils/isMobile.utils';

const isMobiles = isMobile();
const widthCardData = isMobiles ? '45px' : '60px';

export const cardPresentationData = [
  {
    iconSVG: <IconChoice width={widthCardData} />,
    title: 'Choisissez un modèle',
    description: `Recommandés par les recruteurs, nos modèles sont conçu pour être original, percutant et professionnel.`,
  },
  {
    iconSVG: <IconUpdate width={widthCardData} />,
    title: 'Remplissez vos informations',
    description:
      'En remplissant vos informations, tous les modèles se mettront automatiquement à jour.',
  },
  {
    iconSVG: <IconDownload width={widthCardData} />,
    title: 'Téléchargez votre CV',
    description:
      "Une fois remplis, téléchargez votre CV, pas d'abonnement ni d'inscription, c'est simple et rapide.",
  },
];
