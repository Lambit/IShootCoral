import React from 'react'
import { windowHeight, windowWidth } from '../../utilities/constants';
import { useTheme, View, Image, Text } from 'native-base';

const ImageHeader = ({source, text}) => {
      const { color, fonts } = useTheme();
  return (
    <View flex={1} bg={color.black} >
      <Image 
        width={windowWidth}
        height={windowHeight / 8}
        position='absolute'
        top={0}
        right={0}
        left={0}
        alt='nem'
        zIndex={0}
        source={source}
      />

      <Image
          maxH='60'
          maxWidth='60'
          position='absolute'
          right={0}
          alt='logo'
          zIndex={0}
          source={require('../../assets/images/logo/ishoot-logo.png')}
      />
      {/* <View flex={1} alignSelf='center' flexDirection='row' position='absolute' bottom='0' >
      <Text zIndex={2} fontFamily={fonts.subHead} fontSize='36' color={color.yellow} >{text}</Text>
      </View> */}
    </View>
  );
};

export default ImageHeader;