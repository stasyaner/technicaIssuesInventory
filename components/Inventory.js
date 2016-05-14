'use strict';

import React, {Component} from 'react';
import {Table, Button, Glyphicon, Tooltip,
  OverlayTrigger} from 'react-bootstrap';
import {Link} from 'react-router';

function calculateIndex(activePage,
  issuesToShowNumber, issuesToShowLength, i) {
  //271 - (8-3)
  let resultIndex = activePage * issuesToShowNumber -
    (issuesToShowNumber - issuesToShowLength) - (issuesToShowLength - i);

  return resultIndex;
}

export default (props) => {
  let i = -1;
  let editTooltip = <Tooltip id='editTooltip'>edit</Tooltip>;
  let deleteTooltip = <Tooltip id='deleteTooltip'>delete</Tooltip>;

  let tableContent = props.issuesToShow.map((issue) => {
    i++;
    let lala = calculateIndex(props.activePage,
      props.issuesToShowNumber, props.issuesToShow.length, i);
		return (
      <tr>
  			<td><Link to={'/details/' + i}>{issue.Id}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.Date}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.Environment}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.User}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.Description}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.Status}</Link></td>
        <td>
          <Link to={'/edit/' + i}>
            <OverlayTrigger
              placement='top'
              overlay={editTooltip}
              delayShow={300} delayHide={150}>
              <Glyphicon glyph='edit'/>
            </OverlayTrigger>
          </Link>
        </td>
        <td>
          <a href='' onClick={
            (event) => {
              event.preventDefault();
              props.removeIssue(lala);
            }
          }>
            <OverlayTrigger
              placement='top'
              overlay={deleteTooltip}
              delayShow={300} delayHide={150}>
              <Glyphicon glyph='trash' style={{color: '#d9534f'}}/>
            </OverlayTrigger>
          </a>
        </td>
		  </tr>
    );
	});

  return (
    <div id="inventoryWrapper">
      <Table responsive striped bordered condensed hover id='inventory'>
  			<thead>
  			<tr>
  				<th>#</th>
  				<th>Date</th>
  				<th>Env</th>
  				<th>User</th>
  				<th>Description</th>
  				<th>Status</th>
          <th></th>
          <th></th>
  			</tr>
  			</thead>
  			<tbody>
  				{tableContent}
  			</tbody>
  		</Table>
    </div>
  );
}
