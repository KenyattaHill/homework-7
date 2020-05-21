const fs = require('fs');

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) reject(err);
      resolve();
    })
  })

module.exports = writeFile;