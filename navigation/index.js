import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';

const screens = createStackNavigator({
  Welcome,
});

export default createAppContainer(screens);
