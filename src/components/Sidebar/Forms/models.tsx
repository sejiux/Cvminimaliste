import React, { useState, useEffect, FC } from 'react';
import { modelsData } from '@utils/data/models.utils';
import { modelsQuery, modelsService } from '@store/models';
import { ID } from '@datorama/akita';
import { ProfilDto } from '@api/dto/profilDto';
import { profilQuery } from '@store/profil';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { navigate } from 'gatsby';

interface ModelsProps {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
}

const Models: FC<ModelsProps> = (props) => {
  const { setSelected, setValue } = props;

  const [modelsSelected, setModelsSelected] = useState<ID | undefined>(0);
  const [profil, setProfil] = useState<ProfilDto | undefined>(undefined);

  useEffect(() => {
    const _modelsSelected = modelsQuery.modelIdSelected$.subscribe(setModelsSelected);
    const _profil = profilQuery.profil$.subscribe(setProfil);
    return () => {
      _modelsSelected.unsubscribe();
      _profil.unsubscribe();
    };
  }, []);

  return (
    <div className="pr-5 py-5 h-full overflow-x-hidden">
      <div className="grid grid-cols-2 gap-3 mx-auto">
        {modelsData.map((data, index) => (
          <button
            key={index}
            className={`${
              modelsSelected === index ? 'border-[#014b8e] shadow-xl' : 'opacity-50'
            } border-2 w-auto shadow-md hover:border-gray-400 hover:opacity-80 rounded-md`}
            onClick={() => modelsService.handleModelSelected(index)}
          >
            <div className="p-1">
              <img src={data.image} alt={data.alt} />
            </div>
          </button>
        ))}
        <button
          className="bg-gray-200 w-full hover:bg-gray-300 text-gray-400 py-5 px-9 text-xs rounded-lg flex items-center justify-center"
          onClick={() => navigate('/')}
        >
          <BsArrowLeftShort className="text-xl" />
          Accueil
        </button>
        <button
          className="bg-[#014b8e] w-full hover:bg-[#003a6d] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(1), setValue(1);
          }}
        >
          Suivant
          <BsArrowRightShort className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Models;
