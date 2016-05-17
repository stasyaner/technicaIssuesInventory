'use strict';

import React from 'react';
import {Navbar,Glyphicon,
  NavItem, Nav, Button, FormGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router';

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
          <li key='addIssue'>
            <Link to='/addIssue'>
              <Glyphicon glyph='plus'/>
              Add an issue
            </Link>
          </li>
          <li key='xlsxExport'>
            <a href='' onClick={(event) => {
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
                a.href = window.URL.createObjectURL(blob);
                a.download = 'TechnicalIssuesInventory.xlsx';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              })
              .catch((err) => {
                alert('We are sorry, there was some error fetching the excel sheet');
              })
            }}>
                <Glyphicon glyph='export'/>
                Export in excel
            </a>
          </li>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type='text' placeholder="Search" />
          </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
