//@flow
import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from './Text';
import Block from './Block';
import Button from './Button';
import { theme } from '../constants';

type Props = {
  secure: boolean,
  email?: boolean,
  phone?: boolean,
  number?: boolean,
  autoComplete?: any,
  error?: string,
  label?: string,
  rightLabel?: string,
  rightStyle?: any,
  onRightPress?: void,
  style?: any,
};

export default function Input(props: Props) {
  const {
    email,
    phone,
    number,
    secure,
    error,
    style,
    label,
    onRightPress,
    rightLabel,
    rightStyle,
    autoComplete,
    ...rest
  } = props;
  const [toggleSecure, setToggleSecure] = useState(false);

  const renderLabel = () => {
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
    if (!secure) {
      return null;
    }

    const iconName = !toggleSecure ? 'eye' : 'eye-slash';

    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon name={iconName} size={25} color={theme.colors.gray} />
        )}
      </Button>
    );
  };

  const renderRight = () => {
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

  const isSecure: boolean = toggleSecure ? false : secure;

  const inputStyles: Array<any> = [
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
        {...rest}
        style={inputStyles}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
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
