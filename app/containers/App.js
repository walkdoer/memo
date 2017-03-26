// @flow
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import './App.less';

const { Header, Sider, Content } = Layout;

export default class App extends Component {
  static propTypes = {
    children: HTMLElement
  };
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout id="app-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={75}
        >
          <div className="logo">
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
              <Link to="/logEditor">
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
          </Menu>
        </Sider>
        <Layout style={{ overflow: 'hidden' }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
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
