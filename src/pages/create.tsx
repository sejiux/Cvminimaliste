import React, { useState, useEffect } from 'react';
import { sidebarData, renderOfButtonSelected } from '@utils/data/sidebar.utils';
import { renderOfModelsSelected } from '@utils/data/models.utils';
import { modelsQuery } from '@store/models';
import { ProfilDto } from '@api/dto/profilDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { SkillDto } from '@api/dto/skillDto';
import { LanguageDto } from '@api/dto/languageDto';
import { ID } from '@datorama/akita';
import { trainingsQuery } from '@store/trainings';
import { experiencesQuery } from '@store/experiences';
import { profilQuery } from '@store/profil';
import { skillQuery } from '@store/skill';
import { languageQuery } from '@store/language';
import Sidebar from '@components/Sidebar';
import Layout from 'components/layout';
import { BsDownload } from 'react-icons/bs';
import Modal from '@components/Modal';
import { ChromePicker } from 'react-color';

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
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const [isToggleFirstColor, setIsToggleFirstColor] = useState<boolean>(false);
  const [isToggleSecondColor, setIsToggleSecondColor] = useState<boolean>(false);
  const [firstColor, setFirstColor] = useState<string | undefined>(undefined);
  const [secondColor, setSecondColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    const _modelsSelected = modelsQuery.modelIdSelected$.subscribe(setModelsSelected);
    const _profil = profilQuery.profil$.subscribe(setProfil);
    const _trainings = trainingsQuery.trainings$.subscribe(setTrainings);
    const _experiences = experiencesQuery.experiences$.subscribe(setExperiences);
    const _skills = skillQuery.skill$.subscribe(setSkill);
    const _language = languageQuery.language$.subscribe(setLanguage);
    const _firstColor = modelsQuery.firstColor$.subscribe(setFirstColor);
    const _secondColor = modelsQuery.firstColor$.subscribe(setSecondColor);
    return () => {
      _modelsSelected.unsubscribe();
      _profil.unsubscribe();
      _trainings.unsubscribe();
      _experiences.unsubscribe();
      _skills.unsubscribe();
      _language.unsubscribe();
      _firstColor.unsubscribe();
      _secondColor.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <div className="bg-gray-200 p-3 relative h-screen">
        <div className="absolute right-3">
          <button
            className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
            onClick={() => setIsDownload(true)}
          >
            <BsDownload className="text-lg mr-2" />
            Télécharger
          </button>
        </div>
        <div className="flex h-full">
          <Sidebar
            sidebarData={sidebarData}
            setSelected={setSelected}
            selected={selected}
            setValue={setValue}
            setIsSelected={setIsSelected}
            isSelected={isSelected}
          />
          {value === selected && isSelected && (
            <div className="bg-white w-[650px] h-full rounded-r-md">
              {renderOfButtonSelected(selected, setSelected, setValue, setIsDownload)}
            </div>
          )}
          <div className="flex justify-center align-middle items-center w-full space-x-4">
            <div className="bg-white w-[400px] h-[600px] shadow-lg">
              {renderOfModelsSelected(
                modelsSelected!,
                profil!,
                trainings,
                experiences,
                skill,
                language,
                firstColor,
                secondColor
              )}
            </div>
            <div className="h-[600px] flex justify-end flex-col space-y-2">
              <button
                className={`${!firstColor && 'bg-[#191919]'} rounded-md w-10 h-10 mt-24 relative`}
                onClick={() => setIsToggleFirstColor(!isToggleFirstColor)}
                style={{ background: firstColor }}
              >
                {isToggleFirstColor ? (
                  <div className="absolute z-[2] bottom-12">
                    <div className="mb-24 fixed" onClick={() => setIsToggleFirstColor(false)} />
                    <ChromePicker
                      color={firstColor}
                      onChange={(data: any) => setFirstColor(data.hex)}
                    />
                  </div>
                ) : null}
              </button>

              <button
                className={`${!secondColor && 'bg-[#FFBD59]'} rounded-md w-10 h-10 mt-24 relative`}
                onClick={() => setIsToggleSecondColor(!isToggleSecondColor)}
                style={{ background: secondColor }}
              >
                {isToggleSecondColor ? (
                  <div className="absolute z-[2] bottom-12">
                    <div className="mb-24 fixed" onClick={() => setIsToggleSecondColor(false)} />
                    <ChromePicker
                      color={secondColor}
                      onChange={(data: any) => setSecondColor(data.hex)}
                    />
                  </div>
                ) : null}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isDownload && (
        <Modal
          description="Veuillez sélectionner le mode de paiement"
          handleClickCloseModal={() => setIsDownload(false)}
          lastName={profil?.name}
          firstName={profil?.firstName}
        >
          {renderOfModelsSelected(
            modelsSelected!,
            profil!,
            trainings,
            experiences,
            skill,
            language
          )}
        </Modal>
      )}
    </Layout>
  );
};

export default Create;
