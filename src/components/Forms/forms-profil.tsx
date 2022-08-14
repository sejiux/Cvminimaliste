import React, { FC } from 'react';
import { formsProfilOneCols, formsProfilTwoCols } from '@utils/data/forms.utils';
import { profilInital } from '@utils/data/initialValue.utils';
import { ProfilDto } from '@api/dto/profilDto';
import { updateProfilField } from '@store/models/updateField/updateField';

interface FormsProfilProps {
  profil: ProfilDto;
}

const FormsProfil: FC<FormsProfilProps> = (props) => {
  const { profil } = props;

  return (
    <form>
      {formsProfilTwoCols(profil!).map((data, index) => (
        <div key={index} className="grid md:grid-cols-2 md:gap-6">
          {data.map((formData, index) => (
            <div key={index} className="mb-6">
              <label htmlFor={formData.name} className="block mb-2 text-sm font-light">
                {formData.label}
              </label>
              <input
                type="text"
                id={formData.name}
                className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
                onChange={updateProfilField(formData.name, profil)}
                value={formData.value !== formData.initial ? formData.value : undefined}
              />
            </div>
          ))}
        </div>
      ))}
      {formsProfilOneCols(profil!).map((formData, index) => (
        <div key={index} className="mb-6">
          <label htmlFor={formData.name} className="block mb-2 text-sm font-light">
            {formData.label}
          </label>
          <input
            type={formData.type}
            id={formData.name}
            className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
            onChange={updateProfilField(formData.name, profil)}
            value={formData.value !== formData.initial ? formData.value : undefined}
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
          className="text-black shadow-sm bg-gray-100 border border-gray-200 text-sm rounded-sm focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
          onChange={updateProfilField('about', profil)}
          value={profil?.about !== profilInital.about ? profil?.about : undefined}
        ></textarea>
      </div>
    </form>
  );
};

export default FormsProfil;
