import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { appTheme }from './theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './navigation/inital-native-stack/InitialStack';



const App = () => {
  // const { colors }
  return (
    <NativeBaseProvider theme={appTheme}>
    <NavigationContainer >
      <InitialStack />
    </NavigationContainer>
    </NativeBaseProvider>
  );
};


export default App;
