import path from 'path';
import assert from 'assert';

export default function ({ userHomePath }) {
  assert.notEqual(userHomePath, undefined, 'userHomePath can not be undefined');
  return {
    editor: {
      logFolder: path.resolve(userHomePath, './memo/logs'),
    }
  };
}
