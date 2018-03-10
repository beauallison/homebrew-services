const { Readable } = require('stream');
const fixtures = require('../../../fixtures');

const newReadable = data =>
  Readable({
    read() { if (data) this.emit('data', data); this.emit('close'); },
  });

module.exports = {
  spawn: (brew, args) => {
    const { data, isError } = fixtures[args.join(' ')];

    return ({
      stderr: newReadable(isError ? data : undefined),
      stdout: newReadable(!isError ? data : undefined),
    });
  },
};
