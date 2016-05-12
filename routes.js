'use strict';

import React from 'react';
import {Route} from 'react-router';
import InventoryContainer from './containers/InventoryContainer';
import Details from './components/Details';

export default (
  <Route path="/" component={InventoryContainer}>
    <Route path="/:issueId" component={InventoryContainer}/>
  </Route>
);
