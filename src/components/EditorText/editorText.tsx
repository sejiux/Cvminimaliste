import React, { FC } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface EditorTextProps {
  handleChange: (e: any, editor: any) => any;
  addData: string;
}

const editorConfiguration = {
  toolbar: ['bold', '|', 'italic', '|', 'bulletedList'],
};

const EditorText: FC<EditorTextProps> = (props) => {
  const { handleChange, addData } = props;
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={addData}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditorText;
