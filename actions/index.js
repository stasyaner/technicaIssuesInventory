'use strict';

export const ADD_ISSUE = 'ADD_ISSUE';
export const REMOVE_ISSUE = 'REMOVE_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const TOGGLE_ADD_ISSUE_MODAL = 'TOGGLE_ADD_ISSUE_MODAL';

function addIssueAction(issue) {
  const action = {
    type: ADD_ISSUE,
    issue
  }
}
export const addIssue = (issue) => dispatch(addIssueAction(issue));

function editIssueAction(issue) {
  const action = {
    type: EDIT_ISSUE,
    issue
  }
}
export const editIssue = (issue) => dispatch(editIssueAction(issue));

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

function toggleAddIssueModalAction() {
  return {
    type: TOGGLE_ADD_ISSUE_MODAL
  }
}
export {toggleAddIssueModalAction};
