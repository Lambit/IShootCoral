import React from 'react';
import { View } from 'native-base';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';

//Packages
import Svg, { Image, G, } from 'react-native-svg';

{/*-----------------------
  *  OG-Fish          *
-------------------------*/}
export const OGFish = () => {
  return (
    <View 
        w={windowWidth}
        h={windowHeight / 2 - 20}
        position='absolute' 
        top={-200} 
        right={-140}
        opacity={.5}
    >
      <Svg height='100%' width='90%'> 
        <G rotation="2" origin="200, 200">
          <Image
            href={require('../../assets/images/fish/g-o-fish.png')}
            height='70%'
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
  *  Pb-Fish          *
-------------------------*/}
export const PbFish = () => {
  return (
    <View 
        w={windowWidth}
        h={windowHeight / 2 - 20}
        position='absolute' 
        top={50} 
        left={-160}
        opacity={.5}
    >
     <Svg height='100%' width='90%'>
        <Image
          href={require('../../assets/images/fish/p-b-fish.png')}
          height='70%'
          width='100%'
        />
      </Svg>
    </View>
  );
};