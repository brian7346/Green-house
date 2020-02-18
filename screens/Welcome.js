import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const Welcome = () => {
  const renderIllustrations = () => (
    <Block>
      <Text>Image</Text>
    </Block>
  );
  const renderSteps = () => (
    <Block>
      <Text>* * *</Text>
    </Block>
  );
  return (
    <Block>
      <Block center middle>
        <Text h1 center bold>
          Tour Home.
          <Text h1 primary>
            Greener.
          </Text>
        </Text>
        <Text h3 style={styles.description}>
          Enjoy the experience
        </Text>
      </Block>
      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>
      <Block middle margin={theme.sizes.padding * 2}>
        <Button color="primary" onPress={() => null}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => null}>
          <Text center semibold>
            Signup
          </Text>
        </Button>
        <Button color="transparent" onPress={() => null}>
          <Text center capiton gray>
            Terms of service
          </Text>
        </Button>
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
    color: theme.colors.gray2,
  },
});

export default Welcome;
