import { ExperiencesDto } from '@api/dto/experiencesDto';
import { LanguageDto } from '@api/dto/languageDto';
import { ProfilDto } from '@api/dto/profilDto';
import { SkillDto } from '@api/dto/skillDto';
import { StyleDto } from '@api/dto/styleDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ID } from '@datorama/akita';

export interface ModelsModel {
  id: ID;
  profil?: ProfilDto;
  trainings?: TrainingsDto[];
  experiences?: ExperiencesDto[];
  skill?: SkillDto;
  language?: LanguageDto;
  style?: StyleDto;
}
