import { ID } from '@datorama/akita';

export interface TrainingsDto {
  id: ID;
  level?: string;
  from?: Date;
  to?: Date;
  schoolName?: string;
}
