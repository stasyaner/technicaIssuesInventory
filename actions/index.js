'use strict';

export const ADD_ISSUE = 'ADD_ISSUE';
export const REMOVE_ISSUE = 'REMOVE_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const TOGGLE_MODAL_FORM = 'TOGGLE_MODAL_FORM';
export const SEARCH_ISSUE = 'SEARCH_ISSUE';

function addIssueAction(issue) {
  return {
    type: ADD_ISSUE,
    issue
  }
}
export {addIssueAction};

function editIssueAction(issue) {
  return {
    type: EDIT_ISSUE,
    issue
  }
}
export {editIssueAction};

function removeIssueAction(index) {
  return {
    type: REMOVE_ISSUE,
    index
  }
}
export {removeIssueAction};

function setActivePageAction(activePage) {
  return {
    type: SET_ACTIVE_PAGE,
    activePage
  }
}
export {setActivePageAction};

function setActivePageAction(activePage) {
  return {
    type: SET_ACTIVE_PAGE,
    activePage
  }
}
export {setActivePageAction};

function searchIssueAction(searchText) {
  return {
    type: SEARCH_ISSUE,
    searchText
  }
}
export {searchIssueAction};

function toggleModalFormAction() {
  return {
    type: TOGGLE_MODAL_FORM
  }
}
export {toggleModalFormAction};
