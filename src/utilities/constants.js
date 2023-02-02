import { Dimensions, Platform } from 'react-native';

export const oniOS = Platform.OS === 'ios';
export const onAndroid = Platform.OS === 'android';
// onAndroid ? 'hidden' : 'visible' (show shadow on ios)

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;


