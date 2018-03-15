const { spawn } = require('child_process');

module.exports = (args) => {
  const child = spawn('brew', ['services', ...args]);

  return new Promise((resolve, reject) => {
    let error = '';
    let data = '';
    child.stdout.on('data', (output) => { data += output; });
    child.stderr.on('data', (output) => { error += output; });
    child.on('close', () => (data ? resolve(data) : reject(error)));
  });
};
