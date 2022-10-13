import React from 'react';
import { modelsService } from '@store/models';
import { colorsPicker } from '@utils/data/colors.utils';
import { GithubPicker } from 'react-color';

const FirstColor = () => {
  return (
    <div className="pl-1 pr-6 py-5 text-[#303030] h-auto overflow-x-hidden">
      <div className="space-y-2">
        <h3 className="font-PoppinsBold text-gray-400 text-lg">Couleurs Principale</h3>
        <hr />
        <h3 className="font-PoppinsBold text-[#191919] text-xs pt-3">Couleurs des textes</h3>
        <GithubPicker
          onChange={(data: any) => modelsService.addFirstTextColor(data.hex)}
          width="100%"
          colors={['#fff', '#000']}
          triangle="hide"
          className="colorsPicker"
        />
        <hr />
        <h3 className="font-PoppinsBold text-[#191919] text-xs pt-3">
          Couleurs d{`'`}arrière plan
        </h3>
        <GithubPicker
          onChange={(data: any) => modelsService.addFirstBgColor(data.hex)}
          width="100%"
          colors={colorsPicker}
          triangle="hide"
          className="colorsPicker"
        />
      </div>
    </div>
  );
};

export default FirstColor;
