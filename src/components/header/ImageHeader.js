import React from 'react'

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import Overlay from '../overlay/Overlay';

//Packages
import { useTheme, View, Image, Text } from 'native-base';



const ImageHeader = ({source, textColor, text}) => {
      const { fonts } = useTheme();
  return (
    <View width={windowWidth} height={windowHeight / 8}>
      <Image 
        width='100%'
        height='100%'
        position='absolute'
        top={0}
        right={0}
        left={0}
        alt='nem'
        zIndex={0}
        source={source}
      />
      <Overlay />

      <Text 
        p='4' 
        zIndex='2'
        fontFamily={fonts.head} 
        fontSize='42' 
        color={textColor}
    > 
        {text}
    </Text>

      <Image
          maxH='60'
          maxWidth='60'
          position='absolute'
          right={0}
          alt='logo'
          zIndex={0}
          source={require('../../assets/images/logo/ishoot-logo.png')}
      />
      
    </View>
  );
};

export default ImageHeader;