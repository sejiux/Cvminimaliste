import React, { FC } from 'react';
import Logo from 'images/logo.svg';

interface SidebarProps {
  sidebarData: (
    selected?: number,
    isSelected?: boolean
  ) => {
    index: number;
    icon: React.ReactNode;
    name: string;
  }[];
  selected: number;
  setSelected: (value: number) => void;
  setValue: (value: number) => void;
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
  isToggleModal: boolean;
  setIsToggleModal: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const {
    sidebarData,
    selected,
    setSelected,
    setValue,
    isSelected,
    setIsSelected,
    isToggleModal,
    setIsToggleModal,
  } = props;

  return (
    <aside
      className={`${
        isSelected || isToggleModal ? ' rounded-l-lg' : 'rounded-lg'
      } w-auto px-5 py-5 bg-white`}
      aria-label="Sidebar"
    >
      <div className="relative h-full mx-auto w-[85px] bg-gray-100 rounded-lg">
        <ul className="list-none h-full flex flex-col justify-between py-2">
          <Logo className="text-[#24445c] w-full h-24" />
          {sidebarData(selected, isSelected).map((data, index) => (
            <li key={index} className="list-none -ml-[3px]">
              <button
                type="button"
                className={`${
                  selected === index && isSelected
                    ? 'border-l-4 border-[#24445c] rounded-[3px] w-full px-2 py-4 text-[#24445c]'
                    : 'px-2 py-4 w-full hover:border-l-4 hover:border-[#24445c]'
                }`}
                onClick={() => {
                  selected === index ? setIsSelected(!isSelected) : setIsSelected(true),
                    setSelected(index),
                    setValue(data.index),
                    setIsToggleModal(false);
                }}
              >
                {data.icon}
                <span
                  className={`${
                    selected === index && isSelected ? 'text-[#24445c]' : 'text-gray-400'
                  } text-[10px] font-normal hidden md:block`}
                >
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
