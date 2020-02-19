import React, { useState } from 'react';
import { StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

const Welcome: () => React$Node = props => {
  const [date, setDate] = useState();
  const renderIllustrations = () => {
    const { illustrations } = props;
    return (
      <FlatList
        horizontal
        paddingEnabled
        scrollEnabled
        showHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={date}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={styles.image}
          />
        )}
      />
    );
  };
  const renderSteps = () => (
    <Block>
      <Text>* * *</Text>
    </Block>
  );
  return (
    <Block>
      <Block center bottom flex={0.4}>
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
      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
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

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
  ],
};

const styles = StyleSheet.create({
  description: {
    marginTop: theme.sizes.padding / 2,
    color: theme.colors.gray2,
  },
  image: {
    width,
    height: height / 2,
  },
});

export default Welcome;
