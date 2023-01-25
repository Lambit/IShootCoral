import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../utilities/constants';
import ImageHeader from '../components/header/ImageHeader';
import CoralTypesLayout from '../components/home-screen/CoralTypesLayout';
import { TYPES } from '../assets/data/static-data';

//Packages
import { useTheme, Text, VStack, ScrollView, View } from 'native-base';

/*----HomeScreen-------
    HomeScreen
*/ 

export default function HomeScreen({navigation, route,}) {
    const { color, fonts } = useTheme();

  return (
    <ScrollView style={{flex: 1, backgroundColor: color.black}}>
      
 
        <ImageHeader 
          source={require('../assets/images/common/nem-header.jpg')}
          text='I Shoot Coral'
          textColor={color.yellow}
        />

        <View my='20' mx='10'>
          <Text color={color.yellow} fontFamily={fonts.head} fontSize='24' >
            Time To Really
          </Text>
          <Text color={color.dPurple} fontFamily={fonts.head} fontSize='24' textAlign='right' >
            See Your Tank
          </Text>
          <Text mt='10' color={color.pink} fontFamily={fonts.subHead} fontSize='18' textAlign='center' >
            Just a fellow hobbyist taking pictures of coral to witness the beauty. Checkout the catalog, hit me up if your interested.
          </Text>
        </View>
     

        <VStack space={100}  alignSelf="center">

          <Text color={color.yellow} fontFamily={fonts.head} fontSize='36' textAlign='center'>
            Varieties
          </Text>

          {TYPES.map((t) => (
            <CoralTypesLayout 
              key={t.id}
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
    
      
    </ScrollView>  
  );
};
