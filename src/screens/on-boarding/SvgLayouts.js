import React from 'react';

//Components & Constants
import { windowHeight, windowWidth, onAndroid } from '../../utilities/constants';

//Packages
import { View } from 'native-base';
import Svg, { Image, G, } from 'react-native-svg';


{/*-----------------------
  *  Acro Image          *
-------------------------*/}
export const MalOnBoard = () => {
  return (
    <View 
        w={windowWidth}
        h={windowHeight / 2 - 20}
        position='absolute' 
        top='0' 
    >

     <Svg height='100%' width='90%'>
        
          <G rotation="90" origin="180, 150">
            <Image
              href={require('../../assets/images/common/mal-no-bg.png')}
              height='90%'
              width='100%'
              y='80'
              x='-20'
            />
          </G>
      </Svg>
      </View>
  );
};


{/*-----------------------
  *  Goggles Logo        *
-------------------------*/}
export const GogglesOnBoard = () => {
  return (
    <View 
        w={windowWidth / 2}
        h={onAndroid ? windowHeight / 3 : windowHeight / 3 + 20}
        position='absolute' 
        bottom={0} 
        left={0}
        right={0} 
    >
        <Svg height='90%' width='90%'>
          <G rotation="28" origin="220, 0" >
            <Image 
              href={require('../../assets/images/logo/mask-ink.png')}
              height='100%'
              width='60%'
              x='-5'  

            />
           </G>
        </Svg>
    </View>
  );
};


{/*-----------------------
  *  Zoa Image           *
-------------------------*/}
export const HorsZoa = () => {
  return (
    <View 
      size={windowWidth - 100}
      position='absolute' 
      bottom={windowHeight - windowHeight - 80} 
      right={windowWidth - windowWidth - 80} 
      rounded='full' 
    >
        <Svg height='90%' width='90%'>
            <G rotation="280" origin="120, 140">
                <Image 
                  href={require('../../assets/images/common/hrs.png')}
                  height='100%'
                  width='100%'
                  x='-50'
                />
           </G>
        </Svg>
    </View>
  );
};

