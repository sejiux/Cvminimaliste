import { ExperienceDto } from '@api/dto/experienceDto';
import { LanguageDto } from '@api/dto/languageDto';
import { ProfilDto } from '@api/dto/profilDto';
import { SkillsDto } from '@api/dto/skillsDto';
import { StyleDto } from '@api/dto/styleDto';
import { TrainingDto } from '@api/dto/trainingDto';
import { ID } from '@datorama/akita';

export interface ModelsModel {
  id: ID;
  profil: ProfilDto;
  trainings?: TrainingDto[];
  experiences?: ExperienceDto[];
  skill?: SkillsDto;
  language?: LanguageDto;
  style?: StyleDto;
}
