import React from 'react';
import Profil from '@components/Sidebar/Forms/profil';
import Trainings from '@components/Sidebar/Forms/trainings';
import Models from '@components/Sidebar/Forms/models';
import Experiences from '@components/Sidebar/Forms/experiences';
import { MdInsertChart } from 'react-icons/md';
import { BsGridFill, BsFillPersonFill } from 'react-icons/bs';
import { AiFillSound, AiFillFund } from 'react-icons/ai';
import { IoBriefcase } from 'react-icons/io5';
import Skill from '@components/Sidebar/Forms/skill';
import Language from '@components/Sidebar/Forms/language';

const classOfSelected = (selected?: number, value?: number, isSelected?: boolean) => {
  const classes = `${
    selected === value && isSelected ? 'text-[#014b8e]' : 'text-gray-400'
  } mx-auto w-7 h-7 mb-2 transition duration-75`;
  return classes;
};

export const sidebarData = (selected?: number, isSelected?: boolean) => [
  {
    index: 0,
    icon: <BsGridFill className={classOfSelected(selected, 0, isSelected)} />,
    name: `Modèles`,
  },
  {
    index: 1,
    icon: <BsFillPersonFill className={classOfSelected(selected, 1, isSelected)} />,
    name: `Profil`,
  },
  {
    index: 2,
    icon: <AiFillFund className={classOfSelected(selected, 2, isSelected)} />,
    name: `Formations`,
  },
  {
    index: 3,
    icon: <IoBriefcase className={classOfSelected(selected, 3, isSelected)} />,
    name: `Expériences`,
  },
  {
    index: 4,
    icon: <MdInsertChart className={classOfSelected(selected, 4, isSelected)} />,
    name: 'Compétences',
  },
  {
    index: 5,
    icon: <AiFillSound className={classOfSelected(selected, 5, isSelected)} />,
    name: 'Langues',
  },
];

export const renderOfButtonSelected = (
  selected: number,
  setSelected: (value: number) => void,
  setValue: (value: number) => void,
  setIsDownload: (value: boolean) => void
) => {
  switch (selected) {
    case 0:
      return <Models setSelected={setSelected} setValue={setValue} />;
    case 1:
      return <Profil setSelected={setSelected} setValue={setValue} />;
    case 2:
      return <Trainings setSelected={setSelected} setValue={setValue} />;
    case 3:
      return <Experiences setSelected={setSelected} setValue={setValue} />;
    case 4:
      return <Skill setSelected={setSelected} setValue={setValue} />;
    case 5:
      return (
        <Language setSelected={setSelected} setValue={setValue} setIsDownload={setIsDownload} />
      );
    default:
      return <Models setSelected={setSelected} setValue={setValue} />;
  }
};
