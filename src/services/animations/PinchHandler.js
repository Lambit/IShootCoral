import React from 'react';
import { PanResponder } from 'react-native';

//Components, & Constants
import { windowWidth, windowHeight } from '../../utilities/constants';
import { useTheme } from 'native-base';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat, withSequence, } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const panRes = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderMove: (e, g) => {

  },
  onPanResponderRelease: () => {}
})





// -------------menu layouts-------------------------------------------
export const TabMenusAnimations = ({ children }) => {
    const sharedVal = useSharedValue(false);


    const handleEvent = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            sharedVal.value = true;
            ctx.x = sharedVal.value
            console.log(event, "start")
            
        },
        onActive: (event, ctx) => {
            sharedVal.value = true;
            console.log(event.state)
            ctx.x = sharedVal.value
                console.log(event, 'active')
            
        },
        onEnd: (event, ctx) => {
            sharedVal.value = false;
            ctx.x = sharedVal.value
            console.log(event, 'end')
          
        },
    });

    const springEvent = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: withSpring(sharedVal.value ? 1 : .9,
                    {
                        stiffness: 160,
                        mass: 6, 
                        damping: 12,
                        restDisplacementThreshold: .001,
                        restSpeedThreshold: .001,
                        overshootClamping: false
        
                        
                    }
                )
            }],
        };
    });

    return (
        <TapGestureHandler
            onGestureEvent={handleEvent}
            cancelsTouchesInView={true}
        >
            <Animated.View style={[styles.viewBox, springEvent]}>
                {children}
            </Animated.View>
        </TapGestureHandler>
    );
};