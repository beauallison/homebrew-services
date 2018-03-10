const run = require('../run');

module.exports = async (service) => {
  try {
    const output = await run(['start', service]);
    const alreadyStarted = output.match('already') ? ' already' : '';
    return { status: `${service}${alreadyStarted} started` };
  } catch (error) {
    throw new Error({ status: `Failed to start ${service}`, error });
  }
};
