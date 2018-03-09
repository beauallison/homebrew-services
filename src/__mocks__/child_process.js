const { Readable } = require('stream');
const fs = require('fs');

const readFixtures = (filename) => {
  const path = `${__dirname}/fixtures/${filename}.txt`;
  return fs.readFileSync(path, 'utf8');
};

const fixtures = ['list'].reduce((acc, key) =>
  acc.set(key, readFixtures(key)), new Map());

const newReadable = (data) => {
  const rs = new Readable();

  // eslint-disable-next-line no-underscore-dangle
  rs._read = () => {
    if (data) {
      rs.emit('data', data);
      rs.emit('close');
    }
  };
  return rs;
};

module.exports = {
  spawn: (brew, args) => {
    const command = args[1];
    const data = fixtures.get(command);

    return ({
      stderr: newReadable(command === 'error' ? data : undefined),
      stdout: newReadable(command !== 'error' ? data : undefined),
    });
  },
};
