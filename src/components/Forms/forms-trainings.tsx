import React, { FC } from 'react';
import { TrainingDto } from '@api/dto/trainingDto';
import { trainingInital } from '@utils/data/initialValue.utils';
import { updateTrainingField } from '@store/models/updateField/updateField';

interface FormsTrainingsProps {
  trainings?: TrainingDto[];
  training?: TrainingDto;
  index?: number;
}

const FormsTrainings: FC<FormsTrainingsProps> = (props) => {
  const { trainings, training, index } = props;

  return (
    <form key={index} className="mt-5">
      <div className="mb-6">
        <label htmlFor="schoolName" className="block mb-2 text-sm font-light">
          Nom de l{`'`}établissement/entreprise
        </label>
        <input
          type="text"
          id="schoolName"
          className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
          onChange={updateTrainingField('schoolName', trainings, training!, index!)}
        ></input>
      </div>
      <div className="mb-6">
        <label htmlFor="level" className="block mb-2 text-sm font-light">
          Niveau
        </label>
        <input
          type="text"
          id="level"
          className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
        ></input>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-6">
          <label htmlFor="from" className="block mb-2 text-sm font-light">
            Date de début
          </label>
          <input
            type="text"
            id="from"
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="to" className="block mb-2 text-sm font-light">
            Date de fin
          </label>
          <input
            type="text"
            id="to"
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
          ></input>
        </div>
      </div>
      <hr />
    </form>
  );
};

export default FormsTrainings;
