import React from 'react';
import { windowWidth, windowHeight, oniOS, onAndroid } from '../../utilities/constants';

import { useTheme, Pressable, Text, Image, View } from 'native-base';

const CoralTypesLayout = ({typeId, onPress, source, typeText}) => {
    const { color, fonts, bR, glow, droidGlow } = useTheme();
  return (
    <View
    my='6'
    overflow={oniOS ? 'visible' : 'hidden'}
            w={windowWidth - 40} 
        height={(windowHeight / 2 / 2 - 40)}
    borderRadius={bR.lg} 
    borderWidth='.5'
    borderColor={color.lPurple}
    // shadow={ oniOS ? glow : droidGlow}
    >
    <Pressable 
        id={typeId}
        justifyContent='flex-end'
                    height='100%'
            w='100%' 
        // Platform specific--------------
        android_ripple={{ color: color.overlay, }}
        _pressed={{
            opacity: oniOS ? .7 : .4,
        }}
        onPress={onPress}
        borderRadius={bR.lg}
        shadow={ oniOS ? glow : droidGlow}
        
    >
        <Image
        borderRadius={bR.lg}
            key={`${typeId} - ${typeText}`}
            source={source}
            resizeMode='cover'
            alt={typeId}
            alignSelf='center'
            position='absolute'
            bottom='0'
            height='100%'
            w='100%'          
        />
 
            <Text
                key={typeText} 
                textAlign='center' 
                fontFamily={fonts.subHead} 
                fontSize='36' 
                color={color.yellow} 
            >
                {typeText}
            </Text>
                 
        </Pressable>
        </View>
  );
};

export default CoralTypesLayout;