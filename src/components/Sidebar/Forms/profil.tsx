import React, { useState, useEffect } from 'react';
import { modelsQuery } from '@store/models';
import { ProfilDto } from '@api/dto/profilDto';
import FormsProfil from '@components/Forms/forms-profil';

const Profil = () => {
  const [profil, setProfil] = useState<ProfilDto | undefined>(undefined);

  useEffect(() => {
    const _profil = modelsQuery.profil$.subscribe(setProfil);
    return () => {
      _profil.unsubscribe();
    };
  }, []);

  return (
    <div className="px-14 py-10 text-[#303030] h-screen overflow-x-hidden">
      <div className="space-y-2 pb-5">
        <h3>Profil</h3>
        <hr />
        <FormsProfil profil={profil!} />
      </div>
    </div>
  );
};

export default Profil;
