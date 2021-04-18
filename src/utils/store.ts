import {createStore, combineReducers} from 'redux';

import {reducer as appReducer} from '../modules/app/reducer';

export const store = createStore(
  combineReducers({
    app: appReducer,
  }),
);
