import { ID } from '@datorama/akita';
import { ListDto } from './listDto';

export interface SkillsDto {
  id: ID;
  list?: ListDto[];
}
