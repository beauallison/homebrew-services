const run = require('../run');
const { convertToMap } = require('./utils');

module.exports = async () => {
  const output = await run(['list']);
  return { services: convertToMap(output) };
};
