import React, { FC, useState, useEffect } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { LanguageDto } from '@api/dto/languageDto';
import FormsLanguage from '@components/Forms/forms-language';
import { languageQuery, languageService } from '@store/language';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

interface LanguageProps {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
}

const Language: FC<LanguageProps> = (props) => {
  const { setSelected, setValue } = props;

  const [language, setLangugage] = useState<LanguageDto | undefined>(undefined);
  const [countLanguage, setCountLangugage] = useState<number>(0);

  useEffect(() => {
    const _language$ = languageQuery.language$.subscribe(setLangugage);
    const _languageId$ = languageQuery.languageId$.subscribe(setCountLangugage);
    return () => {
      _language$.unsubscribe();
      _languageId$.unsubscribe();
    };
  }, []);

  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-screen overflow-x-hidden">
      <div className="space-y-2">
        <h3>Langues</h3>
      </div>
      {language?.id! !== undefined && <FormsLanguage language={language!} />}
      <br />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCountLangugage(countLanguage + 1);
          languageService.addLanguage({ id: countLanguage });
        }}
        className={`${
          language?.id! !== undefined
            ? 'hidden'
            : 'w-full mx-auto mt-5 text-sm border border-[#24445c] py-5 px-9 rounded-md font-normal text-[#24445c] flex items-center justify-center hover:shadow-md'
        } `}
      >
        <MdOutlineAdd className="text-[#303030] mr-2 text-lg" />
        Ajouter vos langues
      </button>
      <div className="flex space-x-2 justify-between items-center mt-4">
        <button
          className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-sm rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(4), setValue(4);
          }}
        >
          <BsArrowLeftShort className="text-xl" />
          Précédent
        </button>
        <button
          className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-sm rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(5), setValue(5);
          }}
        >
          Suivant
          <BsArrowRightShort className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Language;
