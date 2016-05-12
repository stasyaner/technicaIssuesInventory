'use strict';

import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon, Form, FormGroup, Col, ControlLabel} from 'react-bootstrap';

export default (props) => {
  if(props.issue) {
    const {Id, Date, Environment, User, Description, ReasonForTheError, IsBlocker,
      Solution, Handledby, Category, Status} = props.issue;
    return (
      <div id='detailsWrapper'>
      <h3>Details</h3>
        <Form horizontal>
          <FormGroup>
            <Col md={2} mdOffset={4}>
              <Button bsStyle='success'>
                <Glyphicon glyph='plus'/>
              </Button>
              {' '}
              <Button bsStyle='info'>
                <Glyphicon glyph='pencil'/>
              </Button>
              {' '}
              <Button bsStyle='danger'>
                <Glyphicon glyph='trash'/>
              </Button>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Id
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='Id'
                value={Id}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Date
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={Date}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Environment
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={Environment}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              User
            </Col>
            <Col md={4}>
              <input className='form-control' readOnly type='text'
                value={User}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Description
            </Col>
            <Col md={5}>
              <textarea className='form-control' readOnly
                value={Description}></textarea>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Reason
            </Col>
            <Col md={ReasonForTheError && ReasonForTheError.length > 3 ? 5 : 1}>
              <input className='form-control' readOnly type='text'
                value={ReasonForTheError}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Blocker
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={IsBlocker}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Solution
            </Col>
            <Col md={5}>
              <textarea className='form-control' readOnly
                value={Solution}></textarea>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Handled by
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={Handledby}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Category
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={Category}></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={1}>
              Status
            </Col>
            <Col md={1}>
              <input className='form-control' readOnly type='text'
                value={Status}></input>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
  return <div style={{display: 'hidden'}}></div>;
}
