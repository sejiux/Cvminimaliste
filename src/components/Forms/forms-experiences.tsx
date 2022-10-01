import { formsExperiencesOneCols, formsExperiencesTwoCols } from '@utils/data/forms.utils';
import React, { FC } from 'react';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { updateEditorExperienceField, updateExperienceField } from '@store/updateField/updateField';
import EditorForm from '@components/EditorForm';

interface FormsExperiencesProps {
  experiences: ExperiencesDto[];
  experience: ExperiencesDto;
  experienceId: number;
}
const FormsExperiences: FC<FormsExperiencesProps> = (props) => {
  const { experiences, experience, experienceId } = props;

  return (
    <form className="mt-5">
      {formsExperiencesOneCols(experience).map((formExperiencesOneCols, formId) => (
        <div key={formId} className="mb-6">
          <label htmlFor={formExperiencesOneCols.name} className="block mb-2 text-sm font-light">
            {formExperiencesOneCols.label}
          </label>
          <input
            type={formExperiencesOneCols.type}
            id={formExperiencesOneCols.name}
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
            onChange={updateExperienceField(
              formExperiencesOneCols.name,
              experiences,
              experienceId!
            )}
            value={formExperiencesOneCols.value}
          ></input>
        </div>
      ))}
      {formsExperiencesTwoCols(experience).map((formExperienceTwoCols, index) => (
        <div key={index} className="grid md:grid-cols-2 md:gap-6">
          {formExperienceTwoCols.map((formDataTwoCols, formId) => (
            <div key={formId} className="mb-6">
              <label htmlFor={formDataTwoCols.name} className="block mb-2 text-sm font-light">
                {formDataTwoCols.label}
              </label>
              <input
                type="date"
                id={formDataTwoCols.name}
                className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
                onChange={updateExperienceField(formDataTwoCols.name, experiences, experienceId!)}
                value={formDataTwoCols.value?.toString()}
              ></input>
            </div>
          ))}
        </div>
      ))}

      <div className="mb-6">
        <label htmlFor="jobDescription" className="block mb-2 text-sm font-light">
          Description du poste
        </label>
        <EditorForm
          handleChange={updateEditorExperienceField('jobDescription', experiences, experienceId!)}
          addData={experience?.jobDescription!}
        />
      </div>

      <hr />
      <br />
    </form>
  );
};

export default FormsExperiences;
