import React from 'react';
import { Image } from 'react-native';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';

// Packages
import { useTheme } from 'native-base';
import Animated, { LightSpeedInRight, useAnimatedStyle, withSequence, withRepeat, withTiming, Easing } from 'react-native-reanimated';

{/*-----------------------
  *  RainbowFish Image   *
-------------------------*/}
export const RainbowFeesh = ({ width, height }) => {
    const { color, fonts, contain } = useTheme();
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        // {
        //   translateY: withRepeat(withTiming(-10), -1, true)
        // },
        {
            translateX: withRepeat(withTiming(-20, {duration: 500, easing: Easing.bezier(0.19, 1, 0.22, 1),}), -1, true),
            
        }
      ]
    }));
    // const animatedStyle = useAnimatedStyle(() => ({
    //   transform: [
    //     {
    //       translateY: withRepeat(withTiming(-15), -1, true
    //         // withSequence(
    //         //   withTiming(-15),withTiming(-15)),
    //         //  -1, 
    //         //  true
    //       ),
    //     }
    //   ]
    // }));

  return (
    // <View 
    //   pt='6'
    //   flexDirection='column-reverse'
    //   position='absolute' 
    //   bottom='0'
    //   w='90%' 
    //   h='100%'
    //   zIndex='-1'
    // >
    //       <Animated.View 
    //     style={[{ 
    //         borderWidth: 1, 
    //         borderColor: 'red',
    //       flex: 1, 
    //       padding: 2, 
    //       width: windowWidth, 
    //       height: windowHeight, 
    //       justifyContent: 'center', 
    //       alignItems:'center',
    //       bg:color.overlay
    //       },
    //       animatedStyle
    //     ]}
    // >
      <Animated.Image 
        resizeMethod='resize'
        source={require('../../assets/images/logo/rainbow-fish.png')} 
        accessibilityLabel='Fish'
        style={[
            {
                height: height,
                width: width,
                // alignSelf: 'center'
            }, 
            animatedStyle]
            
        }
      />
    // </Animated.View>
  );
};