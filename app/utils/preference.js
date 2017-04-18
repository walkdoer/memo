import { remote } from 'electron';
import co from 'co';
import fs from 'co-fs';

const memoPreferences = remote.getGlobal('memoPreferences');
const preferencesFilePath = remote.getGlobal('preferencesFilePath');

export default {
  get(key, defaultValue) {
    if (!key) { return; }
    const path = key.split('.');
    let res = memoPreferences;
    for (let i = 0; i < path.length; i++) {
      res = res[path[i]];
      if (!res) {
        break;
      }
    }
    if (res == null) {
      return defaultValue;
    }
    return res;
  },

  set(key, value) {
    if (!key) { return; }
    const path = key.split('.');
    let res = memoPreferences;
    for (let i = 0; i < path.length - 1; i++) {
      res = res[path[i]];
      if (!res) {
        break;
      }
    }
    if (typeof res === 'object') {
      res[path[path.length - 1]] = value;
      return co(function *() {
        yield fs.writeFile(preferencesFilePath, JSON.stringify(memoPreferences, null, 2));
        console.log(`write change to ${preferencesFilePath}`);
      });
    }
    return Promise.reject(new Error(`set preferce ${key}=${value} error`));
  }
};


