import React from 'react';
import { appTheme } from '../../theme/theme';
import { windowWidth, windowHeight, oniOS } from '../../utilities/constants';

import { Pressable, Text, Image, View } from 'native-base';

const HomeFavoritesLayout = ({typeId, onPress, source, typeText}) => {
    const { color, fonts, bR, glow, droidGlow } = appTheme;
  return (
    <View
        my='6'
        overflow={oniOS ? 'visible' : 'hidden'}
        w={windowWidth - 40} 
        height={(windowHeight / 2 / 2 - 40)}
        borderRadius={bR.lg} 
        borderWidth='.5'
        borderColor={color.lPurple}
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

export default HomeFavoritesLayout;