import React, { Component } from 'react';
import memoLang from './memo_lang';
import $ from 'jquery';
import './LogEditor.less';

export default class LogEditor extends Component {
  componentDidUpdate() {
    if (this.monacoEditor) {
      this.monacoEditor.setValue(this.props.log);
    }
  }

  componentDidMount() {
    amdRequire(['vs/editor/editor.main'], () => {
      memoLang.init(monaco);
      this.monacoEditor = monaco.editor.create(this.editorContainer, {
        value: this.props.log,
        // automaticLayout: true,
        theme: 'memo-light',
        language: 'memo',
        scrollbar: {
          verticalScrollbarSize: 5,
          horizontalScrollbarSize: 5,
        }
      });
      this.props.onEditorReady(this.monacoEditor);
    });
    window.addEventListener('resize', this.layout);
  }


  componentWillUnmount() {
    this.monacoEditor.destroy();
    window.removeEventListener('resize', this.layout);
  }

  layout = () => {
    const windowWidth = $(window).width();
    const appSiderWidth = $('#appSider').width();
    const editorSiderWidth = $('#editorSider').width();
    const editorHeight = $(this.editorContainer).height();
    const width = windowWidth - appSiderWidth - editorSiderWidth;
    this.monacoEditor.layout({
      height: editorHeight,
      width,
    });
  };

  render() {
    return (
      <div className="logEditor">
        <div
          className="container"
          style={{ width: '100%' }}
          ref={c => { this.editorContainer = c; }}
        />
      </div>
    );
  }
}
