import React, { FC } from 'react';

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
      <p className="text-[7px]">
        {description}
        <ul className="list-disc mt-0.5">{children}</ul>
      </p>
    </div>
  );
};

export default DescriptionXp;
