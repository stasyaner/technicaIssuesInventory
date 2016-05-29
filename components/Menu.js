'use strict';

import React from 'react';
import {Navbar,Glyphicon,
  NavItem, Nav, Button, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

function handleXlsxExportClick(event) {
  event.preventDefault();

  fetch('/xlsxExport', {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: localStorage.getItem('issues')
  })
  .then((response) => response.blob())
  .then((responseData)=> {
    let a = document.createElement('a');
    a.style = 'visibility:hidden';
    let blob = new Blob([responseData], {
      'type': 'application/vnd.openxmlformats' +
        '-officedocument.spreadsheetml.sheet'
    });
    a.href = URL.createObjectURL(blob);
    a.download = 'TechnicalIssuesInventory.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  })
  .catch((err) => {
    alert('We are sorry, there was some error fetching the excel sheet');
  });
}

export default (props) => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>TechnicalIssuesInventory</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/addIssue'>
            <NavItem>
              <Glyphicon glyph='plus'/>
              {' '}Add an issue
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/pieChart'>
            <NavItem>
              <Glyphicon glyph='signal'/>
              {' '}PieCharts
            </NavItem>
          </LinkContainer>
          <NavItem onClick={handleXlsxExportClick}>
            <Glyphicon glyph='export'/>
            {' '}Export in excel
          </NavItem>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl id='searchIssueInput' type='text' placeholder='Search'/>
          </FormGroup>
          {' '}
          <Button onClick={() => {
              props.searchIssue(document
                .getElementById('searchIssueInput').value);
            }
          }>Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
