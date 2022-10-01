import { SkillDto } from '@api/dto/skillDto';
import { StoreConfig, EntityStore } from '@datorama/akita';

const initialState: SkillDto = {
  id: undefined,
};

@StoreConfig({ name: 'skill', resettable: false })
export class SkillStore extends EntityStore<SkillDto> {
  constructor() {
    super(initialState);
  }
}

export const skillStore = new SkillStore();
