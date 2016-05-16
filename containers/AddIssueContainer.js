'use strict';

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import AddIssue from '../components/AddIssue';
import {toggleAddIssueModalAction, addIssueAction} from '../actions';

class AddIssueContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    document.title += ' -- Add An Issue';
    return (
      <AddIssue
        numberOfIssues={this.props.numberOfIssues}
        addIssue={this.props.addIssue}
        showAddIssueModal={this.props.showAddIssueModal}
        toggleAddIssueModal={
          () => {
            this.props.toggleAddIssueModal();
            browserHistory.goBack();
            this.props.toggleAddIssueModal();
          }
        }/>
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
  (AddIssueContainer);
