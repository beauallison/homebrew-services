module.exports.convertToMap = (results) => {
  const map = new Map();
  const services = results ? results.split('\n').slice(1) : [];

  return services.reduce((acc, line) => {
    const service = line.match(/\S+/g);
    return service ? acc.set(service[0], service[1]) : acc;
  }, map);
};
