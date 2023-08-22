import React, { FC, useState, useEffect } from 'react';
import FormsExperiences from '@components/Forms/forms-experiences';
import { MdOutlineAdd } from 'react-icons/md';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { experiencesQuery, experiencesService } from '@store/experiences';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

interface ExperiencesProps {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
}

const Experiences: FC<ExperiencesProps> = (props) => {
  const { setSelected, setValue } = props;

  const [experiences, setExperiences] = useState<ExperiencesDto[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const _experiences = experiencesQuery.experiences$.subscribe(setExperiences);
    const _experienceId = experiencesQuery.experienceId$.subscribe(setCount);
    return () => {
      _experiences.unsubscribe();
      _experienceId.unsubscribe();
    };
  }, []);

  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-full overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-Poppins font-bold text-gray-400 text-lg">Experiences</h3>
        <hr className="mb-10" />
      </div>
      {experiences?.map((data, index) => (
        <FormsExperiences
          key={index}
          experienceId={index}
          experience={data}
          experiences={experiences}
        />
      ))}
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCount(count + 1);
          experiencesService.addExperiences([
            ...experiences,
            {
              id: count,
            },
          ]);
        }}
        className={`${
          count > 2
            ? 'hidden'
            : 'w-full mx-auto mt-5 text-xs border border-[#014b8e] py-5 px-9 rounded-md text-[#014b8e] flex items-center justify-center hover:shadow-md'
        } `}
      >
        <MdOutlineAdd className="text-[#014b8e] mr-2 text-lg" />
        Ajouter une expérience
      </button>
      <div className="flex space-x-4 justify-between items-center mt-4">
        <button
          className="bg-[#014b8e] w-full hover:bg-[#003a6d] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(2), setValue(2);
          }}
        >
          <BsArrowLeftShort className="text-xl" />
          Précédent
        </button>
        <button
          className="bg-[#014b8e] w-full hover:bg-[#003a6d] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(4), setValue(4);
          }}
        >
          Suivant
          <BsArrowRightShort className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Experiences;
