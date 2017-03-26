// @flow
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import EditorPreference from '../components/EditorPreference';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Preference extends Component {
  render() {
    return (
      <Layout
        className="container-Preference"
        style={{
          height: '100%',
          background: '#FFF',
        }}
      >
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="inline" defaultSelectedKeys={['editor']} style={{ height: '100%' }}>
            <Menu.Item key="editor">
              <Icon type="edit" />
              <span className="nav-text">Editor</span>
            </Menu.Item>
            <Menu.Item key="reports">
              <Icon type="line-chart" />
              <span className="nav-text">Reports</span>
            </Menu.Item>
            <Menu.Item key="about">
              <Icon type="smile-o" />
              <span className="nav-text">About</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '10px', height: '100%', overflow: 'auto' }}>
          <EditorPreference />
        </Content>
      </Layout>
    );
  }
}
