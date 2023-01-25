import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../utilities/constants';
import ImageHeader from '../components/header/ImageHeader';

//Packages
import { useTheme, Text, ScrollView, View, } from 'native-base';
import Svg, { 
  Polyline, Path, Image, ClipPath, Ellipse, G, Line, Rect, Use, Symbol, Circle, Defs,  
} from 'react-native-svg';


/*----AboutScreen-------
    AboutScreen
*/ 

export default function AboutScreen({navigation, route,}) {
      const { color, contain, fonts } = useTheme();

  return (
    <View style={contain}>
      <ImageHeader 
        source={require('../assets/images/common/nem-header.jpg')} 
        textColor={color.yellow}
        text='About I.S.C'  
      />
      <ScrollView>
    
      <View mt='10' mx='10'>
          <Text mt='10' color={color.pink} fontFamily={fonts.subHead} fontSize='18' textAlign='center' >
            Hi I'm a huge Stick and zoa head. Not crazy big into Lps but I like a nice colored favia, chalice
            or Bower/Acan. I've recently grew fond of Mushrooms it crazy how unique each one can look.
            I have a 90 gallon SPS dominate tank and a 130 gallon look down zoa/ mushroom system. my weekly routine
            is a 10-20% water change, feed and test 2-3 times a week. I dose two part and run a skimmer...thats it.
            Reef Breeder Photon V2 with T5 supplement on bot tanks.
          </Text>
          <Text mt='10' color={color.pink} fontFamily={fonts.subHead} fontSize='18' textAlign='center' >
            Photography wise im still fairly new. I shoot in RAW with a Nikon D3 and a Tamaron 600 macro lense.
            Shooting under blue lights and water is tough enough so I do some post work in Lightroom. I don't want 
            money if you book me to shoot your tank. I'll do it for free or just toss me some coral! I'm just trying 
            to expand my tank and photography portfolio. Thank you!
          </Text>
        </View>
        </ScrollView>
    </View>

    
  );
};