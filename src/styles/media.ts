enum MediaTypes {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
  WideScreen = 'wideScreen',
}

export enum MediaDimensions {
  Mobile = 300,
  Tablet = 768,
  Desktop = 1024,
  WideScreen = 1200,
}

export const breakpoints = {
  [MediaTypes.Mobile]: `${MediaDimensions.Mobile}px`,
  [MediaTypes.Tablet]: `${MediaDimensions.Tablet}px`,
  [MediaTypes.Desktop]: `${MediaDimensions.Desktop}px`,
  [MediaTypes.WideScreen]: `${MediaDimensions.WideScreen}px`,
};

export const device = {
  [MediaTypes.Mobile]: `screen and (min-width: ${breakpoints[MediaTypes.Mobile]})`,
  [MediaTypes.Tablet]: `screen and (min-width: ${breakpoints[MediaTypes.Tablet]})`,
  [MediaTypes.Desktop]: `screen and (min-width: ${breakpoints[MediaTypes.Desktop]})`,
  [MediaTypes.WideScreen]: `screen and (min-width: ${breakpoints[MediaTypes.WideScreen]})`,
};
