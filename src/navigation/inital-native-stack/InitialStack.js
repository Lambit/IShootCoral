import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavBarHeader from '../../components/header/NavBarHeader';

//Screens
import OnBoardingScreen from '../../screens/on-boarding/OnBoardingScreen';
import ZoaScreen from '../../screens/coral-screens/ZoaScreen';
import SpsScreen from '../../screens/coral-screens/SpsScreen';
import LpsScreen from '../../screens/coral-screens/LpsScreen';
import CoralModal from '../../screens/coral-screens/CoralModal';

import TabNav from '../bottom-tabs/TabNav';
import { Text } from 'native-base';

const Stack = createStackNavigator();

/*---------------------------------------------------------------------*
 *   function for that returns an object to be used in screenOption    *
 *---------------------------------------------------------------------*/
const stackOptions = ({ navigation, route, back,  }) => (
  {
    headerTitle: () => ( <NavBarHeader text={route.name}/> ),
    // headerRight: () => (<Text style={{color: 'white'}}>Heyyyy</Text>),
    headerStyle: { backgroundColor: 'black',  },
    headerBackTitle: false,
    headerBackTitleStyle: {color: 'black', },
    headerPressOpacity: .4,
    headerTintColor:'#FFFF00',
    // headerStatusBarHeight: ,
    // headerBackgroundContainerStyle: {marginTop: onAndroid ? 60 : 0}
  }
);


const InitialStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Board'
      screenOptions={stackOptions}
    >
        <Stack.Screen name="Board" component={OnBoardingScreen} 
          options={() => ({ headerShown: false, })}
        />
        <Stack.Screen name="HomeStack" component={TabNav} 
          options={() => ({ headerShown: false, })}
        />
        <Stack.Screen name="ZOA" component={ZoaScreen} />
        <Stack.Screen name="SPS" component={SpsScreen} />
        <Stack.Screen name="LPS" component={LpsScreen} />
        <Stack.Screen name="Modal" component={CoralModal} 
          options={() => ({
             headerShown: false,
             presentation: 'transparentModal'
          })}
        />
        
    </Stack.Navigator>
  );
};

export default InitialStack;