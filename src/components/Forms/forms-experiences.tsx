import { formsExperiencesOneCols, formsExperiencesTwoCols } from '@utils/data/forms.utils';
import React, { FC, useState } from 'react';
import { ExperienceDto } from '@api/dto/experienceDto';
import { updateExperienceField } from '@store/models/updateField/updateField';
import { ListDto } from '@api/dto/listDto';
import { MdOutlineAddBox } from 'react-icons/md';

interface FormsExperiencesProps {
  experiences: ExperienceDto[];
  experience: ExperienceDto;
  experienceId: number;
}
const FormsExperiences: FC<FormsExperiencesProps> = (props) => {
  const { experiences, experience, experienceId } = props;
  const [listCount, setListCount] = useState<number[]>([0, 0, 0]);
  const [lists, setLists] = useState<ListDto[] | undefined>([]);
  const [addList, setAddList] = useState(0);

  const handleListCount = () => {
    var count = listCount;
    count[experienceId]++;
    setListCount(count);
  };

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
        <label htmlFor="about" className="block mb-2 text-sm font-light">
          Description du poste
        </label>
        <textarea
          rows={6}
          id="about"
          className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
          onChange={updateExperienceField('jobDescription', experiences, experienceId!)}
          value={experience?.jobDescription}
        ></textarea>
      </div>

      {lists?.map((list, listId) => (
        <div key={listId} className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm font-light">
            Detail du poste (Liste à puce)
          </label>
          <input
            type="text"
            id="description"
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
            onChange={updateExperienceField(
              'description',
              experiences,
              experienceId,
              listCount?.[experienceId],
              lists,
              list
            )}
            value={list?.description}
          ></input>
        </div>
      ))}

      <hr />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          handleListCount();
          setAddList(addList + 1);
          setLists([...lists!, { id: listCount?.[experienceId] }]);
        }}
        className={`${
          addList > 2
            ? 'hidden'
            : 'mx-auto my-5 text-sm border-2 border-[#303030] py-2 px-4 rounded-md font-normal text-[#303030] flex items-center hover:border-gray-[#303030] disabled:gray-200 disabled:border-gray-200 disabled:text-gray-200'
        }`}
      >
        <MdOutlineAddBox className="text-[#303030] mr-2 text-lg" />
        Ajouter une liste
      </button>
      <hr />
      <br />
    </form>
  );
};

export default FormsExperiences;
