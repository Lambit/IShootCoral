import React from 'react';

// Components & Constants
import { windowWidth, windowHeight } from '../utilities/constants';

//Packages
import { useTheme, View, Image, Text } from 'native-base'

const LoadingScreen = () => {
    const { color, fonts, contain } = useTheme();
  return (
    <View 
        style={contain} 
        w={windowWidth}
        h={windowHeight}
        justifyContent='center'
        alignItems='center'    
    >
        <View
            width='100%'
            h='60%'
            position='absolute'
            top={-100}
            left={-150}
        >
            <Image
                alt='go-fish'
                source={require('../assets/images/fish/g-o-fish.png')}
                width='100%'
                height='80%'
            />
        </View>
        
        <View
            width='80%'
            h='50%'
            flexDir='column-reverse'
            alignItems='flex-start'
        >
            <Image
                alt='mask'
                source={require('../assets/images/logo/mask-ink.png')}
                width='100%'
                height='100%'
                position='absolute'
            />
            <Text
                px='6' 
                fontFamily={fonts.subHead} 
                fontSize='48' 
                color={color.green}
             >
                Loading...
             </Text>
        </View>

        <View
            width='100%'
            h='60%'
            position='absolute'
            bottom={-120}
            right={-100}
        >
            <Image
                alt='pb-fish'
                source={require('../assets/images/fish/p-b-fish.png')}
                width='100%'
                height='80%'
            />
        </View>
    </View>
  );
};

export default LoadingScreen;