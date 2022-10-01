import React, { useState, useEffect } from 'react';
import { sidebarData, renderOfButtonSelected } from '@utils/data/sidebar.utils';
import { renderOfModelsSelected } from '@utils/data/models.utils';
import { MdArrowBackIosNew } from 'react-icons/md';
import { modelsQuery } from '@store/models';
import { ProfilDto } from '@api/dto/profilDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { SkillDto } from '@api/dto/skillDto';
import { LanguageDto } from '@api/dto/languageDto';
import { Link } from 'gatsby';
import { ID } from '@datorama/akita';
import { trainingsQuery } from '@store/trainings';
import { experiencesQuery } from '@store/experiences';
import { profilQuery } from '@store/profil';
import { skillQuery } from '@store/skill';
import { languageQuery } from '@store/language';
import Sidebar from '@components/Sidebar';

const Create = () => {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [modelsSelected, setModelsSelected] = useState<ID | undefined>(0);
  const [profil, setProfil] = useState<ProfilDto | undefined>(undefined);
  const [trainings, setTrainings] = useState<TrainingsDto[] | undefined>(undefined);
  const [experiences, setExperiences] = useState<ExperiencesDto[] | undefined>(undefined);
  const [skill, setSkill] = useState<SkillDto | undefined>(undefined);
  const [language, setLanguage] = useState<LanguageDto | undefined>(undefined);

  useEffect(() => {
    const _modelsSelected = modelsQuery.modelIdSelected$.subscribe(setModelsSelected);
    const _profil = profilQuery.profil$.subscribe(setProfil);
    const _trainings = trainingsQuery.trainings$.subscribe(setTrainings);
    const _experiences = experiencesQuery.experiences$.subscribe(setExperiences);
    const _skills = skillQuery.skill$.subscribe(setSkill);
    const _language = languageQuery.language$.subscribe(setLanguage);
    return () => {
      _modelsSelected.unsubscribe();
      _profil.unsubscribe();
      _trainings.unsubscribe();
      _experiences.unsubscribe();
      _skills.unsubscribe();
      _language.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="absolute top-0 right-0 w-full bg-gray-100 border-b-2 border-gray-300">
        <div className="flex justify-between items-center px-28 py-3 ml-10">
          <Link to="/">
            <div className="lg:flex lg:items-center lg:space-x-4">
              <MdArrowBackIosNew className="text-xl text-[#303030]" />
              <p className="text-[#303030] font-PoppinsRegular">Accueil</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex">
        <Sidebar
          sidebarData={sidebarData}
          setSelected={setSelected}
          selected={selected}
          setValue={setValue}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
        />
        {value === selected && isSelected && (
          <div className="bg-white w-[700px] h-screen relative">
            {renderOfButtonSelected(selected)}
          </div>
        )}
        <div className="bg-gray-200 flex justify-center align-middle items-center w-full">
          <div className="bg-white w-[370px] h-[550px] shadow-lg">
            {renderOfModelsSelected(
              modelsSelected!,
              profil!,
              trainings,
              experiences,
              skill,
              language
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
