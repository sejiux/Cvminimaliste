import { LanguageDto } from '@api/dto/languageDto';
import { ID } from '@datorama/akita';
import { languageStore, LanguageStore } from './language.store';

export class LanguageService {
  constructor(private store: LanguageStore) {}

  addLanguage = (value: LanguageDto) => {
    this.store.update(value);
  };

  deleteLanguage = (id: ID) => {
    this.store.remove(id);
  };
}
export const languageService = new LanguageService(languageStore);
