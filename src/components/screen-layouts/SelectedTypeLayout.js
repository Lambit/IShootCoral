import React from 'react';

//Components& Constants
import { windowWidth, windowHeight, oniOS } from '../../utilities/constants';

//Packages
import { useTheme, Pressable, Text, View , Image } from 'native-base';

/*---SelectedTypeLayout-----
    Layout for the coral data modals that will be displayed using a FlatList.
    Props are passed to be used in current screen.
*/ 

export default function SelectedTypeLayout({ 
    viewH, viewW, pressH, pressW, id, imageSrc, typeStr, nameStr, onPress 
}) {
     const { color, fonts, bR, glow, droidGlow } = useTheme();
  return (
    <View 
        flex={1}
        h={viewH} 
        w={viewW}
        // h={(windowHeight / 2 / 2 - 30)} 
        // w={windowWidth - 30}
        my='6'
        justifyContent='center'
        alignSelf='center'
        shadow={oniOS ? glow : droidGlow}
        borderRadius={bR.xl}
    >
    <Pressable 
        key={id}
        id={id}
        h={pressH} 
        w={pressW}
        // height={(windowHeight / 2 / 2 - 40)} 
        // w={windowWidth - 40}
        alignSelf='center'
        justifyContent='center'
        flexDirection='row'
        _pressed={{
            opacity: .7,  
        }}
        onPress={onPress}
    >
        {/*---------------------------------------------------
          *  Image taking whole of the pressable container  *
        ----------------------------------------------------*/}
        <Image 
            source={imageSrc}
            h='100%'
            w='100%'
            resizeMode='cover'
            alt={typeStr}
            alignSelf='center'
            borderWidth='1'
            borderColor={color.dPurple}
            borderRadius={bR.lg}
        />
        {/*--------------------------
          *  IShoot Coral's Logo  *
        --------------------------*/}
        <Image
            maxH='50'
            maxWidth='50'
            position='absolute'
            right={4}
            top={2}
            alt='logo'
            opacity={.4}
            source={require('../../assets/images/logo/ishoot-logo.png')}
        />

            {/*--------------------------
              *  Displayed Corals name  *
            ----------------------------*/}
            <View 
                px='4'
                position='absolute' 
                bottom='0'
            >
                <Text  textAlign="left" fontFamily={fonts.subHead} fontSize='24' color={color.yellow} >
                    {nameStr}
                </Text>
            </View>
                
    </Pressable>
    </View>
    );
};
