import path from 'path';

module.exports = function generateDefaultPreferences({
  userHomePath
} = {}) {
  return {
    logFolder: path.resolve(userHomePath, './memo/logs'),
  };
};
