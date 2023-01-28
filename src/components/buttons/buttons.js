import React from 'react'

//Packages
import { useTheme, Button, Pressable } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';


/*---------------------------------
 *   Loading Button               *
----------------------------------*/ 
export const LoadingButton = ({ 
    //loading state/activity
    isLoading, isDisabled, _spinner, onPress, onPressIn, 
    //style/text displayed
    m, mx, my, mb, pb, py, px, w, text 
    }) => {
     const { color, weights, bR } = useTheme();
    return (
        <Button
            isLoading={isLoading}
            isDisabled={isDisabled}
            _spinner={_spinner}
            onPress={onPress}
            onPressIn={onPressIn}
            m={m}
            mx={mx}
            my={my}
            mb={mb}
            pb={pb}
            py={py}
            px={px}
            w={w}
            size='lg'
            bg={color.dPurple}
            borderRadius={bR.pill}
            shadow={8}
            spinnerPlacement='end'
            isLoadingText='Loading'
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