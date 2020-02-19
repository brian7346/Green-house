import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const screens = createStackNavigator({
  Welcome,
  Login,
});

export default createAppContainer(screens);
