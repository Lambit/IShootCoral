import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';

// Packages
import { View, Image } from 'native-base';

{/*--------------------
  *  InkSplat Image   *
----------------------*/}
export const InkSplat = () => {
  return (
    <View 
        position='absolute' 
        top='0' 
        right='-50' 
        w={windowWidth} 
        h={windowHeight}
    >
        <Image
          source={require('../../assets/images/logo/paint-splat.png')} 
          resizeMode='cover' 
          w='100%'
          h='80%'
          alt='paint'
        />
    </View>
  );
};


{/*-----------------------
  *  RainbowFish Image   *
-------------------------*/}
export const RainbowFish = () => {
  return (
    <View 
      pt='10'
      flexDirection='column-reverse'
      position='absolute' 
      bottom='-20'
      w='100%' 
      h='100%'
      zIndex='-1'
    >
      
      <Image 
        zIndex={2}
        source={require('../../assets/images/logo/rainbow-fish.png')} 
        resizeMode='cover' 
        w='100%'
        h='30%'
        alignSelf='center'
        alt='fish'
      />
    </View>
  );
};

