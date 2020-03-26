// Interface
class Transportation {
  getDescription() {}
}

class Bike extends Transportation {
  getDescription() {
    return 'Bike';
  }
}

class Car extends Transportation {
  getDescription() {
    return 'Car';
  }
}

function getTransportationFactoryMethod(type) {
  switch (type) {
    case 'bike':
      return new Bike();
    case 'car':
      return new Car();
    default:
      throw new Error('Type is invalid');
  }
}

module.exports = {
  getTransportationFactoryMethod
}
