import React from 'react';
import { SafeAreaView } from 'react-native';

//Components & Constants
import GalleryLayout from '../components/screen-layouts/GalleryLayout';
import { GALLERY } from '../assets/data/static-data';
import PageHeader from '../components/header/PageHeader';

//Packages
import { useTheme, FlatList } from 'native-base';

/*----GalleryScreen-------
    GalleryScreen houses the flat list being displayed with imported data. A function
    renderItem() is created returning the SelectedTypeLayout component where data
    can be passed to the components props. Also a simple nave function is created
    to pass params to the CoralModal screen. This allows the CoralModal component
    to be re used.
*/ 

function GalleryScreen({navigation, route,}) {
    const { color } = useTheme();

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
            <GalleryLayout 
                {...coral}
                id={coral.id}
                imageSrc={coral.image}
                typeStr={coral.id}
                onPress={showModal}
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
                numColumns='2'
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 4}}
                scrollEventThrottle={16}
                decelerationRate='normal'
                initialNumToRender={4}
                data={GALLERY}
                renderItem={renderItem}
                keyExtractor={(coral, indx) => `${coral.id}-${indx}`}
                ListHeaderComponent={
                    <PageHeader text='GALLERY' />   
                }       
            />

        </SafeAreaView>
    );
  };

export default GalleryScreen;