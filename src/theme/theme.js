import { extendTheme } from "native-base";

export const appTheme = extendTheme({
    color: {
        black: '#000',
        white: '#FFFFFF',
        yellow: '#FFFF00',
        lPurple: '#996EAB',
        dPurple: '#511281',
        aqua: '#67e8f9',
        red: '#d44444',
        pink: '#f20079',
    },
    fonts:{
    head: 'Sabarian',
    subHead: 'Ressolles',
  },
    letSpace: {
      sm: "-0.025em",
      md: 0,
      lg: "0.025em",
      xl: "0.05em",
  },
  lineHi: {
      xs: "1.125em",
      sm: "1.25em",
      md: "1.375em",
      lg: "1.5em",
      xl: "1.75em",
      xxl: "2em",
      xXl: "3em",
  },
  weights: {
    sm: 300,
    md: 400,
    lg: 600,
    xl: 700,
    xxl: 800,
  },
  screens: {
      zero: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
  },
  bR: {
    xs: 4,
    sm: 8,
    md: 16,
    pill: 20,
    lg: 40
  },
    contain:{
      flex: 1,
      padding: 2,
      backgroundColor: '#000',
    },
    fill: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    shadowAndroid: {
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowColor: 'black',
      shadowOffset: {
        height: 4,
        width: 4,
      },
      elevation: 6,
    },
    glow: {
      shadowOpacity: 0.4,
      shadowRadius: 8,
      shadowColor: '#f20079',
      shadowOffset: {
        height: 4,
        width: 0,
      },
      // elevation: 6,
    },
});
