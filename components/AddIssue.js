'use strict';

import React from 'react';
import {Modal, Button, Form, FormGroup, Col, ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router';

export default (props) => {
  return (
    <Modal show={props.showAddIssueModal} onHide={props.toggleAddIssueModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add an issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Id
          </Col>
          <Col md={2}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Date
          </Col>
          <Col md={3}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Environment
          </Col>
          <Col md={3}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            User
          </Col>
          <Col md={6}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Description
          </Col>
          <Col md={7}>
            <textarea className='form-control'></textarea>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Reason
          </Col>
          <Col md={6}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Blocker
          </Col>
          <Col md={3}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Solution
          </Col>
          <Col md={7}>
            <textarea className='form-control'></textarea>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Handled
          </Col>
          <Col md={3}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Category
          </Col>
          <Col md={3}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Status
          </Col>
          <Col md={3}>
            <input className='form-control' type='text'></input>
          </Col>
        </FormGroup>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.toggleAddIssueModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
