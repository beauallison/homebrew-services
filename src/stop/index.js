const run = require('../run');

module.exports = async ({ service } = {}) => {
  if (!service) throw new Error('Missing input parameter: service');
  try {
    await run(['stop', service]);
    return { status: 'stopped' };
  } catch (err) {
    throw new Error(`Failed to stop ${service}`);
  }
};
