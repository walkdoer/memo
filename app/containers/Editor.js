// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import moment from 'moment';
import LogEditor from '../components/LogEditor';
import Calendar from '../components/Calendar';
import { openLog } from '../actions/log';

const { Content, Sider } = Layout;

class Editor extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAppSiderColappsed !== this.props.isAppSiderColappsed) {
      setTimeout(() => {
        this.editor.layout();
      }, 200);
    }
  }

  openLog = (date) => {
    this.props.openLog(date);
  };

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
        <Content>
          <LogEditor
            log={this.props.fileContent}
            onEditorReady={() => this.openLog(moment())}
            ref={editor => { this.editor = editor; }}
          />
        </Content>
        <Sider
          id="editorSider"
          width={250}
          style={{
            background: '#FFF',
            borderLeft: '1px solid #d4d4d4',
          }}
        >
          <Calendar onSelect={this.openLog}/>
        </Sider>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAppSiderColappsed: state.app.collapsed,
    fileContent: state.log.fileContent,
    filepath: state.log.filepath,
    logError: state.log.error,
    logLoading: state.log.loading,
  };
}

function mapDispathToProps(dispatch) {
  return {
    openLog(date) {
      dispatch(openLog(date));
    }
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Editor);
