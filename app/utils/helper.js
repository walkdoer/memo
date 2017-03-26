import fs from 'fs';

export function isFolderExist(pathStr) {
  return new Promise((resolve) => {
    fs.lstat(pathStr, (err, stats) => {
      if (err) {
        return resolve(false);
      }
      if (stats.isDirectory() || stats.isSymbolicLink()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}


export function isFileExist(pathStr) {
  return new Promise((resolve) => {
    fs.lstat(pathStr, (err, stats) => {
      if (err) {
        return resolve(false);
      }
      if (stats.isFile()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export function isFileExistSync(pathStr) {
  try {
    const stats = fs.lstatSync(pathStr);
    return stats.isFile();
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false;
    }
    throw e;
  }
}


/**
 * load json file
 * @param {String} filePath json file path
 * @return {Promise} Promise Object
 */
export function loadJSONFile(filePath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          return reject(err);
        }
        try {
          resolve(JSON.parse(fileContent));
        } catch (e) {
          reject(e);
        }
      });
    } else {
      resolve(null);
    }
  });
}

/**
 * load json file sync
 * @param {String} filePath json file path
 * @return {Promise} Promise Object
 */
export function loadJSONFileSync(filePath) {
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  }
  return null;
}
