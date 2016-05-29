'use strict';

import React, {Component, PropTypes} from 'react';
import {Pagination} from 'react-bootstrap';
import {Link} from 'react-router';

// class LinkWrapper extends Component{
//   constructor() {
//     super(...arguments);
//   }
//
//   render() {
//     return <Link to={{pathname: '/page/' + this.props.children}}>{this.props.children}</Link>;
//   }
// }
// buttonComponentClass={LinkWrapper}

export default (props) => {
  return (
    <div className='text-center'>
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        bsSize='small'
        items={props.numberOfPages}
        maxButtons={props.pagesToShow}
        activePage={props.activePage}
        onSelect={props.setActivePage}
      />
    </div>
  );
}
