import React from 'react';

//Components& Constants
import { windowWidth, windowHeight, oniOS } from '../../utilities/constants';

//Packages
import { useTheme, Pressable, Image } from 'native-base';

/*---GalleryLayout-----
    Layout for the coral data modals that will be displayed using a FlatList.
    Props are passed to be used by current screen.
*/ 

const GalleryLayout = ({ id, imageSrc, typeStr, onPress }) => {
     const { color, bR, glow } = useTheme();
  return (
    <Pressable 
      key={id}
      id={id}
      my='6'
      justifyContent='center'
      alignSelf='center'
      flexDirection='row'
      shadow={glow}
      // Platform specific--------------
      android_ripple={{ color: color.overlay, }}
      borderRadius={ oniOS ? bR.lg : 0}
      _pressed={{
          opacity: oniOS ? .7 : 1,
          
      }}
      onPress={onPress}
      borderWidth='.5'
      borderColor={color.dPurple}
    >
      {/*---------------------------------------------------
        *  Image taking whole of the pressable container  *
      ----------------------------------------------------*/}
      <Image zIndex={-8}
          source={imageSrc}
          resizeMode='cover'
          alt={typeStr}
          alignSelf='center'
          height={(windowHeight / 2 / 2 - 40)}
          w={(windowWidth / 2 - 20)}
          borderRadius={bR.lg}
      />
      {/*--------------------------
        *  IShoot Coral's Logo  *
      --------------------------*/}
      <Image
          maxH='60'
          maxWidth='60'
          position='absolute'
          right={4}
          alt='logo'
          zIndex={0}
          source={require('../../assets/images/logo/ishoot-logo.png')}
      />                
    </Pressable>
  );
};

export default GalleryLayout;