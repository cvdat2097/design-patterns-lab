const { JetStrategy, MotorBikeStrategy } = require('./strategies');

class MotorBike {
  constructor() {
    this.startStrategy = new MotorBikeStrategy();
  }

  start() {
    this.startStrategy.start();
  }
}

class Jet {
  constructor() {
    this.startStrategy = new JetStrategy();
  }

  start() {
    this.startStrategy.start();
  }
}

const run = () => {
  const jet = new Jet();
  const motorbike = new MotorBike();

  motorbike.start();
  jet.start();
};

module.exports = {
  run,
};
