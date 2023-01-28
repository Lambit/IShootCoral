import React from 'react';
import { Image } from 'react-native';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import { CircleButton } from '../../components/buttons/buttons';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

//Packages
import { useTheme, View, VStack } from 'native-base';

/*----CoralModal-------
    Screen to view the corals full size Image, displayed as a transparent modal.
    Using the built in goBack() function from React Navigation, to go back to 
    previous screen and close modal. Header is not shown.
*/ 

const CoralModal = ({navigation, route,}) => {
    //---theme and params, to display specific coral selected------
    const { color, bR } = useTheme();
    const { coralArr, coralId, coralName, coralImg } = route.params;
   const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

const pinchGesture = Gesture.Pinch()
  .onUpdate((e) => {
    scale.value = savedScale.value * e.scale;
  })
  .onEnd(() => {
    savedScale.value = scale.value;
  });

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

    //----go back on button press-----
    const goBackBtn = () => {
        navigation.goBack();
    };

  return (
    /* -----------------------------------------------
     *   View set to dynamically fit screen types.   *
    ------------------------------------------------ */
    <GestureDetector gesture={pinchGesture}>
    <Animated.View 
        flex={1} 
        p='2' 
        w={windowWidth}
        h={windowHeight}
        justifyContent='center' 
        alignItems='center' 
        bg={color.overlay}
        style={{ animatedStyle}}
    >
      
        <VStack flex={1} w='100%' h='80%'>
            {/*------------------------
              * Close/goBack button   *
            --------------------------*/}
            <CircleButton 
              zIndex={1}
              position='absolute'
              top={12}
              ml='6'
              icon='x' 
              size={22} 
              bg={color.pink} 
              color={color.aqua} 
              borderColor={color.dPurple} 
              onPress={goBackBtn}
            />
            {/*-----------------------------------------------
              * Image dynamically displayed to fit parent.  *
            ------------------------------------------------*/}
            
            <Image 
              id={coralId}
              source={coralImg}
              alt={ coralName || coralId }
              resizeMode='cover'
              alignSelf='center'
              position='absolute'
              bottom={10} 
              top={10}
              height={windowHeight - 100}
              w={windowWidth - 40}
              borderRadius={bR.lg}
              // style={[{ 
              //   resizeMode: 'cover',
              //   alignSelf: 'center',
              //   position: 'absolute', 
              //   bottom: 10,
              //   top: 10,
              //   height: windowHeight - 100,
              //   width: windowWidth - 40,
              //   borderRadius: bR.lg, 
              //   }, animatedStyle]}
            />
            
          
        </VStack>
    </Animated.View>
    </GestureDetector>
  );
};

export default CoralModal;