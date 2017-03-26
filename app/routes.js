// @flow
import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './containers/App';
import Home from './containers/HomePage';
import Editor from './containers/Editor';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="logEditor" component={Editor} />
  </Route>
);
