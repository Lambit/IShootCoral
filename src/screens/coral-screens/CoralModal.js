import React from 'react';

//Components & Constants
import { windowHeight, windowWidth } from '../../utilities/constants';
import { CircleButton } from '../../components/buttons/buttons';

//Packages
import { useTheme, View , Image, VStack } from 'native-base';

/*----CoralModal-------
    Screen to view the corals full size Image, displayed as a transparent modal.
    Using the built in goBack() function from React Navigation, to go back to 
    previous screen and close modal. Header is not shown.
*/ 

const CoralModal = ({navigation, route}) => {
    //---theme and params, to display specific coral selected------
    const { color, bR } = useTheme();
    const { coralArr, coralId, coralName, coralImg } = route.params;

    //----go back on button press-----
    const goBackBtn = () => {
        navigation.goBack();
    };

  return (
    /* -----------------------------------------------
     *   View set to dynamically fit screen types.   *
    ------------------------------------------------ */
    <View 
        flex={1} 
        p='2' 
        w={windowWidth}
        h={windowHeight}
        justifyContent='center' 
        alignItems='center' 
        bg={color.overlay}
    >
        <VStack flex={1} w='100%' h='80%'>
            {/*------------------------
              * Close/goBack button   *
            --------------------------*/}
            <CircleButton 
              zIndex={1}
              position='absolute'
              top={12}
              ml='6'
              icon='x' 
              size={22} 
              bg={color.pink} 
              color={color.aqua} 
              borderColor={color.dPurple} 
              onPress={goBackBtn}
            />
            {/*-----------------------------------------------
              * Image dynamically displayed to fit parent.  *
            ------------------------------------------------*/}
            <Image 
              id={coralId}
              source={coralImg}
              alt={ coralName || coralId }
              resizeMode='cover'
              alignSelf='center'
              position='absolute'
              bottom={10} 
              top={10}
              height={windowHeight - 100}
              w={windowWidth - 40}
              borderRadius={bR.lg}
            />
        </VStack>
    </View>
  );
};

export default CoralModal;