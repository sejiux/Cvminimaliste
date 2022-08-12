import { ID } from '@datorama/akita';

export interface TrainingDto {
  id: ID;
  level?: string;
  from?: Date;
  to?: Date;
  schoolName?: string;
}
