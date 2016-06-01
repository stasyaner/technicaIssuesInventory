'use strict';

import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, Col, ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router';

//have to do this not Stateless (Presentational, Pure) component to be universal
export default class ModalForm extends Component{
  constructor() {
    super(...arguments);

    if(this.props.issue) {
      this.state = {
        date: this.props.issue.date,
        user: this.props.issue.user,
        description: this.props.issue.description,
        reasonForTheError: this.props.issue.reasonForTheError,
        solution: this.props.issue.solution,
        handledBy: this.props.issue.handledBy
      }
    }

  }

  handleChange(input, value) {
    this.setState({
      [input]: value
    });
  }

  componentDidMount() {
    if(this.props.issue) {
      document.forms[0].environment.value = this.props.issue.environment;
      document.forms[0].isBlocker.value = this.props.issue.isBlocker;
      document.forms[0].category.value = this.props.issue.category;
      document.forms[0].status.value = this.props.issue.status;
    }
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form
          horizontal
          onSubmit={
            (event) => {
              event.preventDefault();
              this.props.processIssue({
                id: this.props.issueId || 0,
                date: event.target.date.value,
                environment: event.target.environment.value,
                user: event.target.user.value,
                description: event.target.description.value,
                reasonForTheError: event.target.reasonForTheError.value,
                isBlocker: event.target.isBlocker.value,
                solution: event.target.solution.value,
                handledBy: event.target.handledBy.value,
                category: event.target.category.value,
                status: event.target.status.value
              });
              this.props.toggleModal();
            }
          }>
          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Date
            </Col>
            <Col md={4}>
              <input name='date' className='form-control' type='date'
                required
                value={this.props.issue ? this.state.date : null}
                onChange={
                  (event) => {
                    event.preventDefault();
                    this.handleChange(event.target.name, event.target.value)
                  }
                }>
              </input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Environment
            </Col>
            <Col md={3}>
            <select name='environment' className='form-control' type='select'>
              <option value='UAT'>UAT</option>
              <option value='PROD'>PROD</option>
              <option value='DEV'>DEV</option>
            </select>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              User
            </Col>
            <Col md={6}>
              <input name='user' className='form-control' type='text'
                required
                value={this.props.issue ? this.state.user : null}
                onChange={
                  (event) => {
                    event.preventDefault();
                    this.handleChange(event.target.name, event.target.value)
                  }
              }></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Description
            </Col>
            <Col md={7}>
              <textarea name='description' className='form-control'
                required
                value={this.props.issue ? this.state.description : null}
                onChange={
                  (event) => {
                    event.preventDefault();
                    this.handleChange(event.target.name, event.target.value)
                  }
              }></textarea>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Reason
            </Col>
            <Col md={6}>
              <input name='reasonForTheError' className='form-control' type='text'
                value={this.props.issue ? this.state.reasonForTheError : null}
                onChange={
                  (event) => {
                    event.preventDefault();
                    this.handleChange(event.target.name, event.target.value)
                  }
              }></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Blocker
            </Col>
            <Col md={3}>
              <select name='isBlocker' className='form-control' type='select'>
                <option value='n/a'>n/a</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Solution
            </Col>
            <Col md={7}>
              <textarea name='solution' className='form-control'
              value={this.props.issue ? this.state.solution : null}
              onChange={
                (event) => {
                  event.preventDefault();
                  this.handleChange(event.target.name, event.target.value)
                }
              }></textarea>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Handled
            </Col>
            <Col md={3}>
              <input name='handledBy' className='form-control' type='text'
                required
                value={this.props.issue ? this.state.handledBy : null}
                onChange={
                  (event) => {
                    event.preventDefault();
                    this.handleChange(event.target.name, event.target.value)
                  }
              }></input>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Category
            </Col>
            <Col md={3}>
              <select name='category' className='form-control' type='select'>
                <option value='Issue'>Issue</option>
                <option value='InQuiry'>InQuiry</option>
              </select>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} md={2}>
              Status
            </Col>
            <Col md={3}>
              <select name='status' className='form-control' type='select'>
                <option value='Resolved'>Resolved</option>
                <option value='InProgress'>InProgress</option>
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
}
