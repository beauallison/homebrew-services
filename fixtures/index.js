const fs = require('fs');

const readFixtures = (filename) => {
  const path = `${__dirname}/${filename}.txt`;
  return fs.readFileSync(path, 'utf8');
};

const fixtures = ['list', 'start_redis', 'start_kafka'];

module.exports = fixtures.reduce((acc, key) =>
  acc.set(`services ${key.replace('_', ' ')}`, readFixtures(key)), new Map());
