import React, { FC } from 'react';
import parse from 'html-react-parser';

interface DescriptionXpProps {
  children?: React.ReactNode;
  title?: string;
  companyName?: string;
  from?: Date;
  to?: Date;
  description?: string;
}

const DescriptionXp: FC<DescriptionXpProps> = (props) => {
  const { children, title, companyName, from, to, description } = props;
  return (
    <div className="space-y-1">
      <div>
        <h5 className="uppercase text-[9px] font-normal">{title}</h5>
        <h6 className="text-[8px] font-thin">{companyName} | Date</h6>
      </div>
      <div className="text-[7px]">{description ? parse(description) : ''}</div>
    </div>
  );
};

export default DescriptionXp;
