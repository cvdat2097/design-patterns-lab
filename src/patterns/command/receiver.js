class Receiver {
  start() {}
  stop() {}
}

class Bike extends Receiver {
  start() {
    console.log('Bike started');
  }

  stop() {
    console.log('Bike stopped');
  }
}

class Car extends Receiver {
  start() {
    console.log('Car started');
  }

  stop() {
    console.log('Car stopped');
  }
}

module.exports = {
  Bike,
  Car,
};
