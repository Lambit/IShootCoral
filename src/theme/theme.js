import { onAndroid, oniOS } from "../utilities/constants";
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
        green: '#39ff14',
        o: '#FF5733',
        overlay: 'rgba(255,255,255, 0.2)',
    },
    fonts:{
    head: oniOS ? 'Sabarian' : 'Sabarian-OVPr6',
    subHead: oniOS ? 'Ressolles' : 'Ressolles-0W6oz',
    num: onAndroid ? 'Time-Font' : 'E1234',
  },
    letSpace: {
      sm: "-0.025em",
      md: 0,
      lg: "0.025em",
      xl: "0.05em",
  },
  lineHi: {
      xs: 1.125,
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
    lg: 40,
    xl: 46,
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
    loadingGlow: {
      shadowOpacity: 1,
      shadowRadius: 20,
      shadowColor: '#f20079',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 16,
    },
    glow: {
      shadowOpacity: 0.6,
      shadowRadius: 8,
      shadowColor: '#f20079',
      shadowOffset: {
        height: 8,
        width: 4,
      },
      elevation: 16,
    },
    droidGlow: {
      shadowColor: '#f20079',
      elevation: 6,     
    },
    
    calenderTheme: {
    calendarBackground: '#511281',
    // head
    arrowColor: '#67e8f9',
    monthTextColor: '#FFFF00',
    textMonthFontFamily: oniOS ? 'Sabarian' : 'Sabarian-OVPr6',
    textMonthFontSize: 24,
    // day-header
    textSectionTitleColor: '#f20079',
    textDayHeaderFontFamily: oniOS ? 'Ressolles' : 'Ressolles-0W6oz',
    textDayHeaderFontSize: 18,
    // day
    dayTextColor: '#39ff14',
    textDayFontFamily: onAndroid ? 'Time-Font' : 'E1234',
    textDisabledColor: '#000',
    // today
    todayBackgroundColor: '#000',
    todayTextColor: '#FFFF00',
    // selectedDay
    selectedDayBackgroundColor: '#FFFF00',
    selectedDayTextColor: '#f20079',
    dotColor: '#39ff14',
    selectedDotColor: '#FFFFFF',
    disabledDotColor: '#FF5733',
    }
});


