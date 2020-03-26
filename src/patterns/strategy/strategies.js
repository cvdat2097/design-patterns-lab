class StartStrategy {
  start() {
    throw new Error('Start method is not overriden');
  }
}

class MotorBikeStrategy extends StartStrategy {
  start() {
    console.log('Your motorbike is starting');
  }
}

class JetStrategy extends StartStrategy {
  start() {
    console.log('Your super jet is starting');
  }
}

module.exports = {
  MotorBikeStrategy,
  JetStrategy,
};
