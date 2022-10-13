import React from 'react';
import CV1 from 'images/cv/1.png';
import CV2 from 'images/cv/2.png';
import CV3 from 'images/cv/3.png';
import CV4 from 'images/cv/4.png';
import CvWheeler from '@components/Models/cvWheeler';
import CvHenderson from '@components/Models/cvHenderson';
import CvHarrington from '@components/Models/cvHarrington';
import CvMunson from '@components/Models/cvMunson';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { LanguageDto } from '@api/dto/languageDto';
import { ProfilDto } from '@api/dto/profilDto';
import { SkillDto } from '@api/dto/skillDto';
import { ID } from '@datorama/akita';

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
  firstBgColor?: string,
  secondBgColor?: string,
  firstTextColor?: string,
  secondTextColor?: string
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
          firstBgColor={firstBgColor}
          secondBgColor={secondBgColor}
          firstTextColor={firstTextColor}
          secondTextColor={secondTextColor}
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
          firstBgColor={firstBgColor}
          secondBgColor={secondBgColor}
          firstTextColor={firstTextColor}
          secondTextColor={secondTextColor}
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
          firstBgColor={firstBgColor}
          secondBgColor={secondBgColor}
          firstTextColor={firstTextColor}
          secondTextColor={secondTextColor}
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
          firstBgColor={firstBgColor}
          secondBgColor={secondBgColor}
          firstTextColor={firstTextColor}
          secondTextColor={secondTextColor}
        />
      );
    default:
      return <div className="bg-white w-full h-full" />;
  }
};
