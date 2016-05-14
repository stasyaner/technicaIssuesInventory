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
          <li key='exportXlsx'>
            <Link to='/exportXlsx'>
                <Glyphicon glyph='export'/>
                Export in excel
            </Link>
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
