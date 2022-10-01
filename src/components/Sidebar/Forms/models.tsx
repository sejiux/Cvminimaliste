import React, { useState, useEffect } from 'react';
import { modelsData } from '@utils/data/models.utils';
import { modelsQuery, modelsService } from '@store/models';
import { ID } from '@datorama/akita';
import { ProfilDto } from '@api/dto/profilDto';
import { profilQuery } from '@store/profil';

const Models = () => {
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
    <div className="h-screen overflow-x-hidden">
      <div className="px-14 py-10 grid grid-cols-2 gap-2 mx-auto">
        {modelsData.map((data, index) => (
          <button
            key={index}
            className={`${
              modelsSelected === index ? 'border-gray-500 shadow-xl' : 'border-gray-200'
            } border-2 w-auto shadow-md hover:border-gray-400 hover:opacity-70`}
            onClick={() => modelsService.handleModelSelected(index)}
          >
            <div className="p-1">
              <img src={data.image} alt={data.alt} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Models;
