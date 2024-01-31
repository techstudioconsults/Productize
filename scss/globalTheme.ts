import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    purple: {
      100: '#F7F2FB',
      200: '#6D5DD3',
      300: '#0E0A2D',
    },
    yellow: {
      100: '#FBE69A',
      200: '#F6C21C',
      300: '#39341F',
    },
    coral: {
      100: '#AEDEE0',
      200: '#17B6BA',
      300: '#1E2323',
    },
    green: {
      100: '#C9E7D3',
      200: '#11923D',
      300: '#161D18',
    },
    grey: {
      100: '#FAFAFA',
      200: '#F3F3F3',
      300: '#CFCFD0',
      400: '#878789',
      500: '#4C4C4F',
      600: '#28282B',
      700: '#1D1C20',
      800: '#111014',
    },
    red: {
      100: '#FDBDBD',
      200: '#DB3E3E',
      300: '#660909',
    },
  },
  breakpoints: {
    sm: '576px', //756px
    md: '768px', //768px
    lg: '992px', //960px
    xl: '1200px', //1200px
    xxl: '1400px', //1400px
    '2xl': '1440px', //1440px
  },
  fonts: {
    heading: 'Neurial Grotesk, sans-serif',
    body: 'Neurial Grotesk, sans-serif',
  },
  textStyles: {
    // h1: {
    //   // you can also use responsive styles
    //   // fontSize: ['48px', '72px'],
    //   fontSize: '64px',
    //   lineHeight: '72px',
    //   fontWeight: 'bold',
    // },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.5rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '3rem',
  },
});

export default theme;
