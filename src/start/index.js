const run = require('../run');

module.exports = async ({ service }) => {
  try {
    const output = await run(['start', service]);
    const status = output.match('already') ? 'already started' : 'started';
    return { status };
  } catch (err) {
    throw new Error(`Failed to start ${service}`);
  }
};
