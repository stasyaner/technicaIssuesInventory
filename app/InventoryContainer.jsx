'use strict';

import React, {Component} from 'react';

class InventoryContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      issues: [],
      issuesToShow: 8
    }
  }

  componentDidMount() {
    let issues = JSON.parse(localStorage.getItem('issues'));
    this.setState({
      issues: issues
    });
  }

  render() {
    return (
      this.props.children && React.cloneElement(this.props.children,
        {issues: this.state.issues.slice(-this.state.issuesToShow)})
    );
  }
}

export default InventoryContainer;
