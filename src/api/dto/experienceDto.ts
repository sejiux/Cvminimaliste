import { ID } from '@datorama/akita';
import { DescriptionDto } from './descriptionDto';
import { ListDto } from './listDto';

export interface ExperienceDto {
  id: ID;
  title?: string;
  companyName?: string;
  from?: Date;
  to?: Date;
  jobDescription?: string;
  list?: ListDto[];
}
