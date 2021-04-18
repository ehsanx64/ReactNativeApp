import {TAppAction} from './types';

export const SET_NAME: string = 'app/SET_NAME';
export const SET_CHOSEN_ONE: string = 'app/SET_CHOSEN_ONE';

export const setName = (name: string): TAppAction => ({
  type: SET_NAME,
  payload: name,
});

export const setChosenOne = (name: string): TAppAction => ({
  type: SET_CHOSEN_ONE,
  payload: name,
});
