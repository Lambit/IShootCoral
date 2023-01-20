import React from 'react'
import { windowHeight, windowWidth } from '../utilities/constants';
import { HStack, useTheme, Text, VStack, Button, View, } from 'native-base';
import Svg, { Path, Image, ClipPath, Ellipse, G, Line, Rect, Use, Symbol, Circle, Defs,  } from 'react-native-svg';

export default function AboutScreen({navigation, route,}) {
      const { color, contain, fonts, letSpace, screens, bR, shadowAndroid } = useTheme();

//   const toHome = () => { 
//     navigation.navigate('HomeStack')
//   };
  return (
    <View style={contain}  p='8'>
      <Text fontFamily={fonts.head} color={color.yellow}>About</Text>
    </View>
  );
};