class Bike {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(this.name);
  }
}

class BikeIterator {
  constructor() {
    this.bikes = [];
    this.index = 0;
  }

  addBike(bike) {
    this.bikes.push(bike);
  }

  hasNext() {
    return !!this.bikes[this.index];
  }

  next() {
    return this.bikes[this.index++];
  }
}

function run() {
  const bikeIterator = new BikeIterator();
  bikeIterator.addBike(new Bike('Honda Winner X'));
  bikeIterator.addBike(new Bike('Honda Wave S'));
  bikeIterator.addBike(new Bike('Yamaha Sirius'));
  bikeIterator.addBike(new Bike('Yamaha Exciter GP'));

  while (bikeIterator.hasNext()) {
    bikeIterator.next().print();
  }
}

module.exports = {
  run,
};
