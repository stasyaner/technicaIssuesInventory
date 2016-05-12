'use strict';

import React, {Component, PropTypes} from 'react';
import {Pagination} from 'react-bootstrap';
// import {Link} from 'react-router';
//
// class LinkWrapper extends Component{
//   constructor(){
//     super(...arguments);
//   }
//   render() {
//     return <Link to='/0'>{this.props.children}</Link>;
//   }
// }

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
        items={props.pageNumber}
        maxButtons={props.pagesToShow}
        {/*buttonComponentClass={LinkWrapper}*/}
        activePage={props.activePage}
        onSelect={(eventKey) => {props.setActivePage(eventKey)}}
      />
    </div>
  );
}
