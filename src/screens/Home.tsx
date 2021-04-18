import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Screen from '../components/Screen';
import {useApp} from '../modules/app/hook';

const Friend = ({name, onClick}) => {
  return (
    <View style={styles.friendWrapper}>
      <TouchableOpacity
        onPress={() => {
          onClick(name);
          console.log('Clicked ' + name + '!');
        }}>
        <View style={styles.friend}>
          <Text style={styles.friendName}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({navigation}: any) => {
  const {app, setChosenOne} = useApp();
  const renderer = ({item}) => <Friend name={item} onClick={setChosenOne} />;

  return (
    <Screen>
      <Text>Home Screen</Text>
      <View>
        <Text style={styles.heading}>My favorite friends:</Text>
        <FlatList
          renderItem={renderer}
          data={app.friendList}
          keyExtractor={item => item}
        />
      </View>
      <View>
        <Text style={styles.heading}>The chosen one:</Text>
        <Text style={styles.chosenOneName}>{app.chosenOne}</Text>
      </View>
      <Button
        title="Go to About"
        color="tomato"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  friendWrapper: {
    padding: 5,
  },
  friend: {
    marginVertical: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'tomato',
  },
  friendName: {
    fontSize: 15,
  },
  chosenOneName: {
    fontSize: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Home;
