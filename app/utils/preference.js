import { remote } from 'electron';

const memoPreferences = remote.getGlobal('memoPreferences');

export default {
  get(key) {
    if (!key) { return; }
    const path = key.split('.');
    let res = memoPreferences;
    for (let i = 0; i < path.length; i++) {
      res = res[path[i]];
      if (!res) {
        break;
      }
    }
    return res;
  },
};


