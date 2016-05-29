'use strict';

import React from 'react';
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
    issue = issue || []
    i++;
    let issueIndex = calculateIndex(props.activePage,
      props.issuesToShowNumber, props.issuesToShow.length, i);
		return (
      <tr key={issue.id}>
  			<td><Link to={'/details/' + i}>{issue.id}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.date}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.environment}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.user}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.description}</Link></td>
  			<td><Link to={'/details/' + i}>{issue.status}</Link></td>
        <td>
          <Link to={'/editIssue/' + i}>
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
              if (confirm('The issue will be completely remove.' +
                ' Please confirm.')) {
                props.removeIssue(issueIndex);
              }
            }
          }>
            <OverlayTrigger
              placement='top'
              overlay={deleteTooltip}
              delayShow={150}>
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
