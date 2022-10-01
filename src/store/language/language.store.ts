import { LanguageDto } from '@api/dto/languageDto';
import { StoreConfig, EntityStore } from '@datorama/akita';

const initialState: LanguageDto = {
  id: undefined,
};

@StoreConfig({ name: 'language', resettable: false })
export class LanguageStore extends EntityStore<LanguageDto> {
  constructor() {
    super(initialState);
  }
}

export const languageStore = new LanguageStore();
