const fs = require('fs');
const mappings = require('./mappings');

const readFixtures = (filename) => {
  const path = `${__dirname}/data/${filename}.txt`;
  return fs.readFileSync(path, 'utf8');
};

module.exports = mappings.reduce((acc, { key, command, isError }) => {
  acc[command] = { data: readFixtures(key), isError };
  return acc;
}, {});
