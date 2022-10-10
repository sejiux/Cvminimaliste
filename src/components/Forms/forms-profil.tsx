import React, { FC } from 'react';
import { formsProfilOneCols, formsProfilTwoCols } from '@utils/data/forms.utils';
import { profilInital } from '@utils/data/initialValue.utils';
import { ProfilDto } from '@api/dto/profilDto';
import { updateProfilField } from '@store/updateField/updateField';

interface FormsProfilProps {
  profil: ProfilDto;
}

const FormsProfil: FC<FormsProfilProps> = (props) => {
  const { profil } = props;

  return (
    <form>
      {formsProfilTwoCols(profil!).map((formProfilTwoCols, index) => (
        <div key={index} className="grid md:grid-cols-2 md:gap-6">
          {formProfilTwoCols.map((formDataTwoCols, index) => (
            <div key={index} className="mb-6">
              <label htmlFor={formDataTwoCols.name} className="block mb-2 text-sm font-light">
                {formDataTwoCols.label}
              </label>
              <input
                type="text"
                id={formDataTwoCols.name}
                className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-md focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
                onChange={updateProfilField(formDataTwoCols.name, profil)}
                value={
                  formDataTwoCols.value !== formDataTwoCols.initial
                    ? formDataTwoCols.value
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      ))}
      {formsProfilOneCols(profil!).map((formDataOneCols, index) => (
        <div key={index} className="mb-6">
          <label htmlFor={formDataOneCols.name} className="block mb-2 text-sm font-light">
            {formDataOneCols.label}
          </label>
          <input
            type={formDataOneCols.type}
            id={formDataOneCols.name}
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-md focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
            onChange={updateProfilField(formDataOneCols.name, profil)}
            value={
              formDataOneCols.value !== formDataOneCols.initial ? formDataOneCols.value : undefined
            }
          />
        </div>
      ))}
      <div className="mb-6">
        <label htmlFor="about" className="block mb-2 text-sm font-light">
          A propos
        </label>
        <textarea
          rows={6}
          id="about"
          className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-md focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
          onChange={updateProfilField('about', profil)}
          value={profil?.about !== profilInital.about ? profil?.about : undefined}
        ></textarea>
      </div>
    </form>
  );
};

export default FormsProfil;
