import * as React from 'react';
import { View } from 'react-native';
import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const Login = () => {
  return (
    <Block padding={[0, theme.sizes.base * 2]} flex color="white">
      <Text h1 bold>
        Login
      </Text>
    </Block>
  );
};

export default Login;
