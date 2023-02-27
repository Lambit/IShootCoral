import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';

//Packages
import { View, Box, Text } from 'native-base';
import Svg, { Image, G, } from 'react-native-svg';
import { appTheme } from '../../theme/theme';

{/*----------------------*
  *  Coral Logo          *
  *----------------------*/}
export const CoralLogo = () => {
  return (
    <Box 
      size={windowWidth - 80}
      position='absolute' 
      bottom={20} 
      left={-120}  
      opacity={.4}
    >
      <Svg height='90%' width='90%'>
        <G rotation="24" origin="120, 140">
          <Image 
            href={require('../../assets/images/logo/bloody-coral.png')}
            height='40%'
            width='60%'    
          />
         </G>
      </Svg>
    </Box>
  );
};

{/*----------------------*
  *  Goggles Logo        *
  *----------------------*/}
export const GogglesLogo = () => {
  return (
    <View 
        w={windowWidth}
        h={ windowHeight - 100}
        position='absolute' 
        top={0} 
        left={100}
        right={0} 
        opacity='.4'
    >
        <Svg height='80%' width='80%'>
          <G rotation="28" origin="220, 0" >
            <Image 
              href={require('../../assets/images/logo/mask-ink.png')}
              height='40%'
              width='60%'
              x='-5'  
            />
           </G>
        </Svg>
    </View>
  );
};

{/*----------------------*
  *  Rainbow Fish        *
  *----------------------*/}
export const  RainbowFish  = () => {
  return (
    <View 
        w={windowWidth}
        h={ windowHeight - 400}
        position='absolute' 
        bottom={0} 
        left={60}
        right={0} 
        opacity='.4'
    >
      <Svg height='90%' width='90%'>
        <G rotation="28" origin="220, 0" >
          <Image 
            href={require('../../assets/images/logo/rainbow-fish.png')}
            height='60%'
            width='80%'
          />
          </G>
        </Svg>
    </View>
  );
};


{/*----------------------*
  *  Intro Text          *
  *----------------------*/}
export const  IntroText  = () => {
  const { color, fonts } = appTheme;
  return (
    <View mt='6'>
      <Text my='2' color={color.green} fontFamily={fonts.subHead} fontSize='20' textAlign='center' >
        I'm a huge Stick and zoa head. I like a nice colored favia, blasto or mushroom. I'm just a die 
        hard hobbyist.
      </Text>
   </View>
  );
};


{/*----------------------*
  *  Photo Text          *
  *----------------------*/}
export const  PhotoText  = () => {
  const { color, fonts } = appTheme;
  return (
    <View mt='6'>
      <Text my='2' color={color.green} fontFamily={fonts.subHead} fontSize='20' textAlign='center' >
        I shoot in RAW with a Nikon D3 and a Tamaron Six Hundred macro lense. I do some post work in Lightroom. I 
        don't want money if you book me to shoot your tank. I'll do it for free or just toss me some 
        coral! I'm just trying to expand my tank and photography portfolio. Thank you!
      </Text>
    </View>
  );
};


{/*----------------------*
  *  Contact Text        *
  *----------------------*/}
export const  ContactText  = () => {
  const { color, fonts } = appTheme;
  return (
    <Text m='2' color={color.green} fontFamily={fonts.subHead} fontSize='20' textAlign='center' >
      Book a shoot through the scheduling screen in the app. Feel free to reach out on ReefTwoReef
      and Boston Reefers Society. My username is AZG. Lastly heres and email link you can reach me at...Later.
    </Text>
  );
};
