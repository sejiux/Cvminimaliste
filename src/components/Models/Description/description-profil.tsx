import React, { FC } from 'react';

interface DescriptionProfilProps {
  description?: string;
}

const DescriptionProfil: FC<DescriptionProfilProps> = (props) => {
  const { description } = props;

  return <p className="text-[7px]">{description}</p>;
};

export default DescriptionProfil;
