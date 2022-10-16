import React, { FC } from 'react';
import { modelsService } from '@store/models';
import { colorsPicker } from '@utils/data/colors.utils';
import ColorPicker from '@components/ColorPicker';

interface StyleProps {
  selectedStyle?: number;
}

export const renderOfTitle = (selectedStyle: number) => {
  switch (selectedStyle) {
    case 0:
      return 'Polices de caractères';
    case 1:
      return 'Couleurs Principales';
    case 2:
      return 'Couleurs Secondaires';
    default:
      return 'Polices de caractère';
  }
};

const Style: FC<StyleProps> = (props) => {
  const { selectedStyle } = props;
  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-auto overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-PoppinsBold text-gray-400 text-lg">{renderOfTitle(selectedStyle!)}</h3>
        <hr />
        <h3 className="font-PoppinsBold text-[#191919] text-xs pt-3">
          {selectedStyle === 0 ? 'Polices des textes' : 'Couleurs des textes'}
        </h3>
        <div className={`${selectedStyle === 0 && 'pb-5'}`}>
          {selectedStyle === 0 ? (
            <select
              className="bg-gray-50 border border-gray-300 text-[#191919] text-sm rounded-lg focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="ARIAL">Arial</option>
              <option value="AVENIR">Avenir</option>
              <option value="BOF">Baskerville Old Face</option>
              <option value="CALIBRI">Calibri</option>
              <option value="CG">Century Gothic</option>
              <option value="DIDOT">Didot</option>
              <option value="ERAS">Eras</option>
              <option value="GARAMOND">Garamond</option>
              <option value="GEORGIA">Georgia</option>
              <option value="Haet">Haettenschweiler</option>
              <option value="POPPINS" defaultValue={'POPPINS'}>
                Poppins
              </option>
              <option value="PN">Proxima Nova</option>
              <option value="VERDANA">Verdana</option>
              <option value="TNR">Times New Roman</option>
            </select>
          ) : (
            <ColorPicker
              handleChange={(data: any) =>
                selectedStyle !== 0 && selectedStyle === 1
                  ? modelsService.addFirstTextColor(data.hex)
                  : modelsService.addSecondTextColor(data.hex)
              }
              colors={['#fff', '#000']}
            />
          )}
        </div>
        <hr />
        <h3 className="font-PoppinsBold text-[#191919] text-xs pt-3">
          {selectedStyle === 0 ? 'Polices des titres' : `Couleurs d'arrière plan`}
        </h3>
        {selectedStyle === 0 ? (
          <select
            className="bg-gray-50 border border-gray-300 text-[#191919] text-sm rounded-lg focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="ARIAL">Arial</option>
            <option value="AVENIR">Avenir</option>
            <option value="BOF">Baskerville Old Face</option>
            <option value="CALIBRI">Calibri</option>
            <option value="CG">Century Gothic</option>
            <option value="DIDOT">Didot</option>
            <option value="ERAS">Eras</option>
            <option value="GARAMOND">Garamond</option>
            <option value="GEORGIA">Georgia</option>
            <option value="Haet">Haettenschweiler</option>
            <option value="POPPINS" defaultValue={'POPPINS'}>
              Poppins
            </option>
            <option value="PN">Proxima Nova</option>
            <option value="VERDANA">Verdana</option>
            <option value="TNR">Times New Roman</option>
          </select>
        ) : (
          <ColorPicker
            handleChange={(data: any) =>
              selectedStyle !== 0 && selectedStyle === 1
                ? modelsService.addFirstBgColor(data.hex)
                : modelsService.addSecondBgColor(data.hex)
            }
            colors={colorsPicker}
          />
        )}
      </div>
    </div>
  );
};

export default Style;
