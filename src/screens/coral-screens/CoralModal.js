import React, { useState } from 'react';
import { appTheme } from '../../theme/theme';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import { CircleButton } from '../../components/buttons/buttons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

//Packages
import { Pressable } from 'native-base';

/*----CoralModal-------
    Screen to view the corals full size Image, displayed as a transparent modal.
    Using the built in goBack() function from React Navigation, to go back to 
    previous screen and close modal. Header is not shown.
*/ 

const CoralModal = ({navigation, route,}) => {
    //---theme and params, to display specific coral selected------
    const { color, fill } = appTheme;
    const { coralId, coralName, coralImg } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    
    //----go back on button press-----
    const goBackBtn = () => {
        navigation.goBack();
    };

    const offset = useSharedValue({ x: 0, y: 0 });
    const start = useSharedValue({ x: 0, y: 0 });
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);

    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: offset.value.x },
          { translateY: offset.value.y },
          { scale: scale.value },
        ],
      };
    });

  const dragGesture = Gesture.Pan()
  .averageTouches(true)
  .enableTrackpadTwoFingerGesture(true)
  .shouldCancelWhenOutside(true)
  .enabled(scale)
  .onUpdate((e) => {
    offset.value = {
      x: e.translationX + start.value.x,
      y: e.translationY + start.value.y,
      
    };
    //  console.log(offset.value, 'drag')
  })
  .onEnd((e) => {
    start.value = {
      x: offset.value.x,
      y: offset.value.y,
    };
    // console.log(e, 'end')
  });


  const zoomGesture = Gesture.Pinch()
  .onUpdate((event) => {
    scale.value = savedScale.value * event.scale;
    //  console.log(event, 'pinch')
  })
  .onEnd(() => {
    savedScale.value = scale.value;
  });


  const composed = Gesture.Simultaneous(
    dragGesture,
    Gesture.Simultaneous(zoomGesture)
  );

  return (
    /* -----------------------------------------------
     *   View set to dynamically fit screen types.   *
    ------------------------------------------------ */
    <Animated.View 
      style={{ 
        flex: 1, 
        padding: 2, 
        width: windowWidth, 
        height: windowHeight, 
        justifyContent: 'center', 
        alignItems:'center',
        bg:color.overlay
      }}
    >
      <Pressable flex={1} style={fill}bg={color.overlay} onPress={goBackBtn}>
        {/*------------------------
          * Close/goBack button   *
        --------------------------*/}
        <CircleButton 
          zIndex={1}
          position='absolute'
          top={16}
          ml='10'
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
          <GestureDetector gesture={composed}>
            <Animated.Image 
              id={coralId}
              source={coralImg}
              alt={ coralName || coralId }
              resizeMode='contain'
              style={[{ 
                alignSelf: 'center',
                // position: 'absolute', 
                // bottom: 10,
                // top: 40,
                // height: windowHeight - 100,
                // width: windowWidth - 40,
                // borderRadius: bR.lg, 
                }, animatedStyles
              ]}
            />
          </GestureDetector>  
       </Pressable>
    </Animated.View>
  );
};

export default CoralModal;