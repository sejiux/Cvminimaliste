import React, { FC } from 'react';
import EditorForm from '@components/EditorForm';
import { updateEditorLanguageField } from '@store/updateField/updateField';
import { LanguageDto } from '@api/dto/languageDto';

interface FormsLanguageProps {
  language: LanguageDto;
}

const FormsLanguage: FC<FormsLanguageProps> = (props) => {
  const { language } = props;

  return (
    <form className="mt-5">
      <div className="mb-6">
        <label htmlFor="about" className="block mb-2 text-sm font-light">
          Ajouter vos langues
        </label>
        <EditorForm
          handleChange={updateEditorLanguageField('description', language)}
          addData={language?.description!}
        />
      </div>
      <hr />
    </form>
  );
};

export default FormsLanguage;
