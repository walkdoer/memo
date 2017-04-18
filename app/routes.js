// @flow
import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './containers/App';
import Home from './containers/HomePage';
import Editor from './containers/Editor';
import Preferences from './containers/Preferences';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="logEditor" component={Editor} />
    <Route path="logEditor/:date" component={Editor} />
    <Route path="preferences" component={Preferences} />
  </Route>
);
