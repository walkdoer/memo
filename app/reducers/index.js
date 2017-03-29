// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';
import log from './log';

const rootReducer = combineReducers({
  routing,
  app,
  log,
});

export default rootReducer;
