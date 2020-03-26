const { Observable, Observer } = require('./observer');

function run() {
  const s = new Observable();
  const o1 = new Observer('Observer 1');
  const o2 = new Observer('Observer 2');
  const o3 = new Observer('Observer 3');

  s.subscribe(o1);
  s.subscribe(o2);
  s.subscribe(o3);
  s.unsubscribe(o3);
  s.notifyObservers('CLICK EVENT');
}

module.exports = {
  run,
};
