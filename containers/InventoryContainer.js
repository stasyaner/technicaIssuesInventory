'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Inventory from '../components/Inventory';
import Pagination from '../components/Pagination';
import {addIssue, removeIssue, editIssue} from '../actions';

class InventoryContainer extends Component{

  render() {
    return (
      <div>
        <Inventory issues={this.props.issues} />
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state
  }
}

export default connect(mapStateToProps,{
  addIssue,
  removeIssue,
  editIssue
})(InventoryContainer);
