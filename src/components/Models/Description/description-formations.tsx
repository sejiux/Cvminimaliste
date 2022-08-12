import { ID } from '@datorama/akita';
import React, { FC } from 'react';

interface DescriptionFormationsProps {
  level: string;
  from?: Date;
  to?: Date;
  schoolName: string;
}

const DescriptionFormations: FC<DescriptionFormationsProps> = (props) => {
  const { level, from, to, schoolName } = props;

  return (
    <div className="space-y-1">
      <div>
        <h5 className="uppercase text-[9px] font-normal">{level}</h5>
        <h6 className="text-[8px] font-thin">2020 - 2021</h6>
        <p className="text-[7px]">{schoolName}</p>
      </div>
    </div>
  );
};

export default DescriptionFormations;
