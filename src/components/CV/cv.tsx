import React, { useState, useEffect, useRef } from 'react';
import { renderOfModelsSelected } from '@utils/data/models.utils';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { experiencesQuery } from '@store/experiences';
import { trainingsQuery } from '@store/trainings';
import { languageQuery } from '@store/language';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { profilQuery } from '@store/profil';
import { LanguageDto } from '@api/dto/languageDto';
import { modelsQuery } from '@store/models';
import { skillQuery } from '@store/skill';
import { ProfilDto } from '@api/dto/profilDto';
import { SkillDto } from '@api/dto/skillDto';
import { ID } from '@datorama/akita';

const CV = () => {
  const [modelsSelected, setModelsSelected] = useState<ID | undefined>(0);
  const [profil, setProfil] = useState<ProfilDto | undefined>(undefined);
  const [trainings, setTrainings] = useState<TrainingsDto[] | undefined>(undefined);
  const [experiences, setExperiences] = useState<ExperiencesDto[] | undefined>(undefined);
  const [skill, setSkill] = useState<SkillDto | undefined>(undefined);
  const [language, setLanguage] = useState<LanguageDto | undefined>(undefined);
  const [firstBgColor, setFirstBgColor] = useState<string | undefined>(undefined);
  const [secondBgColor, setSecondBgColor] = useState<string | undefined>(undefined);
  const [firstTextColor, setFirstTextColor] = useState<string | undefined>(undefined);
  const [secondTextColor, setSecondTextColor] = useState<string | undefined>(undefined);
  const [fontText, setFontText] = useState<string | undefined>('');
  const [fontTitle, setFontTitle] = useState<string | undefined>('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(cvRef.current?.clientWidth!);
    setHeight(cvRef.current?.clientHeight!);
  }, []);

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
    const _fontText = modelsQuery.fontText$.subscribe(setFontText);
    const _fontTitle = modelsQuery.fontTitle$.subscribe(setFontTitle);
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
      _fontText.unsubscribe();
      _fontTitle.unsubscribe();
    };
  }, []);

  return (
    <div className="bg-white w-[500px] h-[95%] shadow-lg" ref={cvRef}>
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
        secondTextColor,
        fontText,
        fontTitle,
        width,
        height
      )}
    </div>
  );
};

export default CV;
