import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './navigation/inital-native-stack/InitialStack';


const App = () => {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
};


export default App;
