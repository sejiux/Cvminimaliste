import React, { FC, useState, useEffect } from 'react';
import FormsTrainings from '@components/Forms/forms-trainings';
import { MdOutlineAdd } from 'react-icons/md';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { trainingsQuery, trainingsService } from '@store/trainings';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

interface TrainingsProps {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
}

const Trainings: FC<TrainingsProps> = (props) => {
  const { setSelected, setValue } = props;

  const [trainings, setTrainings] = useState<TrainingsDto[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const _trainings = trainingsQuery.trainings$.subscribe(setTrainings);
    const _trainingId = trainingsQuery.trainingId$.subscribe(setCount);
    return () => {
      _trainings.unsubscribe();
      _trainingId.unsubscribe();
    };
  }, []);

  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-full overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-PoppinsBold text-gray-400 text-lg">Formations</h3>
        <hr className="mb-10" />
      </div>
      {trainings.map((data, index) => (
        <FormsTrainings key={index} trainings={trainings} training={data} trainingId={index} />
      ))}
      <button
        onClick={() => {
          setCount(count + 1), trainingsService.addTrainings([...trainings!, { id: count }]);
        }}
        className={`${
          count > 2
            ? 'hidden'
            : 'w-full mx-auto mt-5 text-xs border border-[#24445c] py-5 px-9 rounded-md text-[#24445c] flex items-center justify-center hover:shadow-md'
        }`}
      >
        <MdOutlineAdd className="text-[#24445c] mr-2 text-lg hover:text-white" />
        Ajouter une formation
      </button>
      <div className="flex space-x-6 justify-between items-center mt-4">
        <button
          className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(1), setValue(1);
          }}
        >
          <BsArrowLeftShort className="text-xl" />
          Précédent
        </button>
        <button
          className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(3), setValue(3);
          }}
        >
          Suivant
          <BsArrowRightShort className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Trainings;
