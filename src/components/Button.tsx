import React, {ReactElement} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {getTheme} from '../utils/style';
import * as tools from '../utils/tools';

const isDebugging: boolean = false;

interface Props {
  title: string;
  onPress?: () => void;
  style?: any;
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  style = {},
}): ReactElement => {
  tools.logIfDebugging(
    isDebugging,
    {...styles.wrapper, ...style},
    'Button FC merged styles',
  );

  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
      <Text style={styles.labelWrapper}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: getTheme().bgColor,
    padding: 10,
  },
  labelWrapper: {
    fontSize: getTheme().fontSize,
    color: getTheme().fgColor,
  },
});

export default Button;
