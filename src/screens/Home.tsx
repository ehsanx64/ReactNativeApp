import React from 'react';
import {Text} from 'react-native';
import {Image} from 'react-native';
import {View, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import Button from '../components/Button';
import {getTheme} from '../utils/style';
import {bgColorDebug} from '../utils/tools';
import {useApp} from '../modules/app/hook';

const isDebugging: boolean = false;

const Home = ({navigation}: any) => {
  const {app, setChosenOne} = useApp();
  const headerLogo = require('../assets/images/logo.png');

  return (
    <Screen>
      <View style={styles.wrapper}>
        <View style={styles.homeHeader}>
          <View style={styles.headerLogoWrapper}>
            <Image source={headerLogo} style={styles.headerLogo} />
          </View>
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.header}>ReactNativeApp</Text>
            <Text style={styles.subHeader}>ReactNative Playground</Text>
          </View>
        </View>

        <View style={styles.mainMenu}>
          <Button
            title="Friends"
            style={styles.mainMenuButton}
            labelAlign="center"
            onPress={() => {
              navigation.navigate('Friends');
            }}
          />
          <Button
            title="About"
            labelAlign="center"
            onPress={() => {
              navigation.navigate('About');
            }}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'space-between',
  },
  homeHeader: {
    fontSize: 20,
    fontWeight: '600',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 4,
    paddingVertical: 20,
  },
  headerLogo: {
    resizeMode: 'center',
  },
  headerLogoWrapper: {
    backgroundColor: bgColorDebug(isDebugging, 'green'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleWrapper: {},
  header: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  mainMenu: {
    backgroundColor: bgColorDebug(isDebugging, 'white'),
    paddingVertical: 10,
    paddingHorizontal: 50,
    flexGrow: 2,
  },
  mainMenuButton: {
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default Home;
