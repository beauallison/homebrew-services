const run = require('../run');

module.exports = async ({ service } = {}) => {
  if (!service) throw new Error('Missing input parameter: service');
  try {
    await run(['restart', service]);
    return { status: 'restarted' };
  } catch (err) {
    throw new Error(`Failed to restart ${service}`);
  }
};
