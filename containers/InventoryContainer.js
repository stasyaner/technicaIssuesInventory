'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Inventory from '../components/Inventory';
import Pagination from '../components/Pagination';
import {addIssue, removeIssue, editIssue, setActivePageAction}
  from '../actions';

class InventoryContainer extends Component{
  render() {
    return (
      <div>
        <Inventory issues={this.props.issuesToShow} />
        <Pagination
          activePage={this.props.activePage}
          pageNumber={this.props.pageNumber}
          pagesToShow={this.props.pagesToShow}
          setActivePage={this.props.setActivePage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
    issuesToShowNumber: state.issuesToShowNumber,
    issuesToShow: state.issuesToShow,
    pageNumber: state.pageNumber,
    activePage: state.activePage,
    pagesToShow: state.pagesToShow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePage: (index) => dispatch(setActivePageAction(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
  (InventoryContainer);
