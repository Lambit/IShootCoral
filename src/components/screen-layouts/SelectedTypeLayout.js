import React from 'react';
import { useTheme, Box, Pressable, Text, View , Image, VStack} from 'native-base';
import { windowWidth, windowHeight, oniOS } from '../../utilities/constants';



export default function SelectedTypeLayout({ id, imageSrc, nameStr, onPress }) {
     const { color, contain, fill, fonts, letSpace, screens, bR, glow } = useTheme();
  return (
            <Pressable 
                key={id}
                id={id}
                my='6'
                justifyContent='center'
                alignSelf='center'
                flexDirection='row'
                // w={windowWidth / 2 -50}
                shadow={glow}
                // Platform specific--------------
                android_ripple={{ color: '#ccc', }}
                borderRadius={ oniOS ? bR.lg : 0}
                _pressed={{
                    opacity: oniOS ? .7 : 1,
                    
                }}
                onPress={onPress}
                borderWidth='.5'
                borderColor={color.dPurple}
            >
                <Image zIndex={-8}
                    source={imageSrc}
                    resizeMode='cover'
                    alt={'typeStr'}
                    alignSelf='center'
                    // position='absolute'
                    // bottom='0'
                    height={(windowHeight / 2 / 2 - 40)}
                    w={windowWidth - 40}
                    borderRadius={bR.lg}
                    // style={{fill}}
                />
                <Image
                    maxH='60'
                    maxWidth='60'
                    position='absolute'
                    right={4}
                    alt='logo'
                    zIndex={0}
                    source={require('../../assets/images/logo/ishoot-logo.png')}
                />

               
                    <View position='absolute' bottom='0' px='4'>

                    <Text  textAlign="left" fontFamily={fonts.subHead} fontSize='24' color={color.yellow} >
                        {nameStr}
                    </Text>
                    </View>
                
            </Pressable>
    );
};