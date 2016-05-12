'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Inventory from '../components/Inventory';
import Pagination from '../components/Pagination';
import Details from '../components/Details';
import {addIssue, removeIssue, editIssue, setActivePageAction}
  from '../actions';

class InventoryContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    return (
      <div>
        <Inventory issues={this.props.issuesToShow} />
        <Pagination
          activePage={this.props.activePage}
          pageNumber={this.props.pageNumber}
          pagesToShow={this.props.pagesToShow}
          setActivePage={this.props.setActivePage}/>
        <Details issue={this.props.issueId &&
          this.props.issueId < this.props.issuesToShow.length &&
          this.props.issuesToShow[this.props.issueId]} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activePage: state.activePage,
    issuesToShowNumber: state.issuesToShowNumber,
    issuesToShow: state.issuesToShow,
    pageNumber: state.pageNumber,
    activePage: state.activePage,
    pagesToShow: state.pagesToShow,
    issueId: ownProps.params.issueId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePage: (index) => dispatch(setActivePageAction(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
  (InventoryContainer);
