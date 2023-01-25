import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from '../../screens/OnBoardingScreen';
import ZoaScreen from '../../screens/coral-screens/ZoaScreen';
import SpsScreen from '../../screens/coral-screens/SpsScreen';
import LpsScreen from '../../screens/coral-screens/LpsScreen';
import CoralModal from '../../screens/coral-screens/CoralModal';

import TabNav from '../bottom-tabs/TabNav';

const Stack = createStackNavigator();

const menuStackOptions = ({ navigation, route }) => {
      const {typeId, cType}= route.params;
  // console.log(route.name, route.key, route.params);
  return {
    headerStyle: { backgroundColor: eatsTheme.darkTeal, },
    headerTitle: ({ navigation, route, titleName }) => (<TitleButton mealId={keyId} menuId={cType} menuCollect={menuCollect} menuName={menuName} menuXml={menuXml} menuImg={menuImg} />),
    headerRight: ({ navigation, route }) => (<HomeCartIcon navigation={navigation} route={route}
      headerStyle mx={8} color={eatsTheme.white} colorScheme='success' variant='subtle'
    />),
  }
};

function InitialStack({navigation, route}) {
  return (
    <Stack.Navigator 
      initialRouteName='Board'
      // screenOptions={}
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
                  headerStyle: { backgroundColor: 'black', },
              })}
        />
        <Stack.Screen name="SPS" component={SpsScreen} 
                options={({ navigation, route }) => ({
              })}
        />
        <Stack.Screen name="LPS" component={LpsScreen} 
                options={({ navigation, route }) => ({
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