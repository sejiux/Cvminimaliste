import React, { useState, useEffect } from 'react';
import FormsTrainings from '@components/Forms/forms-trainings';
import { MdOutlineAddBox } from 'react-icons/md';
import { TrainingDto } from '@api/dto/trainingDto';
import { modelsQuery } from '@store/models';

const Trainings = () => {
  const [trainings, setTrainings] = useState<TrainingDto[] | undefined>(undefined);
  const [count, setCount] = useState<number>(2);

  useEffect(() => {
    const _trainings = modelsQuery.trainings$.subscribe(setTrainings);
    return () => {
      _trainings.unsubscribe();
    };
  }, []);

  console.log(trainings);

  return (
    <div className="px-14 py-10 text-[#303030] h-screen overflow-x-hidden">
      <div className="space-y-2">
        <h3>Formations</h3>
        <hr />
      </div>
      {trainings?.map((data, index) => (
        <FormsTrainings key={index} trainings={trainings} training={data} index={index} />
      ))}
      <button
        onClick={() => {
          setCount(count + 1), setTrainings([...trainings!, { id: count }]);
        }}
        className="mx-14 mt-5 text-sm border-2 border-[#303030] py-2 px-4 rounded-md font-normal text-[#303030] flex items-center hover:border-gray-[#303030]"
      >
        <MdOutlineAddBox className="text-[#303030] mr-2 text-lg" />
        Ajouter une formation
      </button>
    </div>
  );
};

export default Trainings;
