import React, { FC } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface FaqProps {
  title: string;
  children?: React.ReactNode;
  onSelected: number;
  value: number;
  handleClick: () => void;
}

const Faq: FC<FaqProps> = (props) => {
  const { title, children, value, onSelected, handleClick } = props;

  const isSelected = () => {
    if (value === onSelected) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h2>
        <button
          onClick={handleClick}
          type="button"
          className={`
            ${
              isSelected() ? 'font-PoppinsRegular' : 'font-PoppinsXLight text-gray-500'
            } text-[#171923] flex justify-between items-center py-5 w-full  text-left border-b border-gray-700 '`}
        >
          <span>{title}</span>
          {isSelected() ? (
            <MdKeyboardArrowUp className="my-auto text-xl lg:text-2xl" />
          ) : (
            <MdKeyboardArrowDown className="my-auto text-xl lg:text-2xl" />
          )}
        </button>
      </h2>
      {children}
    </div>
  );
};

export default Faq;
