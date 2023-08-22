import React, { useState, useEffect } from 'react';
import { sidebarData, renderOfButtonSelected } from '@utils/data/sidebar.utils';
import { BiFontFamily } from 'react-icons/bi';
import { modelsQuery } from '@store/models';
import { BsDownload } from 'react-icons/bs';
import Sidebar from '@components/Sidebar';
import Layout from 'components/layout';
import Modal from '@components/Modal';
import Style from '@components/Sidebar/Forms/style';
import CV from '@components/CV/cv';

const Create = () => {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const [isToggleModal, setIsToggleModal] = useState<boolean>(false);
  const [firstBgColor, setFirstBgColor] = useState<string | undefined>(undefined);
  const [secondBgColor, setSecondBgColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    const _firstBgColor = modelsQuery.firstBgColor$.subscribe(setFirstBgColor);
    const _secondBgColor = modelsQuery.secondBgColor$.subscribe(setSecondBgColor);
    return () => {
      _firstBgColor.unsubscribe();
      _secondBgColor.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <div className="bg-gray-200 p-3 relative h-screen font-">
        <div className="absolute right-3">
          <button
            className="bg-[#014b8e] w-full hover:bg-[#003a6d] text-white py-5 px-9 text-xs rounded-lg shadow-lg flex items-center justify-center"
            onClick={() => setIsDownload(true)}
          >
            <BsDownload className="text-lg mr-2" />
            Télécharger
          </button>
        </div>
        <div className="flex h-full">
          <Sidebar
            sidebarData={sidebarData}
            selected={selected}
            setSelected={setSelected}
            setValue={setValue}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            isToggleModal={isToggleModal}
            setIsToggleModal={setIsToggleModal}
          />
          {value === selected && isSelected && (
            <div className="bg-white w-[650px] h-full rounded-r-md">
              {renderOfButtonSelected(selected, setSelected, setValue, setIsDownload)}
            </div>
          )}
          {!isSelected && isToggleModal && (
            <div className="bg-white w-[650px] h-full rounded-r-md">
              <Style selectedStyle={selectedStyle} />
            </div>
          )}
          <div className="flex justify-center align-middle items-center w-full space-x-4">
            <CV />
            <div className="h-auto flex justify-end flex-col space-y-2">
              <button
                className={`${
                  isToggleModal && selectedStyle === 0 && 'border-2 border-[#003a6d]'
                } bg-white rounded-md w-10 h-10 mt-24`}
                onClick={() => {
                  setIsToggleModal(selectedStyle === 0 ? !isToggleModal : true),
                    setIsSelected(false),
                    setSelectedStyle(0);
                }}
              >
                <BiFontFamily className="text-2xl mx-auto" />
              </button>
              <button
                className={`${!firstBgColor && 'bg-[#191919]'} ${
                  isToggleModal && selectedStyle === 1 && 'border-2 border-[#003a6d]'
                } rounded-md w-10 h-10 mt-24`}
                onClick={() => {
                  setIsToggleModal(selectedStyle === 1 ? !isToggleModal : true),
                    setIsSelected(false),
                    setSelectedStyle(1);
                }}
                style={{ background: firstBgColor }}
              ></button>
              <button
                className={`${!secondBgColor && 'bg-[#FFBD59]'} ${
                  isToggleModal && selectedStyle === 2 && 'border-2 border-[#003a6d]'
                } rounded-md w-10 h-10 mt-24`}
                onClick={() => {
                  setIsToggleModal(selectedStyle === 2 ? !isToggleModal : true),
                    setIsSelected(false),
                    setSelectedStyle(2);
                }}
                style={{ background: secondBgColor }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      {isDownload && (
        <Modal
          description="Veuillez sélectionner le mode de paiement"
          handleClickCloseModal={() => setIsDownload(false)}
        />
      )}
    </Layout>
  );
};

export default Create;
