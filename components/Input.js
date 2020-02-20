import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from './Text';
import Block from './Block';
import Button from './Button';
import { theme } from '../constants';

export default function Input(props) {
  const { email, phone, number, secure, error, style, ...rest } = props;
  const [toggleSecure, setToggleSecure] = useState(false);

  const renderLabel = () => {
    const { label } = props;

    return (
      <Block flex={false}>
        {label ? (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  };

  const renderToggle = () => {
    const { rightLabel } = props;

    if (!secure) {
      return null;
    }

    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon name="eye" size={25} color={theme.colors.primary} />
        )}
      </Button>
    );
  };

  const renderRight = () => {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) {
      return null;
    }

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && { borderColor: theme.colors.accent },
    style,
  ];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <Block flex={false} margin={[theme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...rest}
      />
      {renderToggle()}
      {renderRight()}
    </Block>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    height: theme.sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0,
  },
});
