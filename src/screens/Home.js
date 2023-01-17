import { View, Text } from 'react-native';
import React from 'react';


function Home({navigation, route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Text onPress={() => {navigation.navigate('Gallery')}} style={{fontFamily: 'Ressolles', fontSize: 42, color: 'yellow'}}>I Shoot Coral</Text>
    </View>
  );
}

export default Home;