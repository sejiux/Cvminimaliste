import { QueryEntity } from '@datorama/akita';
import { SkillDto } from '@api/dto/skillDto';
import { skillStore, SkillStore } from './skill.store';

export class SkillQuery extends QueryEntity<SkillDto> {
  constructor(protected store: SkillStore) {
    super(store);
  }

  skill$ = this.select();
  skillId$ = this.selectCount();
}

export const skillQuery = new SkillQuery(skillStore);
