import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../components';
import { theme } from '../constants';

const Welcome = () => {
  return (
    <Block center middle>
      <Block center middle flex={0.3}>
        <Text h1 center bold>
          Tour Home.
          <Text h1 primary>
            Greener.
          </Text>
        </Text>
        <Text h3 gray2 style={styles.description}>
          Enjoy the experience
        </Text>
      </Block>
      <Block>
        <Text>Welcome</Text>
      </Block>
    </Block>
  );
};

Welcome.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  description: {
    marginTop: theme.sizes.padding / 2,
  },
});

export default Welcome;
