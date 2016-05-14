'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DeleteIssue from '../components/DeleteIssue';
//import {setActivePageAction} from '../actions';

class DeleteIssueContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    return <DeleteIssue issueId={this.props.issueId}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issueId: ownProps.params.issueId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //setActivePage: (index) => dispatch(setActivePageAction(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
  (DeleteIssueContainer);
