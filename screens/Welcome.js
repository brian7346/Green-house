import React, { useState, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

const Welcome: () => React$Node = props => {
  const { navigation } = props;
  const [date] = useState();
  const [showTerms, setShowTerms] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scrollX] = useState(new Animated.Value(0));

  const buildAnimatedTiming = (value, toValue, duration) =>
    Animated.timing(value, {
      toValue,
      duration,
    }).start();

  useEffect(() => {
    buildAnimatedTiming(fadeAnim, 1, 1000);
  }, [fadeAnim]);

  const renderIllustrations = () => {
    const { illustrations } = props;
    return (
      <FlatList
        horizontal
        paddingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
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
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: scrollX } },
          },
        ])}
      />
    );
  };
  const renderSteps = () => {
    const { illustrations } = props;
    const stepPosition = Animated.divide(scrollX, width);
    return (
      <Block row center middle style={styles.stepContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              style={[styles.steps, { opacity }]}
              color="gray"
            />
          );
        })}
      </Block>
    );
  };
  const renderTermsService = () => {
    return (
      <Modal animationType="slide" visible={showTerms}>
        <Block space="evenly" padding={theme.sizes.padding}>
          <Text h2 light>
            Terms of service
          </Text>
          <Button color="primary" onPress={() => setShowTerms(false)}>
            <Text center white>
              I understand
            </Text>
          </Button>
        </Block>
      </Modal>
    );
  };

  return (
    <Block animated style={{ opacity: fadeAnim }}>
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
        <Button color="primary" onPress={() => navigation.navigate('Signup')}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => navigation.navigate('Signup')}>
          <Text center semibold>
            Signup
          </Text>
        </Button>
        <Button color="transparent" onPress={() => setShowTerms(true)}>
          <Text center capiton gray>
            Terms of service
          </Text>
        </Button>
      </Block>
      {renderTermsService()}
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
  stepContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: theme.sizes.base * 6,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});

export default Welcome;
