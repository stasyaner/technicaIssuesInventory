'use strict';

import * as ActionTypes from '../actions';

function getInitialState() {
  const issues = JSON.parse(localStorage.getItem('issues')) || [];
  const issuesToShowNumber = 8;
  const pagesToShow = 10;
  let numberOfPages = issues.length / issuesToShowNumber;
  if((issues.length % issuesToShowNumber) > 0) {
    numberOfPages = Math.floor(issues.length / issuesToShowNumber) + 1;
  };

  const startSlice = (numberOfPages - 1) * issuesToShowNumber;
  const endSlice = startSlice + issuesToShowNumber;
  const issuesToShow = issues.slice((numberOfPages - 1) * issuesToShowNumber);

  return {
    issues,
    issuesToShowNumber,
    issuesToShow,
    numberOfPages,
    activePage: numberOfPages,
    pagesToShow,
    showAddIssueModal: true
  };
}

function getIssuesToShow(issues, activePage, issuesToShowNumber) {
  const startSlice = (activePage - 1) * issuesToShowNumber;
  const endSlice = startSlice + issuesToShowNumber;

  return issues.slice(startSlice, endSlice);
}

const rootReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_PAGE:
      return Object.assign({}, state, {
        issuesToShow: getIssuesToShow(state.issues, action.activePage,
          state.issuesToShowNumber),
        activePage: action.activePage,
        numberOfPages
      });
    case ActionTypes.TOGGLE_ADD_ISSUE_MODAL:
      return Object.assign({}, state, {
        showAddIssueModal: !state.showAddIssueModal
      });
    case ActionTypes.REMOVE_ISSUE:
      //Equal to: state.issues.slice(0, action.index)
      //  .concat(state.issues.slice(action.index + 1))
      let newNumberOfPages = state.numberOfPages;
      let newActivePage = state.activePage;

      const newIssues = [...state.issues.slice(0, action.index),
        ...state.issues.slice(action.index + 1)];

      let newIssuesToShow = getIssuesToShow(newIssues, state.activePage,
        state.issuesToShowNumber);

      if(newIssuesToShow.length == 0) {
        newNumberOfPages--;
        newActivePage--;
        newIssuesToShow = getIssuesToShow(newIssues, newActivePage,
          state.issuesToShowNumber);
      }

      return Object.assign({}, state,{
        issues: newIssues,
        issuesToShow: newIssuesToShow,
        numberOfPages: newNumberOfPages,
        activePage: newActivePage
      });
      break;
    default:
      return state;
  }
}

export {rootReducer};
