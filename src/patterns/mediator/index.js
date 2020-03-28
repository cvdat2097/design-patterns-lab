class WithMediator {
  constructor(mediator) {
    this.mediator = mediator;
  }
}

class CPU extends WithMediator {
  run() {
    this.mediator.handle('RAM.turnon'); // Use mediator instead of the actual object
    this.mediator.handle('GPU.turnon'); // To introduce loose coupling!
    console.log('CPU is running');
  }
}

class RAM extends WithMediator {
  start() {
    console.log('RAM is working');
  }
}

class GPU extends WithMediator {
  render() {
    console.log('GPU started rendering!');
  }
}

// ===========
class Mediator {
  constructor() {
    this.CPU = new CPU(this);
    this.GPU = new GPU(this);
    this.RAM = new RAM(this);
  }

  handle(action) {
    switch (action) {
      case 'RAM.turnon':
        return this.RAM.start();
      case 'GPU.turnon':
        return this.GPU.render();
      case 'CPU.turnon':
        return this.CPU.run();
    }
  }
}

// ============
function run() {
  const mediator = new Mediator();
  mediator.CPU.run();
}

module.exports = {
  run,
};
