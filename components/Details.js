'use strict';

import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, Form, FormGroup, Col, ControlLabel, Panel} from 'react-bootstrap';

export default (props) => {
  if(props.issue) {
    const {id, date, environment, user, description, reasonForTheError, isBlocker,
      solution, handledBy, category, status} = props.issue;
    return (
      <div id='detailsWrapper'>
      <Panel header={<h3>Details</h3>}>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Id
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='Id'
                value={id}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Date
            </Col>
            <Col md={2}>
              <input className='form-control' readOnly type='text'
                value={date}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Environment
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={environment}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              User
            </Col>
            <Col md={4}>
              <input className='form-control' readOnly type='text'
                value={user}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Description
            </Col>
            <Col md={5}>
              <textarea className='form-control' readOnly
                value={description}></textarea>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Reason
            </Col>
            <Col md={reasonForTheError && reasonForTheError.length > 3 ? 5 : 1}>
              <input className='form-control' readOnly type='text'
                value={reasonForTheError}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Blocker
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={isBlocker}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Solution
            </Col>
            <Col md={5}>
              <textarea className='form-control' readOnly
                value={solution}></textarea>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Handled
            </Col>
            <Col md={2}>
              <input className='form-control' readOnly type='text'
                value={handledBy}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Category
            </Col>
            <Col md={2}>
              <input className='form-control' readOnly type='text'
                value={category}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Status
            </Col>
            <Col md={2}>
              <input className='form-control' readOnly type='text'
                value={status}></input>
            </Col>
          </FormGroup>
        </Form>
        </Panel>
      </div>
    );
  }
  return <div style={{display: 'hidden'}}></div>;
}
