import React, { FC } from 'react';
import LoadingUtils from '@utils/loading.utils';
import Loadable from 'react-loadable';

interface EditorFormProps {
  handleChange: (e: any, editor: any) => any;
  addData: string;
}

const LoadableEditor = Loadable({
  loader: () => import('@components/EditorText'),

  loading: LoadingUtils,
});

const EditorForm: FC<EditorFormProps> = (props) => {
  const { handleChange, addData } = props;
  return <LoadableEditor addData={addData} handleChange={handleChange} />;
};

export default EditorForm;
