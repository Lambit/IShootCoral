import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import GalleryScreen from '../../screens/GalleryScreen';

const Stack = createNativeStackNavigator();

function InitialStack({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  );
};

export default InitialStack;