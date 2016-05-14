'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Details from '../components/Details';

class DetailsContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    return (
      <Details issue={this.props.issueId &&
        this.props.issueId < this.props.issuesToShow.length &&
        this.props.issuesToShow[this.props.issueId]} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issuesToShow: state.issuesToShow,
    issueId: ownProps.params.issueId
  }
}

export default connect(mapStateToProps)(DetailsContainer);
