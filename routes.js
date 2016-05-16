'use strict';

import React from 'react';
import {Route} from 'react-router';
import InventoryContainer from './containers/InventoryContainer';
import DetailsContainer from './containers/DetailsContainer';
import AddIssueContainer from './containers/AddIssueContainer';
import DeleteIssueContainer from './containers/DeleteIssueContainer';
import EditIssueContainer from './containers/EditIssueContainer';

{/*<Route path="*" component={NoMatch}/>*/}

export default (
  <Route path='/' component={InventoryContainer}>
    <Route path='page/:pageId'/>
    <Route path='details/:issueId' component={DetailsContainer}/>
    <Route path='addIssue' component={AddIssueContainer}/>
    <Route path='editIssue/:issueId' component={EditIssueContainer}/>
  </Route>
);
