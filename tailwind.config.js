module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        PoppinsBlack: ['PoppinsBlack'],
        PoppinsBold: ['PoppinsBold'],
        PoppinsMedium: ['PoppinsMedium'],
        PoppinsRegular: ['PoppinsRegular'],
        PoppinsLight: ['PoppinsLight'],
        PoppinsXLight: ['PoppinsXLight'],
        FrontageRegular: ['FrontageRegular'],
        FrontageBold: ['FrontageBold'],
      },
      fontSize: {
        fullscreen: '50vw',
      },
    },
    screens: {
      xs: '370px',
      sm: '420px',
      md: '760px',
      lg: '1020px',
      xl: '1400px',
      '2xl': '2500px',
    },
  },
  plugins: [require('flowbite/plugin')],
};
