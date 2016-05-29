'use strict';

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import ModalForm from '../components/ModalForm';
import {toggleModalFormAction, addIssueAction} from '../actions';

class AddIssueContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    document.title += ' -- Add An Issue';
    return (
      <ModalForm
        issueId={this.props.numberOfIssues}
        processIssue={this.props.addIssue}
        showModal={this.props.showModalForm}
        toggleModal={
          () => {
            this.props.toggleModalForm();
            browserHistory.goBack();
            this.props.toggleModalForm();
          }
        }/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    numberOfIssues: state.issues.length,
    showModalForm: state.showModalForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIssue: (issue) => dispatch(addIssueAction(issue)),
    toggleModalForm: () => dispatch(toggleModalFormAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
  (AddIssueContainer);
