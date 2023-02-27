import React from 'react';
import { appTheme } from '../../theme/theme';

//Packages
import { useTheme, View } from 'native-base';

/*-Overlay
    Dampen down image to make text more prominent.
----*/ 

export default function Overlay() {
    const { color } = appTheme;
  return (
    <View
        position='absolute'
        w='100%'
        h='100%' 
        zIndex={3}
        bg={color.overlay}
    />
  );
};