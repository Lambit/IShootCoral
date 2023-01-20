import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { StatusBar, Alert, SafeAreaView } from 'react-native';

import SelectedTypeLayout from '../components/screen-layouts/SelectedTypeLayout';

// Packages
import { Box, FlatList, useTheme, Text, HStack, Image } from 'native-base';
import { TYPES, SPS, LPS, ZOA } from '../assets/data/static-data';

export default function ZoaScreen ({ navigation, route }) {
        const { color, contain, fill, fonts, letSpace, screens, bR, glow } = useTheme();
    const [types, setTypes] = useState([]);

    //-----------------------Render for flatlist of ----------------------------
    function renderItem({ item: coral }) {
          
   

        const showModal = () => {
            navigation.navigate('CoralModal', {
                typeArr: types,
                coralId: coral.id,
            });
        };

        return (
            <SelectedTypeLayout 
                {...coral}
                id={coral.id}
                imageSrc={coral.image}
                nameStr={coral.name}
             />

        );  
            
    };

    //    if (isLoading) {
    //     return (
    //         <LoadingScreen />
    //     );
    // };

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: color.black, }}>
                
                <FlatList
                // numColumns={2}
                
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ backgroundColor: color.black, zIndex: 8 }}
                    scrollEventThrottle={16}
                    decelerationRate='normal'
                    initialNumToRender={4}
                    data={ZOA}
                    // extraData={renderMealHead}
                    renderItem={renderItem}
                    keyExtractor={(coral, indx) => `${coral.id}-${indx}`}
                    ListHeaderComponent={
                       
                        <HStack  space={4} alignItems='center' >
                            {/* <Image alignSelf='center' h='100' w='100' alt='name' source={('../assets/image/common/HORS-common.jpeg')} /> */}

                            <Text p='4' fontFamily={fonts.head} fontSize='42' color={color.yellow}
                                onPress={() => {navigation.navigate('Gallery')}} 
                                > 
                                Zoas
                            </Text>
                        </HStack>
                    }
                    
                />
            </SafeAreaView>
  );
};
