/* Define the shape of the 'app' state */
export interface TAppState {
  [key: string]: any;
  name: string;
  friendList: Array<string>;
  chosenOne: string;
  navMenus: Array<object>;
}

/* Define the shape of the 'app' actions */
export interface TAppAction {
  type: string;
  payload: string | number | object;
}

export interface TAppHook {
  app: TAppState;
  setName: Function;
  setChosenOne: Function;
}
