import * as React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

const Login = () => {
  const [email, setEmail] = React.useState('doctorbrian97@gmail.com');
  const [password, setPassword] = React.useState('11111111');

  const setLogin = () => {
    return null;
  };

  return (
      <Block padding={[0, theme.sizes.base * 2]} color="white">
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
          <Button color="primary" gradient onPress={() => setLogin()}>
            <Text bold white center>
              Login
            </Text>
          </Button>

          <Button onPress={() => null}>
            <Text style={styles.forgotText} gray caption center>
              Forgot your password?
            </Text>
          </Button>
        </Block>
      </Block>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  forgotText: {
    textDecorationLine: 'underline',
  },
});

export default Login;
