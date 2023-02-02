import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import OnBoardingScreen from '../../screens/on-boarding/OnBoardingScreen';
import ZoaScreen from '../../screens/coral-screens/ZoaScreen';
import SpsScreen from '../../screens/coral-screens/SpsScreen';
import LpsScreen from '../../screens/coral-screens/LpsScreen';
import CoralModal from '../../screens/coral-screens/CoralModal';

import TabNav from '../bottom-tabs/TabNav';
import { useTheme, Text } from 'native-base';

const Stack = createStackNavigator();


/*---------------------------------------------------------------------*
 *   function for that returns an object to be used in screenOption    *
 *---------------------------------------------------------------------*/
const stackOptions = ({ navigation, route }) => {
  return {
    headerStyle: { backgroundColor: 'black', },
    headerBackTitle: false,
    headerBackTitleStyle: {color: 'black'},
  }
};

function InitialStack({navigation, route}) {
  const { fonts, color,  } = useTheme();

  return (
    <Stack.Navigator 
      initialRouteName='Board'
      screenOptions={stackOptions}
    >
        <Stack.Screen name="Board" component={OnBoardingScreen} 
          options={({ navigation }) => ({
                headerShown: false,
          })}
        />
        <Stack.Screen name="HomeStack" component={TabNav} 
          options={({ navigation, route }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="ZOA" component={ZoaScreen} 
          options={({ navigation, route }) => ({
             headerTitle: ({navigation, route}) => (
             <Text textAlign='center' fontSize='24' fontFamily={fonts.head} color={color.yellow} navigation={navigation} route={route} >I Shoot Coral</Text>),
          })}
        />
        <Stack.Screen name="SPS" component={SpsScreen} 
          options={({ navigation, route }) => ({
            headerTitle: ({navigation, route}) => (
            <Text textAlign='center' fontSize='24' fontFamily={fonts.head} color={color.yellow} navigation={navigation} route={route} >I Shoot Coral</Text>),
          })}
        />
        <Stack.Screen name="LPS" component={LpsScreen} 
          options={({ navigation, route }) => ({
            headerTitle: ({navigation, route}) => (
            <Text textAlign='center' fontSize='24' fontFamily={fonts.head} color={color.yellow} navigation={navigation} route={route} >I Shoot Coral</Text>),
          })}
        />
        <Stack.Screen name="Modal" component={CoralModal} 
          options={({ navigation, route }) => ({
             headerShown: false,
             presentation: 'transparentModal'
          })}
        />
        
    </Stack.Navigator>
  );
};

export default InitialStack;