import React from 'react';
import { appTheme } from '../theme/theme';

// Components & Constants
import { windowWidth, windowHeight } from '../utilities/constants';

//Packages
import { View } from 'native-base'
import Animated, { withDelay, useAnimatedStyle, withSequence, withRepeat, withTiming, Easing } from 'react-native-reanimated';


const LoadingScreen = () => {
    const { color, fonts, contain, loadingGlow } = appTheme;

    {/*----------------------------*
      *  OGFish Animated Styles    *
      *----------------------------*/}
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [ 
        {
             rotate: '46deg' 
        },
        {
            translateX: 
                withRepeat(
                    withSequence(
                        withTiming(-140),
                        withDelay(1000, withTiming(-60, 
                            {  
                                easing: Easing.linear(Easing.in),  
                            }
                        )),
                        withDelay(500, withTiming(-140)),
                        withDelay(1200, withTiming(-20,))
                    ),
                -1, 
                true)
        }
      ]
    }));

    {/*----------------------------*
      *  PBFish Animated Styles    *
      *----------------------------*/}
    const pinkBlueFishStyles = useAnimatedStyle(() => ({
      transform: [
        { 
            rotate: '-46deg' 
        },
        {
            translateX: 
                withRepeat(
                    withSequence(
                        withTiming(-400),
                        withDelay(2500, withTiming(-200)),
                        withDelay(500, withTiming(-20, 
                            { 
                                duration: 1000,
                                easing: Easing.linear(Easing.bounce) 
                            }
                        )),
                        withTiming(-140, {duration: 500})
                    ),
                -1, 
                true)
        }
      ]
    }));

    {/*----------------------------*
      *  Logo Animated Styles      *
      *----------------------------*/}
    const logoStyles = useAnimatedStyle(() => ({
        opacity: 
            withRepeat(
                withSequence(
                    withDelay(2500, withTiming(1)),
                    withDelay(1000, withTiming(.28)),
                    withDelay(100, withTiming(0))
                ),
            -1)
    }));



  return (
    <View 
        style={contain} 
        w={windowWidth}
        h={windowHeight}
        justifyContent='center'
        alignItems='center'    
    >
        <View
            width='100%'
            h='60%'
            position='absolute'
            top={-100}
            left={-150}
        >
            {/*-------------*
              *  OGFish     *
              *-------------*/}
            <Animated.Image 
                resizeMethod='resize'
                source={require('../assets/images/fish/g-o-fish.png')} 
                accessibilityLabel='Fish'
                style={[
                    {
                        height: '100%',
                        width: '100%',
                    }, 
                    animatedStyle]
                }
              />
        </View>

        <View 
            style={[
                {
                    width: '80%', 
                    height: '50%', 
                    flexDirection: 'row-reverse', 
                    alignItems: 'center'
                }, 
                loadingGlow]
            }
        >

        {/*----------------------------*
          *  Logo                      *
          *----------------------------*/}
        <Animated.Image 
            resizeMethod='resize'
            source={require('../assets/images/logo/mask-ink.png')} 
            accessibilityLabel='Fish'
            style={[
                {
                    height: '100%',
                    width: '100%',
                   position: 'absolute',
                   alignSelf: 'center'
                }, 
                logoStyles, loadingGlow]
            }
        />

            <Animated.Text
                style={[
                    {
                        textAlign: 'center', 
                        fontFamily: fonts.subHead, 
                        fontSize: 68, 
                        color: color.black,
                        marginTop: 68,
                    }, loadingGlow,  logoStyles]
                }
             >
                Loading...
             </Animated.Text>
        </View>

        <View
            width='100%'
            h='60%'
            position='absolute'
            bottom={-120}
            right={-100}
        >

        {/*----------------------------*
          *  PBFish                    *
          *----------------------------*/}
        <Animated.Image 
            resizeMethod='resize'
            source={require('../assets/images/fish/p-b-fish.png')} 
            accessibilityLabel='Fish'
            style={[
                { height: '100%', width: '100%'}, 
                pinkBlueFishStyles]
            }
        />
           
        </View>
    </View>
  );
};

export default LoadingScreen;