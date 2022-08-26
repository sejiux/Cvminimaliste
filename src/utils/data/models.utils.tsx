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
import { TrainingDto } from '@api/dto/trainingDto';
import { ExperienceDto } from '@api/dto/experienceDto';
import { SkillsDto } from '@api/dto/skillsDto';
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
  trainings?: TrainingDto[],
  experiences?: ExperienceDto[],
  skill?: SkillsDto[],
  language?: LanguageDto[]
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
        />
      );
    default:
      return <div className="bg-white w-full h-full" />;
  }
};
