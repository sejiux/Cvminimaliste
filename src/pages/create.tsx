import React, { useState, useEffect } from 'react';
import { sidebarData, renderOfButtonSelected } from '@utils/data/sidebar.utils';
import { renderOfModelsSelected } from '@utils/data/models.utils';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { experiencesQuery } from '@store/experiences';
import { trainingsQuery } from '@store/trainings';
import { languageQuery } from '@store/language';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { BiFontFamily } from 'react-icons/bi';
import { profilQuery } from '@store/profil';
import { LanguageDto } from '@api/dto/languageDto';
import { modelsQuery } from '@store/models';
import { skillQuery } from '@store/skill';
import { BsDownload } from 'react-icons/bs';
import { ProfilDto } from '@api/dto/profilDto';
import { SkillDto } from '@api/dto/skillDto';
import { ID } from '@datorama/akita';
import Sidebar from '@components/Sidebar';
import Layout from 'components/layout';
import Modal from '@components/Modal';
import Style from '@components/Sidebar/Forms/style';

const Create = () => {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [modelsSelected, setModelsSelected] = useState<ID | undefined>(0);
  const [profil, setProfil] = useState<ProfilDto | undefined>(undefined);
  const [trainings, setTrainings] = useState<TrainingsDto[] | undefined>(undefined);
  const [experiences, setExperiences] = useState<ExperiencesDto[] | undefined>(undefined);
  const [skill, setSkill] = useState<SkillDto | undefined>(undefined);
  const [language, setLanguage] = useState<LanguageDto | undefined>(undefined);
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const [isToggleModal, setIsToggleModal] = useState<boolean>(false);
  const [firstBgColor, setFirstBgColor] = useState<string | undefined>(undefined);
  const [secondBgColor, setSecondBgColor] = useState<string | undefined>(undefined);
  const [firstTextColor, setFirstTextColor] = useState<string | undefined>(undefined);
  const [secondTextColor, setSecondTextColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    const _modelsSelected = modelsQuery.modelIdSelected$.subscribe(setModelsSelected);
    const _profil = profilQuery.profil$.subscribe(setProfil);
    const _trainings = trainingsQuery.trainings$.subscribe(setTrainings);
    const _experiences = experiencesQuery.experiences$.subscribe(setExperiences);
    const _skills = skillQuery.skill$.subscribe(setSkill);
    const _language = languageQuery.language$.subscribe(setLanguage);
    const _firstBgColor = modelsQuery.firstBgColor$.subscribe(setFirstBgColor);
    const _secondBgColor = modelsQuery.secondBgColor$.subscribe(setSecondBgColor);
    const _firstTextColor = modelsQuery.firstTextColor$.subscribe(setFirstTextColor);
    const _secondTextColor = modelsQuery.secondTextColor$.subscribe(setSecondTextColor);
    return () => {
      _modelsSelected.unsubscribe();
      _profil.unsubscribe();
      _trainings.unsubscribe();
      _experiences.unsubscribe();
      _skills.unsubscribe();
      _language.unsubscribe();
      _firstBgColor.unsubscribe();
      _secondBgColor.unsubscribe();
      _firstTextColor.unsubscribe();
      _secondTextColor.unsubscribe();
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
            selected={selected}
            setSelected={setSelected}
            setValue={setValue}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            isToggleModal={isToggleModal}
            setIsToggleModal={setIsToggleModal}
          />
          {value === selected && isSelected && (
            <div className="bg-white w-[650px] h-full rounded-r-md">
              {renderOfButtonSelected(selected, setSelected, setValue, setIsDownload)}
            </div>
          )}
          {!isSelected && isToggleModal && (
            <div className="bg-white w-[650px] h-full rounded-r-md">
              <Style selectedStyle={selectedStyle} />
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
                firstBgColor,
                secondBgColor,
                firstTextColor,
                secondTextColor
              )}
            </div>
            <div className="h-[600px] flex justify-end flex-col space-y-2">
              <button
                className={`${
                  isToggleModal && selectedStyle === 0 && 'border-2 border-[#191919]'
                } bg-white rounded-md w-10 h-10 mt-24`}
                onClick={() => {
                  setIsToggleModal(selectedStyle === 0 ? !isToggleModal : true),
                    setIsSelected(false),
                    setSelectedStyle(0);
                }}
              >
                <BiFontFamily className="text-2xl mx-auto" />
              </button>
              <button
                className={`${!firstBgColor && 'bg-[#191919]'} ${
                  isToggleModal && selectedStyle === 1 && 'border-2 border-[#191919]'
                } rounded-md w-10 h-10 mt-24`}
                onClick={() => {
                  setIsToggleModal(selectedStyle === 1 ? !isToggleModal : true),
                    setIsSelected(false),
                    setSelectedStyle(1);
                }}
                style={{ background: firstBgColor }}
              ></button>
              <button
                className={`${!secondBgColor && 'bg-[#FFBD59]'} ${
                  isToggleModal && selectedStyle === 2 && 'border-2 border-[#191919]'
                } rounded-md w-10 h-10 mt-24`}
                onClick={() => {
                  setIsToggleModal(selectedStyle === 2 ? !isToggleModal : true),
                    setIsSelected(false),
                    setSelectedStyle(2);
                }}
                style={{ background: secondBgColor }}
              ></button>
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
            language,
            firstBgColor,
            secondBgColor,
            firstTextColor,
            secondTextColor
          )}
        </Modal>
      )}
    </Layout>
  );
};

export default Create;
