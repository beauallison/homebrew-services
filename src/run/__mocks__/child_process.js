const EventEmitter = require('events');

const { Readable } = require('stream');
const fixtures = require('../../../fixtures');

const newReadable = data =>
  Readable({
    read() { if (data) this.emit('data', data); this.emit('close'); },
  });

module.exports = {
  spawn: (brew, args) => {
    const child = new EventEmitter();

    const { data, isError } = fixtures[args.join(' ')];
    child.stderr = newReadable(isError ? data : undefined);
    child.stdout = newReadable(!isError ? data : undefined);

    child.stderr.on('close', () => child.emit('close'));
    child.stdout.on('close', () => child.emit('close'));
    return child;
  },
};
