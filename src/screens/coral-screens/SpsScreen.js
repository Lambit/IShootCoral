import React from 'react';
import { SafeAreaView } from 'react-native';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import SelectedTypeLayout from '../../components/screen-layouts/SelectedTypeLayout';
import ImageHeader from '../../components/header/ImageHeader';


// Packages
import { FlatList, useTheme, Image } from 'native-base';
import { SPS } from '../../assets/data/static-data';

/*----SpsScreen-------
    SpsScreen houses the flat list being displayed with imported data. A function
    renderItem() is created returning the SelectedTypeLayout component where data
    can be passed to the components props. Also a simple nave function is created
    to pass params to the CoralModal screen. This allows the CoralModal component
    to be re used.
*/ 

function SpsScreen({navigation, route,}) {
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
                coralArr: SPS,
                coralId: coral.id,
                coralName: coral.name,
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
                viewW={windowWidth - 30} 
                pressH={(windowHeight / 2 / 2 - 40)} 
                pressW={windowWidth - 40}
                id={coral.id}
                imageSrc={coral.image}
                nameStr={coral.name}
                typeStr={coral.name}
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
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ backgroundColor: color.black}}
                scrollEventThrottle={16}
                decelerationRate='normal'
                initialNumToRender={4}
                data={SPS}
                renderItem={renderItem}
                keyExtractor={(coral, indx) => `${coral.id}-${indx}`}
                ListHeaderComponent={
                    <ImageHeader 
                        source={require('../../assets/images/common/SPS-top-down-2.jpeg')}
                        textP='SPS'
                        size='md'
                        w='120'
                     /> 
                }       
            />

        </SafeAreaView>
    );
  };
  export default SpsScreen;