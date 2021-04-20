import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {store} from './utils/store';
import Home from './screens/Home';
import Friends from './screens/Friends';
import About from './screens/About';

type RootStackParams = {
  Home: undefined;
  About: undefined;
  Friends: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

const mainMenu = [
  {
    name: 'Home',
    target: Home,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Friends',
    target: Friends,
  },
  {
    name: 'About',
    target: About,
  },
];

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
          {mainMenu.map((menu, index) => (
            <RootStack.Screen
              key={index}
              name={menu.name}
              component={menu.target}
              options={{
                title: menu.name,
                headerShown: menu.options?.headerShown,
              }}
            />
          ))}
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
