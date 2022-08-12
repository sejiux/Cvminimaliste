import React, { FC } from 'react';
import { navigate } from 'gatsby';

interface HeaderProps {
  children: React.ReactNode;
  subtitle: string;
  buttonTitle: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { children, subtitle, buttonTitle } = props;

  return (
    <header className="h-screen m-auto flex justify-center items-center relative px-5 xs:px-8">
      <div className="space-y-6 sm:space-y-8 text-center">
        {children}
        <h5 className="pb-4 text-base xs:text-base md:text-lg lg:text-xl md:w-[400px] lg:w-[500px] leading-5 xs:leading-6 4xl:leading-10 font-PoppinsLight text-gray-500 mx-auto">
          {subtitle}
        </h5>
        <button
          className="mx-auto bg-[#24445c] mt-14 hover:bg-white hover:text-[#24445c] hover:border-2 hover:border-[#24445c] text-white font-FrontageBold px-14 py-5 md:px-20 xs:h-16 lg:py-4 lg:px-8 text-xs xs:text-sm lg:text-sm 4xl:text-xl rounded-lg shadow-lg"
          onClick={() => {
            navigate('/create');
          }}
        >
          {buttonTitle}
        </button>
      </div>
    </header>
  );
};

export default Header;
