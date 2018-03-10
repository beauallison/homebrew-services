const run = require('../run');

module.exports = async (service) => {
  try {
    const output = await run(['start', service]);
    const alreadyStarted = output.match('already') ? ' already' : '';
    return { status: `${service}${alreadyStarted} started` };
  } catch (err) {
    throw new Error(`Failed to start ${service}`);
  }
};
