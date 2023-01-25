import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../utilities/constants';

//Packages
import { HStack, useTheme, Text, VStack, Button, View, } from 'native-base';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';

/*----BookScreen-------
    BookScreen
*/ 

export default function BookScreen({navigation, route,}) {
      const { color, contain, fonts, letSpace, screens, bR, shadowAndroid } = useTheme();
      const format = (date = new Date()) => dateFns.format(date, 'YYYY-MM-DD');


//   const toHome = () => { 
//     navigation.navigate('HomeStack')
//   };
  return (
    <View style={contain}  p='8'>
      <Text fontFamily={fonts.head} color={color.yellow}>HomeScreen</Text>

      <Calendar
        style={{
          borderWidth: 1,
          borderRadius: bR.lg,
          borderColor: color.pink,
          padding: 24,
        }}
        theme={{
          calendarBackground: color.dPurple,
          // head
          arrowColor: color.aqua,
          monthTextColor: color.yellow,
          textMonthFontFamily: fonts.head,
          // today
          todayBackgroundColor: color.pink,
          todayTextColor: color.yellow,
          // day
          dayTextColor: color.aqua,
          textDayHeaderFontFamily: fonts.subHead,
          // textDayFontFamily: fonts.head,
        }}
      />
    </View>
  );
};