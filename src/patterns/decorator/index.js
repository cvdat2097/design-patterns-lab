const {
  MotorBike,
  MotorBikeWithEngine,
  MotorBikeWithChassis,
  MotorBikeWithWheel,
} = require('./decorators');

class WinnerX extends MotorBike {
  start() {
    console.log('Winner X started!');
  }
}

function run() {
  let winnerX = new WinnerX();
  winnerX = new MotorBikeWithEngine(winnerX);
  winnerX = new MotorBikeWithWheel(winnerX);
  winnerX = new MotorBikeWithChassis(winnerX);

  winnerX.start();
}

module.exports = {
  run,
};
