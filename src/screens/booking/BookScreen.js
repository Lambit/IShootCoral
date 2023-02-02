import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

//Components & Constants
import { windowHeight, windowWidth, onAndroid, oniOS, } from '../../utilities/constants';
import ImageHeader from '../../components/header/ImageHeader';
import { OGFish, PbFish, YpFish } from './BookingAssets';
import { SubHeadTitle } from '../../components/header/Headings';
import { PhoneInput } from '../../components/inputs/TextInputs';
import LoadingScreen from '../LoadingScreen';
import { LoadingButton } from '../../components/buttons/buttons';

//Packages
import { useTheme, Text, View, ScrollView, VStack, Image } from 'native-base';
import Animated, { ZoomInLeft, ZoomInRotate, ZoomInRight, RotateInUpLeft, FlipInEasyY, LightSpeedOutLeft } from 'react-native-reanimated';
import { useForm } from 'react-hook-form';
import { Calendar } from 'react-native-calendars';
import { format, parseISO, nextDay } from 'date-fns';

const formatDate = (date = new Date()) => format(date, 'yyyy-MM-dd');

/*----BookScreen-------
    BookScreen
*/ 

export default function BookScreen({navigation, route,}) {
      const { color, fonts, bR } = useTheme();
      const [isLoading, setIsLoading] = useState(false);
      const [isPhone, setIsPhone] = useState('');
      const TODAY = new Date();
      const [selectedDay, setSelectedDay] = useState();
      const formatSelected = formatDate(selectedDay);
      const baseDate = formatDate(TODAY);
      const [blockDate, setBlockDate] = useState([])

let BOOKED_DATES = [
    {
      date: '2023-02-02',
      phone: '1112223456',
    },
    {
      date: '2023-02-04',
      phone: '1232663456',
    },
    {
      date: '2023-02-10',
      phone: '2223333456',
    },
  ];


   const marked = useMemo(() => {
    return{
          [formatSelected]:{
            selected: !blockDate ? true : false, 
              customStyles:{
                container: {
                  backgroundColor: color.pink, 
                  shadowOpacity: 0.4,
                  shadowRadius: 6,
                  shadowColor: '#000',
                  shadowOffset: {
                    height: 4,
                    width: 1,
                  },
                  elevation: 6,
                }, 
                text:{
                  color: color.yellow,
                }
              }
          },
      [blockDate.date]: {  
            disabled: true, 
            disableTouchEvent: true,
            marked: true,
              customStyles: {
                container: {
                  backgroundColor: color.yellow, 
                  opacity: .4,
                }, 
                text:{
                  color: color.dPurple,
                }
              } 
          },
           [BOOKED_DATES.forEach((d) =>{ return d.date})]: {
            disabled: true, 
            disableTouchEvent: true,
            marked: true,
              customStyles: {
                container: {
                  backgroundColor: color.overlay, 
                  opacity: .8,
                }, 
                text:{
                  color: color.dPurple,
        
                }
              } 
          }}
   },[formatSelected])

    const {control, handleSubmit, reset, formState: { errors, isDirty, dirtyFields },} = useForm({
      defaultValues: {
        phone: '',
      } 
    });

   

  const onDayPress = useCallback((date) => {
    setSelectedDay(parseISO(date))
  }, [selectedDay]);

  const chosenDate = () => {
    let emptyArr = []
    emptyArr.push({
      date: formatSelected,
      phone: isPhone
    });
    setBlockDate(emptyArr);
    reset();
    console.log(blockDate)
    // return blockDate;
  };

  // ------------submit login---------------
  const onSubmit = (data, emptyArr = []) => {
      const userDates = {};
    
    setIsPhone(data.phone);
    console.log(isPhone)
    setIsLoading(true);

      userDates[formatSelected] = { selected: true };
      userDates[isPhone] = { selected: true };

      emptyArr.push({
        ...userDates[formatSelected],
         disabled: true,
        disableTouchEvent: true,
        // marked: true,
        customStyles: {
          container: {
            backgroundColor: color.yellow, 
            opacity: .4,
          }, 
          text:{
          color: color.dPurple,
          },
        }, 
      });
      setBlockDate(emptyArr);
      setIsLoading(false);
      return userDates
    
    }


  

  const getMarkedDates = ( baseDate, booked = [] ) => {
    const disabledDates = {};

    disabledDates[formatSelected] = { selected: true };

    BOOKED_DATES.forEach((b) => {
     
      date[b] = {
        ...disabledDates[formatSelected],
        disabled: true,
        disableTouchEvent: true,
        // marked: true,
        customStyles: {
          container: {
            backgroundColor: color.yellow, 
            opacity: .4,
          }, 
          text:{
          color: color.dPurple,
          },
        }, 
      };
    });

    return disabledDates;

  };


  //memo the array------

      if (isLoading) {
        return (
            <LoadingScreen />
        );
    };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black, width: windowWidth, height: windowHeight, }}>
      <ScrollView flex={1} w='100%' h='100%' pb='40'>
        <ImageHeader 
           source={require('../../assets/images/sps/vivid-confetti.jpeg')}
           textP='Book Now'
           size='md'
           w='180'
        /> 
          <Animated.View entering={FlipInEasyY} ><OGFish /></Animated.View>
          <Animated.View entering={FlipInEasyY}><PbFish /></Animated.View>
          <Animated.View entering={FlipInEasyY}><YpFish /></Animated.View>
     
      
            <VStack 
              space={4}
              my='4'
              justifyContent='flex-start'
            >
              <Animated.View entering={ZoomInLeft.delay(300).springify(20)}>
              <SubHeadTitle
                text='Select A Day'
                size='lg'
                w='240'
              /> 
              </Animated.View>
              <Animated.View entering={ZoomInRotate.delay(600).springify(12)} style={{alignSelf:'center'}}>
                <SubHeadTitle
                    text='Enter Phone'
                    size='lg'
                    w='240'
                />
              </Animated.View>
        
              <Animated.View 
                entering={ZoomInRight.delay(1000).springify(20)}
                style={{alignSelf:'flex-end', marginRight: 20}}
              >
                <SubHeadTitle
                  text='Confirm'
                  size='lg'
                  w='240'
                /> 
              </Animated.View>
        </VStack>

          <View px='10' mt='4' >
            <Animated.View entering={RotateInUpLeft.delay(2000).springify(20)}>
              <Text my='2' color={color.green} fontFamily={fonts.subHead} fontSize='20' textAlign='center' >
                Totally free! Although hooking it up with a frag is encouraged!
              </Text>
            </Animated.View>

      <Calendar
        current={baseDate}
        minDate={baseDate}
        onDayPress={(day) => {return onDayPress(day.dateString)}}
        hideExtraDays={true}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markingType={'custom'}
        // markedDates={getMarkedDates(formatSelected, BOOKED_DATES)}
        markedDates={marked}
          // [formatSelected]:{
          //   selected: true, 
          //     customStyles:{
          //       container: {
          //         backgroundColor: color.pink, 
          //         shadowOpacity: 0.4,
          //         shadowRadius: 6,
          //         shadowColor: '#000',
          //         shadowOffset: {
          //           height: 4,
          //           width: 1,
          //         },
          //         elevation: 6,
          //       }, 
          //       text:{
          //         color: color.yellow,
          //       }
          //     }
          // },
          // [blockDate]: {  
          //   disabled: true, 
          //   disableTouchEvent: true,
          //   marked: true,
          //     customStyles: {
          //       container: {
          //         backgroundColor: color.overlay, 
          //         opacity: .4,
          //       }, 
          //       text:{
          //         color: color.red,
          //       }
          //     } 
          // },
          // [BOOKED_DATES]: {disabled: true, 
          //   disableTouchEvent: true,
          //   marked: true,
          //     customStyles: {
          //       container: {
          //         backgroundColor: color.green, 
          //         opacity: .4,
          //       }, 
          //       text:{
          //         color: color.dPurple,
          //       }
          //     } 
          // }}}
        theme={{
          calendarBackground: color.dPurple,
          // head
          arrowColor: color.aqua,
          monthTextColor: color.yellow,
          textMonthFontFamily: fonts.head,
          textMonthFontSize: 24,
          // day-header
          textSectionTitleColor: color.pink,
          textDayHeaderFontFamily: fonts.subHead,
          textDayHeaderFontSize: 20,
          // day
          dayTextColor: color.green,
          textDayFontFamily: fonts.num,
          textDayFontSize: 14,
          textDayStyle: { marginTop: 7, padding: 2 },
          // today
          todayBackgroundColor: color.black,
          todayTextColor: color.yellow,
          // selectedDay
          selectedDayBackgroundColor: color.pink,
          selectedDayTextColor: color.yellow,
          //Marked Dot
          selectedDotColor: color.white,
          dotStyle: { marginBottom: 2, marginTop: oniOS ? -2 : 0 },
          //disabled
          textDisabledColor: color.overlay,
          disabledDotColor: color.o,
        }}
        style={{
          borderWidth: .5,
          borderRadius: bR.lg,
          borderColor: color.aqua,
          padding: 20,
          marginVertical: 12,
        
        }}
      />
        {formatSelected == baseDate
          ?
          null
            // <Animated.View 
            //   entering={RollInLeft.delay(600).springify(20)}
            //   exiting={LightSpeedOutLeft.delay(300).springify(20)}
            // >
            // <Text my='2' color={color.pink} fontFamily={fonts.subHead} fontSize='24' textAlign='center' >Select A Date</Text>
            // {/* </Animated.View> */}
          :
          <Animated.View 
            entering={FlipInEasyY.springify(20)}
            // layout={Layout.springify()}
            exiting={LightSpeedOutLeft}
          >
            <Text mt='2' color={color.pink} fontFamily={fonts.subHead} fontSize='24' textAlign='center' >Selected Date</Text>
            <Text color={color.green} fontFamily={fonts.num} fontSize='18' textAlign='center' >{formatSelected.slice(4).split('-').join('/').slice(1)}</Text>
          </Animated.View>
        }

        <VStack space={4} mt='6' mb='8'>
        <PhoneInput 
          control={control}
          name='phone'
          text='Phone'
          borderColor={color.dPurple}
          rules={{
            required: 'Phone Number Required',
            minLength:{ 
              value: 10, 
              message: 'Please enter valid phone number'
            },
            maxLength:{ 
              value: 15, 
              message: 'Exceeds the amount of characters'
            },
          }} 
        />

       

         <LoadingButton 
            w='100%' 
            isDisabled={!isDirty}
            onPress={handleSubmit(onSubmit)} 
            text='Confirm!'
         />
       
            </VStack>
      

     </View>
     </ScrollView>
    </SafeAreaView>
  );
};