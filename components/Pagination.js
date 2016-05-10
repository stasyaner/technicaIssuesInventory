'use strict';

import React, {Component, PropTypes} from 'react';
import {Pagination} from 'react-bootstrap';

export default (props) => {
  // handleSelect(event, selectedEvent) {
  //   this.setState({
  //    activePage: selectedEvent.eventKey
  //   });
  //   this.props.tableReflectPage(selectedEvent.eventKey);
  // }
  return (
    <div className='text-center'>
     <Pagination
       prev
       next
       first
       last
       ellipsis
       boundaryLinks
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
