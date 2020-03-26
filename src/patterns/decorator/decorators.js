// Interface
class MotorBike {
  start() {}
}

class MotorBikeDecorator extends MotorBike {
  constructor(motorbike) {
    super();
    this.motorbike = motorbike;
  }
  
  // Delegation
  start() {
    this.motorbike.start();
  }
}

class MotorBikeWithEngine extends MotorBikeDecorator {
  constructor(motorBike) {
    super(motorBike);
  }

  start() {
    console.log('Checking the ENGINE... OK!');
    super.start();
  }
}

class MotorBikeWithChassis extends MotorBikeDecorator {
  constructor(motorBike) {
    super(motorBike);
  }

  start() {
    console.log('Checking the CHASSIS... OK!');
    super.start();
  }
}

class MotorBikeWithWheel extends MotorBikeDecorator {
  constructor(motorBike) {
    super(motorBike);
  }

  start() {
    console.log('Checking the WHEEL... OK!');
    super.start();
  }
}

module.exports = {
  MotorBike,
  MotorBikeWithEngine,
  MotorBikeWithChassis,
  MotorBikeWithWheel,
};
