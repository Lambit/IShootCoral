import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme, Box, Pressable, Text, View , Image, VStack} from 'native-base';
import { windowWidth, windowHeight, oniOS } from '../../utilities/constants';
import { TYPES }from '../../assets/data/static-data';

// styles for menus screen on tab nav

function TypesLayout() {
        const { color, contain, fill, fonts, letSpace, screens, bR, glow } = useTheme();
        const navigation = useNavigation();
        const route = useRoute();

    return (
        <VStack space={24} key={'some-type'}>
            {TYPES.map((t) => ( <Pressable 
                key={t.id}
                id={t.id}
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
                onPress={() => {
                    // console.log(t.id)
                    navigation.navigate('Sps'), {
                    typeId: t.id,
                    coralType: t.type,
                    }}
                }
            >
                <Image
                    source={t.image}
                    resizeMode='cover'
                    alt={t.type}
                    alignSelf='center'
                    position='absolute'
                    bottom='0'
                    height={(windowHeight / 2 / 2 - 40)}
                    w={windowWidth - 40}
                    borderRadius={bR.lg}
                />

            
                    <Text zIndex={2} textAlign='left' fontFamily={fonts.subHead} fontSize='36' color={color.yellow} >{t.type}</Text>
             

                
            </Pressable>
            ))}
    </VStack>
    );
};

export default TypesLayout;
