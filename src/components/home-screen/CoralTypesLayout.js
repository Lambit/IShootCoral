import React from 'react';
import { windowWidth, windowHeight, oniOS } from '../../utilities/constants';

import { useTheme, Pressable, Text, Image } from 'native-base';

const CoralTypesLayout = ({typeId, onPress, source, typeText}) => {
    const { color, fonts, bR, glow } = useTheme();
  return (
    <Pressable 
        id={typeId}
        key={typeId}
        my='26'
        justifyContent='center'
        alignSelf='flex-start'
        flexDirection='row'
        w={windowWidth - 40}
        shadow={glow}
        // Platform specific--------------
        android_ripple={{ color: '#ccc', }}
        borderRadius={ oniOS ? bR.lg : 0}
        _pressed={{
            opacity: oniOS ? .7 : 1,
        }}
        onPress={onPress}
    >
        <Image
            key={`${typeId} - ${typeText}`}
            source={source}
            resizeMode='cover'
            alt={typeId}
            alignSelf='center'
            position='absolute'
            bottom='0'
            height={(windowHeight / 2 / 2 - 40)}
            w={windowWidth - 40}
            borderRadius={bR.lg}
        />
 
            <Text 
                key={typeText}
                zIndex={2} 
                textAlign='left' 
                fontFamily={fonts.subHead} 
                fontSize='36' 
                color={color.yellow} 
            >
                {typeText}
            </Text>
                 
        </Pressable>
  );
};

export default CoralTypesLayout;