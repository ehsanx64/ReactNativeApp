import * as actions from './actions';
import {TAppState, TAppAction} from './types';

const initialState: TAppState = {
  name: 'AppName',
  friendList: ['Ali', 'Hosein', 'Ehsan'],
  chosenOne: '',
  navMenus: [],
};

export const reducer = (
  state = initialState,
  {type, payload}: TAppAction,
): any => {
  switch (type) {
    case actions.SET_NAME:
      return {
        ...state,
        ...{
          name: payload,
        },
      };
    case actions.SET_CHOSEN_ONE:
      return {
        ...state,
        ...{
          chosenOne: payload,
        },
      };
    default:
      return state;
  }
};
