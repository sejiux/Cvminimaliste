import React, { FC, useState } from 'react';

interface SidebarProps {
  sidebarData: {
    index: number;
    icon: React.ReactNode;
    name: string;
  }[];
  selected: number;
  setSelected: (value: number) => void;
  setValue: (value: number) => void;
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { sidebarData, selected, setSelected, setValue, isSelected, setIsSelected } = props;

  return (
    <aside className="relative w-20 h-screen" aria-label="Sidebar">
      <div className="h-screen w-auto bg-gray-100">
        <ul className="w-full">
          {sidebarData.map((data, index) => (
            <li key={index}>
              <button
                type="button"
                className={`${
                  selected === index && isSelected
                    ? 'bg-white w-full px-2 py-5'
                    : 'px-2 py-5 w-full hover:bg-white'
                }`}
                onClick={() => {
                  selected === index ? setIsSelected(!isSelected) : setIsSelected(true),
                    setSelected(index),
                    setValue(data.index);
                }}
              >
                {data.icon}
                <span className="text-[10px] font-normal text-[#191919] hidden md:block">
                  {data.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
