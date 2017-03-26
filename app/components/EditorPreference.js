// @flow
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
import './EditorPreference.less';


class EditorPreference extends Component {
  handleSubmit = () => {

  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="cmp-EditorPreference">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="Log Folder Location"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 18 }}
          >
            {getFieldDecorator('logFolderLocation', {
              rules: [{ required: true, message: 'Log Folder should choose' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 8, offset: 0 }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedEditorPreference = Form.create()(EditorPreference);

export default WrappedEditorPreference;
