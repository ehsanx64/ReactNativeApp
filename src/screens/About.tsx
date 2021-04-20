import React, {ReactElement} from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Screen from '../components/Screen';
import Section from '../components/Section';
import Heading from '../components/Heading';
import List from '../components/List';
import {getTheme} from '../utils/style';

type AboutNavigationProp = StackNavigationProp<RootStackParamList, 'About'>;

type Props = {
  navigation: AboutNavigationProp;
};

const About = ({navigation}: Props) => {
  const toolList = [
    {
      name: 'react-native',
      text: 'React Native',
    },
    {
      name: 'typescript',
      text: 'TypeScript',
    },
    {
      name: 'redux',
      text: 'Redux',
    },
  ];

  return (
    <Screen>
      <Section>
        <Heading>Introduction</Heading>
        <Text style={styles.text}>
          ReactNativeApp is a playground to test various aspects of mobile
          development with React Native.
        </Text>
      </Section>

      <Section>
        <Heading>Acknowledgement</Heading>
        <Text style={styles.text}>
          Lot's of 3rd-party libraries, tools and components were used for
          during development of this application. Most notably:
        </Text>
        <List items={toolList} />
      </Section>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: getTheme().fontSize,
    marginBottom: 10,
  },
});

export default About;
