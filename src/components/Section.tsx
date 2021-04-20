import React, {ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  children: any;
};

const Section: React.FC<Props> = ({children}): ReactElement => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export default Section;
