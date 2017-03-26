import React, { Component } from 'react';
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
        language: 'javascript'
      });
    });
  }

  componentWillUnmount() {
    this.monacoEditor.destroy();
  }

  render() {
    return (
      <div className="logEditor">
        <div className="container" ref={c => { this.editorContainer = c; }} />
      </div>
    );
  }
}
