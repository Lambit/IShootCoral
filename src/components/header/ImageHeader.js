import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import Overlay from '../overlay/Overlay';
import { PageHeader }from './Headings';

//Packages
import { View, Image } from 'native-base';

/*----ImageHeader-------
    Used on Selected Coral/Gallery screens. Display and image and heading text.
*/

const ImageHeader = ({ source, textP, w, size }) => {
  return (
    <View width={windowWidth} height={windowHeight / 6}>
      {/*-----------------------*
        *   Image               *
        *-----------------------*/}
      <Image 
        width='100%'
        height='100%'
        position='absolute'
        top={0}
        right={0}
        left={0}
        alt='nem'
        source={source}
      />
        {/*-----------------------*
          *   Overlay             *
          *-----------------------*/}
        <Overlay />
        
        {/*-----------------------*
          *   Heading             *
          *-----------------------*/}
        <View position='absolute' w='100%' bottom='6'>
          <PageHeader text={textP} w={w} size={size} />
        </View>
    </View>
  );
};

export default ImageHeader;