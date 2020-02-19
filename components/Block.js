//@flow
import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import { theme } from '../constants';

type Props = {
  flex?: number,
  row?: boolean,
  column?: boolean,
  center?: boolean,
  middle?: boolean,
  left: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
  card?: boolean,
  shadow?: boolean,
  color?: string,
  space?: string,
  padding?: number | [number],
  margin?: number | [number],
  animated?: boolean,
  wrap?: boolean,
  style?: any,
  children: any,
};

type marginType = {
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
};

type paddingType = {
  paddingTop: number,
  paddingRight: number,
  paddingBottom: number,
  paddingLeft: number,
};

export default function Block(props: Props): React$Node {
  const handleMargins = () => {
    const { margin } = props;

    const marginIsNumber = (marginValue: number): marginType => ({
      marginTop: marginValue,
      marginRight: marginValue,
      marginBottom: marginValue,
      marginLeft: marginValue,
    });

    const marginIsObject = (marginObject: any): marginType => {
      const marginSize: number = Object.keys(marginObject).length;

      switch (marginSize) {
        case 1:
          return {
            marginTop: marginObject[0],
            marginRight: marginObject[0],
            marginBottom: marginObject[0],
            marginLeft: marginObject[0],
          };
        case 2:
          return {
            marginTop: marginObject[0],
            marginRight: marginObject[1],
            marginBottom: marginObject[0],
            marginLeft: marginObject[1],
          };
        case 3:
          return {
            marginTop: marginObject[0],
            marginRight: marginObject[1],
            marginBottom: marginObject[2],
            marginLeft: marginObject[1],
          };
        default:
          return {
            marginTop: marginObject[0],
            marginRight: marginObject[1],
            marginBottom: marginObject[2],
            marginLeft: marginObject[3],
          };
      }
    };

    if (typeof margin === 'number') {
      return marginIsNumber(margin);
    }

    if (typeof margin === 'object') {
      return marginIsObject(margin);
    }
  };

  const handlePaddings = () => {
    const { padding } = props;

    const paddingIsNumber = (paddingValue: number): paddingType => ({
      paddingTop: paddingValue,
      paddingRight: paddingValue,
      paddingBottom: paddingValue,
      paddingLeft: paddingValue,
    });

    const paddingIsObject = (paddingObject: any): paddingType => {
      const paddingSize: number = Object.keys(paddingObject).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: paddingObject[0],
            paddingRight: paddingObject[0],
            paddingBottom: paddingObject[0],
            paddingLeft: paddingObject[0],
          };
        case 2:
          return {
            paddingTop: paddingObject[0],
            paddingRight: paddingObject[1],
            paddingBottom: paddingObject[0],
            paddingLeft: paddingObject[1],
          };
        case 3:
          return {
            paddingTop: paddingObject[0],
            paddingRight: paddingObject[1],
            paddingBottom: paddingObject[2],
            paddingLeft: paddingObject[1],
          };
        default:
          return {
            paddingTop: paddingObject[0],
            paddingRight: paddingObject[1],
            paddingBottom: paddingObject[2],
            paddingLeft: paddingObject[3],
          };
      }
    };

    if (typeof padding === 'number') {
      return paddingIsNumber(padding);
    }

    if (typeof padding === 'object') {
      return paddingIsObject(padding);
    }
  };

  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    padding,
    margin,
    animated,
    wrap,
    style,
    children,
  } = props;

  const blockStyles: any = [
    styles.block,
    flex && { flex },
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    wrap && { flexWrap: 'wrap' },
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style, // rewrite predefined styles
  ];

  if (animated) {
    return <Animated.View style={blockStyles}>{children}</Animated.View>;
  }

  return <View style={blockStyles}>{children}</View>;
}

export const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: theme.sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 },
});
