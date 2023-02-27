import React from 'react'
import { appTheme } from '../../theme/theme';

//Packages
import { Button, Pressable , Text, View } from 'native-base';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withSpring } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

/*---------------------------------
 *   Loading Button               *
----------------------------------*/ 
export const LoadingButton = ({ isLoading, isDisabled, _spinner, onPress, mx, my, py, px, text }) => {
    const { color, weights, bR } = appTheme;
    const buttonScaled = useSharedValue(1);

    /*-------Reanimated Styles-----------*/
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { 
                    scale: buttonScaled.value 
                }
            ]
        };
    });

    /*-------onPress change reanimated's sharedValue-----------*/
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
                testID='loadingButton'
                accessibilityRole='button'
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
            borderColor={borderColor}
            zIndex={zIndex}
            position={position}
            top={top}
            mb={mb}
            mt={mt}
            ml={ml}
            bg={bg}
            onPress={onPress}
            testID='circleButton'
            accessibilityRole='button'
            p='4'
            alignSelf='flex-start'
            rounded='full'
            flexDirection='row'
            opacity='.6'
            borderWidth='1'
            shadow={4}
            _pressed={{
                opacity: '.7',
                transform: [{ scale: .9 }],
            }}
        >

            <Feather 
                name={icon} 
                size={size} 
                color={color}
                testID='circleButtonIcon'
            />

        </Pressable>
    );
};


/*---------------------------------*
 *   Email Me Button               *
 ----------------------------------*/ 
export const EmailMeButton = ({ onPress }) => {
    const { color, fonts, bR, glow } = appTheme;
    return (
        <Pressable 
            onPress={onPress}
            mt='4' 
            p='2' 
            testID='emailMeButton'
            accessibilityRole='button'
            borderRadius={bR.pill}  
            _pressed={{ 
              opacity: .5,
              backgroundColor: color.overlay,
              borderColor: color.yellow,
              borderWidth: 1
            }}
        >
            <View p='2' shadow={glow}>
                <Text
                    testID='emailMeButtonText'
                    accessibilityRole='text'  
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