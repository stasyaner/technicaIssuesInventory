'use strict';

import * as ActionTypes from '../actions';

function getInitialState() {
  const issues = JSON.parse(localStorage.getItem('issues')) || [];
  const issuesToShowNumber = 8;
  const pagesToShow = 10;
  let pageNumber = issues.length / issuesToShowNumber;
  if((issues.length % issuesToShowNumber) > 0) {
    pageNumber = Math.floor(issues.length / issuesToShowNumber) + 1;
  };

  const startSlice = (pageNumber - 1) * issuesToShowNumber;
  const endSlice = startSlice + issuesToShowNumber;
  const issuesToShow = issues.slice((pageNumber - 1) * issuesToShowNumber);

  return {
    issues,
    issuesToShowNumber,
    issuesToShow,
    pageNumber,
    activePage: pageNumber,
    pagesToShow
  };
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
      const startSlice = (action.index - 1) * state.issuesToShowNumber;
  		const endSlice = startSlice + state.issuesToShowNumber;

      return Object.assign({}, state, {
        issuesToShow: state.issues.slice(startSlice, endSlice),
        activePage: action.index
      });
      break;
    default:
      return state;
  }
}

export {inventory as rootReducer};
