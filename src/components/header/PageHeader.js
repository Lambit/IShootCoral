import React from 'react';

//Packages
import { useTheme, Text } from 'native-base';

/*---PageHeader-----
    Header Text and styles to app screens, text is a prop passed down to display
    the current screens name.
*/ 

const PageHeader = ({text}) => {
    const { color, fonts } = useTheme();
  return (

    <Text 
        p='4' 
        fontFamily={fonts.head} 
        fontSize='42' 
        color={color.yellow}
    > 
        {text}
    </Text>

  );
};

export default PageHeader;