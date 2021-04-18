import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type AboutNavigationProp = StackNavigationProp<RootStackParamList, 'About'>;
type Props = {
  navigation: AboutNavigationProp;
}
const About = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
      <Button
        title="Go back"
        color="tomato"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default About;