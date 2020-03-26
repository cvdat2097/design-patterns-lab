const { FirstLayer, MidLayer, LastLayer } = require('./class');

function run() {
  const l3 = new LastLayer();
  const l2 = new MidLayer(l3);
  const l1 = new FirstLayer(l2);

  l1.action(2);
  l2.action();
}

module.exports = {
  run,
};
