import React from 'react';

//Packages
import { useTheme, Text, Image, VStack } from 'native-base';

/*---PageHeader-----
    Header Text and styles to app screens, text is a prop passed down to display
    the current screens name.
*/ 
export const PageHeader = ({ text, size, w }) => {
    const { color, fonts } = useTheme();
    return (
        <VStack w='100%' >
            <Text 
                px='6' 
                fontFamily={fonts.head} 
                fontSize='36' 
                color={color.yellow}
            > 
                {text}
            </Text>

            <Image 
              size={size}
              width={w}
              position='absolute' 
              resizeMode='cover' 
              alt='marker'
              source={require('../../assets/images/logo/marker.png')}
            />
        </VStack>
    );
};


export const SubHeadTitle = ({ text, size, w }) => {
    const { color, fonts } = useTheme();
    return (
        <VStack w='100%' >
            <Text 
                px='6' 
                fontFamily={fonts.subHead} 
                fontSize='36' 
                color={color.pink}
            > 
                {text}
            </Text>

            <Image 
              size={size}
              width={w}
              bottom={-16}
              position='absolute' 
              resizeMode='cover' 
              alt='marker'
              source={require('../../assets/images/logo/marker-pink.png')}
            />
        </VStack>
    );
};