import React from 'react'

import { useTheme, Button } from 'native-base'

export const LoadingButton = ({ isLoading, isDisabled, _spinner, onPress, m, mx, my, mb, pb, py, px, w, text }) => {
     const { color, contain, fonts, letSpace, screens, weights, bR, shadowAndroid } = useTheme();
    return (
        <Button
            isLoading={isLoading}
            isDisabled={isDisabled}
            _spinner={_spinner}
            onPress={onPress}
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