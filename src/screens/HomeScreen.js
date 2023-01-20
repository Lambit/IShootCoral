import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../utilities/constants';
import ImageHeader from '../components/img-header/ImageHeader';
import { HStack, useTheme, Text, VStack, ScaleFade, ScrollView, View, Image, } from 'native-base';
import { TYPES } from '../assets/data/static-data';
import TypesLayout from '../components/screen-layouts/TypesLayout';
import CoralTypesLayout from '../components/home-screen/CoralTypesLayout';

export default function HomeScreen({navigation, route,}) {
    const { color, contain, fill, fonts, letSpace, screens, bR, shadowAndroid } = useTheme();

  return (
    <ScrollView style={{flex: 1, backgroundColor: color.black}}>
      <View style={{flex: 1, backgroundColor: color.black}}>
 
        <ImageHeader 
          source={require('../assets/images/common/nem-header.jpg')}
          text='I Shoot Coral'
        />

        <VStack key={'types'} space={100}  mt='250' alignSelf="center">
          {TYPES.map((t) => (
            <CoralTypesLayout 
              typeId={t.id}  
              source={t.image} 
              typeText={t.type} 
              onPress={() => {
                      // console.log(t.id)
                navigation.navigate(t.type), {
                  typeId: t.id,
                  coralType: t.type,
                }}
              }
            />
          ))}
        </VStack>
    
      </View>
    </ScrollView>  
  );
};
