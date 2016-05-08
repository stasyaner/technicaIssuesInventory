'use strict';

import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route} from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Bootstrap from 'bootstrap/less/bootstrap';
import InventoryContainer from './InventoryContainer';
import Inventory from './Inventory';
import PieChart from './PieChart.jsx';
import Style from './style.css';

render(
  <Router history={browserHistory}>
    <Route component={InventoryContainer}>
      <Route path="/" component={Inventory} />
    </Route>
    <Route path="/pieChart" component={PieChart} />
  </Router>,
  document.getElementById('root'));
