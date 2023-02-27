import React from 'react';
import { appTheme } from '../../theme/theme';
//Packages
import { Text } from 'native-base';

const NavBarHeader = ({ text }) => {
    const { color, fonts } = appTheme;
  return (
    <Text textAlign='center' fontSize='24' fontFamily={fonts.head} color={color.yellow}>
      {text}
    </Text>
  );
};

export default NavBarHeader;