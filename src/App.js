import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { appTheme } from './theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import InitialStack from './navigation/inital-native-stack/InitialStack';
import { windowHeight, windowWidth } from './utilities/constants';



const App = () => {
  return (
    <NativeBaseProvider 
      theme={appTheme} 
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: windowWidth, height: windowHeight },
        insets: { top: 0, left: 0, right: 0, bottom: 0 }
      }}
    >
      <NavigationContainer>
        <InitialStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
