import React from 'react';
import { SafeAreaView } from 'react-native';

//Components & Constants
import SelectedTypeLayout from '../../components/screen-layouts/SelectedTypeLayout';
import PageHeader from '../../components/header/PageHeader';

// Packages
import { FlatList, useTheme } from 'native-base';
import { LPS } from '../../assets/data/static-data';

/*----LpsScreen-------
    LpsScreen houses the flat list being displayed with imported data. A function
    renderItem() is created returning the SelectedTypeLayout component where data
    can be passed to the components props. Also a simple nave function is created
    to pass params to the CoralModal screen. This allows the CoralModal component
    to be re used.
*/ 

function LpsScreen({navigation, route,}) {
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
                coralArr: LPS,
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
                data={LPS}
                renderItem={renderItem}
                keyExtractor={(coral, indx) => `${coral.id}-${indx}`}
                ListHeaderComponent={
                    <PageHeader text='LPS' />
                }       
            />

        </SafeAreaView>
    );
  };
  export default LpsScreen;