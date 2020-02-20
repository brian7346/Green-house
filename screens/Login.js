import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, Input } from '../components';
import { theme } from '../constants';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Block padding={[0, theme.sizes.base * 2]} flex color="white">
      <Text h1 bold>
        Login
      </Text>
      <Block middle>
        <Input
          label="Email"
          style={styles.input}
          defaultValue={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          secure
          label="Password"
          style={styles.input}
          defaultValue={password}
          onChangeText={pass => setPassword(pass)}
        />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default Login;
