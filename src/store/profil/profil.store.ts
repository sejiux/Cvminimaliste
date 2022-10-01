import { ProfilDto } from '@api/dto/profilDto';
import { StoreConfig, Store } from '@datorama/akita';

const initialState: ProfilDto = {
  id: 0,
  city: 'Ville',
  country: 'Pays',
  phone: '07.00.00.00.00',
  mail: 'email@gmail.com',
  social: 'Pseudo',
  name: 'Nom',
  firstName: 'Prénom',
  title: 'Nom du poste',
  about:
    'Ecrivez ici, un court texte de présentation qui met en valeur les qualités de votre CV. Indiquez vos expériences, vos motivations pour le poste ainsi que vos expertises.',
};

@StoreConfig({ name: 'experiences', resettable: false })
export class ProfilStore extends Store<ProfilDto> {
  constructor() {
    super(initialState);
  }
}

export const profilStore = new ProfilStore();
