import React, { useState, useEffect } from 'react';
import FormsExperiences from '@components/Forms/forms-experiences';
import { MdOutlineAddBox } from 'react-icons/md';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { modelsQuery } from '@store/models';

const Experiences = () => {
  const [experiences, setExperiences] = useState<ExperiencesDto[] | undefined>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const _trainings = modelsQuery.experiences$.subscribe(setExperiences);
    return () => {
      _trainings.unsubscribe();
    };
  }, []);

  console.log('experiences:', experiences);
  return (
    <div className="px-14 py-10 text-[#303030] h-screen overflow-x-hidden">
      <div className="space-y-2 pb-5">
        <h3>Experiences</h3>
        <hr />
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
          setExperiences([
            ...experiences!,
            {
              id: count,
            },
          ]);
        }}
        className={`${
          count > 2
            ? 'hidden'
            : 'mx-auto mt-5 text-sm border-2 border-[#303030] py-2 px-4 rounded-md font-normal text-[#303030] flex items-center hover:border-gray-[#303030] disabled:gray-200 disabled:border-gray-200 disabled:text-gray-200'
        } `}
      >
        <MdOutlineAddBox className="text-[#303030] mr-2 text-lg" />
        Ajouter une expérience
      </button>
    </div>
  );
};

export default Experiences;
