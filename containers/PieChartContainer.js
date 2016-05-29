'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Pie} from 'chartist';
import PieChart from '../components/PieChart';

function createIssueStatusesPieChart(issues) {
  let labels = ['Resolved', 'InProgress'];

  let numberOfResolvedIssues = issues.filter(
      (issue) => issue.status.indexOf(labels[0]) != -1).length;

  let numberOfIssues = issues.length;

  let percentOfResolvedIssues = Math.round(
    numberOfResolvedIssues / numberOfIssues * 100 );
  labels[labels.indexOf('Resolved')] += ' ' + percentOfResolvedIssues + '%';

  let percentOfInProgressIssues = (100 - percentOfResolvedIssues);
  labels[labels.indexOf('InProgress')] += ' ' + percentOfInProgressIssues + '%';

  let series = [numberOfResolvedIssues,
    numberOfIssues - numberOfResolvedIssues];

  let pieChartData = {
    labels,
    series
  };

  let pieChartOptions = {
    width: '300px',
    height: '300px'
  };

  new Pie('.ct-chart-issue-statuses', pieChartData, pieChartOptions);
}

function createIssueDatesPieChart(issues) {
  let labels = ['Prior', new Date().getFullYear().toString()];

  let numberOfCurrentYearIssues = issues.filter(
      (issue) => issue.date.indexOf(
        new Date().getFullYear().toString()) != -1).length;

  let numberOfIssues = issues.length;

  let percentOfCurrentYearIssues = Math.round(
    numberOfCurrentYearIssues / numberOfIssues * 100 );

  labels[
    labels.indexOf(new Date().getFullYear().toString())
  ] += ' (' + percentOfCurrentYearIssues + '%)';

  let percentOfPriorYearsIssues = (100 - percentOfCurrentYearIssues);
  labels[labels.indexOf('Prior')] += ' (' + percentOfPriorYearsIssues + '%)';

  let series = [numberOfCurrentYearIssues,
    numberOfIssues - numberOfCurrentYearIssues];

  let pieChartData = {
    labels,
    series
  };

  let pieChartOptions = {
    width: '300px',
    height: '300px'
  };

  new Pie('.ct-chart-issue-dates', pieChartData, pieChartOptions);
}

function createIssueEnvironmentsPieChart(issues) {
  let labels = ['PROD', 'UAT/DEV'];

  let numberOfProdIssues = issues.filter(
      (issue) => issue.environment.indexOf('PROD') != -1).length;

  let numberOfIssues = issues.length;

  let percentOfProdIssues = Math.round(
    numberOfProdIssues / numberOfIssues * 100 );

  labels[labels.indexOf('PROD')] += ' (' + percentOfProdIssues + '%)';

  let percentOfUatDevIssues = (100 - percentOfProdIssues);
  labels[labels.indexOf('UAT/DEV')] += ' (' + percentOfUatDevIssues + '%)';

  let series = [numberOfProdIssues,
    numberOfIssues - numberOfProdIssues];

  let pieChartData = {
    labels,
    series
  };

  let pieChartOptions = {
    width: '300px',
    height: '300px'
  };

  new Pie('.ct-chart-issue-environments', pieChartData, pieChartOptions);
}

class PieChartContainer extends Component{
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    createIssueStatusesPieChart(this.props.issues);
    createIssueDatesPieChart(this.props.issues);
    createIssueEnvironmentsPieChart(this.props.issues);
  }

  render() {
    document.title += ' -- PieCharts';
    return (
      <PieChart />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)
  (PieChartContainer);
