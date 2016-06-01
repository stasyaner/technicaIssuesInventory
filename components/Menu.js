'use strict';

import React from 'react';
import Promise from 'es6-promise';
import fetch from 'fetch-ie8';
import {Navbar, Glyphicon,
  NavItem, Nav, Button, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

function handleXlsxExportClick(event) {
  event.preventDefault();
  let newFetch;
  if (window.fetch) {
    newFetch = window.fetch;
  }
  else {
    newFetch = fetch;
  }

  newFetch('/xlsxExport', {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: localStorage.getItem('issues')
  })
  .then((response) => response.blob())
  .then((responseData)=> {
    let blob = new Blob([responseData], {
      'type': 'application/vnd.openxmlformats' +
        '-officedocument.spreadsheetml.sheet'
    });
    if(navigator.appVersion.toString().indexOf('.NET') > 0) {
      window.navigator.msSaveOrOpenBlob(blob, 'TechnicalIssuesInventory.xlsx');
    }
    else {
      let a = document.createElement('a');
      a.style.display = 'none';
      a.setAttribute('href', URL.createObjectURL(blob));
      a.setAttribute('download', 'TechnicalIssuesInventory.xlsx');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
