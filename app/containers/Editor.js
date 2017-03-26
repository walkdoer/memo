// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import LogEditor from '../components/LogEditor';
import Calendar from '../components/Calendar';

const { Content, Sider } = Layout;

class Editor extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAppSiderColappsed !== this.props.isAppSiderColappsed) {
      setTimeout(() => {
        this.editor.layout();
      }, 200);
    }
  }

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
        <Content><LogEditor ref={editor => this.editor = editor}/></Content>
        <Sider
          id="editorSider"
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

function mapStateToProps(state) {
  return {
    isAppSiderColappsed: state.app.collapsed
  };
}

export default connect(
  mapStateToProps
)(Editor);
