import React from 'react';
import {Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Screen from '../components/Screen';

type AboutNavigationProp = StackNavigationProp<RootStackParamList, 'About'>;
type Props = {
  navigation: AboutNavigationProp;
};

const About = ({navigation}: Props) => {
  return (
    <Screen>
      <Text>About Screen</Text>
      <Button
        title="Go back"
        color="tomato"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Screen>
  );
};

export default About;
