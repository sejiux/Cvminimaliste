import { ID } from '@datorama/akita';
import { ListDto } from './listDto';

export interface LanguageDto {
  id: ID;
  list?: ListDto[];
}
