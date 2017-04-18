// @flow
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';
import { collapse } from '../actions/app';

import './App.less';

const { Header, Sider, Content } = Layout;

class App extends Component {
  static propTypes = {
    children: HTMLElement
  };

  toggle = () => {
    this.props.dispatch(collapse());
  };

  render() {
    return (
      <Layout id="app-layout">
        <Sider
          id="appSider"
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
          collapsedWidth={75}
        >
          <div className="logo" style={{ '-webkit-user-select': 'none', '-webkit-app-region': 'drag' }}>
            <div className="text full">Memo</div>
            <div className="text singleCapital">M</div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`/logEditor/${moment().format('YYYY-MM-DD')}`}>
                <Icon type="edit" />
                <span className="nav-text">Log Editor</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/reports">
                <Icon type="line-chart" />
                <span className="nav-text">Reports</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/preferences">
                <Icon type="setting" />
                <span className="nav-text">Preferences</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              borderBottom: '1px solid #d4d4d4',
              padding: 0,
              '-webkit-user-select': 'none',
              '-webkit-app-region': 'drag'
            }}
          >
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: 0,
              padding: 0,
              background: '#fff',
              height: '100%',
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return state.app;
}

export default connect(mapStateToProps)(App);
