import React, { FC } from 'react';
import { SkillDto } from '@api/dto/skillDto';
import EditorForm from '@components/EditorForm';
import { updateEditorSkillField } from '@store/updateField/updateField';

interface FormsSkillProps {
  skill: SkillDto;
}

const FormsSkill: FC<FormsSkillProps> = (props) => {
  const { skill } = props;

  return (
    <form className="mt-5">
      <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-xs font-light">
          Ajouter vos compétences
        </label>
        <EditorForm
          handleChange={updateEditorSkillField('description', skill)}
          addData={skill?.description!}
        />
      </div>
    </form>
  );
};

export default FormsSkill;
