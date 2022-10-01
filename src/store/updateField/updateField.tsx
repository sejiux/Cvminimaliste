import React from 'react';
import { ProfilDto } from '@api/dto/profilDto';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { ID } from '@datorama/akita';
import { SkillDto } from '@api/dto/skillDto';
import { LanguageDto } from '@api/dto/languageDto';
import { trainingsService } from '@store/trainings';
import { experiencesService } from '@store/experiences';
import { profilService } from '@store/profil';
import { skillService } from '@store/skill';
import { languageService } from '@store/language';

const updateProfil = (newValue: ProfilDto) => {
  profilService.addProfil(newValue);
};

const updateTrainings = (newValue: TrainingsDto[]) => {
  trainingsService.addTrainings(newValue);
};

const updateExperiences = (newValue: ExperiencesDto[]) => {
  experiencesService.addExperiences(newValue);
};

const updateSkill = (newValue: SkillDto) => {
  skillService.addSkills(newValue);
};

const updateLanguage = (newValue: LanguageDto) => {
  languageService.addLanguage(newValue);
};

export const updateProfilField = (name: string, profil: ProfilDto | undefined) => (evt: any) => {
  if (profil) {
    updateProfil({ ...profil, [name]: evt.target.value });
  }
};

export const updateTrainingField =
  (name: string, trainings: TrainingsDto[] | undefined, index: ID) => (evt: any) => {
    var newTrainings = trainings?.map((data, idx) => {
      if (idx !== index) {
        return data;
      }
      return { ...data, id: idx, [name]: evt.target.value };
    });
    updateTrainings(newTrainings!);
  };

export const updateExperienceField =
  (name: string, experiences: ExperiencesDto[] | undefined, indexXp: ID) => (evt: any) => {
    var newExperiences = experiences?.map((data, idx) => {
      if (idx !== indexXp) {
        return data;
      }
      return { ...data, id: idx, [name]: evt.target.value };
    });
    updateExperiences(newExperiences!);
  };

export const updateEditorExperienceField =
  (name: string, experiences: ExperiencesDto[] | undefined, indexXp: ID) =>
  (_: any, editor?: any) => {
    /* const test = Array.from(editor.ui.componentFactory.names());
    console.log(test); */
    const editorData: string = editor?.getData();
    var newExperiences = experiences?.map((data, idx) => {
      if (idx !== indexXp) {
        return data;
      }
      return { ...data, id: idx, [name]: editorData };
    });

    updateExperiences(newExperiences!);
  };

export const updateEditorSkillField =
  (name: string, skill: SkillDto | undefined) => (_: any, editor?: any) => {
    const editorData: string = editor?.getData();
    if (skill) {
      updateSkill({ ...skill, [name]: editorData });
    }
  };

export const updateEditorLanguageField =
  (name: string, language: LanguageDto | undefined) => (_: any, editor?: any) => {
    const editorData: string = editor?.getData();
    if (language) {
      updateLanguage({ ...language, [name]: editorData });
    }
  };
