import React, { memo } from 'react';

//Packages
import { useTheme, Pressable, Text, View , Image } from 'native-base';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withSpring } from 'react-native-reanimated';

/*---SelectedTypeLayout-----
    Layout for the coral data modals that will be displayed using a FlatList.
    Props are passed to be used in current screen. Pressed animation utilizing 
    the shared value. Lastly memoize the component to help with rerenders.
*/ 

const SelectedTypeLayout = ({viewH, viewW, pressH, pressW, id, imageSrc, typeStr, nameStr, onPress}) => {
     const { color, fonts, bR } = useTheme();
     const buttonScaled = useSharedValue(1);

     const animatedStyle = useAnimatedStyle(() => {
         return {
         transform: [{ scale: buttonScaled.value },
        //  {   shadowColor: buttonScaled.value ? '#f20079' : '#000',}
         ]
         };
     });
 
     const animatedPress = () => {
         buttonScaled.value = withSequence(
             withTiming(1),
             withSpring(.9),
              withTiming(.9), 
              withSpring(1)
         );
     };


  return (
        <Animated.View 
            style={[{ 
                flex: 1, 
                marginVertical: 16, 
                width: viewW, 
                height: viewH, 
                justifyContent: 'center', 
                alignSelf:'center',
                borderRadius: bR.xl,
                shadowColor: '#f20079',
                elevation: 6,
                shadowOpacity: 0.6,
                shadowRadius: 8,
                shadowOffset: {
                    height: 8,
                    width: 4,
                },
              },
              animatedStyle
            ]}
        >
            <Pressable 
                key={id}
                id={id}
                h={pressH} 
                w={pressW}
                alignSelf='center'
                justifyContent='center'
                flexDirection='row'
                _pressed={{
                    opacity: .7,  
                }}
                onPress={onPress}
                 onPressIn={() => { animatedPress() }}
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
        </Animated.View>
    );
};

export default memo(SelectedTypeLayout);
