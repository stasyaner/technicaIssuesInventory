'use strict';

export const ADD_ISSUE = 'ADD_ISSUE';
export const REMOVE_ISSUE = 'REMOVE_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

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
  const action = {
    type: REMOVE_ISSUE,
    index
  }
}
export const removeIssue = (index) => dispatch(removeIssueAction(index));

function setActivePageAction(index) {
  return {
    type: SET_ACTIVE_PAGE,
    index
  }
}
export {setActivePageAction};// = (index) => dispatch(setActivePageAction(index));
