import React from 'react'

//Packages
import { useTheme, Button, Pressable , Text, View } from 'native-base';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withRepeat, withTiming, withSpring } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

/*---------------------------------
 *   Loading Button               *
----------------------------------*/ 
export const LoadingButton = ({ isLoading, isDisabled, _spinner, onPress, mx, my, py, px, text }) => {
    const { color, weights, bR } = useTheme();
    const buttonScaled = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
        transform: [{ scale: buttonScaled.value }]
        };
    });

    const animatedPress = () => {
        buttonScaled.value = withSequence(withSpring(.9), withSpring(1))
    };

    return (
        <Animated.View style={[animatedStyle]} >
            <Button
                isLoading={isLoading}
                isDisabled={isDisabled}
                _spinner={_spinner}
                onPress={onPress}
                mx={mx}
                my={my}
                py={py}
                px={px}
                size='lg'
                bg={color.dPurple}
                borderRadius={bR.pill}
                spinnerPlacement='end'
                isLoadingText='Loading'
                onPressIn={() => { animatedPress() }}
                _pressed={{
                    bg: color.pink,
                    opacity: .5
                }}
                _loading={{
                    bg: color.red,
                    opacity: .9,
                }}
                _text={{
                    fontSize: 'lg',
                    fontWeight: weights.lg,
                }}
            >
                {text}
            </Button>
        </Animated.View>
    );
};

/*---------------------------------
 *   Circle Button               *
 --------------------------------*/ 
export const CircleButton = ({ 
    // pressable
    mb, mt, ml, top, position, zIndex, bg, borderColor, onPress,
    // icon
    icon, color, size
    }) => {
    return (
        <Pressable
            p='4'
            alignSelf='flex-start'
            rounded='full'
            flexDirection='row'
            opacity='.6'
            borderWidth='1'
            borderColor={borderColor}
            zIndex={zIndex}
            position={position}
            top={top}
            mb={mb}
            mt={mt}
            ml={ml}
            bg={bg}
            shadow={4}
            onPress={onPress}
            _pressed={{
                opacity: '.7',
                transform: [{ scale: .9 }],
            }}
        >

            <Feather name={icon} size={size} color={color} />

        </Pressable>
    );
};


/*---------------------------------*
 *   Email Me Button               *
 ----------------------------------*/ 
export const EmailMeButton = ({ onPress }) => {
    const { color, fonts, bR, glow } = useTheme();
    return (
        <Pressable 
            mt='4' 
            p='2' 
            borderRadius={bR.pill}  
            onPress={onPress}
            _pressed={{ 
              opacity: .5,
              backgroundColor: color.overlay,
              borderColor: color.yellow,
              borderWidth: 1
            }}
        >
            <View  p='2' shadow={glow}>
                <Text  
                  color={color.aqua} 
                  fontFamily={fonts.head} 
                  fontSize='36' 
                  textAlign='center' 
                >
                    Email Me!
                </Text>
            </View>
        </Pressable> 
    );
};