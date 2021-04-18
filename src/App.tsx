import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {store} from './utils/store';
import Home from './screens/Home';
import About from './screens/About';

type RootStackParams = {
  Home: undefined;
  About: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

const App: () => void = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          headerMode="screen"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'tomato'},
          }}>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="About"
            component={About}
            options={{
              title: 'About Us',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
