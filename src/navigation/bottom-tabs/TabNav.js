import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAndroid, oniOS, windowWidth } from '../../utilities/constants';
import { Text } from 'native-base';

// TabsScreens
import HomeScreen from '../../screens/home-screen/HomeScreen';
import GalleryScreen from '../../screens/GalleryScreen';
import BookScreen from '../../screens/booking/BookScreen';
import AboutScreen from '../../screens/about-screen/AboutScreen';

// Icons
import Feather from 'react-native-vector-icons/Feather'
import { appTheme } from '../../theme/theme';



const Tab = createBottomTabNavigator();


const TAB_ICON = {
  Home: 'home',
  Gallery: 'camera',
  Book: 'calendar',
  About: 'meh',
};


// const tabNavOptions = ({ route, color }) => {
//   const iconName = TAB_ICON[route.name];
//   const { color, fonts } = useTheme();
//   return {
//     tabBarIcon: (color) => (
//       <Feather name={iconName} color={'white'} size={20}/>
//     ),
//     headerShown: false,
 
//   tabBarStyle:  { backgroundColor: 'black', padding: 2 },
//         tabBarLabelStyle:  { marginBottom: 4 },
//         tabBarInactiveTintColor: 'white',
//         tabBarActiveTintColor: 'yellow',
//   };
// };



const TabNav = () => {
         const { color, container, fonts, letSpace, screens, bR, shadowAndroid } = appTheme;


  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle:  { backgroundColor: color.black, padding: 2 },
        tabBarLabelStyle:  { marginBottom: 4 },
        tabBarInactiveTintColor: color.white,
        tabBarActiveTintColor: color.yellow,
        headerShown: false
      })}
    >

    <Tab.Screen name='Home' component={HomeScreen} t
        options={({ navigation, route }) => ({
          headerTitle: () => (<Text textAlign='center' fontSize='24' fontFamily={fonts.head} color={color.yellow} navigation={navigation} route={route} >I Shoot Coral</Text>),
          headerShown: true,
          headerStyle: { backgroundColor: color.black, },

        tabBarIcon: ({color, size}) => (
          <Feather name='home' color={color} size={22} />
        )
      })} 
    />
    <Tab.Screen name="Gallery" component={GalleryScreen} 
        options={({ navigation, route }) => ({
    
          tabBarIcon: ({color, size}) => (
            <Feather name='camera' color={color} size={22} navigation={navigation} route={route}/>
          ),
          
        })} 
     /> 
    <Tab.Screen name="Book" component={BookScreen} 
      options={({ navigation, route }) => ({
          tabBarIcon: ({color, size}) => (
            <Feather name='calendar' color={color} size={22} navigation={navigation} route={route}/>
          ),
          
        })} 
     /> 
    <Tab.Screen name="About" component={AboutScreen} 
      options={({ navigation, route }) => ({
          tabBarIcon: ({color, size}) => (
            <Feather name='meh' color={color} size={22} navigation={navigation} route={route}/>
          ),
          
        })} 
     /> 

  </Tab.Navigator>
  );
};

export default TabNav;