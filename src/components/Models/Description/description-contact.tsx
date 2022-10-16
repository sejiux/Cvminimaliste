import React, { FC } from 'react';

interface DescriptionContactProps {
  icon: React.ReactNode;
  description: string;
  textColor?: string;
  iconColor?: string;
}

const DescriptionContact: FC<DescriptionContactProps> = (props) => {
  const { icon, description, textColor = '#191919', iconColor } = props;
  return (
    <div className="flex space-x-2 items-center" style={{ color: iconColor }}>
      {icon}
      <p style={{ color: textColor }}>{description}</p>
    </div>
  );
};

export default DescriptionContact;
