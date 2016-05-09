'use strict';

import * as ActionTypes from '../actions';

function getInitialState() {
  return JSON.parse(localStorage.getItem('issues')) || [];
}

const inventory = (state = getInitialState(), action) => {
  switch (action.type) {
    // case ActionTypes.ADD_ISSUE:
    //   //TODO: INCORRECT! REWRITE!
    //   return state.concat(action.issue);
    // case ActionTypes.REMOVE_ISSUE:
    //   //TODO: INCORRECT! REWRITE!
    //   return state.slice(0, action.index).concat(state.slice(index + 1));
    case ActionTypes.SET_ACTIVE_PAGE:
      return Object.assign({}, state, {
        issues: state.issues,
        activePage: index
      });
    default:
      return state;
  }
}

export {inventory as rootReducer};
