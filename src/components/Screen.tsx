import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: any;
}

const Screen: React.FC<Props> = ({children}): ReactElement => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default Screen;
