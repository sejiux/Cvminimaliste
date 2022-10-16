import React, { FC } from 'react';
import { GithubPicker } from 'react-color';

interface ColorPickerProps {
  handleChange?: (data: any) => void;
  colors?: string[] | undefined;
}

const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { handleChange, colors } = props;
  return (
    <GithubPicker
      onChange={handleChange}
      width="100%"
      colors={colors}
      triangle="hide"
      className="colorsPicker"
    />
  );
};

export default ColorPicker;
