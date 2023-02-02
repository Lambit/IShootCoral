import React from 'react';

//Components & Constants
import { LoadingButton } from '../../components/buttons/buttons';
import { GogglesOnBoard, MalOnBoard, HorsZoa, } from './OnBoardAssets';

//Packages
import { useTheme, Text, VStack } from 'native-base';
import Animated, { FadeInLeft, FadeInRight, SlideInUp } from 'react-native-reanimated';


/*----OnBoardingScreen-------
    OnBoardingScreen
*/ 

const OnBoardingScreen = ({ navigation, route,}) => {
  const { color, contain, fonts } = useTheme();

  const toHome = () => { 
    navigation.navigate('HomeStack')
  };

  return (
    <Animated.View style={contain}>

      {/*------------------
        *   Mal Img       *
      --------------------*/}
      <Animated.View entering={SlideInUp.duration(1000).springify(6)}>
        <MalOnBoard />
      </Animated.View>

          {/*-----------------------
            *   Title & Button    *
          ------------------------*/}
          <VStack 
            flex={1} 
            space={2} 
            mt='6' 
            mx='8'
            alignItems='center' 
            justifyContent='center'
          >
         
              <Text p='4' fontFamily={fonts.head} fontSize='42' color={color.yellow}> 
                I Shoot Coral
              </Text>
               <LoadingButton px='20' py='4' onPress={toHome} text='Okay!'/>
            </VStack>

              {/*-------------------
                *   Zoa Img       *
              --------------------*/}
              <Animated.View entering={FadeInRight.delay(300)}>
                <HorsZoa />
              </Animated.View>
              {/*-------------------
                *  Goggles Logo   *
              --------------------*/}
              <Animated.View 
                style={{zIndex: -1}}
                entering={FadeInLeft.delay(1000)}
              >
                <GogglesOnBoard />
              </Animated.View>
    </Animated.View>
  );
};

export default OnBoardingScreen;