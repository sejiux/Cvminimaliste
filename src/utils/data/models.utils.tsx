import React from 'react';
import CV1 from 'images/cv/1.png';
import CV2 from 'images/cv/2.png';
import CV3 from 'images/cv/3.png';
import CV4 from 'images/cv/4.png';
import { ID } from '@datorama/akita';
import CvWheeler from '@components/Models/cvWheeler';
import CvHenderson from '@components/Models/cvHenderson';
import CvHarrington from '@components/Models/cvHarrington';
import CvMunson from '@components/Models/cvMunson';
import { ProfilDto } from '@api/dto/profilDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { SkillDto } from '@api/dto/skillDto';
import { LanguageDto } from '@api/dto/languageDto';

export const modelsData = [
  {
    image: CV1,
    alt: 'Premier CV',
  },
  {
    image: CV2,
    alt: 'Second CV',
  },
  {
    image: CV3,
    alt: 'Troisième CV',
  },
  {
    image: CV4,
    alt: 'Quatrième CV',
  },
];

export const renderOfModelsSelected = (
  selected: ID,
  profil: ProfilDto,
  trainings?: TrainingsDto[],
  experiences?: ExperiencesDto[],
  skill?: SkillDto,
  language?: LanguageDto,
  firstColor?: string,
  secondColor?: string
) => {
  switch (selected) {
    case 0:
      return (
        <CvWheeler
          profil={profil}
          trainings={trainings}
          experiences={experiences}
          skill={skill}
          language={language}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      );
    case 1:
      return (
        <CvHenderson
          profil={profil}
          trainings={trainings}
          experiences={experiences}
          skill={skill}
          language={language}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      );
    case 2:
      return (
        <CvHarrington
          profil={profil}
          trainings={trainings}
          experiences={experiences}
          skill={skill}
          language={language}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      );
    case 3:
      return (
        <CvMunson
          profil={profil}
          trainings={trainings}
          experiences={experiences}
          skill={skill}
          language={language}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      );
    default:
      return <div className="bg-white w-full h-full" />;
  }
};
