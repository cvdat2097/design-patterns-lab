class Vehicle {
  model = '';
  engine = '';
}

class VehicleBuilder {
  vehicle = new Vehicle();

  setModel() {}
  buildEngine() {}
  getVehicle() {
    return this.vehicle;
  }
}

class MotorBikeBuilder extends VehicleBuilder {
  setModel(model) {
    this.vehicle.model = `[BIKE] ${model}`;
  }

  buildEngine(engineNo) {
    this.vehicle.engine = `[BIKE] ${engineNo}`;
  }
}

class PlaneBuilder extends VehicleBuilder {
  setModel(model) {
    this.vehicle.model = `[PLANE] ${model}`;
  }

  buildEngine(engineNo) {
    this.vehicle.engine = `[PLANE] ${engineNo}`;
  }
}

function run() {
  const bikeBuilder = new MotorBikeBuilder();
  bikeBuilder.setModel('Honda');
  bikeBuilder.buildEngine('149cc Super Engine');
  console.log(JSON.stringify(bikeBuilder.getVehicle()));

  const planeBuilder = new PlaneBuilder();
  planeBuilder.setModel('Boeing');
  planeBuilder.buildEngine('19999999cc Super Engine');
  console.log(JSON.stringify(planeBuilder.getVehicle()));
}

module.exports = {
  run,
};
