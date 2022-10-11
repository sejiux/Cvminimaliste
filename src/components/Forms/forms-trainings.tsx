import React, { FC } from 'react';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { updateTrainingField } from '@store/updateField/updateField';
import { formsTrainingsOneCols, formsTrainingsTwoCols } from '@utils/data/forms.utils';

interface FormsTrainingsProps {
  trainings: TrainingsDto[];
  training: TrainingsDto;
  trainingId: number;
}

const FormsTrainings: FC<FormsTrainingsProps> = (props) => {
  const { trainings, training, trainingId } = props;

  return (
    <form className="mt-5">
      {formsTrainingsOneCols(training).map((formTrainingOneCols, formId) => (
        <div key={formId} className="mb-6">
          <label htmlFor={formTrainingOneCols.name} className="block mb-2 text-xs font-light">
            {formTrainingOneCols.label}
          </label>
          <input
            type={formTrainingOneCols.type}
            id={formTrainingOneCols.name}
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-xs rounded-md focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
            onChange={updateTrainingField(formTrainingOneCols.name, trainings, trainingId!)}
            value={formTrainingOneCols.value}
          ></input>
        </div>
      ))}
      {formsTrainingsTwoCols(training).map((formTrainingTwoCols, index) => (
        <div key={index} className="grid md:grid-cols-2 md:gap-6">
          {formTrainingTwoCols.map((formDataTwoCols, formId) => (
            <div key={formId} className="mb-6">
              <label htmlFor={formDataTwoCols.name} className="block mb-2 text-xs font-light">
                {formDataTwoCols.label}
              </label>
              <input
                type={formDataTwoCols.type}
                id={formDataTwoCols.name}
                className="text-black shadow-sm bg-gray-100 border border-gray-200 text-xs rounded-md focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
                onChange={updateTrainingField(formDataTwoCols.name, trainings, trainingId!)}
                value={formDataTwoCols.value?.toString()}
              ></input>
            </div>
          ))}
        </div>
      ))}
      <hr />
    </form>
  );
};

export default FormsTrainings;
