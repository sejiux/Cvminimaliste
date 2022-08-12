import { ID } from '@datorama/akita';

export interface ProfilDto {
  id: ID;
  name?: string;
  firstName?: string;
  city?: string;
  country?: string;
  phone?: string;
  mail?: string;
  social?: string;
  title?: string;
  about?: string;
}
