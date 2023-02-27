import React, { useState } from 'react';
import { appTheme } from '../../theme/theme';

//Components & Constants
import { windowWidth } from '../../utilities/constants';
import { InkSplat, RainbowFish } from './HomeImages';
import LoadingScreen from '../LoadingScreen';
import { PageHeader } from '../../components/header/Headings';
import HomeFavoritesLayout from '../../components/screen-layouts/HomeFavoritesLayout';
import { TYPES } from '../../assets/data/static-data';

//Packages
import { Text, VStack, View } from 'native-base';
import Animated, { LightSpeedInRight } from 'react-native-reanimated';

/*----HomeScreen-------
    HomeScreen
*/ 

export default function HomeScreen({navigation, route,}) {
    const { color, fonts, contain } = appTheme;
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
      return (
          <LoadingScreen />
      );
    };

  return (
    <View style={contain}>

      {/*--------------------
        *  InkSplat Image   *
      ----------------------*/}
      <Animated.View 
        style={{zIndex: -1}} 
        entering={LightSpeedInRight.delay(1000)}
      >
        <InkSplat />
      </Animated.View>

        {/*--------------------
          *  ScrollView       *
        ----------------------*/}
        <Animated.ScrollView 
          style={{ 
            flex: 1, 
            zIndex: 1, 
            width: windowWidth, 
            height: '100%' 
          }}
        >
          <View mt='10' mb='2' mx='10' >         
            <Text color={color.pink} fontFamily={fonts.subHead} fontSize='36' textAlign='center' >
              Just a fellow hobbyist, checkout the catalog, hit me up if your interested.
            </Text>
          </View>

            <VStack alignSelf="center" mb='20' pt='2' pb='40'>
              <View my='6' alignSelf="center">
                <PageHeader text='Favorites' size='md' w={180}/>
              </View>

                {/*--------------------*
                  *  Mapped Data       *
                -----------------------*/}
                {TYPES.map((t) => (
                  <HomeFavoritesLayout 
                    key={t.id}
                    typeId={t.id}  
                    source={t.image} 
                    typeText={t.type} 
                    onPress={() => {
                      navigation.navigate(t.type), {
                        typeId: t.id,
                        coralType: t.type,
                      }}
                    }
                  />
                ))}  
            </VStack>

            {/*-----------------------
             *  RainbowFish Image   *
            ------------------------*/}
             <RainbowFish />
        </Animated.ScrollView>
    </View> 
  );
};
