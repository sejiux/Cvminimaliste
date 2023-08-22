import React, { FC } from 'react';
import { modelsService } from '@store/models';
import { colorsPicker } from '@utils/data/colors.utils';
import ColorPicker from '@components/ColorPicker';
import { fontOptionsValue } from '@utils/data/font.utils';

interface StyleProps {
  selectedStyle?: number;
  fontTitle?: string;
  fontText?: string;
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
  const { selectedStyle, fontTitle, fontText } = props;
  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-auto overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-Poppins font-bold text-gray-400 text-lg">
          {renderOfTitle(selectedStyle!)}
        </h3>
        <hr />
        <h3 className="font-Poppins font-normal text-[#191919] text-xs pt-3">
          {selectedStyle === 0 ? 'Polices du profil' : 'Couleurs des textes'}
        </h3>
        <div className={`${selectedStyle === 0 && 'pb-5'}`}>
          {selectedStyle === 0 ? (
            <select
              className="bg-gray-50 border border-gray-300 text-[#191919] text-sm rounded-lg focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
              onChange={(e) => modelsService.addFontTitle(e.target.value)}
              defaultValue="Poppins"
              value={fontTitle}
            >
              {fontOptionsValue.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.title}
                </option>
              ))}
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
        <h3 className="font-Poppins font-normal text-[#191919] text-xs pt-3">
          {selectedStyle === 0 ? 'Polices des textes' : `Couleurs d'arrière plan`}
        </h3>
        {selectedStyle === 0 ? (
          <select
            className="bg-gray-50 border border-gray-300 text-[#191919] text-sm rounded-lg focus:ring-[#24445c] focus:border-[#24445c] block w-full p-2.5"
            onChange={(e) => modelsService.addFontText(e.target.value)}
            defaultValue="Raleway"
            value={fontText}
          >
            {fontOptionsValue.map((data, index) => (
              <option key={index} value={data.value}>
                {data.title}
              </option>
            ))}
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
