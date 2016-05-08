'use strict';

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

const Inventory = (props) => {
  let tableContent = props.issues.map((issue) => {
		return (<tr>
			<td>{issue.Id}</td>
			<td>{issue.Date}</td>
			<td>{issue.Environment}</td>
			<td>{issue.User}</td>
			<td>{issue.Description}</td>
			<td>{issue.ReasonForTheError}</td>
			<td>{issue.IsBlocker}</td>
			<td>{issue.Solution}</td>
			<td>{issue.Handledby}</td>
			<td>{issue.Category}</td>
			<td>{issue.Status}</td>
		</tr>);
	});
  return (
    <Table responsive striped bordered condensed hover id='issuesTable'>
			<thead>
			<tr>
				<th width={20}>#</th>
				<th>Date</th>
				<th>Env</th>
				<th>User</th>
				<th>Description</th>
				<th>Reason for the error</th>
				<th>Is Blocker</th>
				<th>Solution</th>
				<th>Handled by</th>
				<th>Category</th>
				<th>Status</th>
			</tr>
			</thead>
			<tbody>
				{tableContent}
			</tbody>
		</Table>
  );
}

export default Inventory;
