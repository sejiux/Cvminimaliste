import React, { FC } from 'react';

interface DescriptionContactProps {
  icon: React.ReactNode;
  description: string;
}

const DescriptionContact: FC<DescriptionContactProps> = (props) => {
  const { icon, description } = props;
  return (
    <div className="flex space-x-2 items-center">
      {icon}
      <p>{description}</p>
    </div>
  );
};

export default DescriptionContact;
