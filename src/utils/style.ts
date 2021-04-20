import {StyleSheet} from 'react-native';
// import {ViewStyle} from 'react-native';

interface TTheme {
  fgColor: string;
  bgColor: string;
}

export const extendStyles = (styles: object, override: object): any => {
  return StyleSheet.create({...styles, ...override});
};

export const getTheme = (): any => {
  return {
    fontSize: 20,
    fgColor: 'white',
    bgColor: 'tomato',
  };
};
