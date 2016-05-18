'use strict';

import React from 'react';
import {Panel} from 'react-bootstrap';

export default (props) => {
  return (
    <div id='pieChartWrapper'>
      <Panel header={<h3>PieCharts</h3>}>
        <div id='pieChart'>
          <div className='ct-chart-issue-statuses'></div>
          <div className='ct-chart-issue-dates'></div>
          <div className='ct-chart-issue-environments'></div>
        </div>
      </Panel>
    </div>
  );
}
