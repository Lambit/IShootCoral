import React, { useState } from 'react';
import { Linking, SafeAreaView  } from 'react-native';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import { CoralLogo, GogglesLogo, IntroText, PhotoText, ContactText } from './AboutAssets';
import ImageHeader from '../../components/header/ImageHeader';
import { SubHeadTitle } from '../../components/header/Headings';
import { EmailMeButton } from '../../components/buttons/buttons';
import LoadingScreen from '../LoadingScreen';

//Packages
import { useTheme, ScrollView, View, HStack, Image } from 'native-base';
import Animated, { RollInLeft, SlideInLeft, SlideInUp, withSpring, withTiming, clockRunning } from 'react-native-reanimated';

/*----AboutScreen-------
    AboutScreen
*/ 

export default function AboutScreen({navigation, route,}) {
    const { color } = useTheme();
    const [isLoading, setIsLoading] = useState(false);

    {/*--------------------*
      *   Email Function   *
      *--------------------*/}
    const mailMe = (e) => {
      setIsLoading(true);
      Linking.openURL('mailto:ishootcoral@gmail.com');
      setIsLoading(false);
    };

    if (isLoading) {
        return (
            <LoadingScreen />
        );
    };

  return (
    <SafeAreaView 
      style={{ 
        flex: 1, 
        width: windowWidth,
        height: windowHeight,
        backgroundColor: color.black,
      }}
    >
      {/*---------------------*
        *   Goggle Logo       *
        *---------------------*/}
      <GogglesLogo />
      
      {/*--------------------*
        *   Coral Logo       *
        *--------------------*/}
      <CoralLogo />

      <ScrollView flex={1} w={windowWidth} pb='8' contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageHeader 
          source={require('../../assets/images/lps/common-blasto.jpeg')}
          textP='About Me'
          size='md'
          w='180'
        /> 
          <View mx='10' w='90%' >
            <HStack justifyContent='center' py='4'>
              {/*--------------------------*
                *   Intro Heading/Text     *
                *--------------------------*/}
              <View>
                <SubHeadTitle text='Location' size='lg' w='240' /> 
              </View>
              <View>
                <SubHeadTitle text='Boston, MA' size='lg' w='240' /> 
              </View>
            </HStack>
              <IntroText />
              {/*------------------*
                *   Photo Text     *
                *------------------*/}
              <View alignSelf='center' p='4'>
                <SubHeadTitle text='Photography' size='lg' w='280' /> 
              </View>
                <PhotoText />
                {/*------------------------*
                  *   Contact Text         *
                  *------------------------*/}
                <View alignSelf='center' p='4'>
                  <SubHeadTitle text='Contact' size='lg' w='200' /> 
                </View>
                  <View mt='6'>
                    <ContactText />
                    {/*------------------------*
                      *   Email Button         *
                      *------------------------*/}
                    <EmailMeButton 
                      onPress={() => { mailMe() }} 
                    /> 
                    <Image 
                      source={require('../../assets/images/logo/rainbow-fish.png')}
                      alt='fish'
                      height='200'
                      width={windowWidth}
                      zIndex={10}  
                    />   
                </View>
            </View>
        </ScrollView>
    </SafeAreaView >

    
  );
};