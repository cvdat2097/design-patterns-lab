class OldBike {
  start() {
    console.log('Bike started');
  }

  accelerate() {
    console.log('Speed is too high!!!!!!!');
  }
}

// Interface that client expects
class ModernBike {
  startEngine() {}

  fly() {}
}

class BikeAdapter extends ModernBike {
  constructor(oldBikeObject) {
    super();
    this.bike = oldBikeObject;
  }

  startEngine() {
    this.bike.start();
  }

  fly() {
    this.bike.accelerate();
  }
}

function run() {
  const modernBike = new BikeAdapter(new OldBike());
  modernBike.startEngine();
  modernBike.fly();
}

module.exports = {
  run,
};
