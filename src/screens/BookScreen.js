import React, { useState, useCallback, useMemo } from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../utilities/constants';
import ImageHeader from '../components/header/ImageHeader';
import PageHeader from '../components/header/PageHeader';
import { LoadingButton } from '../components/buttons/buttons';

//Packages
import { useTheme, Text, View, } from 'native-base';
import { Calendar, CalendarList, CalendarUtils } from 'react-native-calendars';
import { format, parseISO, } from 'date-fns';

      const formatDate = (date = new Date()) => format(date, 'yyyy-MM-dd');

/*----BookScreen-------
    BookScreen
*/ 

export default function BookScreen({navigation, route,}) {
      const { color, contain, fonts, letSpace, screens, bR, shadowAndroid } = useTheme();
      const TODAY = new Date();
      const [selectedDay, setSelectedDay] = useState();
      const formatSelected = formatDate(selectedDay);
      const baseDate = formatDate(TODAY);
      const [blockDate, setBlockDate] = useState([])

    const onDayPress = useCallback((date) => {
      // console.log(date)
      setSelectedDay(parseISO(date))
    return date;
  }, []);

  const chosenDate = () => {
    setBlockDate(formatSelected);
    console.log(...blockDate)
  };


  return (
    <View style={contain}>
      <ImageHeader 
        source={require('../assets/images/common/nem-header.jpg')} 
        textColor={color.yellow}
        text='Select a date' 
      />
{/* 
      <PageHeader text='Select a date' /> */}

        <Text my='2' color={color.pink} fontFamily={fonts.subHead} fontSize='24' textAlign='center' >
          Totally free! Although hooking it up with a frag is encouraged!
        </Text>

      <Calendar
        current={baseDate}
        minDate={baseDate}
        onDayPress={(day) => {return onDayPress(day.dateString)}}
        // onDayPress={(res) => {setSelectedDay(format(new Date(res.year, res.month, res.day), res.dateString ))}}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        markingType={'custom'}
        markedDates={{
          [formatSelected]:{ 
            selected: true, 
            selectedColor: color.green,
              customStyles:{
                container: {
                  backgroundColor: color.pink, 
                  elevation: 4
                }, 
                text:{
                  color: color.yellow,
                }
              }
          },
          [blockDate]: {
            selected: true, 
            disabled: true, 
            marked: true,
            selectedColor: color.overlay,
              customStyles: {
                text:{
                  color: color.green,
                  opacity: .4
                }
              } 
            }
          }}
        theme={{
          calendarBackground: color.dPurple,
          // head
          arrowColor: color.green,
          monthTextColor: color.yellow,
          textMonthFontFamily: fonts.head,
          textMonthFontSize: 24,
          // day-header
          textSectionTitleColor: color.pink,
          textDayHeaderFontFamily: fonts.subHead,
          textDayHeaderFontSize: 18,
          // day
          dayTextColor: color.aqua,
          // textDayStyle:{ padding: 4, marginHorizontal:6},
          // textDayFontFamily: fonts.head,
          // textDayFontSize: 24,
          textDisabledColor: color.black,
          // today
          todayBackgroundColor: color.black,
          todayTextColor: color.yellow,
          // selectedDay
          selectedDayBackgroundColor: color.yellow,
          selectedDayTextColor: color.pink,
        }}
        style={{
          borderWidth: .5,
          borderRadius: bR.lg,
          borderColor: color.aqua,
          padding: 20,
          marginVertical: 12,
        }}
      />

        <Text my='2' color={color.pink} fontFamily={fonts.head} fontSize='24' textAlign='center' >
          You have selected {formatSelected.slice(4).split('-')}. Please Confirm below.
        </Text>

         <LoadingButton 
          w='100%' 
          onPress={chosenDate} 
          text='Confirm!'
         />

     
    </View>
  );
};