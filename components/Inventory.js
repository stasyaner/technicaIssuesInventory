'use strict';

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default (props) => {
  let tableContent = props.issues.map((issue) => {
		return (<tr>
			<td><div>{issue.Id}</div></td>
			<td><div>{issue.Date}</div></td>
			<td><div>{issue.Environment}</div></td>
			<td><div>{issue.User}</div></td>
			<td><div>{issue.Description}</div></td>
			<td><div>{issue.Status}</div></td>
		</tr>);
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
