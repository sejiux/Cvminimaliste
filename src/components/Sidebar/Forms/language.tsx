import React, { FC, useState, useEffect } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { LanguageDto } from '@api/dto/languageDto';
import FormsLanguage from '@components/Forms/forms-language';
import { languageQuery, languageService } from '@store/language';
import { BsArrowLeftShort, BsDownload } from 'react-icons/bs';

interface LanguageProps {
  setSelected: (data: number) => void;
  setValue: (data: number) => void;
  setIsDownload: (data: boolean) => void;
}

const Language: FC<LanguageProps> = (props) => {
  const { setSelected, setValue, setIsDownload } = props;

  const [language, setLanguage] = useState<LanguageDto | undefined>(undefined);
  const [countLanguage, setCountLanguage] = useState<number>(0);

  useEffect(() => {
    const _language$ = languageQuery.language$.subscribe(setLanguage);
    const _languageId$ = languageQuery.languageId$.subscribe(setCountLanguage);
    return () => {
      _language$.unsubscribe();
      _languageId$.unsubscribe();
    };
  }, []);

  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-full overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-PoppinsBold text-gray-400 text-lg">Langues</h3>
        <hr className="mb-10" />
      </div>
      {language?.id! !== undefined && <FormsLanguage language={language!} />}
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCountLanguage(countLanguage + 1);
          languageService.addLanguage({ id: countLanguage });
        }}
        className={`${
          language?.id! !== undefined
            ? 'hidden'
            : 'w-full mx-auto mt-5 text-xs border border-[#24445c] py-5 px-9 rounded-md text-[#24445c] flex items-center justify-center hover:shadow-md'
        } `}
      >
        <MdOutlineAdd className="text-[#303030] mr-2 text-lg" />
        Ajouter vos langues
      </button>
      <div className="flex space-x-6 justify-between items-center mt-4">
        <button
          className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
          onClick={() => {
            setSelected(4), setValue(4);
          }}
        >
          <BsArrowLeftShort className="text-xl" />
          Précédent
        </button>
        <button className="bg-[#24445c] w-full hover:bg-[#1b3344] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center" 
          onClick={() => setIsDownload(true)}>
          Télécharger
          <BsDownload className="text-xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Language;
