import React, { FC } from 'react';
import { navigate } from 'gatsby';

interface DescriptionProps {
  title: string;
  subtitle?: string;
  button?: boolean;
}

const Description: FC<DescriptionProps> = (props) => {
  const { title, subtitle, button } = props;

  return (
    <div>
      <h2
        className={`text-center font-Frontage font-normal text-xl md:text-3xl ${
          button ? 'pb-14 lg:pb-20' : 'pb-5 lg:pb-10 2xl:pb-14'
        } w-[80%] xs:w-[80%] sm:w-[60%] lg:w-[40%] 2xl:w-[14%] mx-auto md:leading-[45px]`}
      >
        <strong>{title}</strong>
      </h2>
      <p className="md:w-[400px] lg:w-[500px] text-base lg:text-lg xl:text-md font-Poppins font-extralight mx-auto lg:-mt-7">
        {subtitle}
      </p>
      {button && (
        <button
          className="mx-auto mt-14 bg-white border-[#049be7] hover:bg-gray-200 text-[#049be7] font-Poppins font-normal px-14 py-5 md:px-20 xs:h-16 lg:py-4 lg:px-8 text-xs xs:text-sm lg:text-sm 4xl:text-xl rounded-lg"
          onClick={() => {
            navigate('mailto:cvminimaliste@gmail.com');
          }}
        >
          Contactez nous
        </button>
      )}
    </div>
  );
};

export default Description;
