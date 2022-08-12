import React from 'react';
import FormsMore from '@components/Sidebar/Forms/forms-more';
import FormsProfil from '@components/Sidebar/Forms/forms-profil';
import FormsSkills from '@components/Sidebar/Forms/forms-skills';
import FormsTraining from '@components/Sidebar/Forms/forms-training';
import Models from '@components/Sidebar/Forms/models';
import FormsExperience from '@components/Sidebar/Forms/forms-experience';
import {
  MdOutlineViewCarousel,
  MdOutlineAccountCircle,
  MdWorkOutline,
  MdOutlineManageAccounts,
  MdWorkspacesOutline,
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
    icon: <MdWorkspacesOutline className={classes} />,
    name: `Compétences`,
  },
  {
    index: 5,
    icon: <MdOutlineMoreHoriz className={classes} />,
    name: `Plus`,
  },
];

export const renderOfButtonSelected = (selected: number) => {
  switch (selected) {
    case 0:
      return <Models />;
    case 1:
      return <FormsProfil />;
    case 2:
      return <FormsTraining />;
    case 3:
      return <FormsExperience />;
    case 4:
      return <FormsSkills />;
    case 5:
      return <FormsMore />;
    default:
      return <Models />;
  }
};
