'use strict';

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router';

export default (props) => {
  let i = 0;
  let tableContent = props.issues.map((issue) => {
		return (
      <tr>
  			<td><Link to={'/' + i}>{issue.Id}</Link></td>
  			<td><Link to={'/' + i}>{issue.Date}</Link></td>
  			<td><Link to={'/' + i}>{issue.Environment}</Link></td>
  			<td><Link to={'/' + i}>{issue.User}</Link></td>
  			<td><Link to={'/' + i}>{issue.Description}</Link></td>
  			<td><Link to={'/' + i++}>{issue.Status}</Link></td>
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
  			</tr>
  			</thead>
  			<tbody>
  				{tableContent}
  			</tbody>
  		</Table>
    </div>
  );
}
