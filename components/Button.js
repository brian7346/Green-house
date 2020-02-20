//@flow
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '../constants';

type Props = {
  opacity?: number,
  color?: string,
  shadow?: boolean,
  gradient?: boolean,
  style?: any,
  start?: any,
  end?: any,
  locations?: Array<number>,
  startColor: string,
  endColor: string,
  children?: React.Node,
};

const Button = (props: Props): React.Node => {
  const {
    style,
    color,
    shadow,
    children,
    opacity,
    gradient,
    start,
    end,
    locations,
    startColor,
    endColor,
    ...rest
  } = props;

  const buttonStyles: Array<any> = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  if (gradient) {
    return (
      <TouchableOpacity {...rest} style={buttonStyles}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity {...rest} style={buttonStyles}>
      {children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  startColor: theme.colors.primary,
  endColor: theme.colors.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
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
