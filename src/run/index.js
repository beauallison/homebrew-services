const { spawn } = require('child_process');

module.exports = (args) => {
  const child = spawn('brew', ['services', ...args]);

  return new Promise((resolve, reject) => {
    let error = '';
    let data = '';
    child.stderr.on('data', (output) => { error += output; });
    child.stderr.on('close', () => reject(error));
    child.stdout.on('data', (output) => { data += output; });
    child.stdout.on('close', () => resolve(data));
  });
};
