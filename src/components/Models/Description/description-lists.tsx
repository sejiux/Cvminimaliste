import React, { FC } from 'react';

interface DescriptionListProps {
  title?: string;
}

const DescriptionLists: FC<DescriptionListProps> = (props) => {
  const { title } = props;
  return <li className="list-disc ml-3 mt-0.5">{title}</li>;
};

export default DescriptionLists;
