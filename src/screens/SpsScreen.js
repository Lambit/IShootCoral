import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { StatusBar, Alert, SafeAreaView } from 'react-native';
import { windowHeight, windowWidth } from '../utilities/constants';
import SelectedTypeLayout from '../components/screen-layouts/SelectedTypeLayout';

import { SPS } from '../assets/data/static-data';

import { HStack, useTheme, Text, VStack, Button, View, FlatList } from 'native-base';

function SpsScreen({navigation, route,}) {
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
                    data={SPS}
                    // extraData={renderMealHead}
                    renderItem={renderItem}
                    keyExtractor={(coral, indx) => `${coral.id}-${indx}`}
                    
                />
            </SafeAreaView>
    );
  };
  export default SpsScreen;