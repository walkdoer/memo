import co from 'co';
import fs from 'co-fs';
import path from 'path';

import {
  START_OPEN_LOG,
  OPEN_LOG_SUCCESS,
  OPEN_LOG_ERROR,
} from '../constants/log';
import preference from '../utils/preference';

const logFolder = preference.get('editor.logFolder');

const startOpenLog = (payload) => ({ type: START_OPEN_LOG, payload });
const openLogSuccess = (payload) => ({ type: OPEN_LOG_SUCCESS, payload });
const openLogError = (payload) => ({ type: OPEN_LOG_ERROR, payload });

export function openLog(date) {
  return (dispatch) => {
    const filepath = path.resolve(logFolder, `${date.format('YYYY/M/D')}.md`);
    console.log(filepath);
    dispatch(startOpenLog(filepath));
    return co(function *() {
      return yield fs.readFile(filepath, 'utf8');
    }).then(
      (fileContent) => dispatch(openLogSuccess(fileContent)),
      (err) => {
        if (err.code === 'ENOENT') {
          return dispatch(openLogSuccess(''));
        }
        return dispatch(openLogError(err));
      }
    );
  };
}

export function openLogByDate(date) {

}