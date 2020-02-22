import * as React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Block, Text, Input, Button } from '../components';
import { theme } from '../constants';

const Login = props => {
  const [email, setEmail] = React.useState('doctorbrian97@gmail.com');
  const [password, setPassword] = React.useState('11111111');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { navigation } = props;

  const setLogin = () => {
    setLoading(true);

    if (email === '' || password === '') {
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 500);
    }

    if (!error) {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Browse');
      }, 500);
    }
  };

  const hasError = () => {
    if (error) {
      return styles.hasError;
    }
  };

  return (
    <Block padding={[0, theme.sizes.base * 2]} color="white">
      <Text h1 bold>
        Login
      </Text>
      <Block middle>
        <Input
          label="Email"
          style={[styles.input, hasError()]}
          defaultValue={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          secure
          label="Password"
          style={[styles.input, hasError()]}
          defaultValue={password}
          onChangeText={pass => setPassword(pass)}
        />
        <Button color="primary" gradient onPress={() => setLogin()}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text bold white center>
              Login
            </Text>
          )}
        </Button>

        <Button onPress={() => navigation.navigate('Forgot')}>
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
  hasError: {
    borderBottomColor: theme.colors.accent,
  },
});

export default Login;
