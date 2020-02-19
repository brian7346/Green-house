//@flow
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../constants';

type Props = {
  opacity?: number,
  color?: string,
  shadow?: boolean,
  style?: any,
  children?: any,
};

const Button = (props: Props): React$Node => {
  const { style, color, shadow, children } = props;

  const buttonStyles: Array<any> = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      {children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  opacity: 0.8,
  color: theme.colors.white,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.sizes.radius,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    marginVertical: theme.sizes.padding / 3,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: {
    backgroundColor: theme.colors.accent,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  tertiary: {
    backgroundColor: theme.colors.tertiary,
  },
  black: {
    backgroundColor: theme.colors.black,
  },
  white: {
    backgroundColor: theme.colors.white,
  },
  gray: {
    backgroundColor: theme.colors.gray,
  },
  gray2: {
    backgroundColor: theme.colors.gray2,
  },
  gray3: {
    backgroundColor: theme.colors.gray3,
  },
  gray4: {
    backgroundColor: theme.colors.gray4,
  },
});

export default Button;
