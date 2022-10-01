import { LanguageDto } from '@api/dto/languageDto';
import { QueryEntity } from '@datorama/akita';
import { languageStore, LanguageStore } from './language.store';

export class LanguageQuery extends QueryEntity<LanguageDto> {
  constructor(protected store: LanguageStore) {
    super(store);
  }

  language$ = this.select();
  languageId$ = this.selectCount();
}

export const languageQuery = new LanguageQuery(languageStore);
