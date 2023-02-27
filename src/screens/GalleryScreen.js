import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { appTheme } from '../theme/theme';

//Components & Constants
import { windowWidth, windowHeight } from '../utilities/constants';
import SelectedTypeLayout from '../components/screen-layouts/SelectedTypeLayout';
import LoadingScreen from './LoadingScreen';
import { GALLERY } from '../assets/data/static-data';
import ImageHeader from '../components/header/ImageHeader';

//Packages
import { FlatList } from 'native-base';

/*----GalleryScreen-------
    GalleryScreen houses the flat list being displayed with imported data. A function
    renderItem() is created returning the SelectedTypeLayout component where data
    can be passed to the components props. Also a simple nave function is created
    to pass params to the CoralModal screen. This allows the CoralModal component
    to be re used.
*/ 

function GalleryScreen({navigation, route,}) {
    const { color } = appTheme;
    const [isLoading, setIsLoading] = useState(false);

    /*-------------------
     *   Render Item    *
    --------------------*/
    function renderItem({ item: coral }) {

        /*-------------------
         *  Nav Function    *
        --------------------*/  
        const showModal = () => {
            navigation.navigate('Modal', {
                coralArr: GALLERY,
                coralId: coral.id,
                coralImg: coral.image
            });
        };

        return (
            /*-------------
             *  Layout    *
            --------------*/
            <SelectedTypeLayout 
                {...coral}
                viewH={(windowHeight / 2 / 2 - 30)} 
                viewW={windowWidth / 2 - 20} 
                pressH={(windowHeight / 2 / 2 - 40)} 
                pressW={windowWidth / 2 - 20}
                id={coral.id}
                imageSrc={coral.image}
                typeStr={coral.id}
                onPress={showModal}
             />
        );  
            
    };

    if (isLoading) {
        return (
            <LoadingScreen />
        );
    };

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.black, }}>
                  
            <FlatList
                numColumns='2'
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 4, }}
                scrollEventThrottle={16}
                decelerationRate='normal'
                initialNumToRender={4}
                data={GALLERY}
                renderItem={renderItem}
                keyExtractor={(coral, indx) => `${coral.id}-${indx}`}
                ListHeaderComponent={
                    <ImageHeader 
                        source={require('../assets/images/common/nem-header.jpg')}
                        textP='Gallery'
                        size='md'
                        w='160'
                     />   
                }       
            />

        </SafeAreaView>
    );
  };

export default GalleryScreen;