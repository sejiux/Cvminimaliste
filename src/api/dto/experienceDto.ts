import { ID } from '@datorama/akita';
import { ListDto } from '@api/dto/listDto';

export interface ExperienceDto {
  id?: number;
  title?: string;
  companyName?: string;
  from?: Date;
  to?: Date;
  jobDescription?: string;
  lists?: ListDto[];
}
