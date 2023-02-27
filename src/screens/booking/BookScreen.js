import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { appTheme } from '../../theme/theme';

//Components & Constants
import { windowHeight, windowWidth, oniOS, } from '../../utilities/constants';
import ImageHeader from '../../components/header/ImageHeader';
import { OGFish, PbFish } from './BookingAssets';
import { SubHeadTitle } from '../../components/header/Headings';
import { PhoneInput } from '../../components/inputs/TextInputs';
import LoadingScreen from '../LoadingScreen';
import { LoadingButton } from '../../components/buttons/buttons';

//Packages
import { Text, View, ScrollView, VStack, } from 'native-base';
import 
  Animated, { 
    ZoomInLeft, 
    ZoomInRotate, 
    ZoomInRight, 
    RotateInUpLeft, 
    FlipInEasyY, 
    LightSpeedInLeft,
    LightSpeedOutLeft,
    ZoomInEasyDown
  } 
  from 'react-native-reanimated';
import { useForm } from 'react-hook-form';
import { Calendar } from 'react-native-calendars';
import { format, addDays } from 'date-fns';

//format date to react native calendars liking
const formatDate = (date = new Date()) => format(date, 'yyyy-MM-dd');

/*----BookScreen-------
*/ 
export default function BookScreen({navigation, route,}) {
      const { color, fonts, bR } = appTheme;
      const [isLoading, setIsLoading] = useState(false);
      const [isPhone, setIsPhone] = useState('');
      const [blockDate, setBlockDate] = useState({})
      
      const formatSelected = {};
      const TODAY = new Date();
      const baseDate = formatDate(addDays(TODAY, 1));

      const currDay = formatDate(addDays(TODAY, 4));
      const refDate = currDay;
      const [selectedDay, setSelectedDay] = useState(refDate);

      let BOOKED_DATES = ['2023-02-02', '2023-02-10'];


    {/*--------------------------------------------*
      *  Memoize marked date to prevent rerender   *
      *--------------------------------------------*/}
   const marked = useMemo(() => {
    return{
          [selectedDay]:{
            selected: true, 
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
      [blockDate]: {  
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
           [BOOKED_DATES]: {
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
      },[selectedDay]
    );

    {/*--------------------------------------------*
      *  Form Control                              *
      *--------------------------------------------*/}
    const {control, handleSubmit, reset, formState: { errors, isDirty, dirtyFields },} = useForm({
      defaultValues: {
        phone: '',
      } 
    });

   

  {/*-------------------------------------------------*
    *  usCallback when selected to prevent rerender   *
    *-------------------------------------------------*/}
  const onDayPress = useCallback((date) => {
    setSelectedDay(date.dateString);
  }, [ refDate, selectedDay]);


  if (isLoading) {
      return (
          <LoadingScreen />
      );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black, width: windowWidth, height: windowHeight, }}>
      <ScrollView flex={1} w='100%' h='100%' pb='40'>

      {/*--------------------------------------------*
        *  Header/Subheader                          *
        *--------------------------------------------*/}
        <ImageHeader 
           source={require('../../assets/images/sps/vivid-confetti.jpeg')}
           textP='Book Now'
           size='md'
           w='180'
        /> 
          <Animated.View entering={ZoomInEasyDown.delay(500).duration(1000)} >
            <OGFish />
          </Animated.View>
          <Animated.View entering={ LightSpeedInLeft.delay(300).duration(5000)}>
            <PbFish />
          </Animated.View>
      
            <VStack space={4} my='4' justifyContent='flex-start'>
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
                style={{
                  alignSelf:'flex-end', 
                  marginRight: 20
                  }}
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

            {/*--------------------------------------------*
              *  Calendar   *
              *--------------------------------------------*/}
            <Calendar
              current={refDate}
              minDate={refDate}
              onDayPress={onDayPress}
              hideExtraDays={true}
              disableAllTouchEventsForDisabledDays={true}
              enableSwipeMonths={true}
              markingType={'custom'}
              markedDates={marked}
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

            {/*--------------------------------------------*
              *  Users Input Displayed                     *
              *--------------------------------------------*/}
            {formatSelected == baseDate
              ?
              null
              :
              <Animated.View entering={FlipInEasyY.springify(20)} exiting={LightSpeedOutLeft}>
                <Text mt='2' color={color.pink} fontFamily={fonts.subHead} fontSize='24' textAlign='center' >
                  Selected Date
                </Text>
                <Text color={color.green} fontFamily={fonts.num} fontSize='18' textAlign='center' >
                  {selectedDay}
                </Text>
                <Text color={color.green} fontFamily={fonts.num} fontSize='18' textAlign='center' >
                  {isPhone}
                </Text>
              </Animated.View>
            }

            <VStack space={4} mt='6' mb='8'>
              {/*--------------------------------------------*
                *  Phone Input/Button                        *
                *--------------------------------------------*/}
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
                text='Confirm!'
                onPress={
                  handleSubmit((e) => {
                    try{
                      setIsPhone(e.phone)
                      setBlockDate(selectedDay);
                    }catch(err){
                      console.log(err.message)
                    }
                  })
                } 
              />
            </VStack>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};