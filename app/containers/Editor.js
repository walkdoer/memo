// @flow
import React, { Component } from 'react';
import { Layout } from 'antd';
import LogEditor from '../components/LogEditor';
import Calendar from '../components/Calendar';

const { Content, Sider } = Layout;

export default class Editor extends Component {
  render() {
    return (
      <Layout
        className="container-Editor"
        style={{
          height: '100%',
          overflow: 'hidden',
          background: '#FFF',
        }}
      >
        <Content><LogEditor /></Content>
        <Sider
          width={250}
          style={{
            background: '#FFF',
            borderLeft: '1px solid #d4d4d4',
          }}
        >
          <Calendar />
        </Sider>
      </Layout>
    );
  }
}
