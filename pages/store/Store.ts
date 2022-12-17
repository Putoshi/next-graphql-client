import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from "./UserSlice";
import { userDataApi } from '../services/UserQueryHook';
// import {save, load} from 'redux-localstorage-simple';


/*
  Reducerをまとめる
 */
const rootReducer = combineReducers({
  [userDataApi.reducerPath]: userDataApi.reducer,
});

/*
  Store Setup関数
 */
export const setupStore = () => {
  const middlewares = (getDefaultMiddleware) => getDefaultMiddleware()
    // .concat(save({ namespace: Const.LOCALSTORAGE_KEY }))
    .concat(logger)
    .concat(userDataApi.middleware);

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    // preloadedState: load({ namespace: Const.LOCALSTORAGE_KEY }),
  });
};

export const store = setupStore();