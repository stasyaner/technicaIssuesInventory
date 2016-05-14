'use strict';

import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default (props) => {
  return (
    <Alert bsStyle='danger'>
      <h4>Issue: {props.issueId}</h4>
      <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
      <p>
        <Button bsStyle='danger'>Take this action</Button>
        <span> or </span>
        <Button>Hide Alert</Button>
      </p>
    </Alert>
  );
}
