import React from 'react';
import { Image } from 'react-native';
import { createAppCountainer, createStackNavigatior } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigatior(
  {
    Welcome,
    Browse,
    Login,
    Explore,
    Product,
    Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerRightContainerStyle: {},
    },
  },
);

export default createAppCountainer(screens);
