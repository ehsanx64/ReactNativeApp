import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

const Screen: () => ReactElement = ({children}: any) => {
  return <View style={styles.screenWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  screenWrapper: {},
});

export default Screen;
