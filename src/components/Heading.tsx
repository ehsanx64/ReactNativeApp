import React, {ReactElement} from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = {
  children: any;
};

const Heading: React.FC<Props> = ({children}): ReactElement => {
  return <Text style={styles.wrapper}>{children}</Text>;
};

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 5,
  },
});

export default Heading;
