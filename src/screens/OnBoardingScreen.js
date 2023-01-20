import React from 'react';
import { windowHeight, windowWidth } from '../utilities/constants';
import { HStack, useTheme, Text, VStack, View, Box } from 'native-base';
import Svg, { Path, Image, ClipPath, Ellipse, G, Line, Rect, Use, Symbol, Circle, Defs,  
} from 'react-native-svg';
import { LoadingButton } from '../components/buttons/buttons';




function OnBoardingScreen({navigation, route,}) {
  const { color, contain, fonts, letSpace, screens, bR, shadowAndroid } = useTheme();

  const toHome = () => { 
    navigation.navigate('HomeStack')
  };

  return (
    <View style={contain} flexDir='row' w={windowWidth} h={windowHeight} p='8'>
      <Svg height={windowHeight} width={windowWidth} 
      style={{position: 'absolute', top: 0}}
      >
        <ClipPath id='clipId' >
          <Ellipse cx={windowWidth / 4} rx={windowWidth - 80 } ry={windowHeight / 2  } />
        </ClipPath>
            
        <Ellipse  cx={windowWidth / 20 } rx={windowWidth - 180} ry={windowHeight / 2  - 60} />
          <G rotation="80" origin="140, 120">
            <Image
              href={require('../assets/images/common/mal-no-bg.png')}
              height='340'
              width={windowWidth }
              y='40'
              x='-20'
              zIndex='2'
               />
          </G>
      </Svg>


          <VStack flex={1} space={2} mt='6' alignItems='center' justifyContent='center'>
            <HStack  space={4} alignItems='center' shadow={shadowAndroid}>

              <Text p='4' fontFamily={fonts.head} fontSize='42' color={color.yellow}
                onPress={() => {navigation.navigate('Gallery')}} 
              > 
                I Shoot Coral
              </Text>
            </HStack>

               <LoadingButton w='100%' onPress={toHome} text='Okay!'/>
            </VStack>

            <Box 
              size={windowWidth - 100}
              position='absolute' 
              bottom={windowHeight - windowHeight - 100} 
              right={windowWidth - windowWidth - 100} 
              // bg={color.aqua}  
              rounded='full' 
            >
            <Svg height='90%' width='90%'>
              <G rotation="280" origin="120, 140">
              <Image 
              href={require('../assets/images/common/hrs.png')}
              height='300'
              width={windowWidth}
              // y='40'
              x='-50'
              zIndex='2'
              // style={}
             

              />
               </G>
            </Svg>
            </Box>
            {/* <Box 
              size={windowWidth - 200}
              position='absolute' 
                 bottom={windowHeight - windowHeight - 50} 
              right={windowWidth - windowWidth - 50} 
              bg='#f76d61' 
              rounded='full' 
            /> */}

    </View>
  );
}

export default OnBoardingScreen;