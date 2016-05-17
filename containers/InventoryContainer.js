'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Inventory from '../components/Inventory';
import Pagination from '../components/Pagination';
import Menu from '../components/Menu';
import {setActivePageAction, removeIssueAction, searchIssueAction} from '../actions';

class InventoryContainer extends Component{
  constructor(){
    super(...arguments);
  }

  render() {
    document.title = 'Technical Issues Inventory';
    return (
      <div>
        <Menu searchIssue={this.props.searchIssue} />
        <Inventory
          issuesToShow={this.props.issuesToShow}
          activePage={this.props.activePage}
          issuesToShowNumber={this.props.issuesToShowNumber}
          removeIssue={this.props.removeIssue}/>
        <Pagination
          activePage={this.props.activePage}
          numberOfPages={this.props.numberOfPages}
          pagesToShow={this.props.pagesToShow}
          setActivePage={this.props.setActivePage}/>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activePage: state.activePage,
    issuesToShowNumber: state.issuesToShowNumber,
    issuesToShow: state.issuesToShow,
    numberOfPages: state.numberOfPages,
    activePage: state.activePage,
    pagesToShow: state.pagesToShow,
    issueId: ownProps.params.issueId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePage: (activePage) => dispatch(setActivePageAction(activePage)),
    removeIssue: (index) => dispatch(removeIssueAction(index)),
    searchIssue: (searchText) => dispatch(searchIssueAction(searchText))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
  (InventoryContainer);
