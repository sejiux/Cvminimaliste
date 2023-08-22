import React, { FC, useState, useEffect } from 'react';
import FormsSkill from '@components/Forms/forms-skill';
import { SkillDto } from '@api/dto/skillDto';
import { MdOutlineAdd } from 'react-icons/md';
import { skillQuery, skillService } from '@store/skill';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

interface SkillProp {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
}

const Skill: FC<SkillProp> = (props) => {
  const { setSelected, setValue } = props;

  const [skill, setSkill] = useState<SkillDto | undefined>(undefined);
  const [countSkill, setCountSkill] = useState<number>(0);

  useEffect(() => {
    const _skills$ = skillQuery.skill$.subscribe(setSkill);
    const _skillId$ = skillQuery.skillId$.subscribe(setCountSkill);
    return () => {
      _skills$.unsubscribe();
      _skillId$.unsubscribe();
    };
  }, []);

  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-full overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-Poppins font-bold text-gray-400 text-lg">Compétences</h3>
        <hr className="mb-10" />
      </div>
      {skill?.id! !== undefined && <FormsSkill skill={skill!} />}
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCountSkill(countSkill + 1);
          skillService.addSkills({ id: countSkill });
        }}
        className={`${
          skill?.id! !== undefined
            ? 'hidden'
            : 'w-full mx-auto mt-5 text-xs border border-[#014b8e] py-5 px-9 rounded-md text-[#014b8e] flex items-center justify-center hover:shadow-md'
        } `}
      >
        <MdOutlineAdd className="text-[#014b8e] mr-2 text-lg" />
        Ajouter vos compétences
      </button>
      <div className="flex space-x-4 justify-between items-center mt-4">
        <button
          className="bg-[#014b8e] w-full hover:bg-[#003a6d] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(3), setValue(3);
          }}
        >
          <BsArrowLeftShort className="text-xl" />
          Précédent
        </button>
        <button
          className="bg-[#014b8e] w-full hover:bg-[#003a6d] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(5), setValue(5);
          }}
        >
          Suivant
          <BsArrowRightShort className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Skill;
