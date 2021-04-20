import 'react-native';
import React from 'react';
import {View} from 'react-native';
import Screen from '../src/components/Screen';
import Home from '../src/screens/Home';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

test('renders correctly', () => {
  // renderer.create(<Screen></Screen>);
  const {debug} = render(<Home />);
});
