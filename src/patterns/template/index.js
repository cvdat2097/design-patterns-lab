class VehicleTemplate {
  test() {
    this.startEngine();
    this.moveAround();
    this.stopEngine();
  }

  startEngine() {
    console.log('Engine starting');
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
