import React, { Component } from 'react';
import $ from 'jquery';
import './LogEditor.less';

export default class LogEditor extends Component {

  componentDidMount() {
    amdRequire(['vs/editor/editor.main'], () => {
      this.monacoEditor = monaco.editor.create(this.editorContainer, {
        value: [
          'function x() {',
          '\tconsole.log("Hello world!");',
          '}'
        ].join('\n'),
        // automaticLayout: true,
        language: 'javascript',
        scrollbar: {
          verticalScrollbarSize: 5,
          horizontalScrollbarSize: 5,
        }
      });
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
    console.log(appSiderWidth, width);
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
