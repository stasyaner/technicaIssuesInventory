'use strict';

import React from 'react';
import {render} from 'react-dom';
import {browserHistory, hashHistory } from 'react-router';
import Bootstrap from 'bootstrap/less/bootstrap';
import Style from './style.css';
import Root from './containers/Root';
import configureStore from './store/store';

render(
  <Root store={configureStore()} history={browserHistory}/>,
  document.getElementById('root')
);
