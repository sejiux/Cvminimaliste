import React, { FC } from 'react';
import parse from 'html-react-parser';

interface DescriptionListProps {
  title?: string;
}

const DescriptionMore: FC<DescriptionListProps> = (props) => {
  const { title } = props;
  return (
    <div className="space-y-1">
      <div className="text-[7px]">{title ? parse(title) : ''}</div>
    </div>
  );
};

export default DescriptionMore;
