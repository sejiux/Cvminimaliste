import { SkillDto } from '@api/dto/skillDto';
import { skillStore, SkillStore } from './skill.store';
import { ID } from '@datorama/akita';

export class SkillService {
  constructor(private store: SkillStore) {}

  addSkills = (value: SkillDto) => {
    this.store.update(value);
  };

  deleteSkill = (id: ID) => {
    this.store.remove(id);
  };
}
export const skillService = new SkillService(skillStore);
