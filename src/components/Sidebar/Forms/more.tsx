import React, { useState, useEffect } from 'react';
import FormsSkill from '@components/Forms/forms-skill';
import { SkillDto } from '@api/dto/skillDto';
import { modelsQuery } from '@store/models';
import { MdOutlineAddBox } from 'react-icons/md';
import { LanguageDto } from '@api/dto/languageDto';
import FormsLanguage from '@components/Forms/forms-language';

const More = () => {
  const [skill, setSkill] = useState<SkillDto | undefined>(undefined);
  const [language, setLangugage] = useState<LanguageDto | undefined>(undefined);
  const [countSkill, setCountSkill] = useState<number>(0);
  const [countLanguage, setCountLangugage] = useState<number>(0);

  useEffect(() => {
    const _skills$ = modelsQuery.skill$.subscribe(setSkill);
    const _language$ = modelsQuery.language$.subscribe(setLangugage);
    return () => {
      _skills$.unsubscribe();
      _language$.unsubscribe();
    };
  }, []);

  return (
    <div className="px-14 py-10 text-[#303030] h-screen overflow-x-hidden">
      <div className="space-y-2 pb-5">
        <h3>Compétences</h3>
        <hr />
      </div>
      {skill && <FormsSkill skill={skill} />}
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCountSkill(countSkill + 1);
          setSkill({ id: countSkill });
        }}
        className={`${
          countSkill > 0
            ? 'hidden'
            : 'mx-auto my-5 text-sm border-2 border-[#303030] py-2 px-4 rounded-md font-normal text-[#303030] flex items-center hover:border-gray-[#303030] disabled:gray-200 disabled:border-gray-200 disabled:text-gray-200'
        } `}
      >
        <MdOutlineAddBox className="text-[#303030] mr-2 text-lg" />
        Ajouter vos compétences
      </button>
      <div className="space-y-2 pb-5">
        <h3>Langues</h3>
        <hr />
      </div>
      {language && <FormsLanguage language={language} />}
      <br />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCountLangugage(countLanguage + 1);
          setLangugage({ id: countLanguage });
        }}
        className={`${
          countLanguage > 0
            ? 'hidden'
            : 'mx-auto mt-5 text-sm border-2 border-[#303030] py-2 px-4 rounded-md font-normal text-[#303030] flex items-center hover:border-gray-[#303030] disabled:gray-200 disabled:border-gray-200 disabled:text-gray-200'
        } `}
      >
        <MdOutlineAddBox className="text-[#303030] mr-2 text-lg" />
        Ajouter vos langues
      </button>
    </div>
  );
};

export default More;
