// @flow
import React, { Component } from 'react';
import moment from 'moment';
import { Calendar } from 'antd';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

// import { Link } from 'react-router';


export default class DatePicker extends Component {
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  render() {
    return (
      <div className="cmp-Calendar">
        <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
      </div>
    );
  }
}
