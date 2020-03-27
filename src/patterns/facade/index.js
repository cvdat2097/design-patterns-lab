class ComplexBike {
  startEngine() {
    console.log('Engine started');
  }

  startFISystem() {
    console.log('FI System started');
  }

  checkBrakes() {
    console.log('Brakes work!');
  }

  startABS() {
    console.log('ABS works!');
  }
}

class BikeFacade {
  constructor(complexBike) {
    this.bike = complexBike;
  }

  start() {
    this.bike.checkBrakes();
    this.bike.startFISystem();
    this.bike.startABS();
    this.bike.startEngine();
  }
}

function run() {
  const bike = new ComplexBike();
  // OLD CODE
  // bike.checkBrakes();
  // bike.startFISystem();
  // bike.startABS();
  // bike.startEngine();

  const bikeFacade = new BikeFacade(bike);
  bikeFacade.start();
}

module.exports = {
  run,
};
