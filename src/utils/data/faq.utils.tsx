import React from 'react';
import FiveSteps from '@components/Faq/Description/fiveSteps';
import WhatACv from '@components/Faq/Description/whatACv';
import NoPicture from '@components/Faq/Description/noPicture';
import CvPrice from '@components/Faq/Description/cvPrice';
import Secure from '@components/Faq/Description/secure';

export const faqListDate = [
  {
    title: `Qu'est qu'un CV ?`,
    description: <WhatACv />,
  },
  {
    title: `Pourquoi il n'y a pas de photo sur le CV ?`,
    description: <NoPicture />,
  },
  {
    title: `Les CV sont-ils payants ?`,
    description: <CvPrice />,
  },
  {
    title: `Le site et les paiements sont-ils sécurisés ?`,
    description: <Secure />,
  },
];
