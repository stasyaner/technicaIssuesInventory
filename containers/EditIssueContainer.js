'use strict';

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import EditIssue from '../components/EditIssue';
import {toggleEditIssueModalAction, editIssueAction} from '../actions';

class EditIssueContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    document.title += ' -- Edit The Issue';
    return (
      <EditIssue />
    )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      numberOfIssues: state.issues.length,
      showAddIssueModal: state.showAddIssueModal
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addIssue: (issue) => dispatch(addIssueAction(issue)),
      toggleAddIssueModal: () => dispatch(toggleAddIssueModalAction())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)
    (EditIssueContainer);
