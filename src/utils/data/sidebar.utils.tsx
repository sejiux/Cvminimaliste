import React from 'react';
import More from '@components/Sidebar/Forms/more';
import Profil from '@components/Sidebar/Forms/profil';
import Skills from '@components/Forms/forms-skill';
import Trainings from '@components/Sidebar/Forms/trainings';
import Models from '@components/Sidebar/Forms/models';
import Experiences from '@components/Sidebar/Forms/experiences';
import {
  MdOutlineViewCarousel,
  MdOutlineAccountCircle,
  MdWorkOutline,
  MdOutlineManageAccounts,
  MdOutlineMoreHoriz,
} from 'react-icons/md';

const classes = 'mx-auto w-8 h-8 text-[#303030] transition duration-75 group-hover:text-[#303030]';

export const sidebarData = [
  {
    index: 0,
    icon: <MdOutlineViewCarousel className={classes} />,
    name: `Modèles`,
  },
  {
    index: 1,
    icon: <MdOutlineAccountCircle className={classes} />,
    name: `Profil`,
  },
  {
    index: 2,
    icon: <MdOutlineManageAccounts className={classes} />,
    name: `Formations`,
  },
  {
    index: 3,
    icon: <MdWorkOutline className={classes} />,
    name: `Expériences`,
  },
  {
    index: 4,
    icon: <MdOutlineMoreHoriz className={classes} />,
    name: `Plus`,
  },
];

export const renderOfButtonSelected = (selected: number) => {
  switch (selected) {
    case 0:
      return <Models />;
    case 1:
      return <Profil />;
    case 2:
      return <Trainings />;
    case 3:
      return <Experiences />;
    case 4:
      return <More />;
    default:
      return <Models />;
  }
};
