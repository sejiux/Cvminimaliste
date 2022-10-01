import { StyleDto } from '@api/dto/styleDto';
import { ID } from '@datorama/akita';

export interface ModelsModel {
  id: ID;
  style?: StyleDto;
}
