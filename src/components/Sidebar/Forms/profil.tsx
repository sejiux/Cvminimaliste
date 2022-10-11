import React, { FC, useState, useEffect } from 'react';
import { ProfilDto } from '@api/dto/profilDto';
import FormsProfil from '@components/Forms/forms-profil';
import { profilQuery } from '@store/profil';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

interface ProfilProps {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
}

const Profil: FC<ProfilProps> = (props) => {
  const { setSelected, setValue } = props;

  const [profil, setProfil] = useState<ProfilDto | undefined>(undefined);

  useEffect(() => {
    const _profil = profilQuery.profil$.subscribe(setProfil);
    return () => {
      _profil.unsubscribe();
    };
  }, []);

  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-auto overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-PoppinsBold text-gray-400 text-lg mb-10">Profil</h3>
        <FormsProfil profil={profil!} />
        <div className="flex space-x-6 justify-between items-center">
          <button
            className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-md shadow-lg flex items-center justify-center"
            onClick={() => {
              setSelected(0), setValue(0);
            }}
          >
            <BsArrowLeftShort className="text-xl" />
            Précédent
          </button>
          <button
            className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-md shadow-lg flex items-center justify-center"
            onClick={() => {
              setSelected(2), setValue(2);
            }}
          >
            Suivant
            <BsArrowRightShort className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
