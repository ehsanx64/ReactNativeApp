import {useDispatch, useSelector} from 'react-redux';
import {TAppState,TAppHook} from './types';

import * as actions from './actions';

export const useApp = (): TAppHook => {
  const dispatch = useDispatch();
  const app: any = useSelector((state: TAppState): any => state.app);

  const setName = (name: string): void => {
    dispatch(actions.setName(name));
  };

  const setChosenOne = (name: string): void => {
    dispatch(actions.setChosenOne(name));
  };

  return {
    app,
    setName,
    setChosenOne,
  };
};
