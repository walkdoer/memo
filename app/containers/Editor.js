// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
    if (nextProps.params.date !== this.props.params.date) {
      this.openLog(nextProps.date);
    }
  }


  openLog = (date) => {
    this.props.openLog(date);
  };

  routeLog = (date) => {
    this.props.router.push(`/logEditor/${date.format('YYYY-MM-DD')}`);
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
        <Content>
          <LogEditor
            log={this.props.fileContent}
            onEditorReady={() => this.openLog(this.props.date)}
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
          <Calendar value={this.props.date} onSelect={this.routeLog}/>
        </Sider>
      </Layout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let date;
  if (ownProps.params && ownProps.params.date) {
    date = moment(ownProps.params.date);
  } else {
    date = moment();
  }
  return {
    date,
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

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Editor));
