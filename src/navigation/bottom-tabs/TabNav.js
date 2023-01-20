import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAndroid, oniOS, windowWidth } from '../../utilities/constants';
import { useTheme, Text } from 'native-base';
import { appTheme } from '../../theme/theme';

// TabsScreens
import HomeScreen from '../../screens/HomeScreen';
import GalleryScreen from '../../screens/GalleryScreen';
import BookScreen from '../../screens/BookScreen';
import AboutScreen from '../../screens/AboutScreen';

// Icons
import Feather from 'react-native-vector-icons/Feather'



const Tab = createBottomTabNavigator();


const TAB_ICON = {
  Home: 'home',
  Gallery: 'camera',
  Book: 'calendar',
  About: 'meh',
};


const tabNavOptions = ({ route, color }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: (color) => (
      <Feather name={iconName} color={'white'} size={20}/>
    ),
    headerShown: false,
 
  tabBarStyle:  { backgroundColor: 'black', padding: 2 },
        tabBarLabelStyle:  { marginBottom: 4 },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'yellow',
  };
};
// const headerOptions = ({ navigation, route }) => {
//   return {
//     headerShown: true,
//     headerTitle: () => <Text style={{ color: eatsTheme.black, textAlign: 'center' }} >{route.name}</Text>,
//     headerStyle: { borderBottomColor: eatsTheme.primeGrey, borderBottomWidth: .2, },
//     headerTintColor: eatsTheme.black,
//   }
// };

// onAndroid ? StatusBar.currentHeight : 0

const TabNav = () => {
         const { color, container, fonts, letSpace, screens, bR, shadowAndroid } = useTheme();


  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={tabNavOptions}
    >

    <Tab.Screen name='Home' component={HomeScreen} t
        options={({ navigation, route }) => ({
          headerTitle: () => (<Text textAlign='center' fontSize='24' fontFamily={fonts.head} color={color.yellow} navigation={navigation} route={route} >I Shoot Coral</Text>),
          headerShown: true,
          headerStyle: { backgroundColor: color.black, },
      })} 
    />
    <Tab.Screen name="Gallery" component={GalleryScreen} 
        // options={({ navigation, route }) => ({
        //   tabBarIcon: ({color, size}) => (
        //     <Feather name='user' color={color} size={22} navigation={navigation} route={route}/>
        //   ),
          
        // })} 
     /> 
    <Tab.Screen name="Book" component={BookScreen} 
        // options={({ navigation, route }) => ({
        //   tabBarIcon: ({color, size}) => (
        //     <Feather name='user' color={color} size={22} navigation={navigation} route={route}/>
        //   ),
          
        // })} 
     /> 
    <Tab.Screen name="About" component={AboutScreen} 
        // options={({ navigation, route }) => ({
        //   tabBarIcon: ({color, size}) => (
        //     <Feather name='user' color={color} size={22} navigation={navigation} route={route}/>
        //   ),
          
        // })} 
     /> 

  </Tab.Navigator>
  );
};

export default TabNav;