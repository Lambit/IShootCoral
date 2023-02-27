import React from 'react';
import { appTheme } from '../../theme/theme';

//Components & Constants
import { LoadingButton } from '../../components/buttons/buttons';
import { GogglesOnBoard, MalOnBoard, HorsZoa, } from './OnBoardAssets';

//Packages
import { Text, VStack, View, NativeBaseProvider } from 'native-base';
import Animated, { FadeInLeft, FadeInRight, SlideInUp } from 'react-native-reanimated';


/*----OnBoardingScreen-------
    OnBoardingScreen
*/ 

const OnBoardingScreen = ({ navigation, }) => {
  const { color, fonts } = appTheme;

  const toHome = () => { 
    navigation.navigate('HomeStack')
  };

  return (
    <NativeBaseProvider >
      <View 
        testID='onBoardView' 
        style={{
          flex: 1,
          padding: 2,
          backgroundColor: color.black
        }}
      >

        {/*---------------------------------------------*
          *   Mal SVG Img with entering animations      *
        ------------------------------------------------*/}
        <Animated.View entering={SlideInUp.duration(1000).springify(6)}>
          <MalOnBoard />
        </Animated.View>

            {/*-------------------------------------------*
              *   Title & Button - flexDirection column   *
            ----------------------------------------------*/}
            <VStack 
              flex={1} 
              space={2} 
              mt='6' 
              mx='8'
              alignItems='center' 
              justifyContent='center'
            >
            
                <Text 
                  p='4'
                  accessibilityRole='header' 
                  testID='iShootText'  
                  fontFamily={fonts.head} 
                  fontSize='42' 
                  color={color.yellow}
                > 
                  I Shoot Coral
                </Text>

                  <LoadingButton 
                    px='20' 
                    py='4' 
                    onPress={toHome} 
                    text='Okay!'
                  />

              </VStack>

                {/*--------------------------------------------------*
                  *   Zoa SVG Img with entering animations           *
                -----------------------------------------------------*/}
                <Animated.View entering={FadeInRight.delay(300)}>
                  <HorsZoa />
                </Animated.View>

                {/*--------------------------------------------------*
                  *  Goggles Logo SVG Img with entering animations   *
                -----------------------------------------------------*/}
                <Animated.View style={{zIndex: -1}} entering={FadeInLeft.delay(1000)}>
                  <GogglesOnBoard />
                </Animated.View>
      </View>
    </NativeBaseProvider>
  );
};

export default OnBoardingScreen;