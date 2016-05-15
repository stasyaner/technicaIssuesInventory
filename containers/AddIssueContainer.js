'use strict';

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import AddIssue from '../components/AddIssue';
import {toggleAddIssueModalAction} from '../actions';

class AddIssueContainer extends Component{
  constructor(){
    super(...arguments);
  }
  
  render() {
    document.title += ' -- Add An Issue';
    return (
      <AddIssue
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
    showAddIssueModal: state.showAddIssueModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddIssueModal: () => dispatch(toggleAddIssueModalAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
  (AddIssueContainer);
