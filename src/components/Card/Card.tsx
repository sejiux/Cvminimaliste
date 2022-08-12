import React, { FC } from 'react';

interface CardProps {
  icon: any;
  title: string;
  subtitle: string;
}

const Card: FC<CardProps> = (props) => {
  const { icon, title, subtitle } = props;

  return (
    <div className="bg-white rounded-2xl p-8 md:w-[400px] lg:w-full xl:w-[30%] shadow-md lg:h-[280px] xl:h-[250px] 2xl:h-[270px]">
      <div className="">
        {icon}
        <h6 className="text-lg xl:text-xl 2xl:text-2xl font-PoppinsMedium mt-2 lg:mt-4">{title}</h6>
        <p className="text-base xl:text-lg font-PoppinsXLight mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
