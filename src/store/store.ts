import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers, { initialState } from './reducers';

const middleware =
  process.env.NODE_ENV === 'development'
    ? [thunkMiddleware, logger]
    : [thunkMiddleware];

export type Store = ReduxStore<typeof initialState>;

export default (): Store => {
  return createStore(reducers, {}, applyMiddleware(...middleware));
};
