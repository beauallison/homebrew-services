const fs = require('fs');

const readFixtures = (filename) => {
  const path = `${__dirname}/${filename}.txt`;
  return fs.readFileSync(path, 'utf8');
};

module.exports = ['list', 'start'].reduce((acc, key) =>
  acc.set(key, readFixtures(key)), new Map());
