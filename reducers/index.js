'use strict';

import * as ActionTypes from '../actions';

function getInitialState() {
  const issues = JSON.parse(localStorage.getItem('issues')) || [];
  const issuesToShowNumber = 8;
  const pagesToShow = 10;
  let numberOfPages = getNumberOfPages(issues.length, issuesToShowNumber);
  let issuesToShow = getIssuesToShow(issues, numberOfPages,
    issuesToShowNumber);

  return {
    issues,
    issuesToShowNumber,
    issuesToShow,
    numberOfPages,
    activePage: numberOfPages,
    pagesToShow,
    showModalForm: true
  };
}

function getIssuesToShow(issues, activePage, issuesToShowNumber) {
  const startSlice = (activePage - 1) * issuesToShowNumber;
  const endSlice = startSlice + issuesToShowNumber;

  return issues.slice(startSlice, endSlice);
}

function getNumberOfPages(numberOfIssues, issuesToShowNumber){
  let numberOfPages = numberOfIssues / issuesToShowNumber;
  if((numberOfIssues % issuesToShowNumber) > 0) {
    numberOfPages = Math.floor(numberOfIssues / issuesToShowNumber) + 1;
  };

  return numberOfPages;
}

const rootReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_PAGE: {
      return Object.assign({}, state, {
        issuesToShow: getIssuesToShow(state.issues, action.activePage,
          state.issuesToShowNumber),
        activePage: action.activePage
      });
      break;
    }

    case ActionTypes.ADD_ISSUE: {
      let newNumberOfPages = state.numberOfPages;
      let newActivePage = state.activePage;

      //Increment the index as we're adding an issue
      action.issue.id++;

      const newIssues = state.issues.concat([action.issue]);
      localStorage.setItem('issues', JSON.stringify(newIssues));

      let newIssuesToShow = getIssuesToShow(newIssues, state.activePage,
        state.issuesToShowNumber);

      if(newIssuesToShow.length === state.issuesToShow.length) {
        newNumberOfPages++;
        newActivePage++;
        newIssuesToShow = getIssuesToShow(newIssues, newActivePage,
          state.issuesToShowNumber);
      }

      return Object.assign({}, state, {
        issues: newIssues,
        issuesToShow: newIssuesToShow,
        numberOfPages: newNumberOfPages,
        activePage: newActivePage
      });
      break;
    }

    case ActionTypes.EDIT_ISSUE: {

      const newIssues = [...state.issues.slice(0, action.issue.id - 1),
        action.issue, ...state.issues.slice(action.issue.id)];
      localStorage.setItem('issues', JSON.stringify(newIssues));

      const newIssuesToShow = getIssuesToShow(newIssues, state.activePage,
        state.issuesToShowNumber);

      return Object.assign({}, state, {
        issues: newIssues,
        issuesToShow: newIssuesToShow
      });
      break;
    }

    case ActionTypes.TOGGLE_MODAL_FORM: {
      return Object.assign({}, state, {
        showModalForm: !state.showModalForm
      });
      break;
    }

    case ActionTypes.REMOVE_ISSUE: {
      let newNumberOfPages = state.numberOfPages;
      let newActivePage = state.activePage;

      //Equal to: state.issues.slice(0, action.index)
      //  .concat(state.issues.slice(action.index + 1))
      const newIssues = [...state.issues.slice(0, action.index),
        ...state.issues.slice(action.index + 1)];
      localStorage.setItem('issues', JSON.stringify(newIssues));

      let newIssuesToShow = getIssuesToShow(newIssues, state.activePage,
        state.issuesToShowNumber);

      if(newIssuesToShow.length == 0) {
        newNumberOfPages--;
        newActivePage--;
        newIssuesToShow = getIssuesToShow(newIssues, newActivePage,
          state.issuesToShowNumber);
      }

      return Object.assign({}, state, {
        issues: newIssues,
        issuesToShow: newIssuesToShow,
        numberOfPages: newNumberOfPages,
        activePage: newActivePage
      });
      break;
    }

    //TODO: make this work via router
    case ActionTypes.SEARCH_ISSUE: {

      const newActivePage = 1;

      const newIssues = JSON.parse(localStorage.getItem('issues'))
        .filter((item) => {
          if((item.date.indexOf(action.searchText) != -1)
            || (item.user.indexOf(action.searchText) != -1)
            || (item.description.indexOf(action.searchText) != -1)
            || (item.description.indexOf(action.searchText) != -1))
            return true;
          return false;
        });

      const newNumberOfPages = getNumberOfPages(newIssues.length,
        state.issuesToShowNumber);

      const newIssuesToShow = getIssuesToShow(newIssues, newActivePage,
        state.issuesToShowNumber);

      return Object.assign({}, state, {
        issues: newIssues,
        issuesToShow: newIssuesToShow,
        numberOfPages: newNumberOfPages,
        activePage: newActivePage
      });
      break;
    }

    default: {
      return state;
      break;
    }
  }
}

export {rootReducer};
