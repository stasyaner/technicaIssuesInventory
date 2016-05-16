'use strict';

import React from 'react';
import {Modal, Button, Form, FormGroup, Col, ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router';

export default (props) => {
  return (
    <Modal show={props.showModal} onHide={props.toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add an issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form
        horizontal
        onSubmit={
          (event) => {
            event.preventDefault();
            props.processIssue({
              Id: props.numberOfIssues,
              Date: event.target.date.value,
              Environment: event.target.environment.value,
              User: event.target.user.value,
              Description: event.target.description.value,
              ReasonForTheError: event.target.reasonForTheError.value,
              IsBlocker: event.target.isBlocker.value,
              Solution: event.target.solution.value,
              Handledby: event.target.handledBy.value,
              Category: event.target.category.value,
              Status: event.target.status.value
            });
            props.toggleModal();
          }
        }>
        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Date
          </Col>
          <Col md={3}>
            <input name='date' className='form-control' type='datetime-local'>
            </input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Environment
          </Col>
          <Col md={3}>
          <select name='environment' className='form-control' type='select'>
            <option>UAT</option>
            <option>PROD</option>
            <option>DEV</option>
          </select>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            User
          </Col>
          <Col md={6}>
            <input name='user' className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Description
          </Col>
          <Col md={7}>
            <textarea name='description' className='form-control'></textarea>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Reason
          </Col>
          <Col md={6}>
            <input name='reasonForTheError' className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Blocker
          </Col>
          <Col md={3}>
            <select name='isBlocker' className='form-control' type='select'>
              <option>n/a</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Solution
          </Col>
          <Col md={7}>
            <textarea name='solution' className='form-control'></textarea>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Handled
          </Col>
          <Col md={3}>
            <input name='handledBy' className='form-control' type='text'></input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Category
          </Col>
          <Col md={3}>
            <select name='category' className='form-control' type='select'>
              <option>Issue</option>
              <option>InQuiry</option>
            </select>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} md={2}>
            Status
          </Col>
          <Col md={3}>
            <select name='status' className='form-control' type='select'>
              <option>Resolved</option>
              <option>InProgress</option>
            </select>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col mdOffset={2} md={4}>
            <Button type='submit' style={{width: '100%'}}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </Modal.Body>
    </Modal>
  );
}
