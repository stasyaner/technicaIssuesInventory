'use strict';

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import ModalForm from '../components/ModalForm';
import {toggleModalFormAction, editIssueAction} from '../actions';

class EditIssueContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    document.title += ' -- Edit The Issue';
    return (
      <ModalForm
        issue={this.props.issueToEdit}
        issueId={this.props.issueToEdit.Id}
        processIssue={this.props.editIssue}
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
      showModalForm: state.showModalForm,
      issueToEdit: state.issuesToShow[ownProps.params.issueId]
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      editIssue: (issue) => dispatch(editIssueAction(issue)),
      toggleModalForm: () => dispatch(toggleModalFormAction())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)
    (EditIssueContainer);
