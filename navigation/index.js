import * as React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import { theme } from '../constants';

const screens = createStackNavigator(
  {
    Welcome,
    Login,
  },
  {
    defaultNavigationOptions: {
      headerTitle: null,
      headerBackTitleVisible: null,
      headerStyle: {
        height: theme.sizes.base * 6,
        backgroundColor: theme.colors.white,
        shadowColor: 'transparent',
        elevalion: 0,
      },
      headerBackImage: <Image source={require('../assets/icons/back.png')} />,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    },
  },
);

export default createAppContainer(screens);
