const { getTransportationFactoryMethod } = require('./factory');

function run() {
  const x = getTransportationFactoryMethod('car');
  console.log(`Got: ${x.getDescription()}`);
}

module.exports = {
  run,
};
