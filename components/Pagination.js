'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Pagination} from 'react-bootstrap';

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
        bsSize="small"
        items={props.pageNumber}
        maxButtons={props.pagesToShow}
        activePage={props.activePage}
        onSelect={(event, selectedEvent) => {
          event.preventDefault();
          props.setActivePage(selectedEvent.eventKey)}}
      />
    </div>
  );
}
