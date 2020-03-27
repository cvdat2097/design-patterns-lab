class VehicleTemplate {
  includeDrift = false;

  test() {
    this.startEngine();
    this.moveAround();
    // Hook
    if (this.includeDrift) {
      this.drift();
    }
    this.stopEngine();
  }

  startEngine() {
    console.log('Engine starting');
  }

  drift() {
    console.log('Drifting!!!!! Woo-hoo!');
  }

  moveAround() {
    console.log('Moving around');
  }

  stopEngine() {
    console.log('Engine stopping');
  }
}

class Car extends VehicleTemplate {}

class Plane extends VehicleTemplate {
  includeDrift = true;

  moveAround() {
    console.log('FLYING UP & DOWN');
  }
}

function run() {
  console.log('====== CAR =======');
  const car = new Car();
  car.test();

  console.log('====== PLANE =======');
  const plane = new Plane();
  plane.test();
}

module.exports = {
  run,
};
