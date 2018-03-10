const { Readable } = require('stream');
const fixtures = require('../../../fixtures');

const newReadable = data =>
  Readable({
    read() { if (data) this.emit('data', data); this.emit('close'); },
  });

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
