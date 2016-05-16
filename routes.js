'use strict';

import React from 'react';
import {Route} from 'react-router';
import InventoryContainer from './containers/InventoryContainer';
import DetailsContainer from './containers/DetailsContainer';
import AddIssueContainer from './containers/AddIssueContainer';
import DeleteIssueContainer from './containers/DeleteIssueContainer';
//import editIssueContainer from './containers/editIssueContainer';

{/*<Route path="*" component={NoMatch}/>
<Route path='editIssue/:issueId' component={editIssueContainer}/>*/}

export default (
  <Route path='/' component={InventoryContainer}>
    <Route path='page/:pageId'/>
    <Route path='details/:issueId' component={DetailsContainer}/>
    <Route path='addIssue' component={AddIssueContainer}/>
  </Route>
);
